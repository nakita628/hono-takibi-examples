import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActivityKey() {
  return ['activity'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getHeartbeatKey() {
  return ['heartbeat'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getVaultsKey() {
  return ['vaults'] as const
}

export function getGetActivityKey(args: InferRequestType<typeof client.activity.$get>) {
  return ['activity', '/activity', args] as const
}

export function useGetActivity<TError = unknown>(
  args: InferRequestType<typeof client.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActivityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.activity.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetActivity<TError = unknown>(
  args: InferRequestType<typeof client.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActivityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.activity.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVaultsKey(args: InferRequestType<typeof client.vaults.$get>) {
  return ['vaults', '/vaults', args] as const
}

export function useGetVaults<TError = unknown>(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vaults.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVaults<TError = unknown>(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vaults.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVaultsVaultUuidKey(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>,
) {
  return ['vaults', '/vaults/:vaultUuid', args] as const
}

export function useGetVaultsVaultUuid<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultsVaultUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vaultUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultUuid<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultsVaultUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vaultUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVaultsVaultUuidItemsKey(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>,
) {
  return ['vaults', '/vaults/:vaultUuid/items', args] as const
}

export function useGetVaultsVaultUuidItems<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
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
        ? getGetVaultsVaultUuidItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vaultUuid'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultUuidItems<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
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
        ? getGetVaultsVaultUuidItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vaultUuid'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVaultsVaultUuidItemsKey() {
  return ['vaults', '/vaults/:vaultUuid/items', 'POST'] as const
}

export function usePostVaultsVaultUuidItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultsVaultUuidItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$post']> },
      ) => parseResponse(client.vaults[':vaultUuid'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultsVaultUuidItemsItemUuidKey(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', args] as const
}

export function useGetVaultsVaultUuidItemsItemUuid<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
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
        ? getGetVaultsVaultUuidItemsItemUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultUuidItemsItemUuid<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
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
        ? getGetVaultsVaultUuidItemsItemUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVaultsVaultUuidItemsItemUuidKey() {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', 'PUT'] as const
}

export function usePutVaultsVaultUuidItemsItemUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVaultsVaultUuidItemsItemUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>
        },
      ) => parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVaultsVaultUuidItemsItemUuidKey() {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', 'DELETE'] as const
}

export function useDeleteVaultsVaultUuidItemsItemUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVaultsVaultUuidItemsItemUuidKey()
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
            (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']
          >
        },
      ) =>
        parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVaultsVaultUuidItemsItemUuidKey() {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', 'PATCH'] as const
}

export function usePatchVaultsVaultUuidItemsItemUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVaultsVaultUuidItemsItemUuidKey()
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
            (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']
          >
        },
      ) => parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultsVaultUuidItemsItemUuidFilesKey(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid/files', args] as const
}

export function useGetVaultsVaultUuidItemsItemUuidFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
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
        ? getGetVaultsVaultUuidItemsItemUuidFilesKey(args)
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
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
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
          client.vaults[':vaultUuid'].items[':itemUuid'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultUuidItemsItemUuidFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
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
        ? getGetVaultsVaultUuidItemsItemUuidFilesKey(args)
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
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
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
          client.vaults[':vaultUuid'].items[':itemUuid'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVaultsVaultUuidItemsItemUuidFilesFileUuidKey(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid/files/:fileUuid', args] as const
}

export function useGetVaultsVaultUuidItemsItemUuidFilesFileUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
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
        ? getGetVaultsVaultUuidItemsItemUuidFilesFileUuidKey(args)
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
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
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
          client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultUuidItemsItemUuidFilesFileUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
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
        ? getGetVaultsVaultUuidItemsItemUuidFilesFileUuidKey(args)
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
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
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
          client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVaultsVaultUuidItemsItemUuidFilesFileUuidContentKey(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid/files/:fileUuid/content', args] as const
}

export function useGetVaultsVaultUuidItemsItemUuidFilesFileUuidContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
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
        ? getGetVaultsVaultUuidItemsItemUuidFilesFileUuidContentKey(args)
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
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
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
          client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultUuidItemsItemUuidFilesFileUuidContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
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
        ? getGetVaultsVaultUuidItemsItemUuidFilesFileUuidContentKey(args)
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
                (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
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
          client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHeartbeatKey() {
  return ['heartbeat', '/heartbeat'] as const
}

export function useGetHeartbeat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHeartbeatKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heartbeat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeartbeat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHeartbeatKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heartbeat.$get(undefined, clientOptions)),
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

export function getGetMetricsKey() {
  return ['metrics', '/metrics'] as const
}

export function useGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
