import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAggregatedKey() {
  return ['aggregated'] as const
}

export function getClickstreamKey() {
  return ['clickstream'] as const
}

export function getConversionsKey() {
  return ['conversions'] as const
}

export function getDatapointsKey() {
  return ['datapoints'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getHitsKey() {
  return ['hits'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getRetargetingKey() {
  return ['retargeting'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetAccountKey() {
  return ['account', '/account'] as const
}

export function useGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountKey() {
  return ['account', '/account', 'POST'] as const
}

export function usePostAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.$post> }) =>
        parseResponse(client.account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountDomainwhitelistKey(
  args: InferRequestType<typeof client.account.domainwhitelist.$get>,
) {
  return ['account', '/account/domainwhitelist', args] as const
}

export function useGetAccountDomainwhitelist<TError = unknown>(
  args: InferRequestType<typeof client.account.domainwhitelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountDomainwhitelistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.domainwhitelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountDomainwhitelist<TError = unknown>(
  args: InferRequestType<typeof client.account.domainwhitelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountDomainwhitelistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.domainwhitelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountDomainwhitelistKey() {
  return ['account', '/account/domainwhitelist', 'POST'] as const
}

export function usePostAccountDomainwhitelist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.domainwhitelist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountDomainwhitelistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.domainwhitelist.$post> },
      ) => parseResponse(client.account.domainwhitelist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountDomainwhitelistWhitelistIdKey() {
  return ['account', '/account/domainwhitelist/:whitelistId', 'DELETE'] as const
}

export function useDeleteAccountDomainwhitelistWhitelistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountDomainwhitelistWhitelistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>
        },
      ) =>
        parseResponse(client.account.domainwhitelist[':whitelistId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountGuestsKey(args: InferRequestType<typeof client.account.guests.$get>) {
  return ['account', '/account/guests', args] as const
}

export function useGetAccountGuests<TError = unknown>(
  args: InferRequestType<typeof client.account.guests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountGuestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.guests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountGuests<TError = unknown>(
  args: InferRequestType<typeof client.account.guests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountGuestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.guests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountGuestsKey() {
  return ['account', '/account/guests', 'POST'] as const
}

export function usePostAccountGuests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.guests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountGuestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.guests.$post> }) =>
        parseResponse(client.account.guests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountGuestsCountKey(
  args: InferRequestType<typeof client.account.guests.count.$get>,
) {
  return ['account', '/account/guests/count', args] as const
}

export function useGetAccountGuestsCount<TError = unknown>(
  args: InferRequestType<typeof client.account.guests.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountGuestsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.guests.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountGuestsCount<TError = unknown>(
  args: InferRequestType<typeof client.account.guests.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountGuestsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.guests.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountGuestsGuestIdKey(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$get']>,
) {
  return ['account', '/account/guests/:guestId', args] as const
}

export function useGetAccountGuestsGuestId<TError = unknown>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountGuestsGuestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.guests[':guestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountGuestsGuestId<TError = unknown>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountGuestsGuestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.guests[':guestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountGuestsGuestIdKey() {
  return ['account', '/account/guests/:guestId', 'POST'] as const
}

export function usePostAccountGuestsGuestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.guests)[':guestId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountGuestsGuestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.guests)[':guestId']['$post']> },
      ) => parseResponse(client.account.guests[':guestId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountGuestsGuestIdKey() {
  return ['account', '/account/guests/:guestId', 'DELETE'] as const
}

export function useDeleteAccountGuestsGuestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.guests)[':guestId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountGuestsGuestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.guests)[':guestId']['$delete']> },
      ) => parseResponse(client.account.guests[':guestId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountGuestsGuestIdPermissionsKey(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>,
) {
  return ['account', '/account/guests/:guestId/permissions', args] as const
}

export function useGetAccountGuestsGuestIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountGuestsGuestIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.guests[':guestId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountGuestsGuestIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountGuestsGuestIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.guests[':guestId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountGuestsGuestIdPermissionsCountKey(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
  >,
) {
  return ['account', '/account/guests/:guestId/permissions/count', args] as const
}

export function useGetAccountGuestsGuestIdPermissionsCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
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
        ? getGetAccountGuestsGuestIdPermissionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.guests[':guestId'].permissions.count.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountGuestsGuestIdPermissionsCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
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
        ? getGetAccountGuestsGuestIdPermissionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.guests[':guestId'].permissions.count.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountGuestsGuestIdTypePermissionsPatchKey() {
  return ['account', '/account/guests/:guestId/:type/permissions/patch', 'PUT'] as const
}

export function usePutAccountGuestsGuestIdTypePermissionsPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountGuestsGuestIdTypePermissionsPatchKey()
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
            (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.guests[':guestId'][':type'].permissions.patch.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountGuestsGuestIdTypePermissionsPatchKey() {
  return ['account', '/account/guests/:guestId/:type/permissions/patch', 'POST'] as const
}

export function usePostAccountGuestsGuestIdTypePermissionsPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountGuestsGuestIdTypePermissionsPatchKey()
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
            (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.guests[':guestId'][':type'].permissions.patch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIpblacklistKey(
  args: InferRequestType<typeof client.account.ipblacklist.$get>,
) {
  return ['account', '/account/ipblacklist', args] as const
}

export function useGetAccountIpblacklist<TError = unknown>(
  args: InferRequestType<typeof client.account.ipblacklist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountIpblacklistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.ipblacklist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIpblacklist<TError = unknown>(
  args: InferRequestType<typeof client.account.ipblacklist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountIpblacklistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.ipblacklist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountIpblacklistKey() {
  return ['account', '/account/ipblacklist', 'POST'] as const
}

export function usePostAccountIpblacklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.ipblacklist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIpblacklistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.ipblacklist.$post> }) =>
        parseResponse(client.account.ipblacklist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountIpblacklistBlacklistIdKey() {
  return ['account', '/account/ipblacklist/:blacklistId', 'DELETE'] as const
}

export function useDeleteAccountIpblacklistBlacklistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountIpblacklistBlacklistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>
        },
      ) => parseResponse(client.account.ipblacklist[':blacklistId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountPlanKey() {
  return ['account', '/account/plan'] as const
}

export function useGetAccountPlan<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountPlanKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.plan.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountPlan<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountPlanKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.plan.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAggregatedKey(args: InferRequestType<typeof client.aggregated.$get>) {
  return ['aggregated', '/aggregated', args] as const
}

export function useGetAggregated<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAggregatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAggregated<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAggregatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAggregatedListKey(
  args: InferRequestType<typeof client.aggregated.list.$get>,
) {
  return ['aggregated', '/aggregated/list', args] as const
}

export function useGetAggregatedList<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAggregatedListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAggregatedList<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAggregatedListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAggregatedSummaryConversionsKey(
  args: InferRequestType<typeof client.aggregated.summary.conversions.$get>,
) {
  return ['aggregated', '/aggregated/summary/conversions', args] as const
}

export function useGetAggregatedSummaryConversions<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.summary.conversions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAggregatedSummaryConversionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.summary.conversions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAggregatedSummaryConversions<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.summary.conversions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAggregatedSummaryConversionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.summary.conversions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAggregatedSummaryDatapointsKey(
  args: InferRequestType<typeof client.aggregated.summary.datapoints.$get>,
) {
  return ['aggregated', '/aggregated/summary/datapoints', args] as const
}

export function useGetAggregatedSummaryDatapoints<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.summary.datapoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAggregatedSummaryDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.summary.datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAggregatedSummaryDatapoints<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.summary.datapoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAggregatedSummaryDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.summary.datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAggregatedSummaryGroupsKey(
  args: InferRequestType<typeof client.aggregated.summary.groups.$get>,
) {
  return ['aggregated', '/aggregated/summary/groups', args] as const
}

export function useGetAggregatedSummaryGroups<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.summary.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAggregatedSummaryGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.summary.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAggregatedSummaryGroups<TError = unknown>(
  args: InferRequestType<typeof client.aggregated.summary.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAggregatedSummaryGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregated.summary.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClickstreamKey(args: InferRequestType<typeof client.clickstream.$get>) {
  return ['clickstream', '/clickstream', args] as const
}

export function useGetClickstream<TError = unknown>(
  args: InferRequestType<typeof client.clickstream.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClickstreamKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clickstream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClickstream<TError = unknown>(
  args: InferRequestType<typeof client.clickstream.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClickstreamKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clickstream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversionsKey(args: InferRequestType<typeof client.conversions.$get>) {
  return ['conversions', '/conversions', args] as const
}

export function useGetConversions<TError = unknown>(
  args: InferRequestType<typeof client.conversions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConversionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversions<TError = unknown>(
  args: InferRequestType<typeof client.conversions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConversionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversionsKey() {
  return ['conversions', '/conversions', 'POST'] as const
}

export function usePostConversions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.conversions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conversions.$post> }) =>
        parseResponse(client.conversions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversionsAggregatedListKey(
  args: InferRequestType<typeof client.conversions.aggregated.list.$get>,
) {
  return ['conversions', '/conversions/aggregated/list', args] as const
}

export function useGetConversionsAggregatedList<TError = unknown>(
  args: InferRequestType<typeof client.conversions.aggregated.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions.aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversionsAggregatedList<TError = unknown>(
  args: InferRequestType<typeof client.conversions.aggregated.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions.aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversionsCountKey(
  args: InferRequestType<typeof client.conversions.count.$get>,
) {
  return ['conversions', '/conversions/count', args] as const
}

export function useGetConversionsCount<TError = unknown>(
  args: InferRequestType<typeof client.conversions.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversionsCount<TError = unknown>(
  args: InferRequestType<typeof client.conversions.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversionsConversionIdKey(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$get']>,
) {
  return ['conversions', '/conversions/:conversionId', args] as const
}

export function useGetConversionsConversionId<TError = unknown>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsConversionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions[':conversionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversionsConversionId<TError = unknown>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsConversionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions[':conversionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversionsConversionIdKey() {
  return ['conversions', '/conversions/:conversionId', 'POST'] as const
}

export function usePostConversionsConversionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversions)[':conversionId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversionsConversionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversions)[':conversionId']['$post']> },
      ) => parseResponse(client.conversions[':conversionId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversionsConversionIdKey() {
  return ['conversions', '/conversions/:conversionId', 'DELETE'] as const
}

export function useDeleteConversionsConversionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversions)[':conversionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversionsConversionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversions)[':conversionId']['$delete']> },
      ) => parseResponse(client.conversions[':conversionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversionsConversionIdAggregatedKey(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>,
) {
  return ['conversions', '/conversions/:conversionId/aggregated', args] as const
}

export function useGetConversionsConversionIdAggregated<TError = unknown>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsConversionIdAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversions[':conversionId'].aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversionsConversionIdAggregated<TError = unknown>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsConversionIdAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversions[':conversionId'].aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversionsConversionIdAggregatedListKey(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
  >,
) {
  return ['conversions', '/conversions/:conversionId/aggregated/list', args] as const
}

export function useGetConversionsConversionIdAggregatedList<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
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
        ? getGetConversionsConversionIdAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversions[':conversionId'].aggregated.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversionsConversionIdAggregatedList<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
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
        ? getGetConversionsConversionIdAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversions[':conversionId'].aggregated.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversionsConversionIdDatapointsKey(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>,
) {
  return ['conversions', '/conversions/:conversionId/datapoints', args] as const
}

export function useGetConversionsConversionIdDatapoints<TError = unknown>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsConversionIdDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversions[':conversionId'].datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversionsConversionIdDatapoints<TError = unknown>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsConversionIdDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversions[':conversionId'].datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConversionsConversionIdDatapointsBatchPatchKey() {
  return ['conversions', '/conversions/:conversionId/datapoints/batch/patch', 'PUT'] as const
}

export function usePutConversionsConversionIdDatapointsBatchPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversionsConversionIdDatapointsBatchPatchKey()
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
            (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.conversions[':conversionId'].datapoints.batch.patch.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversionsConversionIdDatapointsCountKey(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
  >,
) {
  return ['conversions', '/conversions/:conversionId/datapoints/count', args] as const
}

export function useGetConversionsConversionIdDatapointsCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
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
        ? getGetConversionsConversionIdDatapointsCountKey(args)
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
                (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
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
          client.conversions[':conversionId'].datapoints.count.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversionsConversionIdDatapointsCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
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
        ? getGetConversionsConversionIdDatapointsCountKey(args)
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
                (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
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
          client.conversions[':conversionId'].datapoints.count.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutConversionsConversionIdDatapointsPatchKey() {
  return ['conversions', '/conversions/:conversionId/datapoints/patch', 'PUT'] as const
}

export function usePutConversionsConversionIdDatapointsPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversionsConversionIdDatapointsPatchKey()
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
            (typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.conversions[':conversionId'].datapoints.patch.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversionsConversionIdHitsKey(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>,
) {
  return ['conversions', '/conversions/:conversionId/hits', args] as const
}

export function useGetConversionsConversionIdHits<TError = unknown>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsConversionIdHitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions[':conversionId'].hits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversionsConversionIdHits<TError = unknown>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversionsConversionIdHitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversions[':conversionId'].hits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConversionsConversionIdNotesKey() {
  return ['conversions', '/conversions/:conversionId/notes', 'PUT'] as const
}

export function usePutConversionsConversionIdNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['notes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversions)[':conversionId']['notes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversionsConversionIdNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversions)[':conversionId']['notes']['$put']> },
      ) => parseResponse(client.conversions[':conversionId'].notes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatapointsKey(args: InferRequestType<typeof client.datapoints.$get>) {
  return ['datapoints', '/datapoints', args] as const
}

export function useGetDatapoints<TError = unknown>(
  args: InferRequestType<typeof client.datapoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatapointsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatapoints<TError = unknown>(
  args: InferRequestType<typeof client.datapoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatapointsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatapointsKey() {
  return ['datapoints', '/datapoints', 'POST'] as const
}

export function usePostDatapoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.datapoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatapointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datapoints.$post> }) =>
        parseResponse(client.datapoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatapointsAggregatedKey(
  args: InferRequestType<typeof client.datapoints.aggregated.$get>,
) {
  return ['datapoints', '/datapoints/aggregated', args] as const
}

export function useGetDatapointsAggregated<TError = unknown>(
  args: InferRequestType<typeof client.datapoints.aggregated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints.aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatapointsAggregated<TError = unknown>(
  args: InferRequestType<typeof client.datapoints.aggregated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints.aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatapointsAggregatedListKey(
  args: InferRequestType<typeof client.datapoints.aggregated.list.$get>,
) {
  return ['datapoints', '/datapoints/aggregated/list', args] as const
}

export function useGetDatapointsAggregatedList<TError = unknown>(
  args: InferRequestType<typeof client.datapoints.aggregated.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints.aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatapointsAggregatedList<TError = unknown>(
  args: InferRequestType<typeof client.datapoints.aggregated.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints.aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatapointsBatchKey() {
  return ['datapoints', '/datapoints/batch', 'PUT'] as const
}

export function usePutDatapointsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.datapoints.batch.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatapointsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datapoints.batch.$put> }) =>
        parseResponse(client.datapoints.batch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatapointsBatchKey() {
  return ['datapoints', '/datapoints/batch', 'POST'] as const
}

export function usePostDatapointsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.datapoints.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatapointsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datapoints.batch.$post> }) =>
        parseResponse(client.datapoints.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatapointsBatchKey() {
  return ['datapoints', '/datapoints/batch', 'DELETE'] as const
}

export function useDeleteDatapointsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.datapoints.batch.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatapointsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datapoints.batch.$delete> }) =>
        parseResponse(client.datapoints.batch.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatapointsCountKey(
  args: InferRequestType<typeof client.datapoints.count.$get>,
) {
  return ['datapoints', '/datapoints/count', args] as const
}

export function useGetDatapointsCount<TError = unknown>(
  args: InferRequestType<typeof client.datapoints.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatapointsCount<TError = unknown>(
  args: InferRequestType<typeof client.datapoints.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatapointsIdKey(
  args: InferRequestType<(typeof client.datapoints)[':id']['$get']>,
) {
  return ['datapoints', '/datapoints/:id', args] as const
}

export function useGetDatapointsId<TError = unknown>(
  args: InferRequestType<(typeof client.datapoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatapointsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatapointsId<TError = unknown>(
  args: InferRequestType<(typeof client.datapoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatapointsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatapointsIdKey() {
  return ['datapoints', '/datapoints/:id', 'POST'] as const
}

export function usePostDatapointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datapoints)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatapointsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datapoints)[':id']['$post']> },
      ) => parseResponse(client.datapoints[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatapointsIdKey() {
  return ['datapoints', '/datapoints/:id', 'DELETE'] as const
}

export function useDeleteDatapointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datapoints)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatapointsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datapoints)[':id']['$delete']> },
      ) => parseResponse(client.datapoints[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatapointsIdAggregatedKey(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>,
) {
  return ['datapoints', '/datapoints/:id/aggregated', args] as const
}

export function useGetDatapointsIdAggregated<TError = unknown>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsIdAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints[':id'].aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatapointsIdAggregated<TError = unknown>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsIdAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints[':id'].aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatapointsIdAggregatedListKey(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>,
) {
  return ['datapoints', '/datapoints/:id/aggregated/list', args] as const
}

export function useGetDatapointsIdAggregatedList<TError = unknown>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsIdAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints[':id'].aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatapointsIdAggregatedList<TError = unknown>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsIdAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints[':id'].aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatapointsIdFavouriteKey() {
  return ['datapoints', '/datapoints/:id/favourite', 'PUT'] as const
}

export function usePutDatapointsIdFavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datapoints)[':id']['favourite']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datapoints)[':id']['favourite']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatapointsIdFavouriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datapoints)[':id']['favourite']['$put']> },
      ) => parseResponse(client.datapoints[':id'].favourite.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatapointsIdHitsKey(
  args: InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>,
) {
  return ['datapoints', '/datapoints/:id/hits', args] as const
}

export function useGetDatapointsIdHits<TError = unknown>(
  args: InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsIdHitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints[':id'].hits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatapointsIdHits<TError = unknown>(
  args: InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatapointsIdHitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datapoints[':id'].hits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatapointsIdNotesKey() {
  return ['datapoints', '/datapoints/:id/notes', 'PUT'] as const
}

export function usePutDatapointsIdNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datapoints)[':id']['notes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datapoints)[':id']['notes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatapointsIdNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datapoints)[':id']['notes']['$put']> },
      ) => parseResponse(client.datapoints[':id'].notes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsKey(args: InferRequestType<typeof client.domains.$get>) {
  return ['domains', '/domains', args] as const
}

export function useGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDomainsKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function usePostDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domains.$post> }) =>
        parseResponse(client.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsCountKey(args: InferRequestType<typeof client.domains.count.$get>) {
  return ['domains', '/domains/count', args] as const
}

export function useGetDomainsCount<TError = unknown>(
  args: InferRequestType<typeof client.domains.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsCount<TError = unknown>(
  args: InferRequestType<typeof client.domains.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsIdKey(args: InferRequestType<(typeof client.domains)[':id']['$get']>) {
  return ['domains', '/domains/:id', args] as const
}

export function useGetDomainsId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDomainsIdKey() {
  return ['domains', '/domains/:id', 'POST'] as const
}

export function usePostDomainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.domains)[':id']['$post']> }) =>
        parseResponse(client.domains[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDomainsIdKey() {
  return ['domains', '/domains/:id', 'DELETE'] as const
}

export function useDeleteDomainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':id']['$delete']> },
      ) => parseResponse(client.domains[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function useGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGroupsKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function usePostGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.$post> }) =>
        parseResponse(client.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsAggregatedKey(
  args: InferRequestType<typeof client.groups.aggregated.$get>,
) {
  return ['groups', '/groups/aggregated', args] as const
}

export function useGetGroupsAggregated<TError = unknown>(
  args: InferRequestType<typeof client.groups.aggregated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsAggregated<TError = unknown>(
  args: InferRequestType<typeof client.groups.aggregated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsAggregatedListKey(
  args: InferRequestType<typeof client.groups.aggregated.list.$get>,
) {
  return ['groups', '/groups/aggregated/list', args] as const
}

export function useGetGroupsAggregatedList<TError = unknown>(
  args: InferRequestType<typeof client.groups.aggregated.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsAggregatedList<TError = unknown>(
  args: InferRequestType<typeof client.groups.aggregated.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsCountKey(args: InferRequestType<typeof client.groups.count.$get>) {
  return ['groups', '/groups/count', args] as const
}

export function useGetGroupsCount<TError = unknown>(
  args: InferRequestType<typeof client.groups.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsCount<TError = unknown>(
  args: InferRequestType<typeof client.groups.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsIdKey(args: InferRequestType<(typeof client.groups)[':id']['$get']>) {
  return ['groups', '/groups/:id', args] as const
}

export function useGetGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsIdKey() {
  return ['groups', '/groups/:id', 'POST'] as const
}

export function usePostGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['$post']> }) =>
        parseResponse(client.groups[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsIdKey() {
  return ['groups', '/groups/:id', 'DELETE'] as const
}

export function useDeleteGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['$delete']> },
      ) => parseResponse(client.groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsIdAggregatedKey(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>,
) {
  return ['groups', '/groups/:id/aggregated', args] as const
}

export function useGetGroupsIdAggregated<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIdAggregated<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].aggregated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsIdAggregatedListKey(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>,
) {
  return ['groups', '/groups/:id/aggregated/list', args] as const
}

export function useGetGroupsIdAggregatedList<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIdAggregatedList<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdAggregatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].aggregated.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsIdAggregatedSummaryKey(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>,
) {
  return ['groups', '/groups/:id/aggregated/summary', args] as const
}

export function useGetGroupsIdAggregatedSummary<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdAggregatedSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].aggregated.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIdAggregatedSummary<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdAggregatedSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].aggregated.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsIdDatapointsKey(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>,
) {
  return ['groups', '/groups/:id/datapoints', args] as const
}

export function useGetGroupsIdDatapoints<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIdDatapoints<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsIdDatapointsKey() {
  return ['groups', '/groups/:id/datapoints', 'POST'] as const
}

export function usePostGroupsIdDatapoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['datapoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsIdDatapointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['datapoints']['$post']> },
      ) => parseResponse(client.groups[':id'].datapoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsIdDatapointsCountKey(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>,
) {
  return ['groups', '/groups/:id/datapoints/count', args] as const
}

export function useGetGroupsIdDatapointsCount<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdDatapointsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].datapoints.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIdDatapointsCount<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdDatapointsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].datapoints.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsIdFavouriteKey() {
  return ['groups', '/groups/:id/favourite', 'PUT'] as const
}

export function usePutGroupsIdFavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['favourite']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['favourite']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsIdFavouriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['favourite']['$put']> },
      ) => parseResponse(client.groups[':id'].favourite.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsIdHitsKey(
  args: InferRequestType<(typeof client.groups)[':id']['hits']['$get']>,
) {
  return ['groups', '/groups/:id/hits', args] as const
}

export function useGetGroupsIdHits<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['hits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdHitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].hits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIdHits<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['hits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdHitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].hits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsIdNotesKey() {
  return ['groups', '/groups/:id/notes', 'PUT'] as const
}

export function usePutGroupsIdNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['notes']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['notes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsIdNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['notes']['$put']> },
      ) => parseResponse(client.groups[':id'].notes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHitsKey(args: InferRequestType<typeof client.hits.$get>) {
  return ['hits', '/hits', args] as const
}

export function useGetHits<TError = unknown>(
  args: InferRequestType<typeof client.hits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hits.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHits<TError = unknown>(
  args: InferRequestType<typeof client.hits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hits.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetMePlanKey() {
  return ['me', '/me/plan'] as const
}

export function useGetMePlan<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlanKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.plan.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlan<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlanKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.plan.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRetargetingKey(args: InferRequestType<typeof client.retargeting.$get>) {
  return ['retargeting', '/retargeting', args] as const
}

export function useGetRetargeting<TError = unknown>(
  args: InferRequestType<typeof client.retargeting.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRetargetingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retargeting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetargeting<TError = unknown>(
  args: InferRequestType<typeof client.retargeting.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRetargetingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retargeting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRetargetingKey() {
  return ['retargeting', '/retargeting', 'POST'] as const
}

export function usePostRetargeting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.retargeting.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRetargetingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.retargeting.$post> }) =>
        parseResponse(client.retargeting.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRetargetingCountKey() {
  return ['retargeting', '/retargeting/count'] as const
}

export function useGetRetargetingCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRetargetingCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retargeting.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetargetingCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRetargetingCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retargeting.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRetargetingIdKey(
  args: InferRequestType<(typeof client.retargeting)[':id']['$get']>,
) {
  return ['retargeting', '/retargeting/:id', args] as const
}

export function useGetRetargetingId<TError = unknown>(
  args: InferRequestType<(typeof client.retargeting)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRetargetingIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retargeting[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetargetingId<TError = unknown>(
  args: InferRequestType<(typeof client.retargeting)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRetargetingIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retargeting[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRetargetingIdKey() {
  return ['retargeting', '/retargeting/:id', 'POST'] as const
}

export function usePostRetargetingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.retargeting)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRetargetingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.retargeting)[':id']['$post']> },
      ) => parseResponse(client.retargeting[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRetargetingIdKey() {
  return ['retargeting', '/retargeting/:id', 'DELETE'] as const
}

export function useDeleteRetargetingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.retargeting)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRetargetingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.retargeting)[':id']['$delete']> },
      ) => parseResponse(client.retargeting[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRetargetingIdDatapointsKey(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>,
) {
  return ['retargeting', '/retargeting/:id/datapoints', args] as const
}

export function useGetRetargetingIdDatapoints<TError = unknown>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetargetingIdDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retargeting[':id'].datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetargetingIdDatapoints<TError = unknown>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetargetingIdDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retargeting[':id'].datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRetargetingIdDatapointsCountKey(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>,
) {
  return ['retargeting', '/retargeting/:id/datapoints/count', args] as const
}

export function useGetRetargetingIdDatapointsCount<TError = unknown>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetargetingIdDatapointsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.retargeting[':id'].datapoints.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetargetingIdDatapointsCount<TError = unknown>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetargetingIdDatapointsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.retargeting[':id'].datapoints.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function useGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTagsKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function usePostTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.$post> }) =>
        parseResponse(client.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsCountKey(args: InferRequestType<typeof client.tags.count.$get>) {
  return ['tags', '/tags/count', args] as const
}

export function useGetTagsCount<TError = unknown>(
  args: InferRequestType<typeof client.tags.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsCount<TError = unknown>(
  args: InferRequestType<typeof client.tags.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagIdKey(args: InferRequestType<(typeof client.tags)[':tagId']['$get']>) {
  return ['tags', '/tags/:tagId', args] as const
}

export function useGetTagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsTagIdKey() {
  return ['tags', '/tags/:tagId', 'DELETE'] as const
}

export function useDeleteTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tagId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tagId']['$delete']> },
      ) => parseResponse(client.tags[':tagId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagIdDatapointsKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>,
) {
  return ['tags', '/tags/:tagId/datapoints', args] as const
}

export function useGetTagsTagIdDatapoints<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagIdDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagIdDatapoints<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagIdDatapointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].datapoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsTagIdDatapointsKey() {
  return ['tags', '/tags/:tagId/datapoints', 'DELETE'] as const
}

export function useDeleteTagsTagIdDatapoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagIdDatapointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$delete']> },
      ) => parseResponse(client.tags[':tagId'].datapoints.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagIdDatapointsCountKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>,
) {
  return ['tags', '/tags/:tagId/datapoints/count', args] as const
}

export function useGetTagsTagIdDatapointsCount<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagIdDatapointsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].datapoints.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagIdDatapointsCount<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagIdDatapointsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].datapoints.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTagsTagIdDatapointsPatchKey() {
  return ['tags', '/tags/:tagId/datapoints/patch', 'PUT'] as const
}

export function usePutTagsTagIdDatapointsPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTagsTagIdDatapointsPatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']> },
      ) => parseResponse(client.tags[':tagId'].datapoints.patch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagIdGroupsKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>,
) {
  return ['tags', '/tags/:tagId/groups', args] as const
}

export function useGetTagsTagIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsTagIdGroupsKey() {
  return ['tags', '/tags/:tagId/groups', 'DELETE'] as const
}

export function useDeleteTagsTagIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tagId']['groups']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tagId']['groups']['$delete']> },
      ) => parseResponse(client.tags[':tagId'].groups.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagIdGroupsCountKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>,
) {
  return ['tags', '/tags/:tagId/groups/count', args] as const
}

export function useGetTagsTagIdGroupsCount<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagIdGroupsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].groups.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagIdGroupsCount<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagIdGroupsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].groups.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTagsTagIdGroupsPatchKey() {
  return ['tags', '/tags/:tagId/groups/patch', 'PUT'] as const
}

export function usePutTagsTagIdGroupsPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['patch']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tagId']['groups']['patch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTagsTagIdGroupsPatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tags)[':tagId']['groups']['patch']['$put']> },
      ) => parseResponse(client.tags[':tagId'].groups.patch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTagsTagIdNameKey() {
  return ['tags', '/tags/:tagId/name', 'PUT'] as const
}

export function usePutTagsTagIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tagId']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTagsTagIdNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tagId']['name']['$put']> },
      ) => parseResponse(client.tags[':tagId'].name.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
