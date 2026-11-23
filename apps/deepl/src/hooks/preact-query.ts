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

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV2AdminAnalyticsQueryKey(
  args: InferRequestType<typeof client.v2.admin.analytics.$get>,
) {
  return ['v2', '/v2/admin/analytics', args] as const
}

export function getV2AdminAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.admin.analytics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdminAnalyticsQueryKey>
  >({
    queryKey: getV2AdminAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.admin.analytics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2AdminAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.admin.analytics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AdminAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2AdminAnalyticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2AdminAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.admin.analytics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AdminAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2AdminAnalyticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2AdminAnalyticsCustomTagsQueryKey(
  args: InferRequestType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>,
) {
  return ['v2', '/v2/admin/analytics/custom-tags', args] as const
}

export function getV2AdminAnalyticsCustomTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdminAnalyticsCustomTagsQueryKey>
  >({
    queryKey: getV2AdminAnalyticsCustomTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.admin.analytics['custom-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2AdminAnalyticsCustomTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AdminAnalyticsCustomTagsQueryKey>
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
      ...getV2AdminAnalyticsCustomTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2AdminAnalyticsCustomTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AdminAnalyticsCustomTagsQueryKey>
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
      ...getV2AdminAnalyticsCustomTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2AdminDeveloperKeysQueryKey() {
  return ['v2', '/v2/admin/developer-keys'] as const
}

export function getV2AdminDeveloperKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdminDeveloperKeysQueryKey>
  >({
    queryKey: getV2AdminDeveloperKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.admin['developer-keys'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2AdminDeveloperKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AdminDeveloperKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2AdminDeveloperKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2AdminDeveloperKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AdminDeveloperKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2AdminDeveloperKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2AdminDeveloperKeysMutationKey() {
  return ['v2', '/v2/admin/developer-keys', 'POST'] as const
}

export function getPostV2AdminDeveloperKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.admin)['developer-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdminDeveloperKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.admin)['developer-keys']['$post']>) {
      return parseResponse(client.v2.admin['developer-keys'].$post(args, options))
    },
  })
}

export function usePostV2AdminDeveloperKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.admin)['developer-keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AdminDeveloperKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2AdminDeveloperKeysDeactivateMutationKey() {
  return ['v2', '/v2/admin/developer-keys/deactivate', 'PUT'] as const
}

export function getPutV2AdminDeveloperKeysDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2AdminDeveloperKeysDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>,
    ) {
      return parseResponse(client.v2.admin['developer-keys'].deactivate.$put(args, options))
    },
  })
}

export function usePutV2AdminDeveloperKeysDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2AdminDeveloperKeysDeactivateMutationOptions<
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

export function getPutV2AdminDeveloperKeysLabelMutationKey() {
  return ['v2', '/v2/admin/developer-keys/label', 'PUT'] as const
}

export function getPutV2AdminDeveloperKeysLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['label']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.admin)['developer-keys']['label']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2AdminDeveloperKeysLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.admin)['developer-keys']['label']['$put']>,
    ) {
      return parseResponse(client.v2.admin['developer-keys'].label.$put(args, options))
    },
  })
}

export function usePutV2AdminDeveloperKeysLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['label']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.admin)['developer-keys']['label']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2AdminDeveloperKeysLabelMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2AdminDeveloperKeysLimitsMutationKey() {
  return ['v2', '/v2/admin/developer-keys/limits', 'PUT'] as const
}

export function getPutV2AdminDeveloperKeysLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['limits']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.admin)['developer-keys']['limits']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2AdminDeveloperKeysLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.admin)['developer-keys']['limits']['$put']>,
    ) {
      return parseResponse(client.v2.admin['developer-keys'].limits.$put(args, options))
    },
  })
}

export function usePutV2AdminDeveloperKeysLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['limits']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.admin)['developer-keys']['limits']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2AdminDeveloperKeysLimitsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TranslateMutationKey() {
  return ['v2', '/v2/translate', 'POST'] as const
}

export function getPostV2TranslateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.translate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.translate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TranslateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.translate.$post>) {
      return parseResponse(client.v2.translate.$post(args, options))
    },
  })
}

export function usePostV2Translate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.translate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.translate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TranslateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2DocumentMutationKey() {
  return ['v2', '/v2/document', 'POST'] as const
}

export function getPostV2DocumentMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.document.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.document.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DocumentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.document.$post>) {
      return parseResponse(client.v2.document.$post(args, options))
    },
  })
}

export function usePostV2Document<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.document.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.document.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DocumentMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2DocumentDocumentIdMutationKey() {
  return ['v2', '/v2/document/:document_id', 'POST'] as const
}

export function getPostV2DocumentDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.document)[':document_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.document)[':document_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DocumentDocumentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.document)[':document_id']['$post']>) {
      return parseResponse(client.v2.document[':document_id'].$post(args, options))
    },
  })
}

export function usePostV2DocumentDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.document)[':document_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.document)[':document_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DocumentDocumentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2DocumentDocumentIdResultMutationKey() {
  return ['v2', '/v2/document/:document_id/result', 'POST'] as const
}

export function getPostV2DocumentDocumentIdResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.document)[':document_id']['result']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.document)[':document_id']['result']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DocumentDocumentIdResultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.document)[':document_id']['result']['$post']>,
    ) {
      return parseResponse(client.v2.document[':document_id'].result.$post(args, options))
    },
  })
}

export function usePostV2DocumentDocumentIdResult<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.document)[':document_id']['result']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.document)[':document_id']['result']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DocumentDocumentIdResultMutationOptions<
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

export function getV2GlossaryLanguagePairsQueryKey() {
  return ['v2', '/v2/glossary-language-pairs'] as const
}

export function getV2GlossaryLanguagePairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GlossaryLanguagePairsQueryKey>
  >({
    queryKey: getV2GlossaryLanguagePairsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['glossary-language-pairs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2GlossaryLanguagePairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GlossaryLanguagePairsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2GlossaryLanguagePairsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2GlossaryLanguagePairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GlossaryLanguagePairsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2GlossaryLanguagePairsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3GlossariesQueryKey() {
  return ['v3', '/v3/glossaries'] as const
}

export function getV3GlossariesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3GlossariesQueryKey>
  >({
    queryKey: getV3GlossariesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.glossaries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3Glossaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3GlossariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3GlossariesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3Glossaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3GlossariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3GlossariesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV3GlossariesMutationKey() {
  return ['v3', '/v3/glossaries', 'POST'] as const
}

export function getPostV3GlossariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.glossaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3GlossariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.glossaries.$post>) {
      return parseResponse(client.v3.glossaries.$post(args, options))
    },
  })
}

export function usePostV3Glossaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.glossaries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3GlossariesMutationOptions<TError, TOnMutateResult>(
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

export function getV3GlossariesGlossaryIdQueryKey(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$get']>,
) {
  return ['v3', '/v3/glossaries/:glossary_id', args] as const
}

export function getV3GlossariesGlossaryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3GlossariesGlossaryIdQueryKey>
  >({
    queryKey: getV3GlossariesGlossaryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.glossaries[':glossary_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3GlossariesGlossaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3GlossariesGlossaryIdQueryKey>
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
      ...getV3GlossariesGlossaryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3GlossariesGlossaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3GlossariesGlossaryIdQueryKey>
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
      ...getV3GlossariesGlossaryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV3GlossariesGlossaryIdMutationKey() {
  return ['v3', '/v3/glossaries/:glossary_id', 'DELETE'] as const
}

export function getDeleteV3GlossariesGlossaryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3GlossariesGlossaryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$delete']>,
    ) {
      return parseResponse(client.v3.glossaries[':glossary_id'].$delete(args, options))
    },
  })
}

export function useDeleteV3GlossariesGlossaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3GlossariesGlossaryIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV3GlossariesGlossaryIdMutationKey() {
  return ['v3', '/v3/glossaries/:glossary_id', 'PATCH'] as const
}

export function getPatchV3GlossariesGlossaryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3GlossariesGlossaryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$patch']>,
    ) {
      return parseResponse(client.v3.glossaries[':glossary_id'].$patch(args, options))
    },
  })
}

export function usePatchV3GlossariesGlossaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV3GlossariesGlossaryIdMutationOptions<TError, TOnMutateResult>(
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

export function getV3GlossariesGlossaryIdEntriesQueryKey(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>,
) {
  return ['v3', '/v3/glossaries/:glossary_id/entries', args] as const
}

export function getV3GlossariesGlossaryIdEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3GlossariesGlossaryIdEntriesQueryKey>
  >({
    queryKey: getV3GlossariesGlossaryIdEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.glossaries[':glossary_id'].entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3GlossariesGlossaryIdEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3GlossariesGlossaryIdEntriesQueryKey>
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
      ...getV3GlossariesGlossaryIdEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3GlossariesGlossaryIdEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3GlossariesGlossaryIdEntriesQueryKey>
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
      ...getV3GlossariesGlossaryIdEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV3GlossariesGlossaryIdDictionariesMutationKey() {
  return ['v3', '/v3/glossaries/:glossary_id/dictionaries', 'PUT'] as const
}

export function getPutV3GlossariesGlossaryIdDictionariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3GlossariesGlossaryIdDictionariesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']>,
    ) {
      return parseResponse(client.v3.glossaries[':glossary_id'].dictionaries.$put(args, options))
    },
  })
}

export function usePutV3GlossariesGlossaryIdDictionaries<
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
                ReturnType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV3GlossariesGlossaryIdDictionariesMutationOptions<
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

export function getDeleteV3GlossariesGlossaryIdDictionariesMutationKey() {
  return ['v3', '/v3/glossaries/:glossary_id/dictionaries', 'DELETE'] as const
}

export function getDeleteV3GlossariesGlossaryIdDictionariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3GlossariesGlossaryIdDictionariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']
      >,
    ) {
      return parseResponse(client.v3.glossaries[':glossary_id'].dictionaries.$delete(args, options))
    },
  })
}

export function useDeleteV3GlossariesGlossaryIdDictionaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3GlossariesGlossaryIdDictionariesMutationOptions<
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

export function getV2GlossariesQueryKey() {
  return ['v2', '/v2/glossaries'] as const
}

export function getV2GlossariesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2GlossariesQueryKey>
  >({
    queryKey: getV2GlossariesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.glossaries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Glossaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2GlossariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2GlossariesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Glossaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2GlossariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2GlossariesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2GlossariesMutationKey() {
  return ['v2', '/v2/glossaries', 'POST'] as const
}

export function getPostV2GlossariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.glossaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2GlossariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.glossaries.$post>) {
      return parseResponse(client.v2.glossaries.$post(args, options))
    },
  })
}

export function usePostV2Glossaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.glossaries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2GlossariesMutationOptions<TError, TOnMutateResult>(
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

export function getV2GlossariesGlossaryIdQueryKey(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$get']>,
) {
  return ['v2', '/v2/glossaries/:glossary_id', args] as const
}

export function getV2GlossariesGlossaryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GlossariesGlossaryIdQueryKey>
  >({
    queryKey: getV2GlossariesGlossaryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.glossaries[':glossary_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2GlossariesGlossaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GlossariesGlossaryIdQueryKey>
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
      ...getV2GlossariesGlossaryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2GlossariesGlossaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GlossariesGlossaryIdQueryKey>
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
      ...getV2GlossariesGlossaryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2GlossariesGlossaryIdMutationKey() {
  return ['v2', '/v2/glossaries/:glossary_id', 'DELETE'] as const
}

export function getDeleteV2GlossariesGlossaryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2GlossariesGlossaryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$delete']>,
    ) {
      return parseResponse(client.v2.glossaries[':glossary_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2GlossariesGlossaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2GlossariesGlossaryIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2GlossariesGlossaryIdEntriesQueryKey(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/glossaries/:glossary_id/entries', keyArgs] as const
}

export function getV2GlossariesGlossaryIdEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GlossariesGlossaryIdEntriesQueryKey>
  >({
    queryKey: getV2GlossariesGlossaryIdEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.glossaries[':glossary_id'].entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2GlossariesGlossaryIdEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GlossariesGlossaryIdEntriesQueryKey>
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
      ...getV2GlossariesGlossaryIdEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2GlossariesGlossaryIdEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GlossariesGlossaryIdEntriesQueryKey>
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
      ...getV2GlossariesGlossaryIdEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2WriteRephraseMutationKey() {
  return ['v2', '/v2/write/rephrase', 'POST'] as const
}

export function getPostV2WriteRephraseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.write.rephrase.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.write.rephrase.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WriteRephraseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.write.rephrase.$post>) {
      return parseResponse(client.v2.write.rephrase.$post(args, options))
    },
  })
}

export function usePostV2WriteRephrase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.write.rephrase.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.write.rephrase.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2WriteRephraseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WriteCorrectMutationKey() {
  return ['v2', '/v2/write/correct', 'POST'] as const
}

export function getPostV2WriteCorrectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.write.correct.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.write.correct.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WriteCorrectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.write.correct.$post>) {
      return parseResponse(client.v2.write.correct.$post(args, options))
    },
  })
}

export function usePostV2WriteCorrect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.write.correct.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.write.correct.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2WriteCorrectMutationOptions<TError, TOnMutateResult>(
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

export function getV2UsageQueryKey() {
  return ['v2', '/v2/usage'] as const
}

export function getV2UsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UsageQueryKey>
  >({
    queryKey: getV2UsageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.usage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Usage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2UsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Usage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2UsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LanguagesQueryKey(args: InferRequestType<typeof client.v2.languages.$get>) {
  return ['v2', '/v2/languages', args] as const
}

export function getV2LanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.languages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LanguagesQueryKey>
  >({
    queryKey: getV2LanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.languages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.languages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LanguagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.languages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LanguagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3SpokenTermsQueryKey() {
  return ['v3', '/v3/spoken-terms'] as const
}

export function getV3SpokenTermsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SpokenTermsQueryKey>
  >({
    queryKey: getV3SpokenTermsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['spoken-terms'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3SpokenTerms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SpokenTermsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3SpokenTermsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3SpokenTerms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SpokenTermsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3SpokenTermsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV3SpokenTermsMutationKey() {
  return ['v3', '/v3/spoken-terms', 'POST'] as const
}

export function getPostV3SpokenTermsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)['spoken-terms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3SpokenTermsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)['spoken-terms']['$post']>) {
      return parseResponse(client.v3['spoken-terms'].$post(args, options))
    },
  })
}

export function usePostV3SpokenTerms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v3)['spoken-terms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3SpokenTermsMutationOptions<TError, TOnMutateResult>(
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

export function getV3SpokenTermsSpokenTermsIdQueryKey(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>,
) {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id', args] as const
}

export function getV3SpokenTermsSpokenTermsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SpokenTermsSpokenTermsIdQueryKey>
  >({
    queryKey: getV3SpokenTermsSpokenTermsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['spoken-terms'][':spoken_terms_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3SpokenTermsSpokenTermsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SpokenTermsSpokenTermsIdQueryKey>
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
      ...getV3SpokenTermsSpokenTermsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3SpokenTermsSpokenTermsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SpokenTermsSpokenTermsIdQueryKey>
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
      ...getV3SpokenTermsSpokenTermsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV3SpokenTermsSpokenTermsIdMutationKey() {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id', 'DELETE'] as const
}

export function getDeleteV3SpokenTermsSpokenTermsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3SpokenTermsSpokenTermsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>,
    ) {
      return parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$delete(args, options))
    },
  })
}

export function useDeleteV3SpokenTermsSpokenTermsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3SpokenTermsSpokenTermsIdMutationOptions<
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

export function getPatchV3SpokenTermsSpokenTermsIdMutationKey() {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id', 'PATCH'] as const
}

export function getPatchV3SpokenTermsSpokenTermsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3SpokenTermsSpokenTermsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>,
    ) {
      return parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$patch(args, options))
    },
  })
}

export function usePatchV3SpokenTermsSpokenTermsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV3SpokenTermsSpokenTermsIdMutationOptions<
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

export function getV3SpokenTermsSpokenTermsIdEntriesQueryKey(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>,
) {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id/entries', args] as const
}

export function getV3SpokenTermsSpokenTermsIdEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SpokenTermsSpokenTermsIdEntriesQueryKey>
  >({
    queryKey: getV3SpokenTermsSpokenTermsIdEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['spoken-terms'][':spoken_terms_id'].entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3SpokenTermsSpokenTermsIdEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SpokenTermsSpokenTermsIdEntriesQueryKey>
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
      ...getV3SpokenTermsSpokenTermsIdEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3SpokenTermsSpokenTermsIdEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SpokenTermsSpokenTermsIdEntriesQueryKey>
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
      ...getV3SpokenTermsSpokenTermsIdEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV3SpokenTermsSpokenTermsIdTermListsMutationKey() {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id/term-lists', 'PUT'] as const
}

export function getPutV3SpokenTermsSpokenTermsIdTermListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3SpokenTermsSpokenTermsIdTermListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']
      >,
    ) {
      return parseResponse(
        client.v3['spoken-terms'][':spoken_terms_id']['term-lists'].$put(args, options),
      )
    },
  })
}

export function usePutV3SpokenTermsSpokenTermsIdTermLists<
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
                  (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']
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
  const mutationDefaults = getPutV3SpokenTermsSpokenTermsIdTermListsMutationOptions<
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

export function getDeleteV3SpokenTermsSpokenTermsIdTermListsMutationKey() {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id/term-lists', 'DELETE'] as const
}

export function getDeleteV3SpokenTermsSpokenTermsIdTermListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3SpokenTermsSpokenTermsIdTermListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
      >,
    ) {
      return parseResponse(
        client.v3['spoken-terms'][':spoken_terms_id']['term-lists'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV3SpokenTermsSpokenTermsIdTermLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
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
  const mutationDefaults = getDeleteV3SpokenTermsSpokenTermsIdTermListsMutationOptions<
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

export function getV3LanguagesResourcesQueryKey() {
  return ['v3', '/v3/languages/resources'] as const
}

export function getV3LanguagesResourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LanguagesResourcesQueryKey>
  >({
    queryKey: getV3LanguagesResourcesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.languages.resources.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3LanguagesResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LanguagesResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3LanguagesResourcesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3LanguagesResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LanguagesResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3LanguagesResourcesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3LanguagesQueryKey(args: InferRequestType<typeof client.v3.languages.$get>) {
  return ['v3', '/v3/languages', args] as const
}

export function getV3LanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.languages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3LanguagesQueryKey>
  >({
    queryKey: getV3LanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.languages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.languages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3LanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3LanguagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.languages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3LanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3LanguagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3TranslationMemoriesQueryKey(
  args: InferRequestType<typeof client.v3.translation_memories.$get>,
) {
  return ['v3', '/v3/translation_memories', args] as const
}

export function getV3TranslationMemoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.translation_memories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TranslationMemoriesQueryKey>
  >({
    queryKey: getV3TranslationMemoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.translation_memories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3TranslationMemories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.translation_memories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3TranslationMemoriesQueryKey>
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
      ...getV3TranslationMemoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3TranslationMemories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.translation_memories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3TranslationMemoriesQueryKey>
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
      ...getV3TranslationMemoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV3TranslationMemoriesImportMutationKey() {
  return ['v3', '/v3/translation_memories/import', 'POST'] as const
}

export function getPostV3TranslationMemoriesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v3.translation_memories.import.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v3.translation_memories.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3TranslationMemoriesImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.translation_memories.import.$post>) {
      return parseResponse(client.v3.translation_memories.import.$post(args, options))
    },
  })
}

export function usePostV3TranslationMemoriesImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v3.translation_memories.import.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v3.translation_memories.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3TranslationMemoriesImportMutationOptions<
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

export function getV3TranslationMemoriesJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>,
) {
  return ['v3', '/v3/translation_memories/jobs/:job_id', args] as const
}

export function getV3TranslationMemoriesJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TranslationMemoriesJobsJobIdQueryKey>
  >({
    queryKey: getV3TranslationMemoriesJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.translation_memories.jobs[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3TranslationMemoriesJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3TranslationMemoriesJobsJobIdQueryKey>
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
      ...getV3TranslationMemoriesJobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3TranslationMemoriesJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3TranslationMemoriesJobsJobIdQueryKey>
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
      ...getV3TranslationMemoriesJobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV3TranslationMemoriesTranslationMemoryIdQueryKey(
  args: InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>,
) {
  return ['v3', '/v3/translation_memories/:translation_memory_id', args] as const
}

export function getV3TranslationMemoriesTranslationMemoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TranslationMemoriesTranslationMemoryIdQueryKey>
  >({
    queryKey: getV3TranslationMemoriesTranslationMemoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.translation_memories[':translation_memory_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3TranslationMemoriesTranslationMemoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.translation_memories)[':translation_memory_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3TranslationMemoriesTranslationMemoryIdQueryKey>
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
      ...getV3TranslationMemoriesTranslationMemoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3TranslationMemoriesTranslationMemoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.translation_memories)[':translation_memory_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3TranslationMemoriesTranslationMemoryIdQueryKey>
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
      ...getV3TranslationMemoriesTranslationMemoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV3TranslationMemoriesTranslationMemoryIdMutationKey() {
  return ['v3', '/v3/translation_memories/:translation_memory_id', 'DELETE'] as const
}

export function getDeleteV3TranslationMemoriesTranslationMemoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.translation_memories)[':translation_memory_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3TranslationMemoriesTranslationMemoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.translation_memories)[':translation_memory_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v3.translation_memories[':translation_memory_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV3TranslationMemoriesTranslationMemoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.translation_memories)[':translation_memory_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v3.translation_memories)[':translation_memory_id']['$delete']
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
  const mutationDefaults = getDeleteV3TranslationMemoriesTranslationMemoryIdMutationOptions<
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

export function getV3TranslationMemoriesTranslationMemoryIdSegmentsQueryKey(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
  >,
) {
  return ['v3', '/v3/translation_memories/:translation_memory_id/segments', args] as const
}

export function getV3TranslationMemoriesTranslationMemoryIdSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TranslationMemoriesTranslationMemoryIdSegmentsQueryKey>
  >({
    queryKey: getV3TranslationMemoriesTranslationMemoryIdSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.translation_memories[':translation_memory_id'].segments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3TranslationMemoriesTranslationMemoryIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3TranslationMemoriesTranslationMemoryIdSegmentsQueryKey>
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
      ...getV3TranslationMemoriesTranslationMemoryIdSegmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3TranslationMemoriesTranslationMemoryIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3TranslationMemoriesTranslationMemoryIdSegmentsQueryKey>
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
      ...getV3TranslationMemoriesTranslationMemoryIdSegmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV3TranslationMemoriesTranslationMemoryIdExportMutationKey() {
  return ['v3', '/v3/translation_memories/:translation_memory_id/export', 'POST'] as const
}

export function getPostV3TranslationMemoriesTranslationMemoryIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV3TranslationMemoriesTranslationMemoryIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
      >,
    ) {
      return parseResponse(
        client.v3.translation_memories[':translation_memory_id'].export.$post(args, options),
      )
    },
  })
}

export function usePostV3TranslationMemoriesTranslationMemoryIdExport<
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
                  (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
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
  const mutationDefaults = getPostV3TranslationMemoriesTranslationMemoryIdExportMutationOptions<
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

export function getV3StyleProfilesQueryKey(
  args: InferRequestType<typeof client.v3.style_profiles.$get>,
) {
  return ['v3', '/v3/style_profiles', args] as const
}

export function getV3StyleProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.style_profiles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3StyleProfilesQueryKey>
  >({
    queryKey: getV3StyleProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.style_profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3StyleProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.style_profiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3StyleProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3StyleProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.style_profiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3StyleProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV3StyleProfilesMutationKey() {
  return ['v3', '/v3/style_profiles', 'POST'] as const
}

export function getPostV3StyleProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.style_profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3StyleProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.style_profiles.$post>) {
      return parseResponse(client.v3.style_profiles.$post(args, options))
    },
  })
}

export function usePostV3StyleProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v3.style_profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3StyleProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getV3StyleProfilesStyleProfileIdQueryKey(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>,
) {
  return ['v3', '/v3/style_profiles/:style_profile_id', args] as const
}

export function getV3StyleProfilesStyleProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StyleProfilesStyleProfileIdQueryKey>
  >({
    queryKey: getV3StyleProfilesStyleProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.style_profiles[':style_profile_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3StyleProfilesStyleProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleProfilesStyleProfileIdQueryKey>
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
      ...getV3StyleProfilesStyleProfileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3StyleProfilesStyleProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleProfilesStyleProfileIdQueryKey>
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
      ...getV3StyleProfilesStyleProfileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV3StyleProfilesStyleProfileIdMutationKey() {
  return ['v3', '/v3/style_profiles/:style_profile_id', 'DELETE'] as const
}

export function getDeleteV3StyleProfilesStyleProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3StyleProfilesStyleProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>,
    ) {
      return parseResponse(client.v3.style_profiles[':style_profile_id'].$delete(args, options))
    },
  })
}

export function useDeleteV3StyleProfilesStyleProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3StyleProfilesStyleProfileIdMutationOptions<
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

export function getPatchV3StyleProfilesStyleProfileIdMutationKey() {
  return ['v3', '/v3/style_profiles/:style_profile_id', 'PATCH'] as const
}

export function getPatchV3StyleProfilesStyleProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3StyleProfilesStyleProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>,
    ) {
      return parseResponse(client.v3.style_profiles[':style_profile_id'].$patch(args, options))
    },
  })
}

export function usePatchV3StyleProfilesStyleProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV3StyleProfilesStyleProfileIdMutationOptions<
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

export function getV3StyleRulesQueryKey(args: InferRequestType<typeof client.v3.style_rules.$get>) {
  return ['v3', '/v3/style_rules', args] as const
}

export function getV3StyleRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.style_rules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3StyleRulesQueryKey>
  >({
    queryKey: getV3StyleRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.style_rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3StyleRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.style_rules.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3StyleRulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3StyleRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.style_rules.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3StyleRulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV3StyleRulesMutationKey() {
  return ['v3', '/v3/style_rules', 'POST'] as const
}

export function getPostV3StyleRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.style_rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3StyleRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.style_rules.$post>) {
      return parseResponse(client.v3.style_rules.$post(args, options))
    },
  })
}

export function usePostV3StyleRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.style_rules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3StyleRulesMutationOptions<TError, TOnMutateResult>(
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

export function getV3StyleRulesStyleIdQueryKey(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$get']>,
) {
  return ['v3', '/v3/style_rules/:style_id', args] as const
}

export function getV3StyleRulesStyleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StyleRulesStyleIdQueryKey>
  >({
    queryKey: getV3StyleRulesStyleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.style_rules[':style_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3StyleRulesStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleRulesStyleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3StyleRulesStyleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3StyleRulesStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleRulesStyleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3StyleRulesStyleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV3StyleRulesStyleIdMutationKey() {
  return ['v3', '/v3/style_rules/:style_id', 'DELETE'] as const
}

export function getDeleteV3StyleRulesStyleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.style_rules)[':style_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3StyleRulesStyleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$delete']>,
    ) {
      return parseResponse(client.v3.style_rules[':style_id'].$delete(args, options))
    },
  })
}

export function useDeleteV3StyleRulesStyleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v3.style_rules)[':style_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3StyleRulesStyleIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV3StyleRulesStyleIdMutationKey() {
  return ['v3', '/v3/style_rules/:style_id', 'PATCH'] as const
}

export function getPatchV3StyleRulesStyleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.style_rules)[':style_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3StyleRulesStyleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$patch']>,
    ) {
      return parseResponse(client.v3.style_rules[':style_id'].$patch(args, options))
    },
  })
}

export function usePatchV3StyleRulesStyleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.style_rules)[':style_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV3StyleRulesStyleIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutV3StyleRulesStyleIdConfiguredRulesMutationKey() {
  return ['v3', '/v3/style_rules/:style_id/configured_rules', 'PUT'] as const
}

export function getPutV3StyleRulesStyleIdConfiguredRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3StyleRulesStyleIdConfiguredRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']
      >,
    ) {
      return parseResponse(client.v3.style_rules[':style_id'].configured_rules.$put(args, options))
    },
  })
}

export function usePutV3StyleRulesStyleIdConfiguredRules<
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
                ReturnType<(typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV3StyleRulesStyleIdConfiguredRulesMutationOptions<
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

export function getPostV3StyleRulesStyleIdCustomInstructionsMutationKey() {
  return ['v3', '/v3/style_rules/:style_id/custom_instructions', 'POST'] as const
}

export function getPostV3StyleRulesStyleIdCustomInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3StyleRulesStyleIdCustomInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']
      >,
    ) {
      return parseResponse(
        client.v3.style_rules[':style_id'].custom_instructions.$post(args, options),
      )
    },
  })
}

export function usePostV3StyleRulesStyleIdCustomInstructions<
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
                  (typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']
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
  const mutationDefaults = getPostV3StyleRulesStyleIdCustomInstructionsMutationOptions<
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

export function getV3StyleRulesStyleIdCustomInstructionsInstructionIdQueryKey(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
  >,
) {
  return ['v3', '/v3/style_rules/:style_id/custom_instructions/:instruction_id', args] as const
}

export function getV3StyleRulesStyleIdCustomInstructionsInstructionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StyleRulesStyleIdCustomInstructionsInstructionIdQueryKey>
  >({
    queryKey: getV3StyleRulesStyleIdCustomInstructionsInstructionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3StyleRulesStyleIdCustomInstructionsInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleRulesStyleIdCustomInstructionsInstructionIdQueryKey>
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
      ...getV3StyleRulesStyleIdCustomInstructionsInstructionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3StyleRulesStyleIdCustomInstructionsInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3StyleRulesStyleIdCustomInstructionsInstructionIdQueryKey>
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
      ...getV3StyleRulesStyleIdCustomInstructionsInstructionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV3StyleRulesStyleIdCustomInstructionsInstructionIdMutationKey() {
  return ['v3', '/v3/style_rules/:style_id/custom_instructions/:instruction_id', 'PUT'] as const
}

export function getPutV3StyleRulesStyleIdCustomInstructionsInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV3StyleRulesStyleIdCustomInstructionsInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV3StyleRulesStyleIdCustomInstructionsInstructionId<
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
                  (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
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
  const mutationDefaults = getPutV3StyleRulesStyleIdCustomInstructionsInstructionIdMutationOptions<
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

export function getDeleteV3StyleRulesStyleIdCustomInstructionsInstructionIdMutationKey() {
  return ['v3', '/v3/style_rules/:style_id/custom_instructions/:instruction_id', 'DELETE'] as const
}

export function getDeleteV3StyleRulesStyleIdCustomInstructionsInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3StyleRulesStyleIdCustomInstructionsInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV3StyleRulesStyleIdCustomInstructionsInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
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
    getDeleteV3StyleRulesStyleIdCustomInstructionsInstructionIdMutationOptions<
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

export function getV3VoiceRealtimeQueryKey(
  args: InferRequestType<typeof client.v3.voice.realtime.$get>,
) {
  return ['v3', '/v3/voice/realtime', args] as const
}

export function getV3VoiceRealtimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.voice.realtime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3VoiceRealtimeQueryKey>
  >({
    queryKey: getV3VoiceRealtimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.voice.realtime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3VoiceRealtime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.voice.realtime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3VoiceRealtimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3VoiceRealtimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3VoiceRealtime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.voice.realtime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3VoiceRealtimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3VoiceRealtimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV3VoiceRealtimeMutationKey() {
  return ['v3', '/v3/voice/realtime', 'POST'] as const
}

export function getPostV3VoiceRealtimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.voice.realtime.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3VoiceRealtimeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.voice.realtime.$post>) {
      return parseResponse(client.v3.voice.realtime.$post(args, options))
    },
  })
}

export function usePostV3VoiceRealtime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v3.voice.realtime.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3VoiceRealtimeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1JobsVoiceTranslateMutationKey() {
  return ['v1', '/v1/jobs/voice/translate', 'POST'] as const
}

export function getPostV1JobsVoiceTranslateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.voice.translate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.voice.translate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsVoiceTranslateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.voice.translate.$post>) {
      return parseResponse(client.v1.jobs.voice.translate.$post(args, options))
    },
  })
}

export function usePostV1JobsVoiceTranslate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.voice.translate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.voice.translate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsVoiceTranslateMutationOptions<TError, TOnMutateResult>(
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

export function getV1JobsVoiceTranslateJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>,
) {
  return ['v1', '/v1/jobs/voice/translate/:job_id', args] as const
}

export function getV1JobsVoiceTranslateJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobsVoiceTranslateJobIdQueryKey>
  >({
    queryKey: getV1JobsVoiceTranslateJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jobs.voice.translate[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1JobsVoiceTranslateJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsVoiceTranslateJobIdQueryKey>
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
      ...getV1JobsVoiceTranslateJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1JobsVoiceTranslateJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsVoiceTranslateJobIdQueryKey>
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
      ...getV1JobsVoiceTranslateJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1QualityEvaluationsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>,
) {
  return ['v1', '/v1/quality-evaluations/:job_id', args] as const
}

export function getV1QualityEvaluationsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1QualityEvaluationsJobIdQueryKey>
  >({
    queryKey: getV1QualityEvaluationsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['quality-evaluations'][':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1QualityEvaluationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1QualityEvaluationsJobIdQueryKey>
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
      ...getV1QualityEvaluationsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1QualityEvaluationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1QualityEvaluationsJobIdQueryKey>
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
      ...getV1QualityEvaluationsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
