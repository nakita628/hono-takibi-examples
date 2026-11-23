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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
) {
  return ['v1', '/v1/:name/locations', args] as const
}

export function getV1NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameLocationsQueryKey>
  >({
    queryKey: getV1NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
) {
  return ['v1', '/v1/:name/operations', args] as const
}

export function getV1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameOperationsQueryKey>
  >({
    queryKey: getV1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameOperationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameOperationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentCertificateIssuanceConfigsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>,
) {
  return ['v1', '/v1/:parent/certificateIssuanceConfigs', args] as const
}

export function getV1ParentCertificateIssuanceConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCertificateIssuanceConfigsQueryKey>
  >({
    queryKey: getV1ParentCertificateIssuanceConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].certificateIssuanceConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentCertificateIssuanceConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCertificateIssuanceConfigsQueryKey>
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
      ...getV1ParentCertificateIssuanceConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ParentCertificateIssuanceConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCertificateIssuanceConfigsQueryKey>
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
      ...getV1ParentCertificateIssuanceConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ParentCertificateIssuanceConfigsMutationKey() {
  return ['v1', '/v1/:parent/certificateIssuanceConfigs', 'POST'] as const
}

export function getPostV1ParentCertificateIssuanceConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCertificateIssuanceConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].certificateIssuanceConfigs.$post(args, options))
    },
  })
}

export function usePostV1ParentCertificateIssuanceConfigs<
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
                ReturnType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentCertificateIssuanceConfigsMutationOptions<
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

export function getV1ParentCertificateMapEntriesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>,
) {
  return ['v1', '/v1/:parent/certificateMapEntries', args] as const
}

export function getV1ParentCertificateMapEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCertificateMapEntriesQueryKey>
  >({
    queryKey: getV1ParentCertificateMapEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].certificateMapEntries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentCertificateMapEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCertificateMapEntriesQueryKey>
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
      ...getV1ParentCertificateMapEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ParentCertificateMapEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCertificateMapEntriesQueryKey>
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
      ...getV1ParentCertificateMapEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ParentCertificateMapEntriesMutationKey() {
  return ['v1', '/v1/:parent/certificateMapEntries', 'POST'] as const
}

export function getPostV1ParentCertificateMapEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMapEntries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCertificateMapEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].certificateMapEntries.$post(args, options))
    },
  })
}

export function usePostV1ParentCertificateMapEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMapEntries']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentCertificateMapEntriesMutationOptions<
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

export function getV1ParentCertificateMapsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$get']>,
) {
  return ['v1', '/v1/:parent/certificateMaps', args] as const
}

export function getV1ParentCertificateMapsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMaps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCertificateMapsQueryKey>
  >({
    queryKey: getV1ParentCertificateMapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].certificateMaps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentCertificateMaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMaps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCertificateMapsQueryKey>
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
      ...getV1ParentCertificateMapsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ParentCertificateMaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMaps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCertificateMapsQueryKey>
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
      ...getV1ParentCertificateMapsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ParentCertificateMapsMutationKey() {
  return ['v1', '/v1/:parent/certificateMaps', 'POST'] as const
}

export function getPostV1ParentCertificateMapsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMaps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCertificateMapsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].certificateMaps.$post(args, options))
    },
  })
}

export function usePostV1ParentCertificateMaps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificateMaps']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentCertificateMapsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentCertificatesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$get']>,
) {
  return ['v1', '/v1/:parent/certificates', args] as const
}

export function getV1ParentCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['certificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCertificatesQueryKey>
  >({
    queryKey: getV1ParentCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].certificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParentCertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ParentCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParentCertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ParentCertificatesMutationKey() {
  return ['v1', '/v1/:parent/certificates', 'POST'] as const
}

export function getPostV1ParentCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['certificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['certificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].certificates.$post(args, options))
    },
  })
}

export function usePostV1ParentCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['certificates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['certificates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentCertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentDnsAuthorizationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>,
) {
  return ['v1', '/v1/:parent/dnsAuthorizations', args] as const
}

export function getV1ParentDnsAuthorizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDnsAuthorizationsQueryKey>
  >({
    queryKey: getV1ParentDnsAuthorizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].dnsAuthorizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentDnsAuthorizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDnsAuthorizationsQueryKey>
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
      ...getV1ParentDnsAuthorizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ParentDnsAuthorizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDnsAuthorizationsQueryKey>
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
      ...getV1ParentDnsAuthorizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ParentDnsAuthorizationsMutationKey() {
  return ['v1', '/v1/:parent/dnsAuthorizations', 'POST'] as const
}

export function getPostV1ParentDnsAuthorizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['dnsAuthorizations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDnsAuthorizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].dnsAuthorizations.$post(args, options))
    },
  })
}

export function usePostV1ParentDnsAuthorizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['dnsAuthorizations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentDnsAuthorizationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentTrustConfigsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$get']>,
) {
  return ['v1', '/v1/:parent/trustConfigs', args] as const
}

export function getV1ParentTrustConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['trustConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['trustConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentTrustConfigsQueryKey>
  >({
    queryKey: getV1ParentTrustConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].trustConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentTrustConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['trustConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['trustConfigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentTrustConfigsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParentTrustConfigsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ParentTrustConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['trustConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['trustConfigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentTrustConfigsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParentTrustConfigsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ParentTrustConfigsMutationKey() {
  return ['v1', '/v1/:parent/trustConfigs', 'POST'] as const
}

export function getPostV1ParentTrustConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['trustConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTrustConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].trustConfigs.$post(args, options))
    },
  })
}

export function usePostV1ParentTrustConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['trustConfigs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentTrustConfigsMutationOptions<TError, TOnMutateResult>(
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
