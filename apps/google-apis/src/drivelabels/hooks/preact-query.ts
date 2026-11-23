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

export function getV2betaKey() {
  return ['v2beta'] as const
}

export function getV2betaLabelsQueryKey(args: InferRequestType<typeof client.v2beta.labels.$get>) {
  return ['v2beta', '/v2beta/labels', args] as const
}

export function getV2betaLabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.labels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2beta.labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.labels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaLabelsQueryKey>
  >({
    queryKey: getV2betaLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta.labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2betaLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2beta.labels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.labels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2betaLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2betaLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2beta.labels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.labels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2betaLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2betaLabelsMutationKey() {
  return ['v2beta', '/v2beta/labels', 'POST'] as const
}

export function getPostV2betaLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.labels.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2beta.labels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaLabelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2beta.labels.$post>) {
      return parseResponse(client.v2beta.labels.$post(args, options))
    },
  })
}

export function usePostV2betaLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.labels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2beta.labels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getV2betaLimitsLabelQueryKey(
  args: InferRequestType<typeof client.v2beta.limits.label.$get>,
) {
  return ['v2beta', '/v2beta/limits/label', args] as const
}

export function getV2betaLimitsLabelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.limits.label.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2beta.limits.label.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.limits.label.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaLimitsLabelQueryKey>
  >({
    queryKey: getV2betaLimitsLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta.limits.label.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2betaLimitsLabel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.limits.label.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2beta.limits.label.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.limits.label.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaLimitsLabelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2betaLimitsLabelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2betaLimitsLabel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.limits.label.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2beta.limits.label.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2beta.limits.label.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaLimitsLabelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2betaLimitsLabelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2betaNameQueryKey(
  args: InferRequestType<(typeof client.v2beta)[':name']['$get']>,
) {
  return ['v2beta', '/v2beta/:name', args] as const
}

export function getV2betaNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2beta)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaNameQueryKey>
  >({
    queryKey: getV2betaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2betaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2betaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2betaNameMutationKey() {
  return ['v2beta', '/v2beta/:name', 'DELETE'] as const
}

export function getDeleteV2betaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name']['$delete']>) {
      return parseResponse(client.v2beta[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2betaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2betaNameDeltaMutationKey() {
  return ['v2beta', '/v2beta/:name:delta', 'POST'] as const
}

export function getPostV2betaNameDeltaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:delta']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name:delta']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaNameDeltaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name:delta']['$post']>) {
      return parseResponse(client.v2beta[':name:delta'].$post(args, options))
    },
  })
}

export function usePostV2betaNameDelta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':name:delta']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':name:delta']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaNameDeltaMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2betaNameDisableMutationKey() {
  return ['v2beta', '/v2beta/:name:disable', 'POST'] as const
}

export function getPostV2betaNameDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:disable']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name:disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaNameDisableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name:disable']['$post']>) {
      return parseResponse(client.v2beta[':name:disable'].$post(args, options))
    },
  })
}

export function usePostV2betaNameDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':name:disable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':name:disable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaNameDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2betaNameEnableMutationKey() {
  return ['v2beta', '/v2beta/:name:enable', 'POST'] as const
}

export function getPostV2betaNameEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:enable']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name:enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaNameEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name:enable']['$post']>) {
      return parseResponse(client.v2beta[':name:enable'].$post(args, options))
    },
  })
}

export function usePostV2betaNameEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':name:enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':name:enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaNameEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2betaNamePublishMutationKey() {
  return ['v2beta', '/v2beta/:name:publish', 'POST'] as const
}

export function getPostV2betaNamePublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:publish']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name:publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaNamePublishMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name:publish']['$post']>) {
      return parseResponse(client.v2beta[':name:publish'].$post(args, options))
    },
  })
}

export function usePostV2betaNamePublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':name:publish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':name:publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaNamePublishMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2betaNameUpdateLabelCopyModeMutationKey() {
  return ['v2beta', '/v2beta/:name:updateLabelCopyMode', 'POST'] as const
}

export function getPostV2betaNameUpdateLabelCopyModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':name:updateLabelCopyMode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name:updateLabelCopyMode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaNameUpdateLabelCopyModeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta)[':name:updateLabelCopyMode']['$post']>,
    ) {
      return parseResponse(client.v2beta[':name:updateLabelCopyMode'].$post(args, options))
    },
  })
}

export function usePostV2betaNameUpdateLabelCopyMode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':name:updateLabelCopyMode']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':name:updateLabelCopyMode']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaNameUpdateLabelCopyModeMutationOptions<
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

export function getV2betaParentLocksQueryKey(
  args: InferRequestType<(typeof client.v2beta)[':parent']['locks']['$get']>,
) {
  return ['v2beta', '/v2beta/:parent/locks', args] as const
}

export function getV2betaParentLocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':parent']['locks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['locks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['locks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaParentLocksQueryKey>
  >({
    queryKey: getV2betaParentLocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta[':parent'].locks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2betaParentLocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':parent']['locks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['locks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':parent']['locks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaParentLocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2betaParentLocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2betaParentLocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':parent']['locks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['locks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':parent']['locks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaParentLocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2betaParentLocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2betaParentPermissionsQueryKey(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$get']>,
) {
  return ['v2beta', '/v2beta/:parent/permissions', args] as const
}

export function getV2betaParentPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaParentPermissionsQueryKey>
  >({
    queryKey: getV2betaParentPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta[':parent'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2betaParentPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaParentPermissionsQueryKey>
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
      ...getV2betaParentPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2betaParentPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaParentPermissionsQueryKey>
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
      ...getV2betaParentPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2betaParentPermissionsMutationKey() {
  return ['v2beta', '/v2beta/:parent/permissions', 'POST'] as const
}

export function getPostV2betaParentPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaParentPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$post']>,
    ) {
      return parseResponse(client.v2beta[':parent'].permissions.$post(args, options))
    },
  })
}

export function usePostV2betaParentPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaParentPermissionsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2betaParentPermissionsMutationKey() {
  return ['v2beta', '/v2beta/:parent/permissions', 'PATCH'] as const
}

export function getPatchV2betaParentPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2betaParentPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$patch']>,
    ) {
      return parseResponse(client.v2beta[':parent'].permissions.$patch(args, options))
    },
  })
}

export function usePatchV2betaParentPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2betaParentPermissionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2betaParentPermissionsBatchDeleteMutationKey() {
  return ['v2beta', '/v2beta/:parent/permissions:batchDelete', 'POST'] as const
}

export function getPostV2betaParentPermissionsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':parent']['permissions:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaParentPermissionsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta)[':parent']['permissions:batchDelete']['$post']>,
    ) {
      return parseResponse(client.v2beta[':parent']['permissions:batchDelete'].$post(args, options))
    },
  })
}

export function usePostV2betaParentPermissionsBatchDelete<
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
                ReturnType<(typeof client.v2beta)[':parent']['permissions:batchDelete']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':parent']['permissions:batchDelete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaParentPermissionsBatchDeleteMutationOptions<
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

export function getPostV2betaParentPermissionsBatchUpdateMutationKey() {
  return ['v2beta', '/v2beta/:parent/permissions:batchUpdate', 'POST'] as const
}

export function getPostV2betaParentPermissionsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['permissions:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':parent']['permissions:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaParentPermissionsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta)[':parent']['permissions:batchUpdate']['$post']>,
    ) {
      return parseResponse(client.v2beta[':parent']['permissions:batchUpdate'].$post(args, options))
    },
  })
}

export function usePostV2betaParentPermissionsBatchUpdate<
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
                ReturnType<(typeof client.v2beta)[':parent']['permissions:batchUpdate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':parent']['permissions:batchUpdate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2betaParentPermissionsBatchUpdateMutationOptions<
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
