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

export function getV3beta1Key() {
  return ['v3beta1'] as const
}

export function getV3beta1NameQueryKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name', args] as const
}

export function getV3beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1NameQueryKey>
  >({
    queryKey: getV3beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV3beta1NameMutationKey() {
  return ['v3beta1', '/v3beta1/:name', 'DELETE'] as const
}

export function getDeleteV3beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name']['$delete']>) {
      return parseResponse(client.v3beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV3beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name/locations', args] as const
}

export function getV3beta1NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1NameLocationsQueryKey>
  >({
    queryKey: getV3beta1NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3beta1[':name'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3beta1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3beta1NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3beta1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3beta1NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3beta1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name/operations', args] as const
}

export function getV3beta1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1NameOperationsQueryKey>
  >({
    queryKey: getV3beta1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3beta1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1NameOperationsQueryKey>
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
      ...getV3beta1NameOperationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1NameOperationsQueryKey>
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
      ...getV3beta1NameOperationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV3beta1NameCancelMutationKey() {
  return ['v3beta1', '/v3beta1/:name:cancel', 'POST'] as const
}

export function getPostV3beta1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>) {
      return parseResponse(client.v3beta1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3beta1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1NameWaitMutationKey() {
  return ['v3beta1', '/v3beta1/:name:wait', 'POST'] as const
}

export function getPostV3beta1NameWaitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:wait']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:wait']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameWaitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:wait']['$post']>) {
      return parseResponse(client.v3beta1[':name:wait'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameWait<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':name:wait']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':name:wait']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3beta1NameWaitMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentGlossariesQueryKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/glossaries', args] as const
}

export function getV3beta1ParentGlossariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentGlossariesQueryKey>
  >({
    queryKey: getV3beta1ParentGlossariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3beta1[':parent'].glossaries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3beta1ParentGlossaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1ParentGlossariesQueryKey>
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
      ...getV3beta1ParentGlossariesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3beta1ParentGlossaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1ParentGlossariesQueryKey>
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
      ...getV3beta1ParentGlossariesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV3beta1ParentGlossariesMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/glossaries', 'POST'] as const
}

export function getPostV3beta1ParentGlossariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentGlossariesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].glossaries.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentGlossaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3beta1ParentGlossariesMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentSupportedLanguagesQueryKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/supportedLanguages', args] as const
}

export function getV3beta1ParentSupportedLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentSupportedLanguagesQueryKey>
  >({
    queryKey: getV3beta1ParentSupportedLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3beta1[':parent'].supportedLanguages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3beta1ParentSupportedLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1ParentSupportedLanguagesQueryKey>
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
      ...getV3beta1ParentSupportedLanguagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3beta1ParentSupportedLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3beta1ParentSupportedLanguagesQueryKey>
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
      ...getV3beta1ParentSupportedLanguagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV3beta1ParentBatchTranslateDocumentMutationKey() {
  return ['v3beta1', '/v3beta1/:parent:batchTranslateDocument', 'POST'] as const
}

export function getPostV3beta1ParentBatchTranslateDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentBatchTranslateDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent:batchTranslateDocument'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentBatchTranslateDocument<
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
                ReturnType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3beta1ParentBatchTranslateDocumentMutationOptions<
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

export function getPostV3beta1ParentBatchTranslateTextMutationKey() {
  return ['v3beta1', '/v3beta1/:parent:batchTranslateText', 'POST'] as const
}

export function getPostV3beta1ParentBatchTranslateTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentBatchTranslateTextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent:batchTranslateText'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentBatchTranslateText<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3beta1ParentBatchTranslateTextMutationOptions<
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

export function getPostV3beta1ParentDetectLanguageMutationKey() {
  return ['v3beta1', '/v3beta1/:parent:detectLanguage', 'POST'] as const
}

export function getPostV3beta1ParentDetectLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentDetectLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent:detectLanguage'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentDetectLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3beta1ParentDetectLanguageMutationOptions<
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

export function getPostV3beta1ParentTranslateDocumentMutationKey() {
  return ['v3beta1', '/v3beta1/:parent:translateDocument', 'POST'] as const
}

export function getPostV3beta1ParentTranslateDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:translateDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent:translateDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentTranslateDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent:translateDocument']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent:translateDocument'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentTranslateDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent:translateDocument']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':parent:translateDocument']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3beta1ParentTranslateDocumentMutationOptions<
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

export function getPostV3beta1ParentTranslateTextMutationKey() {
  return ['v3beta1', '/v3beta1/:parent:translateText', 'POST'] as const
}

export function getPostV3beta1ParentTranslateTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:translateText']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent:translateText']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentTranslateTextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent:translateText']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent:translateText'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentTranslateText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3beta1)[':parent:translateText']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3beta1)[':parent:translateText']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3beta1ParentTranslateTextMutationOptions<
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
