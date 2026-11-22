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

export function createSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suggestions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuggestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createSuggestionsConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suggestions.configuration.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSuggestionsConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSuggestionsConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSuggestionsConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSuggestionsConfigurationAutoapprovalToggle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSuggestionsConfigurationAutoapprovalToggleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSuggestionsConfigurationAutoapprovalToggle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSuggestionsConfigurationAutoapprovalToggleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutSuggestionsConfigurationAutoapprovalToggleSellerSellerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutSuggestionsConfigurationAutoapprovalToggleSellerSellerIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSuggestionsConfigurationSellerSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.suggestions.configuration.seller)[':sellerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSuggestionsConfigurationSellerSellerIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSuggestionsConfigurationSellerSellerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSuggestionsConfigurationSellerSellerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutSuggestionsMatchesActionActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSuggestionsMatchesActionActionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSuggestionsSellerIdSellerSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSuggestionsSellerIdSellerSkuIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSuggestionsSellerIdSellerSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSuggestionsSellerIdSellerSkuIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSuggestionsSellerIdSellerSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuggestionsSellerIdSellerSkuIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSuggestionsSellerIdSellerskuidVersions<
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
  args: () => InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSuggestionsSellerIdSellerskuidVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createSuggestionsSellerIdSellerskuidVersionsVersion<
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
  args: () => InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSuggestionsSellerIdSellerskuidVersionsVersionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
