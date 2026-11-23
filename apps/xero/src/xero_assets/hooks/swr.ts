import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAssetTypesKey() {
  return ['AssetTypes'] as const
}

export function getAssetsKey() {
  return ['Assets'] as const
}

export function getSettingsKey() {
  return ['Settings'] as const
}

export function getGetAssetsKey(args: InferRequestType<typeof client.Assets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Assets', '/Assets', keyArgs] as const
}

export function useGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.Assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.Assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAssetsKey() {
  return ['Assets', '/Assets', 'POST'] as const
}

export function usePostAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Assets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Assets.$post> }) =>
        parseResponse(client.Assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetsIdKey(args: InferRequestType<(typeof client.Assets)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['Assets', '/Assets/:id', keyArgs] as const
}

export function useGetAssetsId<TError = unknown>(
  args: InferRequestType<(typeof client.Assets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Assets)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Assets)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Assets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsId<TError = unknown>(
  args: InferRequestType<(typeof client.Assets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Assets)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Assets)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Assets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetTypesKey(args: InferRequestType<typeof client.AssetTypes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['AssetTypes', '/AssetTypes', keyArgs] as const
}

export function useGetAssetTypes<TError = unknown>(
  args: InferRequestType<typeof client.AssetTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.AssetTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetTypes<TError = unknown>(
  args: InferRequestType<typeof client.AssetTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.AssetTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssetTypesKey() {
  return ['AssetTypes', '/AssetTypes', 'POST'] as const
}

export function usePostAssetTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.AssetTypes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.AssetTypes.$post> }) =>
        parseResponse(client.AssetTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsKey(args: InferRequestType<typeof client.Settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Settings', '/Settings', keyArgs] as const
}

export function useGetSettings<TError = unknown>(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Settings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSettings<TError = unknown>(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Settings.$get(args, clientOptions)), restSwrOptions),
  }
}
