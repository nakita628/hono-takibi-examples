import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPosKey() {
  return ['pos'] as const
}

export function getGetPosItemsKey(args: InferRequestType<typeof client.pos.items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/items', keyArgs] as const
}

export function useGetPosItems<TError = unknown>(
  args: InferRequestType<typeof client.pos.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosItems<TError = unknown>(
  args: InferRequestType<typeof client.pos.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosItemsKey() {
  return ['pos', '/pos/items', 'POST'] as const
}

export function usePostPosItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pos.items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pos.items.$post> }) =>
        parseResponse(client.pos.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosItemsIdKey(
  args: InferRequestType<(typeof client.pos.items)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/items/:id', keyArgs] as const
}

export function useGetPosItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosItemsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosItemsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosItemsIdKey() {
  return ['pos', '/pos/items/:id', 'DELETE'] as const
}

export function useDeletePosItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.items)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.items)[':id']['$delete']> },
      ) => parseResponse(client.pos.items[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosItemsIdKey() {
  return ['pos', '/pos/items/:id', 'PATCH'] as const
}

export function usePatchPosItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.items)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.items)[':id']['$patch']> },
      ) => parseResponse(client.pos.items[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosLocationsKey(args: InferRequestType<typeof client.pos.locations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/locations', keyArgs] as const
}

export function useGetPosLocations<TError = unknown>(
  args: InferRequestType<typeof client.pos.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosLocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosLocations<TError = unknown>(
  args: InferRequestType<typeof client.pos.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosLocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosLocationsKey() {
  return ['pos', '/pos/locations', 'POST'] as const
}

export function usePostPosLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pos.locations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pos.locations.$post> }) =>
        parseResponse(client.pos.locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosLocationsIdKey(
  args: InferRequestType<(typeof client.pos.locations)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/locations/:id', keyArgs] as const
}

export function useGetPosLocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosLocationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosLocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosLocationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosLocationsIdKey() {
  return ['pos', '/pos/locations/:id', 'DELETE'] as const
}

export function useDeletePosLocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.locations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosLocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.locations)[':id']['$delete']> },
      ) => parseResponse(client.pos.locations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosLocationsIdKey() {
  return ['pos', '/pos/locations/:id', 'PATCH'] as const
}

export function usePatchPosLocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.locations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosLocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.locations)[':id']['$patch']> },
      ) => parseResponse(client.pos.locations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosMerchantsKey(args: InferRequestType<typeof client.pos.merchants.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/merchants', keyArgs] as const
}

export function useGetPosMerchants<TError = unknown>(
  args: InferRequestType<typeof client.pos.merchants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosMerchantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.merchants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosMerchants<TError = unknown>(
  args: InferRequestType<typeof client.pos.merchants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosMerchantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.merchants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosMerchantsKey() {
  return ['pos', '/pos/merchants', 'POST'] as const
}

export function usePostPosMerchants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pos.merchants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosMerchantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pos.merchants.$post> }) =>
        parseResponse(client.pos.merchants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosMerchantsIdKey(
  args: InferRequestType<(typeof client.pos.merchants)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/merchants/:id', keyArgs] as const
}

export function useGetPosMerchantsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.merchants)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosMerchantsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.merchants[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosMerchantsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.merchants)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosMerchantsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.merchants[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosMerchantsIdKey() {
  return ['pos', '/pos/merchants/:id', 'DELETE'] as const
}

export function useDeletePosMerchantsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.merchants)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosMerchantsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.merchants)[':id']['$delete']> },
      ) => parseResponse(client.pos.merchants[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosMerchantsIdKey() {
  return ['pos', '/pos/merchants/:id', 'PATCH'] as const
}

export function usePatchPosMerchantsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.merchants)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosMerchantsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.merchants)[':id']['$patch']> },
      ) => parseResponse(client.pos.merchants[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosModifierGroupsKey(
  args: InferRequestType<(typeof client.pos)['modifier-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/modifier-groups', keyArgs] as const
}

export function useGetPosModifierGroups<TError = unknown>(
  args: InferRequestType<(typeof client.pos)['modifier-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPosModifierGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos['modifier-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosModifierGroups<TError = unknown>(
  args: InferRequestType<(typeof client.pos)['modifier-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPosModifierGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos['modifier-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosModifierGroupsKey() {
  return ['pos', '/pos/modifier-groups', 'POST'] as const
}

export function usePostPosModifierGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos)['modifier-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosModifierGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos)['modifier-groups']['$post']> },
      ) => parseResponse(client.pos['modifier-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosModifierGroupsIdKey(
  args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/modifier-groups/:id', keyArgs] as const
}

export function useGetPosModifierGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPosModifierGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos['modifier-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosModifierGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPosModifierGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos['modifier-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosModifierGroupsIdKey() {
  return ['pos', '/pos/modifier-groups/:id', 'DELETE'] as const
}

export function useDeletePosModifierGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosModifierGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$delete']> },
      ) => parseResponse(client.pos['modifier-groups'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosModifierGroupsIdKey() {
  return ['pos', '/pos/modifier-groups/:id', 'PATCH'] as const
}

export function usePatchPosModifierGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosModifierGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$patch']> },
      ) => parseResponse(client.pos['modifier-groups'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosModifiersKey(args: InferRequestType<typeof client.pos.modifiers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/modifiers', keyArgs] as const
}

export function useGetPosModifiers<TError = unknown>(
  args: InferRequestType<typeof client.pos.modifiers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosModifiersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.modifiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosModifiers<TError = unknown>(
  args: InferRequestType<typeof client.pos.modifiers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosModifiersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.modifiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosModifiersKey() {
  return ['pos', '/pos/modifiers', 'POST'] as const
}

export function usePostPosModifiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pos.modifiers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosModifiersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pos.modifiers.$post> }) =>
        parseResponse(client.pos.modifiers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosModifiersIdKey(
  args: InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/modifiers/:id', keyArgs] as const
}

export function useGetPosModifiersId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosModifiersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.modifiers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosModifiersId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosModifiersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.modifiers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosModifiersIdKey() {
  return ['pos', '/pos/modifiers/:id', 'DELETE'] as const
}

export function useDeletePosModifiersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.modifiers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosModifiersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.modifiers)[':id']['$delete']> },
      ) => parseResponse(client.pos.modifiers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosModifiersIdKey() {
  return ['pos', '/pos/modifiers/:id', 'PATCH'] as const
}

export function usePatchPosModifiersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.modifiers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosModifiersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.modifiers)[':id']['$patch']> },
      ) => parseResponse(client.pos.modifiers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosOrderTypesKey(
  args: InferRequestType<(typeof client.pos)['order-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/order-types', keyArgs] as const
}

export function useGetPosOrderTypes<TError = unknown>(
  args: InferRequestType<(typeof client.pos)['order-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosOrderTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos['order-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosOrderTypes<TError = unknown>(
  args: InferRequestType<(typeof client.pos)['order-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosOrderTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos['order-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosOrderTypesKey() {
  return ['pos', '/pos/order-types', 'POST'] as const
}

export function usePostPosOrderTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos)['order-types']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosOrderTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos)['order-types']['$post']> },
      ) => parseResponse(client.pos['order-types'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosOrderTypesIdKey(
  args: InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/order-types/:id', keyArgs] as const
}

export function useGetPosOrderTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPosOrderTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos['order-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosOrderTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPosOrderTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos['order-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosOrderTypesIdKey() {
  return ['pos', '/pos/order-types/:id', 'DELETE'] as const
}

export function useDeletePosOrderTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos)['order-types'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosOrderTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos)['order-types'][':id']['$delete']> },
      ) => parseResponse(client.pos['order-types'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosOrderTypesIdKey() {
  return ['pos', '/pos/order-types/:id', 'PATCH'] as const
}

export function usePatchPosOrderTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos)['order-types'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosOrderTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos)['order-types'][':id']['$patch']> },
      ) => parseResponse(client.pos['order-types'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosOrdersKey(args: InferRequestType<typeof client.pos.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/orders', keyArgs] as const
}

export function useGetPosOrders<TError = unknown>(
  args: InferRequestType<typeof client.pos.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosOrders<TError = unknown>(
  args: InferRequestType<typeof client.pos.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosOrdersKey() {
  return ['pos', '/pos/orders', 'POST'] as const
}

export function usePostPosOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pos.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pos.orders.$post> }) =>
        parseResponse(client.pos.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosOrdersIdKey(
  args: InferRequestType<(typeof client.pos.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/orders/:id', keyArgs] as const
}

export function useGetPosOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosOrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosOrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosOrdersIdKey() {
  return ['pos', '/pos/orders/:id', 'DELETE'] as const
}

export function useDeletePosOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.orders)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.orders)[':id']['$delete']> },
      ) => parseResponse(client.pos.orders[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosOrdersIdKey() {
  return ['pos', '/pos/orders/:id', 'PATCH'] as const
}

export function usePatchPosOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.orders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.orders)[':id']['$patch']> },
      ) => parseResponse(client.pos.orders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPosOrdersIdPayKey() {
  return ['pos', '/pos/orders/:id/pay', 'POST'] as const
}

export function usePostPosOrdersIdPay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['pay']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.orders)[':id']['pay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosOrdersIdPayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.orders)[':id']['pay']['$post']> },
      ) => parseResponse(client.pos.orders[':id'].pay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosPaymentsKey(args: InferRequestType<typeof client.pos.payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/payments', keyArgs] as const
}

export function useGetPosPayments<TError = unknown>(
  args: InferRequestType<typeof client.pos.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosPayments<TError = unknown>(
  args: InferRequestType<typeof client.pos.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosPaymentsKey() {
  return ['pos', '/pos/payments', 'POST'] as const
}

export function usePostPosPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pos.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pos.payments.$post> }) =>
        parseResponse(client.pos.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosPaymentsIdKey(
  args: InferRequestType<(typeof client.pos.payments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/payments/:id', keyArgs] as const
}

export function useGetPosPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosPaymentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosPaymentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosPaymentsIdKey() {
  return ['pos', '/pos/payments/:id', 'DELETE'] as const
}

export function useDeletePosPaymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.payments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosPaymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.payments)[':id']['$delete']> },
      ) => parseResponse(client.pos.payments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosPaymentsIdKey() {
  return ['pos', '/pos/payments/:id', 'PATCH'] as const
}

export function usePatchPosPaymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.payments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosPaymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.payments)[':id']['$patch']> },
      ) => parseResponse(client.pos.payments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosTendersKey(args: InferRequestType<typeof client.pos.tenders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/tenders', keyArgs] as const
}

export function useGetPosTenders<TError = unknown>(
  args: InferRequestType<typeof client.pos.tenders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosTendersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.tenders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosTenders<TError = unknown>(
  args: InferRequestType<typeof client.pos.tenders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosTendersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.tenders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPosTendersKey() {
  return ['pos', '/pos/tenders', 'POST'] as const
}

export function usePostPosTenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pos.tenders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosTendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pos.tenders.$post> }) =>
        parseResponse(client.pos.tenders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPosTendersIdKey(
  args: InferRequestType<(typeof client.pos.tenders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/tenders/:id', keyArgs] as const
}

export function useGetPosTendersId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.tenders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosTendersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.tenders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPosTendersId<TError = unknown>(
  args: InferRequestType<(typeof client.pos.tenders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPosTendersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pos.tenders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePosTendersIdKey() {
  return ['pos', '/pos/tenders/:id', 'DELETE'] as const
}

export function useDeletePosTendersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.tenders)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePosTendersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.tenders)[':id']['$delete']> },
      ) => parseResponse(client.pos.tenders[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPosTendersIdKey() {
  return ['pos', '/pos/tenders/:id', 'PATCH'] as const
}

export function usePatchPosTendersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pos.tenders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPosTendersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pos.tenders)[':id']['$patch']> },
      ) => parseResponse(client.pos.tenders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
