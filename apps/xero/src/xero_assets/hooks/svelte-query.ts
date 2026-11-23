import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getAssetsQueryKey(args: InferRequestType<typeof client.Assets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Assets', '/Assets', keyArgs] as const
}

export function getAssetsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetsQueryKey>
  >({
    queryKey: getAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Assets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAssetsMutationKey() {
  return ['Assets', '/Assets', 'POST'] as const
}

export function getPostAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.Assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Assets.$post>) {
      return parseResponse(client.Assets.$post(args, options))
    },
  })
}

export function createPostAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Assets.$post>>>>>,
        TError,
        InferRequestType<typeof client.Assets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAssetsIdQueryKey(args: InferRequestType<(typeof client.Assets)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['Assets', '/Assets/:id', keyArgs] as const
}

export function getAssetsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Assets)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Assets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdQueryKey>
  >({
    queryKey: getAssetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Assets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Assets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Assets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetTypesQueryKey(args: InferRequestType<typeof client.AssetTypes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['AssetTypes', '/AssetTypes', keyArgs] as const
}

export function getAssetTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.AssetTypes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetTypesQueryKey>
  >({
    queryKey: getAssetTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.AssetTypes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssetTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.AssetTypes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAssetTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssetTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAssetTypesMutationKey() {
  return ['AssetTypes', '/AssetTypes', 'POST'] as const
}

export function getPostAssetTypesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$post>>>>>,
    TError,
    InferRequestType<typeof client.AssetTypes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetTypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.AssetTypes.$post>) {
      return parseResponse(client.AssetTypes.$post(args, options))
    },
  })
}

export function createPostAssetTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AssetTypes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.AssetTypes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssetTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsQueryKey(args: InferRequestType<typeof client.Settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Settings', '/Settings', keyArgs] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
