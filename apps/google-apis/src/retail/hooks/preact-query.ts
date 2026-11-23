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

export function getV2alphaKey() {
  return ['v2alpha'] as const
}

export function getPostV2alphaAttributesConfigAddCatalogAttributeMutationKey() {
  return ['v2alpha', '/v2alpha/:attributesConfig:addCatalogAttribute', 'POST'] as const
}

export function getPostV2alphaAttributesConfigAddCatalogAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaAttributesConfigAddCatalogAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']
      >,
    ) {
      return parseResponse(
        client.v2alpha[':attributesConfig:addCatalogAttribute'].$post(args, options),
      )
    },
  })
}

export function usePostV2alphaAttributesConfigAddCatalogAttribute<
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
                ReturnType<
                  (typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaAttributesConfigAddCatalogAttributeMutationOptions<
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

export function getPostV2alphaAttributesConfigBatchRemoveCatalogAttributesMutationKey() {
  return ['v2alpha', '/v2alpha/:attributesConfig:batchRemoveCatalogAttributes', 'POST'] as const
}

export function getPostV2alphaAttributesConfigBatchRemoveCatalogAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaAttributesConfigBatchRemoveCatalogAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client.v2alpha[':attributesConfig:batchRemoveCatalogAttributes'].$post(args, options),
      )
    },
  })
}

export function usePostV2alphaAttributesConfigBatchRemoveCatalogAttributes<
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
                ReturnType<
                  (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV2alphaAttributesConfigBatchRemoveCatalogAttributesMutationOptions<
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

export function getPostV2alphaAttributesConfigRemoveCatalogAttributeMutationKey() {
  return ['v2alpha', '/v2alpha/:attributesConfig:removeCatalogAttribute', 'POST'] as const
}

export function getPostV2alphaAttributesConfigRemoveCatalogAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaAttributesConfigRemoveCatalogAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']
      >,
    ) {
      return parseResponse(
        client.v2alpha[':attributesConfig:removeCatalogAttribute'].$post(args, options),
      )
    },
  })
}

export function usePostV2alphaAttributesConfigRemoveCatalogAttribute<
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
                ReturnType<
                  (typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaAttributesConfigRemoveCatalogAttributeMutationOptions<
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

export function getPostV2alphaAttributesConfigReplaceCatalogAttributeMutationKey() {
  return ['v2alpha', '/v2alpha/:attributesConfig:replaceCatalogAttribute', 'POST'] as const
}

export function getPostV2alphaAttributesConfigReplaceCatalogAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaAttributesConfigReplaceCatalogAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']
      >,
    ) {
      return parseResponse(
        client.v2alpha[':attributesConfig:replaceCatalogAttribute'].$post(args, options),
      )
    },
  })
}

export function usePostV2alphaAttributesConfigReplaceCatalogAttribute<
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
                ReturnType<
                  (typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaAttributesConfigReplaceCatalogAttributeMutationOptions<
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

export function getV2alphaCatalogCompleteQueryQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:catalog:completeQuery', args] as const
}

export function getV2alphaCatalogCompleteQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaCatalogCompleteQueryQueryKey>
  >({
    queryKey: getV2alphaCatalogCompleteQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':catalog:completeQuery'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaCatalogCompleteQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaCatalogCompleteQueryQueryKey>
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
      ...getV2alphaCatalogCompleteQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaCatalogCompleteQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaCatalogCompleteQueryQueryKey>
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
      ...getV2alphaCatalogCompleteQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2alphaCatalogGetDefaultBranchQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:catalog:getDefaultBranch', args] as const
}

export function getV2alphaCatalogGetDefaultBranchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaCatalogGetDefaultBranchQueryKey>
  >({
    queryKey: getV2alphaCatalogGetDefaultBranchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':catalog:getDefaultBranch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaCatalogGetDefaultBranch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaCatalogGetDefaultBranchQueryKey>
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
      ...getV2alphaCatalogGetDefaultBranchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaCatalogGetDefaultBranch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaCatalogGetDefaultBranchQueryKey>
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
      ...getV2alphaCatalogGetDefaultBranchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2alphaCatalogSetDefaultBranchMutationKey() {
  return ['v2alpha', '/v2alpha/:catalog:setDefaultBranch', 'POST'] as const
}

export function getPostV2alphaCatalogSetDefaultBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaCatalogSetDefaultBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':catalog:setDefaultBranch'].$post(args, options))
    },
  })
}

export function usePostV2alphaCatalogSetDefaultBranch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaCatalogSetDefaultBranchMutationOptions<
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

export function getV2alphaNameQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:name', args] as const
}

export function getV2alphaNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaNameQueryKey>
  >({
    queryKey: getV2alphaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2alphaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2alphaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2alphaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2alphaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2alphaNameMutationKey() {
  return ['v2alpha', '/v2alpha/:name', 'POST'] as const
}

export function getPostV2alphaNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha)[':name']['$post']>) {
      return parseResponse(client.v2alpha[':name'].$post(args, options))
    },
  })
}

export function usePostV2alphaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2alphaNameMutationKey() {
  return ['v2alpha', '/v2alpha/:name', 'DELETE'] as const
}

export function getDeleteV2alphaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2alphaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha)[':name']['$delete']>) {
      return parseResponse(client.v2alpha[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2alphaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2alphaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2alphaNameMutationKey() {
  return ['v2alpha', '/v2alpha/:name', 'PATCH'] as const
}

export function getPatchV2alphaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2alphaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha)[':name']['$patch']>) {
      return parseResponse(client.v2alpha[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2alphaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2alphaNameMutationOptions<TError, TOnMutateResult>(
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

export function getV2alphaNameOperationsQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':name']['operations']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:name/operations', args] as const
}

export function getV2alphaNameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaNameOperationsQueryKey>
  >({
    queryKey: getV2alphaNameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaNameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaNameOperationsQueryKey>
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
      ...getV2alphaNameOperationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaNameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaNameOperationsQueryKey>
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
      ...getV2alphaNameOperationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2alphaNamePauseMutationKey() {
  return ['v2alpha', '/v2alpha/:name:pause', 'POST'] as const
}

export function getPostV2alphaNamePauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name:pause']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':name:pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaNamePauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha)[':name:pause']['$post']>) {
      return parseResponse(client.v2alpha[':name:pause'].$post(args, options))
    },
  })
}

export function usePostV2alphaNamePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':name:pause']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':name:pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaNamePauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2alphaNameResumeMutationKey() {
  return ['v2alpha', '/v2alpha/:name:resume', 'POST'] as const
}

export function getPostV2alphaNameResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name:resume']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':name:resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaNameResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha)[':name:resume']['$post']>) {
      return parseResponse(client.v2alpha[':name:resume'].$post(args, options))
    },
  })
}

export function usePostV2alphaNameResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':name:resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':name:resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaNameResumeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2alphaNameSetInventoryMutationKey() {
  return ['v2alpha', '/v2alpha/:name:setInventory', 'POST'] as const
}

export function getPostV2alphaNameSetInventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':name:setInventory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':name:setInventory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaNameSetInventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':name:setInventory']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':name:setInventory'].$post(args, options))
    },
  })
}

export function usePostV2alphaNameSetInventory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':name:setInventory']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':name:setInventory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaNameSetInventoryMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2alphaNameTuneMutationKey() {
  return ['v2alpha', '/v2alpha/:name:tune', 'POST'] as const
}

export function getPostV2alphaNameTuneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name:tune']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':name:tune']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaNameTuneMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha)[':name:tune']['$post']>) {
      return parseResponse(client.v2alpha[':name:tune'].$post(args, options))
    },
  })
}

export function usePostV2alphaNameTune<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':name:tune']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':name:tune']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaNameTuneMutationOptions<TError, TOnMutateResult>(
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

export function getV2alphaParentCatalogsQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/catalogs', args] as const
}

export function getV2alphaParentCatalogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaParentCatalogsQueryKey>
  >({
    queryKey: getV2alphaParentCatalogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':parent'].catalogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaParentCatalogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentCatalogsQueryKey>
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
      ...getV2alphaParentCatalogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaParentCatalogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentCatalogsQueryKey>
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
      ...getV2alphaParentCatalogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2alphaParentCompletionDataImportMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/completionData:import', 'POST'] as const
}

export function getPostV2alphaParentCompletionDataImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['completionData:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['completionData:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentCompletionDataImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['completionData:import']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent']['completionData:import'].$post(args, options))
    },
  })
}

export function usePostV2alphaParentCompletionDataImport<
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
                ReturnType<(typeof client.v2alpha)[':parent']['completionData:import']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['completionData:import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentCompletionDataImportMutationOptions<
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

export function getV2alphaParentControlsQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/controls', args] as const
}

export function getV2alphaParentControlsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaParentControlsQueryKey>
  >({
    queryKey: getV2alphaParentControlsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':parent'].controls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaParentControls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentControlsQueryKey>
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
      ...getV2alphaParentControlsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaParentControls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentControlsQueryKey>
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
      ...getV2alphaParentControlsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2alphaParentControlsMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/controls', 'POST'] as const
}

export function getPostV2alphaParentControlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentControlsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent'].controls.$post(args, options))
    },
  })
}

export function usePostV2alphaParentControls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentControlsMutationOptions<TError, TOnMutateResult>(
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

export function getV2alphaParentMerchantCenterAccountLinksQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/merchantCenterAccountLinks', args] as const
}

export function getV2alphaParentMerchantCenterAccountLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaParentMerchantCenterAccountLinksQueryKey>
  >({
    queryKey: getV2alphaParentMerchantCenterAccountLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':parent'].merchantCenterAccountLinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaParentMerchantCenterAccountLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentMerchantCenterAccountLinksQueryKey>
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
      ...getV2alphaParentMerchantCenterAccountLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaParentMerchantCenterAccountLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentMerchantCenterAccountLinksQueryKey>
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
      ...getV2alphaParentMerchantCenterAccountLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2alphaParentModelsQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/models', args] as const
}

export function getV2alphaParentModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaParentModelsQueryKey>
  >({
    queryKey: getV2alphaParentModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':parent'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaParentModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2alphaParentModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2alphaParentModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2alphaParentModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2alphaParentModelsMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/models', 'POST'] as const
}

export function getPostV2alphaParentModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent'].models.$post(args, options))
    },
  })
}

export function usePostV2alphaParentModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['models']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentModelsMutationOptions<TError, TOnMutateResult>(
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

export function getV2alphaParentProductsQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/products', args] as const
}

export function getV2alphaParentProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaParentProductsQueryKey>
  >({
    queryKey: getV2alphaParentProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':parent'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaParentProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentProductsQueryKey>
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
      ...getV2alphaParentProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaParentProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentProductsQueryKey>
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
      ...getV2alphaParentProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2alphaParentProductsMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/products', 'POST'] as const
}

export function getPostV2alphaParentProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent'].products.$post(args, options))
    },
  })
}

export function usePostV2alphaParentProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['products']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentProductsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2alphaParentProductsImportMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/products:import', 'POST'] as const
}

export function getPostV2alphaParentProductsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['products:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentProductsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['products:import']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent']['products:import'].$post(args, options))
    },
  })
}

export function usePostV2alphaParentProductsImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products:import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['products:import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentProductsImportMutationOptions<
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

export function getPostV2alphaParentProductsPurgeMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/products:purge', 'POST'] as const
}

export function getPostV2alphaParentProductsPurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products:purge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['products:purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentProductsPurgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['products:purge']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent']['products:purge'].$post(args, options))
    },
  })
}

export function usePostV2alphaParentProductsPurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products:purge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['products:purge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentProductsPurgeMutationOptions<
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

export function getV2alphaParentServingConfigsQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/servingConfigs', args] as const
}

export function getV2alphaParentServingConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaParentServingConfigsQueryKey>
  >({
    queryKey: getV2alphaParentServingConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':parent'].servingConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaParentServingConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentServingConfigsQueryKey>
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
      ...getV2alphaParentServingConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaParentServingConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentServingConfigsQueryKey>
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
      ...getV2alphaParentServingConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2alphaParentServingConfigsMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/servingConfigs', 'POST'] as const
}

export function getPostV2alphaParentServingConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentServingConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent'].servingConfigs.$post(args, options))
    },
  })
}

export function usePostV2alphaParentServingConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentServingConfigsMutationOptions<
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

export function getV2alphaParentUserEventsCollectQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/userEvents:collect', args] as const
}

export function getV2alphaParentUserEventsCollectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alphaParentUserEventsCollectQueryKey>
  >({
    queryKey: getV2alphaParentUserEventsCollectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha[':parent']['userEvents:collect'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2alphaParentUserEventsCollect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentUserEventsCollectQueryKey>
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
      ...getV2alphaParentUserEventsCollectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2alphaParentUserEventsCollect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alphaParentUserEventsCollectQueryKey>
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
      ...getV2alphaParentUserEventsCollectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2alphaParentUserEventsImportMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/userEvents:import', 'POST'] as const
}

export function getPostV2alphaParentUserEventsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentUserEventsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent']['userEvents:import'].$post(args, options))
    },
  })
}

export function usePostV2alphaParentUserEventsImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentUserEventsImportMutationOptions<
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

export function getPostV2alphaParentUserEventsPurgeMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/userEvents:purge', 'POST'] as const
}

export function getPostV2alphaParentUserEventsPurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentUserEventsPurgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent']['userEvents:purge'].$post(args, options))
    },
  })
}

export function usePostV2alphaParentUserEventsPurge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentUserEventsPurgeMutationOptions<
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

export function getPostV2alphaParentUserEventsRejoinMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/userEvents:rejoin', 'POST'] as const
}

export function getPostV2alphaParentUserEventsRejoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentUserEventsRejoinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent']['userEvents:rejoin'].$post(args, options))
    },
  })
}

export function usePostV2alphaParentUserEventsRejoin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentUserEventsRejoinMutationOptions<
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

export function getPostV2alphaParentUserEventsWriteMutationKey() {
  return ['v2alpha', '/v2alpha/:parent/userEvents:write', 'POST'] as const
}

export function getPostV2alphaParentUserEventsWriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaParentUserEventsWriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':parent']['userEvents:write'].$post(args, options))
    },
  })
}

export function usePostV2alphaParentUserEventsWrite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaParentUserEventsWriteMutationOptions<
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

export function getPostV2alphaPlacementPredictMutationKey() {
  return ['v2alpha', '/v2alpha/:placement:predict', 'POST'] as const
}

export function getPostV2alphaPlacementPredictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':placement:predict']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':placement:predict']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaPlacementPredictMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':placement:predict']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':placement:predict'].$post(args, options))
    },
  })
}

export function usePostV2alphaPlacementPredict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':placement:predict']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':placement:predict']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaPlacementPredictMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2alphaPlacementSearchMutationKey() {
  return ['v2alpha', '/v2alpha/:placement:search', 'POST'] as const
}

export function getPostV2alphaPlacementSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':placement:search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':placement:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaPlacementSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':placement:search']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':placement:search'].$post(args, options))
    },
  })
}

export function usePostV2alphaPlacementSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':placement:search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':placement:search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaPlacementSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2alphaProductAddFulfillmentPlacesMutationKey() {
  return ['v2alpha', '/v2alpha/:product:addFulfillmentPlaces', 'POST'] as const
}

export function getPostV2alphaProductAddFulfillmentPlacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaProductAddFulfillmentPlacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':product:addFulfillmentPlaces'].$post(args, options))
    },
  })
}

export function usePostV2alphaProductAddFulfillmentPlaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaProductAddFulfillmentPlacesMutationOptions<
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

export function getPostV2alphaProductAddLocalInventoriesMutationKey() {
  return ['v2alpha', '/v2alpha/:product:addLocalInventories', 'POST'] as const
}

export function getPostV2alphaProductAddLocalInventoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaProductAddLocalInventoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':product:addLocalInventories'].$post(args, options))
    },
  })
}

export function usePostV2alphaProductAddLocalInventories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaProductAddLocalInventoriesMutationOptions<
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

export function getPostV2alphaProductRemoveFulfillmentPlacesMutationKey() {
  return ['v2alpha', '/v2alpha/:product:removeFulfillmentPlaces', 'POST'] as const
}

export function getPostV2alphaProductRemoveFulfillmentPlacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaProductRemoveFulfillmentPlacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':product:removeFulfillmentPlaces'].$post(args, options))
    },
  })
}

export function usePostV2alphaProductRemoveFulfillmentPlaces<
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
                ReturnType<(typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaProductRemoveFulfillmentPlacesMutationOptions<
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

export function getPostV2alphaProductRemoveLocalInventoriesMutationKey() {
  return ['v2alpha', '/v2alpha/:product:removeLocalInventories', 'POST'] as const
}

export function getPostV2alphaProductRemoveLocalInventoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaProductRemoveLocalInventoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':product:removeLocalInventories'].$post(args, options))
    },
  })
}

export function usePostV2alphaProductRemoveLocalInventories<
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
                ReturnType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaProductRemoveLocalInventoriesMutationOptions<
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

export function getPostV2alphaServingConfigAddControlMutationKey() {
  return ['v2alpha', '/v2alpha/:servingConfig:addControl', 'POST'] as const
}

export function getPostV2alphaServingConfigAddControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaServingConfigAddControlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':servingConfig:addControl'].$post(args, options))
    },
  })
}

export function usePostV2alphaServingConfigAddControl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaServingConfigAddControlMutationOptions<
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

export function getPostV2alphaServingConfigRemoveControlMutationKey() {
  return ['v2alpha', '/v2alpha/:servingConfig:removeControl', 'POST'] as const
}

export function getPostV2alphaServingConfigRemoveControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alphaServingConfigRemoveControlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>,
    ) {
      return parseResponse(client.v2alpha[':servingConfig:removeControl'].$post(args, options))
    },
  })
}

export function usePostV2alphaServingConfigRemoveControl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2alphaServingConfigRemoveControlMutationOptions<
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
