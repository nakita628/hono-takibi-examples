import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1betaNameQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
) {
  return ['v1beta', '/v1beta/:name', args] as const
}

export function getV1betaNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1beta)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameQueryKey>
  >({
    queryKey: getV1betaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1betaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1betaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1betaNameQueryMutationKey() {
  return ['v1beta', '/v1beta/:name:query', 'POST'] as const
}

export function getPostV1betaNameQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name:query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaNameQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name:query']['$post']>) {
      return parseResponse(client.v1beta[':name:query'].$post(args, options))
    },
  })
}

export function usePostV1betaNameQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name:query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name:query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaNameQueryMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaParentAudienceExportsQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/audienceExports', args] as const
}

export function getV1betaParentAudienceExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentAudienceExportsQueryKey>
  >({
    queryKey: getV1betaParentAudienceExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent'].audienceExports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1betaParentAudienceExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentAudienceExportsQueryKey>
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
      ...getV1betaParentAudienceExportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1betaParentAudienceExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentAudienceExportsQueryKey>
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
      ...getV1betaParentAudienceExportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1betaParentAudienceExportsMutationKey() {
  return ['v1beta', '/v1beta/:parent/audienceExports', 'POST'] as const
}

export function getPostV1betaParentAudienceExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['audienceExports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentAudienceExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].audienceExports.$post(args, options))
    },
  })
}

export function usePostV1betaParentAudienceExports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['audienceExports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaParentAudienceExportsMutationOptions<
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

export function getPostV1betaPropertyBatchRunPivotReportsMutationKey() {
  return ['v1beta', '/v1beta/:property:batchRunPivotReports', 'POST'] as const
}

export function getPostV1betaPropertyBatchRunPivotReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':property:batchRunPivotReports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':property:batchRunPivotReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaPropertyBatchRunPivotReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':property:batchRunPivotReports']['$post']>,
    ) {
      return parseResponse(client.v1beta[':property:batchRunPivotReports'].$post(args, options))
    },
  })
}

export function usePostV1betaPropertyBatchRunPivotReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':property:batchRunPivotReports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':property:batchRunPivotReports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaPropertyBatchRunPivotReportsMutationOptions<
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

export function getPostV1betaPropertyBatchRunReportsMutationKey() {
  return ['v1beta', '/v1beta/:property:batchRunReports', 'POST'] as const
}

export function getPostV1betaPropertyBatchRunReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':property:batchRunReports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':property:batchRunReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaPropertyBatchRunReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':property:batchRunReports']['$post']>,
    ) {
      return parseResponse(client.v1beta[':property:batchRunReports'].$post(args, options))
    },
  })
}

export function usePostV1betaPropertyBatchRunReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':property:batchRunReports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':property:batchRunReports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaPropertyBatchRunReportsMutationOptions<
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

export function getPostV1betaPropertyCheckCompatibilityMutationKey() {
  return ['v1beta', '/v1beta/:property:checkCompatibility', 'POST'] as const
}

export function getPostV1betaPropertyCheckCompatibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':property:checkCompatibility']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':property:checkCompatibility']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaPropertyCheckCompatibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':property:checkCompatibility']['$post']>,
    ) {
      return parseResponse(client.v1beta[':property:checkCompatibility'].$post(args, options))
    },
  })
}

export function usePostV1betaPropertyCheckCompatibility<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':property:checkCompatibility']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':property:checkCompatibility']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaPropertyCheckCompatibilityMutationOptions<
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

export function getPostV1betaPropertyRunPivotReportMutationKey() {
  return ['v1beta', '/v1beta/:property:runPivotReport', 'POST'] as const
}

export function getPostV1betaPropertyRunPivotReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':property:runPivotReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':property:runPivotReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaPropertyRunPivotReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':property:runPivotReport']['$post']>,
    ) {
      return parseResponse(client.v1beta[':property:runPivotReport'].$post(args, options))
    },
  })
}

export function usePostV1betaPropertyRunPivotReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':property:runPivotReport']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':property:runPivotReport']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaPropertyRunPivotReportMutationOptions<
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

export function getPostV1betaPropertyRunRealtimeReportMutationKey() {
  return ['v1beta', '/v1beta/:property:runRealtimeReport', 'POST'] as const
}

export function getPostV1betaPropertyRunRealtimeReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':property:runRealtimeReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':property:runRealtimeReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaPropertyRunRealtimeReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':property:runRealtimeReport']['$post']>,
    ) {
      return parseResponse(client.v1beta[':property:runRealtimeReport'].$post(args, options))
    },
  })
}

export function usePostV1betaPropertyRunRealtimeReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':property:runRealtimeReport']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':property:runRealtimeReport']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaPropertyRunRealtimeReportMutationOptions<
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

export function getPostV1betaPropertyRunReportMutationKey() {
  return ['v1beta', '/v1beta/:property:runReport', 'POST'] as const
}

export function getPostV1betaPropertyRunReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':property:runReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':property:runReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaPropertyRunReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':property:runReport']['$post']>,
    ) {
      return parseResponse(client.v1beta[':property:runReport'].$post(args, options))
    },
  })
}

export function usePostV1betaPropertyRunReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':property:runReport']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':property:runReport']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaPropertyRunReportMutationOptions<TError, TOnMutateResult>(
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
