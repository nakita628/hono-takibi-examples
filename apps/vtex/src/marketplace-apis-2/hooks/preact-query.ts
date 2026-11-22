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

export function getSuggestionsKey() {
  return ['suggestions'] as const
}

export function getSuggestionsQueryKey(args: InferRequestType<typeof client.suggestions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions', keyArgs] as const
}

export function getSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.suggestions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuggestionsQueryKey>
  >({
    queryKey: getSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggestions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suggestions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSuggestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suggestions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSuggestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSuggestionsConfigurationQueryKey(
  args: InferRequestType<typeof client.suggestions.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/configuration', keyArgs] as const
}

export function getSuggestionsConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suggestions.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestionsConfigurationQueryKey>
  >({
    queryKey: getSuggestionsConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggestions.configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSuggestionsConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suggestions.configuration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsConfigurationQueryKey>
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
      ...getSuggestionsConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSuggestionsConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suggestions.configuration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsConfigurationQueryKey>
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
      ...getSuggestionsConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSuggestionsConfigurationMutationKey() {
  return ['suggestions', '/suggestions/configuration', 'PUT'] as const
}

export function getPutSuggestionsConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.suggestions.configuration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSuggestionsConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suggestions.configuration.$put>) {
      return parseResponse(client.suggestions.configuration.$put(args, options))
    },
  })
}

export function usePutSuggestionsConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.suggestions.configuration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSuggestionsConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getSuggestionsConfigurationAutoapprovalToggleQueryKey(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/configuration/autoapproval/toggle', keyArgs] as const
}

export function getSuggestionsConfigurationAutoapprovalToggleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestionsConfigurationAutoapprovalToggleQueryKey>
  >({
    queryKey: getSuggestionsConfigurationAutoapprovalToggleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggestions.configuration.autoapproval.toggle.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSuggestionsConfigurationAutoapprovalToggle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsConfigurationAutoapprovalToggleQueryKey>
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
      ...getSuggestionsConfigurationAutoapprovalToggleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSuggestionsConfigurationAutoapprovalToggle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsConfigurationAutoapprovalToggleQueryKey>
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
      ...getSuggestionsConfigurationAutoapprovalToggleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSuggestionsConfigurationAutoapprovalToggleMutationKey() {
  return ['suggestions', '/suggestions/configuration/autoapproval/toggle', 'PUT'] as const
}

export function getPutSuggestionsConfigurationAutoapprovalToggleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSuggestionsConfigurationAutoapprovalToggleMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$put>,
    ) {
      return parseResponse(client.suggestions.configuration.autoapproval.toggle.$put(args, options))
    },
  })
}

export function usePutSuggestionsConfigurationAutoapprovalToggle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSuggestionsConfigurationAutoapprovalToggleMutationOptions<
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

export function getPutSuggestionsConfigurationAutoapprovalToggleSellerSellerIdMutationKey() {
  return [
    'suggestions',
    '/suggestions/configuration/autoapproval/toggle/seller/:sellerId',
    'PUT',
  ] as const
}

export function getPutSuggestionsConfigurationAutoapprovalToggleSellerSellerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSuggestionsConfigurationAutoapprovalToggleSellerSellerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
      >,
    ) {
      return parseResponse(
        client.suggestions.configuration.autoapproval.toggle.seller[':sellerId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSuggestionsConfigurationAutoapprovalToggleSellerSellerId<
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
                  (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
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
    getPutSuggestionsConfigurationAutoapprovalToggleSellerSellerIdMutationOptions<
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

export function getSuggestionsConfigurationSellerSellerIdQueryKey(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/configuration/seller/:sellerId', keyArgs] as const
}

export function getSuggestionsConfigurationSellerSellerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestionsConfigurationSellerSellerIdQueryKey>
  >({
    queryKey: getSuggestionsConfigurationSellerSellerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggestions.configuration.seller[':sellerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSuggestionsConfigurationSellerSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsConfigurationSellerSellerIdQueryKey>
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
      ...getSuggestionsConfigurationSellerSellerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSuggestionsConfigurationSellerSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsConfigurationSellerSellerIdQueryKey>
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
      ...getSuggestionsConfigurationSellerSellerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSuggestionsConfigurationSellerSellerIdMutationKey() {
  return ['suggestions', '/suggestions/configuration/seller/:sellerId', 'PUT'] as const
}

export function getPutSuggestionsConfigurationSellerSellerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSuggestionsConfigurationSellerSellerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$put']>,
    ) {
      return parseResponse(client.suggestions.configuration.seller[':sellerId'].$put(args, options))
    },
  })
}

export function usePutSuggestionsConfigurationSellerSellerId<
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
                ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSuggestionsConfigurationSellerSellerIdMutationOptions<
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

export function getPutSuggestionsMatchesActionActionNameMutationKey() {
  return ['suggestions', '/suggestions/matches/action/:actionName', 'PUT'] as const
}

export function getPutSuggestionsMatchesActionActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions.matches.action)[':actionName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.suggestions.matches.action)[':actionName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSuggestionsMatchesActionActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suggestions.matches.action)[':actionName']['$put']>,
    ) {
      return parseResponse(client.suggestions.matches.action[':actionName'].$put(args, options))
    },
  })
}

export function usePutSuggestionsMatchesActionActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.suggestions.matches.action)[':actionName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.suggestions.matches.action)[':actionName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSuggestionsMatchesActionActionNameMutationOptions<
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

export function getSuggestionsSellerIdSellerSkuIdQueryKey(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/:sellerId/:sellerSkuId', keyArgs] as const
}

export function getSuggestionsSellerIdSellerSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestionsSellerIdSellerSkuIdQueryKey>
  >({
    queryKey: getSuggestionsSellerIdSellerSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggestions[':sellerId'][':sellerSkuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSuggestionsSellerIdSellerSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsSellerIdSellerSkuIdQueryKey>
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
      ...getSuggestionsSellerIdSellerSkuIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSuggestionsSellerIdSellerSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsSellerIdSellerSkuIdQueryKey>
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
      ...getSuggestionsSellerIdSellerSkuIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSuggestionsSellerIdSellerSkuIdMutationKey() {
  return ['suggestions', '/suggestions/:sellerId/:sellerSkuId', 'PUT'] as const
}

export function getPutSuggestionsSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSuggestionsSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>,
    ) {
      return parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$put(args, options))
    },
  })
}

export function usePutSuggestionsSellerIdSellerSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSuggestionsSellerIdSellerSkuIdMutationOptions<
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

export function getDeleteSuggestionsSellerIdSellerSkuIdMutationKey() {
  return ['suggestions', '/suggestions/:sellerId/:sellerSkuId', 'DELETE'] as const
}

export function getDeleteSuggestionsSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuggestionsSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>,
    ) {
      return parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$delete(args, options))
    },
  })
}

export function useDeleteSuggestionsSellerIdSellerSkuId<
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
                ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSuggestionsSellerIdSellerSkuIdMutationOptions<
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

export function getSuggestionsSellerIdSellerskuidVersionsQueryKey(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/:sellerId/:sellerskuid/versions', keyArgs] as const
}

export function getSuggestionsSellerIdSellerskuidVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestionsSellerIdSellerskuidVersionsQueryKey>
  >({
    queryKey: getSuggestionsSellerIdSellerskuidVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggestions[':sellerId'][':sellerskuid'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSuggestionsSellerIdSellerskuidVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsSellerIdSellerskuidVersionsQueryKey>
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
      ...getSuggestionsSellerIdSellerskuidVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSuggestionsSellerIdSellerskuidVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsSellerIdSellerskuidVersionsQueryKey>
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
      ...getSuggestionsSellerIdSellerskuidVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSuggestionsSellerIdSellerskuidVersionsVersionQueryKey(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/:sellerId/:sellerskuid/versions/:version', keyArgs] as const
}

export function getSuggestionsSellerIdSellerskuidVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestionsSellerIdSellerskuidVersionsVersionQueryKey>
  >({
    queryKey: getSuggestionsSellerIdSellerskuidVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggestions[':sellerId'][':sellerskuid'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSuggestionsSellerIdSellerskuidVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsSellerIdSellerskuidVersionsVersionQueryKey>
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
      ...getSuggestionsSellerIdSellerskuidVersionsVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSuggestionsSellerIdSellerskuidVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestionsSellerIdSellerskuidVersionsVersionQueryKey>
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
      ...getSuggestionsSellerIdSellerskuidVersionsVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidMutationKey() {
  return [
    'suggestions',
    '/suggestions/:sellerId/:sellerskuid/versions/:version/matches/:matchid',
    'PUT',
  ] as const
}

export function getPutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
      >,
    ) {
      return parseResponse(
        client.suggestions[':sellerId'][':sellerskuid'].versions[':version'].matches[
          ':matchid'
        ].$put(args, options),
      )
    },
  })
}

export function usePutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchid<
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
                  (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
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
    getPutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidMutationOptions<
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
