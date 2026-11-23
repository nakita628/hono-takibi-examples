import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2NameQueryKey(args: InferRequestType<(typeof client.v2)[':name']['$get']>) {
  return ['v2', '/v2/:name', args] as const
}

export function getV2NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >({
    queryKey: getV2NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2NameMutationKey() {
  return ['v2', '/v2/:name', 'DELETE'] as const
}

export function getDeleteV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$delete']>) {
      return parseResponse(client.v2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV2NameMutationKey() {
  return ['v2', '/v2/:name', 'PATCH'] as const
}

export function getPatchV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$patch']>) {
      return parseResponse(client.v2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
) {
  return ['v2', '/v2/:name/locations', args] as const
}

export function getV2NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameLocationsQueryKey>
  >({
    queryKey: getV2NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':name'].locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
) {
  return ['v2', '/v2/:name/operations', args] as const
}

export function getV2NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameOperationsQueryKey>
  >({
    queryKey: getV2NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2NameOperationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2NameOperationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2NameAbortFunctionUpgradeMutationKey() {
  return ['v2', '/v2/:name:abortFunctionUpgrade', 'POST'] as const
}

export function getPostV2NameAbortFunctionUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:abortFunctionUpgrade']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:abortFunctionUpgrade']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameAbortFunctionUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:abortFunctionUpgrade']['$post']>,
    ) {
      return parseResponse(client.v2[':name:abortFunctionUpgrade'].$post(args, options))
    },
  })
}

export function usePostV2NameAbortFunctionUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name:abortFunctionUpgrade']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:abortFunctionUpgrade']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2NameAbortFunctionUpgradeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2NameCommitFunctionUpgradeMutationKey() {
  return ['v2', '/v2/:name:commitFunctionUpgrade', 'POST'] as const
}

export function getPostV2NameCommitFunctionUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:commitFunctionUpgrade']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:commitFunctionUpgrade']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameCommitFunctionUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:commitFunctionUpgrade']['$post']>,
    ) {
      return parseResponse(client.v2[':name:commitFunctionUpgrade'].$post(args, options))
    },
  })
}

export function usePostV2NameCommitFunctionUpgrade<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name:commitFunctionUpgrade']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:commitFunctionUpgrade']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2NameCommitFunctionUpgradeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2NameGenerateDownloadUrlMutationKey() {
  return ['v2', '/v2/:name:generateDownloadUrl', 'POST'] as const
}

export function getPostV2NameGenerateDownloadUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:generateDownloadUrl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:generateDownloadUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameGenerateDownloadUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:generateDownloadUrl']['$post']>,
    ) {
      return parseResponse(client.v2[':name:generateDownloadUrl'].$post(args, options))
    },
  })
}

export function usePostV2NameGenerateDownloadUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name:generateDownloadUrl']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:generateDownloadUrl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2NameGenerateDownloadUrlMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2NameRedirectFunctionUpgradeTrafficMutationKey() {
  return ['v2', '/v2/:name:redirectFunctionUpgradeTraffic', 'POST'] as const
}

export function getPostV2NameRedirectFunctionUpgradeTrafficMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:redirectFunctionUpgradeTraffic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:redirectFunctionUpgradeTraffic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameRedirectFunctionUpgradeTrafficMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:redirectFunctionUpgradeTraffic']['$post']>,
    ) {
      return parseResponse(client.v2[':name:redirectFunctionUpgradeTraffic'].$post(args, options))
    },
  })
}

export function usePostV2NameRedirectFunctionUpgradeTraffic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':name:redirectFunctionUpgradeTraffic']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:redirectFunctionUpgradeTraffic']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2NameRedirectFunctionUpgradeTrafficMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2NameRollbackFunctionUpgradeTrafficMutationKey() {
  return ['v2', '/v2/:name:rollbackFunctionUpgradeTraffic', 'POST'] as const
}

export function getPostV2NameRollbackFunctionUpgradeTrafficMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:rollbackFunctionUpgradeTraffic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:rollbackFunctionUpgradeTraffic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameRollbackFunctionUpgradeTrafficMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:rollbackFunctionUpgradeTraffic']['$post']>,
    ) {
      return parseResponse(client.v2[':name:rollbackFunctionUpgradeTraffic'].$post(args, options))
    },
  })
}

export function usePostV2NameRollbackFunctionUpgradeTraffic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':name:rollbackFunctionUpgradeTraffic']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:rollbackFunctionUpgradeTraffic']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2NameRollbackFunctionUpgradeTrafficMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2NameSetupFunctionUpgradeConfigMutationKey() {
  return ['v2', '/v2/:name:setupFunctionUpgradeConfig', 'POST'] as const
}

export function getPostV2NameSetupFunctionUpgradeConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:setupFunctionUpgradeConfig']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:setupFunctionUpgradeConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameSetupFunctionUpgradeConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:setupFunctionUpgradeConfig']['$post']>,
    ) {
      return parseResponse(client.v2[':name:setupFunctionUpgradeConfig'].$post(args, options))
    },
  })
}

export function usePostV2NameSetupFunctionUpgradeConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name:setupFunctionUpgradeConfig']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:setupFunctionUpgradeConfig']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2NameSetupFunctionUpgradeConfigMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ParentFunctionsQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['functions']['$get']>,
) {
  return ['v2', '/v2/:parent/functions', args] as const
}

export function getV2ParentFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['functions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['functions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentFunctionsQueryKey>
  >({
    queryKey: getV2ParentFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ParentFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['functions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['functions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['functions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ParentFunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ParentFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['functions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['functions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['functions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ParentFunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ParentFunctionsMutationKey() {
  return ['v2', '/v2/:parent/functions', 'POST'] as const
}

export function getPostV2ParentFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['functions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['functions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentFunctionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['functions']['$post']>) {
      return parseResponse(client.v2[':parent'].functions.$post(args, options))
    },
  })
}

export function usePostV2ParentFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['functions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['functions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ParentFunctionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2ParentFunctionsGenerateUploadUrlMutationKey() {
  return ['v2', '/v2/:parent/functions:generateUploadUrl', 'POST'] as const
}

export function getPostV2ParentFunctionsGenerateUploadUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['functions:generateUploadUrl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['functions:generateUploadUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentFunctionsGenerateUploadUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['functions:generateUploadUrl']['$post']>,
    ) {
      return parseResponse(client.v2[':parent']['functions:generateUploadUrl'].$post(args, options))
    },
  })
}

export function usePostV2ParentFunctionsGenerateUploadUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':parent']['functions:generateUploadUrl']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['functions:generateUploadUrl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ParentFunctionsGenerateUploadUrlMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ParentRuntimesQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['runtimes']['$get']>,
) {
  return ['v2', '/v2/:parent/runtimes', args] as const
}

export function getV2ParentRuntimesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['runtimes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['runtimes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['runtimes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentRuntimesQueryKey>
  >({
    queryKey: getV2ParentRuntimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].runtimes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ParentRuntimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['runtimes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['runtimes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['runtimes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentRuntimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ParentRuntimesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ParentRuntimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['runtimes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['runtimes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['runtimes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentRuntimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ParentRuntimesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2ResourceGetIamPolicyQueryKey(
  args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$get']>,
) {
  return ['v2', '/v2/:resource:getIamPolicy', args] as const
}

export function getV2ResourceGetIamPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ResourceGetIamPolicyQueryKey>
  >({
    queryKey: getV2ResourceGetIamPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':resource:getIamPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ResourceGetIamPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2ResourceGetIamPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ResourceGetIamPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2ResourceGetIamPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ResourceSetIamPolicyMutationKey() {
  return ['v2', '/v2/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV2ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v2[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV2ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':resource:setIamPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2ResourceTestIamPermissionsMutationKey() {
  return ['v2', '/v2/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV2ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v2[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV2ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':resource:testIamPermissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ResourceTestIamPermissionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
