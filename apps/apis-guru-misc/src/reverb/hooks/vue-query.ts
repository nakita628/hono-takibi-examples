import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getArticlesKey() {
  return ['articles'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getComparisonShoppingPagesKey() {
  return ['comparison_shopping_pages'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getCountriesKey() {
  return ['countries'] as const
}

export function getCspsKey() {
  return ['csps'] as const
}

export function getCuratedSetsKey() {
  return ['curated_sets'] as const
}

export function getCurrenciesKey() {
  return ['currencies'] as const
}

export function getFeedbackKey() {
  return ['feedback'] as const
}

export function getHandpickedKey() {
  return ['handpicked'] as const
}

export function getListingConditionsKey() {
  return ['listing_conditions'] as const
}

export function getListingsKey() {
  return ['listings'] as const
}

export function getMyKey() {
  return ['my'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getPaymentMethodsKey() {
  return ['payment_methods'] as const
}

export function getPriceguideKey() {
  return ['priceguide'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getSalesKey() {
  return ['sales'] as const
}

export function getShippingKey() {
  return ['shipping'] as const
}

export function getShopKey() {
  return ['shop'] as const
}

export function getShopsKey() {
  return ['shops'] as const
}

export function getWantsKey() {
  return ['wants'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
) {
  return ['articles', '/articles', toValue(args)] as const
}

export function getArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
          >,
          ReturnType<typeof getArticlesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesCategoriesQueryKey() {
  return ['articles', '/articles/categories'] as const
}

export function getArticlesCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getArticlesCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>
            >
          >,
          ReturnType<typeof getArticlesCategoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getArticlesCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.articles.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesQueryKey() {
  return ['categories', '/categories'] as const
}

export function getCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesFlatQueryKey() {
  return ['categories', '/categories/flat'] as const
}

export function getCategoriesFlatQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCategoriesFlatQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.flat.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategoriesFlat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>
            >
          >,
          ReturnType<typeof getCategoriesFlatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesFlatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCategoriesFlatQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.flat.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesTaxonomyQueryKey() {
  return ['categories', '/categories/taxonomy'] as const
}

export function getCategoriesTaxonomyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCategoriesTaxonomyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.taxonomy.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesTaxonomy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>
            >
          >,
          ReturnType<typeof getCategoriesTaxonomyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesTaxonomyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCategoriesTaxonomyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.taxonomy.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesProductTypeCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>
  >,
) {
  return ['categories', '/categories/:product_type/:category', toValue(args)] as const
}

export function getCategoriesProductTypeCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesProductTypeCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':product_type'][':category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesProductTypeCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCategoriesProductTypeCategoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesProductTypeCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesProductTypeCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':product_type'][':category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':uuid']['$get']>>,
) {
  return ['categories', '/categories/:uuid', toValue(args)] as const
}

export function getCategoriesUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
            >
          >,
          ReturnType<typeof getCategoriesUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComparisonShoppingPagesQueryKey() {
  return ['comparison_shopping_pages', '/comparison_shopping_pages'] as const
}

export function getComparisonShoppingPagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getComparisonShoppingPagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comparison_shopping_pages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComparisonShoppingPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>
              >
            >
          >,
          ReturnType<typeof getComparisonShoppingPagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComparisonShoppingPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getComparisonShoppingPagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.comparison_shopping_pages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComparisonShoppingPagesFindQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comparison_shopping_pages.find.$get>>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/find', toValue(args)] as const
}

export function getComparisonShoppingPagesFindQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comparison_shopping_pages.find.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComparisonShoppingPagesFindQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comparison_shopping_pages.find.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComparisonShoppingPagesFind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comparison_shopping_pages.find.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>
              >
            >
          >,
          ReturnType<typeof getComparisonShoppingPagesFindQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComparisonShoppingPagesFindQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComparisonShoppingPagesFindQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comparison_shopping_pages.find.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComparisonShoppingPagesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>
  >,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/:id', toValue(args)] as const
}

export function getComparisonShoppingPagesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComparisonShoppingPagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comparison_shopping_pages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComparisonShoppingPagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getComparisonShoppingPagesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComparisonShoppingPagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComparisonShoppingPagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comparison_shopping_pages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComparisonShoppingPagesIdListingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
  >,
) {
  return [
    'comparison_shopping_pages',
    '/comparison_shopping_pages/:id/listings',
    toValue(args),
  ] as const
}

export function getComparisonShoppingPagesIdListingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComparisonShoppingPagesIdListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comparison_shopping_pages[':id'].listings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComparisonShoppingPagesIdListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getComparisonShoppingPagesIdListingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComparisonShoppingPagesIdListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComparisonShoppingPagesIdListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comparison_shopping_pages[':id'].listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComparisonShoppingPagesIdReviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>
  >,
) {
  return [
    'comparison_shopping_pages',
    '/comparison_shopping_pages/:id/reviews',
    toValue(args),
  ] as const
}

export function getComparisonShoppingPagesIdReviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComparisonShoppingPagesIdReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comparison_shopping_pages[':id'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComparisonShoppingPagesIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getComparisonShoppingPagesIdReviewsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComparisonShoppingPagesIdReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComparisonShoppingPagesIdReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comparison_shopping_pages[':id'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdOfferMutationKey() {
  return ['conversations', '/conversations/:conversation_id/offer', 'POST'] as const
}

export function getPostConversationsConversationIdOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['offer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['offer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdOfferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['offer']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].offer.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdOffer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversations)[':conversation_id']['offer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['offer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsConversationIdOfferMutationOptions<
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

export function getPostConversationsIdOfferMutationKey() {
  return ['conversations', '/conversations/:id/offer', 'POST'] as const
}

export function getPostConversationsIdOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':id']['offer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':id']['offer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsIdOfferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':id']['offer']['$post']>,
    ) {
      return parseResponse(client.conversations[':id'].offer.$post(args, options))
    },
  })
}

export function usePostConversationsIdOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':id']['offer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':id']['offer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsIdOfferMutationOptions<TError, TOnMutateResult>(
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

export function getCountriesQueryKey() {
  return ['countries', '/countries'] as const
}

export function getCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
          >,
          ReturnType<typeof getCountriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCspsQueryKey() {
  return ['csps', '/csps'] as const
}

export function getCspsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCspsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.csps.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCsps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
          ReturnType<typeof getCspsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCspsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCspsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.csps.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCspsCategoriesQueryKey() {
  return ['csps', '/csps/categories'] as const
}

export function getCspsCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCspsCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.csps.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCspsCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>
            >
          >,
          ReturnType<typeof getCspsCategoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCspsCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCspsCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.csps.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCspsFindQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.csps.find.$get>>,
) {
  return ['csps', '/csps/find', toValue(args)] as const
}

export function getCspsFindQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.csps.find.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCspsFindQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.csps.find.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCspsFind<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.csps.find.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>
          >,
          ReturnType<typeof getCspsFindQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCspsFindQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCspsFindQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.csps.find.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCspsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.csps)[':id']['$get']>>,
) {
  return ['csps', '/csps/:id', toValue(args)] as const
}

export function getCspsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.csps)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCspsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.csps[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCspsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.csps)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCspsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCspsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCspsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.csps[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCuratedSetsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.curated_sets)[':slug']['$get']>>,
) {
  return ['curated_sets', '/curated_sets/:slug', toValue(args)] as const
}

export function getCuratedSetsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.curated_sets)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCuratedSetsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.curated_sets[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCuratedSetsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.curated_sets)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCuratedSetsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCuratedSetsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCuratedSetsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.curated_sets[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCurrenciesDisplayQueryKey() {
  return ['currencies', '/currencies/display'] as const
}

export function getCurrenciesDisplayQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCurrenciesDisplayQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.currencies.display.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCurrenciesDisplay<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>
            >
          >,
          ReturnType<typeof getCurrenciesDisplayQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCurrenciesDisplayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCurrenciesDisplayQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.currencies.display.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCurrenciesListingQueryKey() {
  return ['currencies', '/currencies/listing'] as const
}

export function getCurrenciesListingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCurrenciesListingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.currencies.listing.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCurrenciesListing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>
            >
          >,
          ReturnType<typeof getCurrenciesListingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCurrenciesListingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCurrenciesListingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.currencies.listing.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedbackFeedbackIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>>,
) {
  return ['feedback', '/feedback/:feedback_id', toValue(args)] as const
}

export function getFeedbackFeedbackIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedbackFeedbackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feedback[':feedback_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedbackFeedbackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeedbackFeedbackIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedbackFeedbackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedbackFeedbackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feedback[':feedback_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHandpickedSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.handpicked)[':slug']['$get']>>,
) {
  return ['handpicked', '/handpicked/:slug', toValue(args)] as const
}

export function getHandpickedSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.handpicked)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHandpickedSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.handpicked[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHandpickedSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.handpicked)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
            >
          >,
          ReturnType<typeof getHandpickedSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHandpickedSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHandpickedSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.handpicked[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingConditionsQueryKey() {
  return ['listing_conditions', '/listing_conditions'] as const
}

export function getListingConditionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getListingConditionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing_conditions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingConditions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>
            >
          >,
          ReturnType<typeof getListingConditionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingConditionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getListingConditionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.listing_conditions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.$get>>,
) {
  return ['listings', '/listings', toValue(args)] as const
}

export function getListingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
          >,
          ReturnType<typeof getListingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListingsMutationKey() {
  return ['listings', '/listings', 'POST'] as const
}

export function getPostListingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$post>>>>>,
    TError,
    InferRequestType<typeof client.listings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listings.$post>) {
      return parseResponse(client.listings.$post(args, options))
    },
  })
}

export function usePostListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.listings.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListingsAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.all.$get>>,
) {
  return ['listings', '/listings/all', toValue(args)] as const
}

export function getListingsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings.all.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListingsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
          >,
          ReturnType<typeof getListingsAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListingsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsFacetsSellerLocationQueryKey() {
  return ['listings', '/listings/facets/seller_location'] as const
}

export function getListingsFacetsSellerLocationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getListingsFacetsSellerLocationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings.facets.seller_location.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsFacetsSellerLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>
              >
            >
          >,
          ReturnType<typeof getListingsFacetsSellerLocationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsFacetsSellerLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getListingsFacetsSellerLocationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.listings.facets.seller_location.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsIdNegotiationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>>,
) {
  return ['listings', '/listings/:id/negotiation', toValue(args)] as const
}

export function getListingsIdNegotiationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsIdNegotiationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings[':id'].negotiation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsIdNegotiation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingsIdNegotiationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsIdNegotiationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsIdNegotiationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings[':id'].negotiation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListingsIdOfferMutationKey() {
  return ['listings', '/listings/:id/offer', 'POST'] as const
}

export function getPostListingsIdOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':id']['offer']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.listings)[':id']['offer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListingsIdOfferMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.listings)[':id']['offer']['$post']>) {
      return parseResponse(client.listings[':id'].offer.$post(args, options))
    },
  })
}

export function usePostListingsIdOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':id']['offer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.listings)[':id']['offer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListingsIdOfferMutationOptions<TError, TOnMutateResult>(
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

export function getListingsListingIdBumpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>>,
) {
  return ['listings', '/listings/:listing_id/bump', toValue(args)] as const
}

export function getListingsListingIdBumpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsListingIdBumpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings[':listing_id'].bump.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsListingIdBump<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingsListingIdBumpQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsListingIdBumpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsListingIdBumpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings[':listing_id'].bump.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListingsListingIdBumpBudgetTypeMutationKey() {
  return ['listings', '/listings/:listing_id/bump/:budget_type', 'POST'] as const
}

export function getPostListingsListingIdBumpBudgetTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.listings)[':listing_id']['bump'][':budget_type']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.listings)[':listing_id']['bump'][':budget_type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListingsListingIdBumpBudgetTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.listings)[':listing_id']['bump'][':budget_type']['$post']
      >,
    ) {
      return parseResponse(client.listings[':listing_id'].bump[':budget_type'].$post(args, options))
    },
  })
}

export function usePostListingsListingIdBumpBudgetType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.listings)[':listing_id']['bump'][':budget_type']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.listings)[':listing_id']['bump'][':budget_type']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListingsListingIdBumpBudgetTypeMutationOptions<
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

export function getPostListingsListingIdConversationsMutationKey() {
  return ['listings', '/listings/:listing_id/conversations', 'POST'] as const
}

export function getPostListingsListingIdConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':listing_id']['conversations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.listings)[':listing_id']['conversations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListingsListingIdConversationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.listings)[':listing_id']['conversations']['$post']>,
    ) {
      return parseResponse(client.listings[':listing_id'].conversations.$post(args, options))
    },
  })
}

export function usePostListingsListingIdConversations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.listings)[':listing_id']['conversations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.listings)[':listing_id']['conversations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListingsListingIdConversationsMutationOptions<
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

export function getListingsListingIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>
  >,
) {
  return ['listings', '/listings/:listing_id/images', toValue(args)] as const
}

export function getListingsListingIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsListingIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings[':listing_id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsListingIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingsListingIdImagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsListingIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsListingIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings[':listing_id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteListingsListingIdImagesImageIdMutationKey() {
  return ['listings', '/listings/:listing_id/images/:image_id', 'DELETE'] as const
}

export function getDeleteListingsListingIdImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.listings)[':listing_id']['images'][':image_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.listings)[':listing_id']['images'][':image_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteListingsListingIdImagesImageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.listings)[':listing_id']['images'][':image_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.listings[':listing_id'].images[':image_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteListingsListingIdImagesImageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.listings)[':listing_id']['images'][':image_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.listings)[':listing_id']['images'][':image_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteListingsListingIdImagesImageIdMutationOptions<
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

export function getListingsListingIdSalesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>
  >,
) {
  return ['listings', '/listings/:listing_id/sales', toValue(args)] as const
}

export function getListingsListingIdSalesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsListingIdSalesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings[':listing_id'].sales.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsListingIdSales<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingsListingIdSalesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsListingIdSalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsListingIdSalesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings[':listing_id'].sales.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['$get']>>,
) {
  return ['listings', '/listings/:slug', toValue(args)] as const
}

export function getListingsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
            >
          >,
          ReturnType<typeof getListingsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutListingsSlugMutationKey() {
  return ['listings', '/listings/:slug', 'PUT'] as const
}

export function getPutListingsSlugMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.listings)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListingsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.listings)[':slug']['$put']>) {
      return parseResponse(client.listings[':slug'].$put(args, options))
    },
  })
}

export function usePutListingsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.listings)[':slug']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListingsSlugMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteListingsSlugMutationKey() {
  return ['listings', '/listings/:slug', 'DELETE'] as const
}

export function getDeleteListingsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.listings)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteListingsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.listings)[':slug']['$delete']>) {
      return parseResponse(client.listings[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteListingsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.listings)[':slug']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteListingsSlugMutationOptions<TError, TOnMutateResult>(
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

export function getListingsSlugEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>>,
) {
  return ['listings', '/listings/:slug/edit', toValue(args)] as const
}

export function getListingsSlugEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsSlugEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings[':slug'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsSlugEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingsSlugEditQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsSlugEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsSlugEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings[':slug'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListingsSlugFlagMutationKey() {
  return ['listings', '/listings/:slug/flag', 'POST'] as const
}

export function getPostListingsSlugFlagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':slug']['flag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.listings)[':slug']['flag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListingsSlugFlagMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.listings)[':slug']['flag']['$post']>) {
      return parseResponse(client.listings[':slug'].flag.$post(args, options))
    },
  })
}

export function usePostListingsSlugFlag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['flag']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.listings)[':slug']['flag']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListingsSlugFlagMutationOptions<TError, TOnMutateResult>(
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

export function getListingsSlugReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>>,
) {
  return ['listings', '/listings/:slug/reviews', toValue(args)] as const
}

export function getListingsSlugReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsSlugReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings[':slug'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsSlugReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingsSlugReviewsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsSlugReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsSlugReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings[':slug'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListingsSlugReviewsMutationKey() {
  return ['listings', '/listings/:slug/reviews', 'POST'] as const
}

export function getPostListingsSlugReviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.listings)[':slug']['reviews']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListingsSlugReviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.listings)[':slug']['reviews']['$post']>,
    ) {
      return parseResponse(client.listings[':slug'].reviews.$post(args, options))
    },
  })
}

export function usePostListingsSlugReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.listings)[':slug']['reviews']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListingsSlugReviewsMutationOptions<TError, TOnMutateResult>(
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

export function getListingsSlugSimilarListingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>
  >,
) {
  return ['listings', '/listings/:slug/similar_listings', toValue(args)] as const
}

export function getListingsSlugSimilarListingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsSlugSimilarListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings[':slug'].similar_listings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsSlugSimilarListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingsSlugSimilarListingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsSlugSimilarListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsSlugSimilarListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings[':slug'].similar_listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyAccountQueryKey() {
  return ['my', '/my/account'] as const
}

export function getMyAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>
          >,
          ReturnType<typeof getMyAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMyAccountMutationKey() {
  return ['my', '/my/account', 'PUT'] as const
}

export function getPutMyAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$put>>>>>,
    TError,
    InferRequestType<typeof client.my.account.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMyAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.my.account.$put>) {
      return parseResponse(client.my.account.$put(args, options))
    },
  })
}

export function usePutMyAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.my.account.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMyAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMyAddressesQueryKey() {
  return ['my', '/my/addresses'] as const
}

export function getMyAddressesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyAddressesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.addresses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>
          >,
          ReturnType<typeof getMyAddressesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyAddressesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.addresses.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyAddressesMutationKey() {
  return ['my', '/my/addresses', 'POST'] as const
}

export function getPostMyAddressesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMyAddressesMutationKey(),
    async mutationFn() {
      return parseResponse(client.my.addresses.$post(undefined, options))
    },
  })
}

export function usePostMyAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyAddressesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutMyAddressesAddressIdMutationKey() {
  return ['my', '/my/addresses/:address_id', 'PUT'] as const
}

export function getPutMyAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.addresses)[':address_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.addresses)[':address_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMyAddressesAddressIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.my.addresses)[':address_id']['$put']>) {
      return parseResponse(client.my.addresses[':address_id'].$put(args, options))
    },
  })
}

export function usePutMyAddressesAddressId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.addresses)[':address_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.addresses)[':address_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMyAddressesAddressIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMyAddressesAddressIdMutationKey() {
  return ['my', '/my/addresses/:address_id', 'DELETE'] as const
}

export function getDeleteMyAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.addresses)[':address_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.addresses)[':address_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.addresses)[':address_id']['$delete']>,
    ) {
      return parseResponse(client.my.addresses[':address_id'].$delete(args, options))
    },
  })
}

export function useDeleteMyAddressesAddressId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.addresses)[':address_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.addresses)[':address_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyAddressesAddressIdMutationOptions<TError, TOnMutateResult>(
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

export function getMyConversationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.conversations.$get>>,
) {
  return ['my', '/my/conversations', toValue(args)] as const
}

export function getMyConversationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.conversations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.conversations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>
            >
          >,
          ReturnType<typeof getMyConversationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyConversationsMutationKey() {
  return ['my', '/my/conversations', 'POST'] as const
}

export function getPostMyConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.my.conversations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMyConversationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.my.conversations.$post>) {
      return parseResponse(client.my.conversations.$post(args, options))
    },
  })
}

export function usePostMyConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.my.conversations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyConversationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostMyConversationsConversationIdMessagesMutationKey() {
  return ['my', '/my/conversations/:conversation_id/messages', 'POST'] as const
}

export function getPostMyConversationsConversationIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.my.conversations)[':conversation_id']['messages']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.conversations)[':conversation_id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyConversationsConversationIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.my.conversations)[':conversation_id']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client.my.conversations[':conversation_id'].messages.$post(args, options),
      )
    },
  })
}

export function usePostMyConversationsConversationIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.my.conversations)[':conversation_id']['messages']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.my.conversations)[':conversation_id']['messages']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyConversationsConversationIdMessagesMutationOptions<
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

export function getMyConversationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.conversations)[':id']['$get']>>,
) {
  return ['my', '/my/conversations/:id', toValue(args)] as const
}

export function getMyConversationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.conversations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyConversationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.conversations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyConversationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.conversations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyConversationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyConversationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyConversationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.conversations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMyConversationsIdMutationKey() {
  return ['my', '/my/conversations/:id', 'PUT'] as const
}

export function getPutMyConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.my.conversations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMyConversationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.my.conversations)[':id']['$put']>) {
      return parseResponse(client.my.conversations[':id'].$put(args, options))
    },
  })
}

export function usePutMyConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.conversations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.conversations)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMyConversationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getMyCountsQueryKey() {
  return ['my', '/my/counts'] as const
}

export function getMyCountsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyCountsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.counts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyCounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>
          >,
          ReturnType<typeof getMyCountsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyCountsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.counts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyCuratedSetProductProductIdMutationKey() {
  return ['my', '/my/curated_set/product/:product_id', 'POST'] as const
}

export function getPostMyCuratedSetProductProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.curated_set.product)[':product_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyCuratedSetProductProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$post']>,
    ) {
      return parseResponse(client.my.curated_set.product[':product_id'].$post(args, options))
    },
  })
}

export function usePostMyCuratedSetProductProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.curated_set.product)[':product_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyCuratedSetProductProductIdMutationOptions<
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

export function getDeleteMyCuratedSetProductProductIdMutationKey() {
  return ['my', '/my/curated_set/product/:product_id', 'DELETE'] as const
}

export function getDeleteMyCuratedSetProductProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.curated_set.product)[':product_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyCuratedSetProductProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$delete']>,
    ) {
      return parseResponse(client.my.curated_set.product[':product_id'].$delete(args, options))
    },
  })
}

export function useDeleteMyCuratedSetProductProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.my.curated_set.product)[':product_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyCuratedSetProductProductIdMutationOptions<
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

export function getMyFeedQueryKey() {
  return ['my', '/my/feed'] as const
}

export function getMyFeedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyFeedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.feed.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>
          >,
          ReturnType<typeof getMyFeedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyFeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyFeedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.feed.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyFeedCustomizeQueryKey() {
  return ['my', '/my/feed/customize'] as const
}

export function getMyFeedCustomizeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyFeedCustomizeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.feed.customize.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFeedCustomize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>
            >
          >,
          ReturnType<typeof getMyFeedCustomizeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFeedCustomizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyFeedCustomizeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.feed.customize.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyFeedGridQueryKey() {
  return ['my', '/my/feed/grid'] as const
}

export function getMyFeedGridQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyFeedGridQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.feed.grid.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyFeedGrid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>
          >,
          ReturnType<typeof getMyFeedGridQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyFeedGridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyFeedGridQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.feed.grid.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyFeedbackReceivedQueryKey() {
  return ['my', '/my/feedback/received'] as const
}

export function getMyFeedbackReceivedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyFeedbackReceivedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.feedback.received.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFeedbackReceived<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>
            >
          >,
          ReturnType<typeof getMyFeedbackReceivedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFeedbackReceivedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyFeedbackReceivedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.feedback.received.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyFeedbackSentQueryKey() {
  return ['my', '/my/feedback/sent'] as const
}

export function getMyFeedbackSentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyFeedbackSentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.feedback.sent.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyFeedbackSent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>
            >
          >,
          ReturnType<typeof getMyFeedbackSentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFeedbackSentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyFeedbackSentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.feedback.sent.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyFollowsQueryKey() {
  return ['my', '/my/follows'] as const
}

export function getMyFollowsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyFollowsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyFollows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>
          >,
          ReturnType<typeof getMyFollowsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyFollowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyFollowsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyFollowsArticlesQueryKey() {
  return ['my', '/my/follows/articles'] as const
}

export function getMyFollowsArticlesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyFollowsArticlesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.articles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFollowsArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>
            >
          >,
          ReturnType<typeof getMyFollowsArticlesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyFollowsArticlesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.articles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyFollowsArticlesMutationKey() {
  return ['my', '/my/follows/articles', 'POST'] as const
}

export function getPostMyFollowsArticlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.my.follows.articles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsArticlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.my.follows.articles.$post>) {
      return parseResponse(client.my.follows.articles.$post(args, options))
    },
  })
}

export function usePostMyFollowsArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.my.follows.articles.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsArticlesMutationOptions<TError, TOnMutateResult>(
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

export function getMyFollowsBrandsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>>,
) {
  return ['my', '/my/follows/brands/:slug', toValue(args)] as const
}

export function getMyFollowsBrandsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyFollowsBrandsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.brands[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFollowsBrandsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyFollowsBrandsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsBrandsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyFollowsBrandsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.brands[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyFollowsBrandsSlugMutationKey() {
  return ['my', '/my/follows/brands/:slug', 'POST'] as const
}

export function getPostMyFollowsBrandsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.brands)[':slug']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsBrandsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$post']>) {
      return parseResponse(client.my.follows.brands[':slug'].$post(args, options))
    },
  })
}

export function usePostMyFollowsBrandsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.brands)[':slug']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsBrandsSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMyFollowsBrandsSlugMutationKey() {
  return ['my', '/my/follows/brands/:slug', 'DELETE'] as const
}

export function getDeleteMyFollowsBrandsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.brands)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyFollowsBrandsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$delete']>,
    ) {
      return parseResponse(client.my.follows.brands[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteMyFollowsBrandsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.brands)[':slug']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyFollowsBrandsSlugMutationOptions<TError, TOnMutateResult>(
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

export function getMyFollowsCategoriesCategorySubcategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
  >,
) {
  return ['my', '/my/follows/categories/:category/:subcategory', toValue(args)] as const
}

export function getMyFollowsCategoriesCategorySubcategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyFollowsCategoriesCategorySubcategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.categories[':category'][':subcategory'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFollowsCategoriesCategorySubcategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMyFollowsCategoriesCategorySubcategoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsCategoriesCategorySubcategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyFollowsCategoriesCategorySubcategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.categories[':category'][':subcategory'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyFollowsCategoriesCategorySubcategoryMutationKey() {
  return ['my', '/my/follows/categories/:category/:subcategory', 'POST'] as const
}

export function getPostMyFollowsCategoriesCategorySubcategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.my.follows.categories)[':category'][':subcategory']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.categories)[':category'][':subcategory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsCategoriesCategorySubcategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.my.follows.categories)[':category'][':subcategory']['$post']
      >,
    ) {
      return parseResponse(
        client.my.follows.categories[':category'][':subcategory'].$post(args, options),
      )
    },
  })
}

export function usePostMyFollowsCategoriesCategorySubcategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.my.follows.categories)[':category'][':subcategory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.my.follows.categories)[':category'][':subcategory']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsCategoriesCategorySubcategoryMutationOptions<
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

export function getDeleteMyFollowsCategoriesCategorySubcategoryMutationKey() {
  return ['my', '/my/follows/categories/:category/:subcategory', 'DELETE'] as const
}

export function getDeleteMyFollowsCategoriesCategorySubcategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.my.follows.categories)[':category'][':subcategory']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.categories)[':category'][':subcategory']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyFollowsCategoriesCategorySubcategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.my.follows.categories)[':category'][':subcategory']['$delete']
      >,
    ) {
      return parseResponse(
        client.my.follows.categories[':category'][':subcategory'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMyFollowsCategoriesCategorySubcategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.my.follows.categories)[':category'][':subcategory']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.my.follows.categories)[':category'][':subcategory']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyFollowsCategoriesCategorySubcategoryMutationOptions<
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

export function getMyFollowsCategoriesIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>
  >,
) {
  return ['my', '/my/follows/categories/:identifier', toValue(args)] as const
}

export function getMyFollowsCategoriesIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyFollowsCategoriesIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.categories[':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFollowsCategoriesIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyFollowsCategoriesIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsCategoriesIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyFollowsCategoriesIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.categories[':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyFollowsCategoriesIdentifierMutationKey() {
  return ['my', '/my/follows/categories/:identifier', 'POST'] as const
}

export function getPostMyFollowsCategoriesIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.categories)[':identifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsCategoriesIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$post']>,
    ) {
      return parseResponse(client.my.follows.categories[':identifier'].$post(args, options))
    },
  })
}

export function usePostMyFollowsCategoriesIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.categories)[':identifier']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsCategoriesIdentifierMutationOptions<
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

export function getDeleteMyFollowsCategoriesIdentifierMutationKey() {
  return ['my', '/my/follows/categories/:identifier', 'DELETE'] as const
}

export function getDeleteMyFollowsCategoriesIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.categories)[':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyFollowsCategoriesIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$delete']>,
    ) {
      return parseResponse(client.my.follows.categories[':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteMyFollowsCategoriesIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.categories)[':identifier']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyFollowsCategoriesIdentifierMutationOptions<
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

export function getPostMyFollowsCategoriesUuidMutationKey() {
  return ['my', '/my/follows/categories/:uuid', 'POST'] as const
}

export function getPostMyFollowsCategoriesUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.categories)[':uuid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.categories)[':uuid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsCategoriesUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows.categories)[':uuid']['$post']>,
    ) {
      return parseResponse(client.my.follows.categories[':uuid'].$post(args, options))
    },
  })
}

export function usePostMyFollowsCategoriesUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.categories)[':uuid']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.categories)[':uuid']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsCategoriesUuidMutationOptions<TError, TOnMutateResult>(
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

export function getMyFollowsCollectionsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>>,
) {
  return ['my', '/my/follows/collections/:slug', toValue(args)] as const
}

export function getMyFollowsCollectionsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyFollowsCollectionsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.collections[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFollowsCollectionsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyFollowsCollectionsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsCollectionsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyFollowsCollectionsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.collections[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyFollowsCollectionsSlugMutationKey() {
  return ['my', '/my/follows/collections/:slug', 'POST'] as const
}

export function getPostMyFollowsCollectionsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.collections)[':slug']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsCollectionsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$post']>,
    ) {
      return parseResponse(client.my.follows.collections[':slug'].$post(args, options))
    },
  })
}

export function usePostMyFollowsCollectionsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.collections)[':slug']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsCollectionsSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMyFollowsCollectionsSlugMutationKey() {
  return ['my', '/my/follows/collections/:slug', 'DELETE'] as const
}

export function getDeleteMyFollowsCollectionsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.collections)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyFollowsCollectionsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$delete']>,
    ) {
      return parseResponse(client.my.follows.collections[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteMyFollowsCollectionsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.collections)[':slug']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyFollowsCollectionsSlugMutationOptions<
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

export function getMyFollowsHandpickedSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>>,
) {
  return ['my', '/my/follows/handpicked/:slug', toValue(args)] as const
}

export function getMyFollowsHandpickedSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyFollowsHandpickedSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.handpicked[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFollowsHandpickedSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyFollowsHandpickedSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsHandpickedSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyFollowsHandpickedSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.handpicked[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyFollowsHandpickedSlugMutationKey() {
  return ['my', '/my/follows/handpicked/:slug', 'POST'] as const
}

export function getPostMyFollowsHandpickedSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsHandpickedSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$post']>,
    ) {
      return parseResponse(client.my.follows.handpicked[':slug'].$post(args, options))
    },
  })
}

export function usePostMyFollowsHandpickedSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsHandpickedSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMyFollowsHandpickedSlugMutationKey() {
  return ['my', '/my/follows/handpicked/:slug', 'DELETE'] as const
}

export function getDeleteMyFollowsHandpickedSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyFollowsHandpickedSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$delete']>,
    ) {
      return parseResponse(client.my.follows.handpicked[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteMyFollowsHandpickedSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyFollowsHandpickedSlugMutationOptions<TError, TOnMutateResult>(
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

export function getMyFollowsSearchQueryKey() {
  return ['my', '/my/follows/search'] as const
}

export function getMyFollowsSearchQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyFollowsSearchQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.search.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFollowsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>
            >
          >,
          ReturnType<typeof getMyFollowsSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyFollowsSearchQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.search.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyFollowsSearchMutationKey() {
  return ['my', '/my/follows/search', 'POST'] as const
}

export function getPostMyFollowsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.my.follows.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.my.follows.search.$post>) {
      return parseResponse(client.my.follows.search.$post(args, options))
    },
  })
}

export function usePostMyFollowsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.my.follows.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getMyFollowsShopsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>>,
) {
  return ['my', '/my/follows/shops/:slug', toValue(args)] as const
}

export function getMyFollowsShopsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyFollowsShopsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.follows.shops[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyFollowsShopsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyFollowsShopsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsShopsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyFollowsShopsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.follows.shops[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyFollowsShopsSlugMutationKey() {
  return ['my', '/my/follows/shops/:slug', 'POST'] as const
}

export function getPostMyFollowsShopsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.shops)[':slug']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsShopsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$post']>) {
      return parseResponse(client.my.follows.shops[':slug'].$post(args, options))
    },
  })
}

export function usePostMyFollowsShopsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.shops)[':slug']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsShopsSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMyFollowsShopsSlugMutationKey() {
  return ['my', '/my/follows/shops/:slug', 'DELETE'] as const
}

export function getDeleteMyFollowsShopsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows.shops)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyFollowsShopsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$delete']>) {
      return parseResponse(client.my.follows.shops[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteMyFollowsShopsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows.shops)[':slug']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyFollowsShopsSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMyFollowsFollowIdMutationKey() {
  return ['my', '/my/follows/:follow_id', 'DELETE'] as const
}

export function getDeleteMyFollowsFollowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows)[':follow_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyFollowsFollowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.my.follows)[':follow_id']['$delete']>) {
      return parseResponse(client.my.follows[':follow_id'].$delete(args, options))
    },
  })
}

export function useDeleteMyFollowsFollowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows)[':follow_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyFollowsFollowIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostMyFollowsFollowIdAlertMutationKey() {
  return ['my', '/my/follows/:follow_id/alert', 'POST'] as const
}

export function getPostMyFollowsFollowIdAlertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['alert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyFollowsFollowIdAlertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$post']>,
    ) {
      return parseResponse(client.my.follows[':follow_id'].alert.$post(args, options))
    },
  })
}

export function usePostMyFollowsFollowIdAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['alert']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyFollowsFollowIdAlertMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMyFollowsFollowIdAlertMutationKey() {
  return ['my', '/my/follows/:follow_id/alert', 'DELETE'] as const
}

export function getDeleteMyFollowsFollowIdAlertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['alert']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyFollowsFollowIdAlertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$delete']>,
    ) {
      return parseResponse(client.my.follows[':follow_id'].alert.$delete(args, options))
    },
  })
}

export function useDeleteMyFollowsFollowIdAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['alert']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyFollowsFollowIdAlertMutationOptions<TError, TOnMutateResult>(
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

export function getMyListingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.$get>>,
) {
  return ['my', '/my/listings', toValue(args)] as const
}

export function getMyListingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.listings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
          >,
          ReturnType<typeof getMyListingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyListingsDraftsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.drafts.$get>>,
) {
  return ['my', '/my/listings/drafts', toValue(args)] as const
}

export function getMyListingsDraftsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.drafts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyListingsDraftsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.listings.drafts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyListingsDrafts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.drafts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>
            >
          >,
          ReturnType<typeof getMyListingsDraftsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyListingsDraftsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyListingsDraftsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.listings.drafts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyListingsNegotiationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.negotiations.$get>>,
) {
  return ['my', '/my/listings/negotiations', toValue(args)] as const
}

export function getMyListingsNegotiationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.negotiations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyListingsNegotiationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.listings.negotiations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyListingsNegotiations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.listings.negotiations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
            >
          >,
          ReturnType<typeof getMyListingsNegotiationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyListingsNegotiationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyListingsNegotiationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.listings.negotiations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMyListingsSlugStateEndMutationKey() {
  return ['my', '/my/listings/:slug/state/end', 'PUT'] as const
}

export function getPutMyListingsSlugStateEndMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.listings)[':slug']['state']['end']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.listings)[':slug']['state']['end']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMyListingsSlugStateEndMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.listings)[':slug']['state']['end']['$put']>,
    ) {
      return parseResponse(client.my.listings[':slug'].state.end.$put(args, options))
    },
  })
}

export function usePutMyListingsSlugStateEnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.listings)[':slug']['state']['end']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.listings)[':slug']['state']['end']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMyListingsSlugStateEndMutationOptions<TError, TOnMutateResult>(
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

export function getMyListsQueryKey() {
  return ['my', '/my/lists'] as const
}

export function getMyListsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyListsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.lists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>
          >,
          ReturnType<typeof getMyListsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyListsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.lists.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyNegotiationsBuyingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.negotiations.buying.$get>>,
) {
  return ['my', '/my/negotiations/buying', toValue(args)] as const
}

export function getMyNegotiationsBuyingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.negotiations.buying.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyNegotiationsBuyingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.negotiations.buying.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyNegotiationsBuying<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.negotiations.buying.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
            >
          >,
          ReturnType<typeof getMyNegotiationsBuyingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyNegotiationsBuyingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyNegotiationsBuyingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.negotiations.buying.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyNegotiationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.negotiations)[':id']['$get']>>,
) {
  return ['my', '/my/negotiations/:id', toValue(args)] as const
}

export function getMyNegotiationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.negotiations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyNegotiationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.negotiations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyNegotiationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.negotiations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyNegotiationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyNegotiationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyNegotiationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.negotiations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyNegotiationsIdAcceptMutationKey() {
  return ['my', '/my/negotiations/:id/accept', 'POST'] as const
}

export function getPostMyNegotiationsIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.negotiations)[':id']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.negotiations)[':id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyNegotiationsIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.negotiations)[':id']['accept']['$post']>,
    ) {
      return parseResponse(client.my.negotiations[':id'].accept.$post(args, options))
    },
  })
}

export function usePostMyNegotiationsIdAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.negotiations)[':id']['accept']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.negotiations)[':id']['accept']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyNegotiationsIdAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getPostMyNegotiationsIdCounterMutationKey() {
  return ['my', '/my/negotiations/:id/counter', 'POST'] as const
}

export function getPostMyNegotiationsIdCounterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.negotiations)[':id']['counter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.negotiations)[':id']['counter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyNegotiationsIdCounterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.negotiations)[':id']['counter']['$post']>,
    ) {
      return parseResponse(client.my.negotiations[':id'].counter.$post(args, options))
    },
  })
}

export function usePostMyNegotiationsIdCounter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.negotiations)[':id']['counter']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.negotiations)[':id']['counter']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyNegotiationsIdCounterMutationOptions<TError, TOnMutateResult>(
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

export function getPostMyNegotiationsIdDeclineMutationKey() {
  return ['my', '/my/negotiations/:id/decline', 'POST'] as const
}

export function getPostMyNegotiationsIdDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.negotiations)[':id']['decline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.negotiations)[':id']['decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyNegotiationsIdDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.negotiations)[':id']['decline']['$post']>,
    ) {
      return parseResponse(client.my.negotiations[':id'].decline.$post(args, options))
    },
  })
}

export function usePostMyNegotiationsIdDecline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.negotiations)[':id']['decline']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.negotiations)[':id']['decline']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyNegotiationsIdDeclineMutationOptions<TError, TOnMutateResult>(
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

export function getMyOrdersAwaitingFeedbackQueryKey() {
  return ['my', '/my/orders/awaiting_feedback'] as const
}

export function getMyOrdersAwaitingFeedbackQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyOrdersAwaitingFeedbackQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.awaiting_feedback.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersAwaitingFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>
              >
            >
          >,
          ReturnType<typeof getMyOrdersAwaitingFeedbackQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersAwaitingFeedbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyOrdersAwaitingFeedbackQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.awaiting_feedback.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersBuyingAllQueryKey() {
  return ['my', '/my/orders/buying/all'] as const
}

export function getMyOrdersBuyingAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyOrdersBuyingAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.buying.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersBuyingAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>
            >
          >,
          ReturnType<typeof getMyOrdersBuyingAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersBuyingAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyOrdersBuyingAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.buying.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersBuyingByUuidUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>
  >,
) {
  return ['my', '/my/orders/buying/by_uuid/:uuid', toValue(args)] as const
}

export function getMyOrdersBuyingByUuidUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyOrdersBuyingByUuidUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.buying.by_uuid[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersBuyingByUuidUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyOrdersBuyingByUuidUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersBuyingByUuidUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyOrdersBuyingByUuidUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.buying.by_uuid[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersBuyingUnpaidQueryKey() {
  return ['my', '/my/orders/buying/unpaid'] as const
}

export function getMyOrdersBuyingUnpaidQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyOrdersBuyingUnpaidQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.buying.unpaid.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersBuyingUnpaid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
            >
          >,
          ReturnType<typeof getMyOrdersBuyingUnpaidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersBuyingUnpaidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyOrdersBuyingUnpaidQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.buying.unpaid.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersBuyingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>>,
) {
  return ['my', '/my/orders/buying/:id', toValue(args)] as const
}

export function getMyOrdersBuyingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyOrdersBuyingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.buying[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersBuyingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyOrdersBuyingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersBuyingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyOrdersBuyingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.buying[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyOrdersBuyingIdMarkReceivedMutationKey() {
  return ['my', '/my/orders/buying/:id/mark_received', 'POST'] as const
}

export function getPostMyOrdersBuyingIdMarkReceivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyOrdersBuyingIdMarkReceivedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>,
    ) {
      return parseResponse(client.my.orders.buying[':id'].mark_received.$post(args, options))
    },
  })
}

export function usePostMyOrdersBuyingIdMarkReceived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyOrdersBuyingIdMarkReceivedMutationOptions<
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

export function getMyOrdersSellingAllQueryKey() {
  return ['my', '/my/orders/selling/all'] as const
}

export function getMyOrdersSellingAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyOrdersSellingAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.selling.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersSellingAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
            >
          >,
          ReturnType<typeof getMyOrdersSellingAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyOrdersSellingAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.selling.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersSellingAwaitingShipmentQueryKey() {
  return ['my', '/my/orders/selling/awaiting_shipment'] as const
}

export function getMyOrdersSellingAwaitingShipmentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyOrdersSellingAwaitingShipmentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.selling.awaiting_shipment.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersSellingAwaitingShipment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
              >
            >
          >,
          ReturnType<typeof getMyOrdersSellingAwaitingShipmentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingAwaitingShipmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyOrdersSellingAwaitingShipmentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.selling.awaiting_shipment.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersSellingBuyerHistoryBuyerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
  >,
) {
  return ['my', '/my/orders/selling/buyer_history/:buyer_id', toValue(args)] as const
}

export function getMyOrdersSellingBuyerHistoryBuyerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyOrdersSellingBuyerHistoryBuyerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.selling.buyer_history[':buyer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersSellingBuyerHistoryBuyerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMyOrdersSellingBuyerHistoryBuyerIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingBuyerHistoryBuyerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyOrdersSellingBuyerHistoryBuyerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.selling.buyer_history[':buyer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersSellingByUuidUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>
  >,
) {
  return ['my', '/my/orders/selling/by_uuid/:uuid', toValue(args)] as const
}

export function getMyOrdersSellingByUuidUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyOrdersSellingByUuidUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.selling.by_uuid[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersSellingByUuidUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyOrdersSellingByUuidUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingByUuidUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyOrdersSellingByUuidUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.selling.by_uuid[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersSellingUnpaidQueryKey() {
  return ['my', '/my/orders/selling/unpaid'] as const
}

export function getMyOrdersSellingUnpaidQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyOrdersSellingUnpaidQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.selling.unpaid.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersSellingUnpaid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
            >
          >,
          ReturnType<typeof getMyOrdersSellingUnpaidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingUnpaidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyOrdersSellingUnpaidQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.selling.unpaid.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyOrdersSellingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>>,
) {
  return ['my', '/my/orders/selling/:id', toValue(args)] as const
}

export function getMyOrdersSellingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyOrdersSellingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.orders.selling[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyOrdersSellingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyOrdersSellingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyOrdersSellingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.orders.selling[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMyOrdersSellingIdMarkPickedUpMutationKey() {
  return ['my', '/my/orders/selling/:id/mark_picked_up', 'POST'] as const
}

export function getPostMyOrdersSellingIdMarkPickedUpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyOrdersSellingIdMarkPickedUpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>,
    ) {
      return parseResponse(client.my.orders.selling[':id'].mark_picked_up.$post(args, options))
    },
  })
}

export function usePostMyOrdersSellingIdMarkPickedUp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyOrdersSellingIdMarkPickedUpMutationOptions<
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

export function getPostMyOrdersSellingIdShipMutationKey() {
  return ['my', '/my/orders/selling/:id/ship', 'POST'] as const
}

export function getPostMyOrdersSellingIdShipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['ship']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.orders.selling)[':id']['ship']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyOrdersSellingIdShipMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.orders.selling)[':id']['ship']['$post']>,
    ) {
      return parseResponse(client.my.orders.selling[':id'].ship.$post(args, options))
    },
  })
}

export function usePostMyOrdersSellingIdShip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['ship']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.orders.selling)[':id']['ship']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyOrdersSellingIdShipMutationOptions<TError, TOnMutateResult>(
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

export function getPostMyOrdersSellingOrderIdRefundRequestsMutationKey() {
  return ['my', '/my/orders/selling/:order_id/refund_requests', 'POST'] as const
}

export function getPostMyOrdersSellingOrderIdRefundRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.my.orders.selling)[':order_id']['refund_requests']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.orders.selling)[':order_id']['refund_requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMyOrdersSellingOrderIdRefundRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.my.orders.selling)[':order_id']['refund_requests']['$post']
      >,
    ) {
      return parseResponse(
        client.my.orders.selling[':order_id'].refund_requests.$post(args, options),
      )
    },
  })
}

export function usePostMyOrdersSellingOrderIdRefundRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.my.orders.selling)[':order_id']['refund_requests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.my.orders.selling)[':order_id']['refund_requests']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMyOrdersSellingOrderIdRefundRequestsMutationOptions<
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

export function getMyPaymentsSellingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.payments.selling.$get>>,
) {
  return ['my', '/my/payments/selling', toValue(args)] as const
}

export function getMyPaymentsSellingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.payments.selling.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyPaymentsSellingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.payments.selling.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyPaymentsSelling<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.my.payments.selling.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>
            >
          >,
          ReturnType<typeof getMyPaymentsSellingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyPaymentsSellingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyPaymentsSellingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.payments.selling.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyPaymentsSellingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>>,
) {
  return ['my', '/my/payments/selling/:id', toValue(args)] as const
}

export function getMyPaymentsSellingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyPaymentsSellingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.payments.selling[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyPaymentsSellingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyPaymentsSellingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyPaymentsSellingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyPaymentsSellingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.payments.selling[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyPayoutsQueryKey() {
  return ['my', '/my/payouts'] as const
}

export function getMyPayoutsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyPayoutsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.payouts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyPayouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>
          >,
          ReturnType<typeof getMyPayoutsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyPayoutsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyPayoutsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.payouts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyPayoutsIdLineItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>>,
) {
  return ['my', '/my/payouts/:id/line_items', toValue(args)] as const
}

export function getMyPayoutsIdLineItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMyPayoutsIdLineItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.payouts[':id'].line_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyPayoutsIdLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMyPayoutsIdLineItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyPayoutsIdLineItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMyPayoutsIdLineItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.my.payouts[':id'].line_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyRefundRequestsSellingQueryKey() {
  return ['my', '/my/refund_requests/selling'] as const
}

export function getMyRefundRequestsSellingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyRefundRequestsSellingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.refund_requests.selling.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyRefundRequestsSelling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>
              >
            >
          >,
          ReturnType<typeof getMyRefundRequestsSellingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyRefundRequestsSellingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyRefundRequestsSellingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.refund_requests.selling.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMyRefundRequestsSellingIdMutationKey() {
  return ['my', '/my/refund_requests/selling/:id', 'PUT'] as const
}

export function getPutMyRefundRequestsSellingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.refund_requests.selling)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.my.refund_requests.selling)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMyRefundRequestsSellingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.my.refund_requests.selling)[':id']['$put']>,
    ) {
      return parseResponse(client.my.refund_requests.selling[':id'].$put(args, options))
    },
  })
}

export function usePutMyRefundRequestsSellingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.refund_requests.selling)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.refund_requests.selling)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMyRefundRequestsSellingIdMutationOptions<TError, TOnMutateResult>(
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

export function getMyViewedListingsQueryKey() {
  return ['my', '/my/viewed_listings'] as const
}

export function getMyViewedListingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyViewedListingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.viewed_listings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMyViewedListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>
            >
          >,
          ReturnType<typeof getMyViewedListingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyViewedListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyViewedListingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.viewed_listings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMyWishlistQueryKey() {
  return ['my', '/my/wishlist'] as const
}

export function getMyWishlistQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMyWishlistQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.my.wishlist.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMyWishlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>
          >,
          ReturnType<typeof getMyWishlistQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyWishlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMyWishlistQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.my.wishlist.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMyWishlistIdMutationKey() {
  return ['my', '/my/wishlist/:id', 'PUT'] as const
}

export function getPutMyWishlistIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.wishlist)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.my.wishlist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMyWishlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.my.wishlist)[':id']['$put']>) {
      return parseResponse(client.my.wishlist[':id'].$put(args, options))
    },
  })
}

export function usePutMyWishlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.my.wishlist)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.my.wishlist)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMyWishlistIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMyWishlistIdMutationKey() {
  return ['my', '/my/wishlist/:id', 'DELETE'] as const
}

export function getDeleteMyWishlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.wishlist)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.my.wishlist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMyWishlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.my.wishlist)[':id']['$delete']>) {
      return parseResponse(client.my.wishlist[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMyWishlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.wishlist)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.my.wishlist)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMyWishlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrdersOrderIdFeedbackBuyerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>
  >,
) {
  return ['orders', '/orders/:order_id/feedback/buyer', toValue(args)] as const
}

export function getOrdersOrderIdFeedbackBuyerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersOrderIdFeedbackBuyerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders[':order_id'].feedback.buyer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrdersOrderIdFeedbackBuyer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrdersOrderIdFeedbackBuyerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersOrderIdFeedbackBuyerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersOrderIdFeedbackBuyerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders[':order_id'].feedback.buyer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrdersOrderIdFeedbackBuyerMutationKey() {
  return ['orders', '/orders/:order_id/feedback/buyer', 'POST'] as const
}

export function getPostOrdersOrderIdFeedbackBuyerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersOrderIdFeedbackBuyerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>,
    ) {
      return parseResponse(client.orders[':order_id'].feedback.buyer.$post(args, options))
    },
  })
}

export function usePostOrdersOrderIdFeedbackBuyer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersOrderIdFeedbackBuyerMutationOptions<
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

export function getOrdersOrderIdFeedbackSellerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>
  >,
) {
  return ['orders', '/orders/:order_id/feedback/seller', toValue(args)] as const
}

export function getOrdersOrderIdFeedbackSellerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersOrderIdFeedbackSellerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders[':order_id'].feedback.seller.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrdersOrderIdFeedbackSeller<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrdersOrderIdFeedbackSellerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersOrderIdFeedbackSellerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersOrderIdFeedbackSellerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders[':order_id'].feedback.seller.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrdersOrderIdFeedbackSellerMutationKey() {
  return ['orders', '/orders/:order_id/feedback/seller', 'POST'] as const
}

export function getPostOrdersOrderIdFeedbackSellerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersOrderIdFeedbackSellerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>,
    ) {
      return parseResponse(client.orders[':order_id'].feedback.seller.$post(args, options))
    },
  })
}

export function usePostOrdersOrderIdFeedbackSeller<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersOrderIdFeedbackSellerMutationOptions<
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

export function getPaymentMethodsQueryKey() {
  return ['payment_methods', '/payment_methods'] as const
}

export function getPaymentMethodsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPaymentMethodsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_methods.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePaymentMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>
            >
          >,
          ReturnType<typeof getPaymentMethodsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPaymentMethodsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_methods.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPriceguideIdTransactionsSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
  >,
) {
  return ['priceguide', '/priceguide/:id/transactions/summary', toValue(args)] as const
}

export function getPriceguideIdTransactionsSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPriceguideIdTransactionsSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.priceguide[':id'].transactions.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePriceguideIdTransactionsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPriceguideIdTransactionsSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPriceguideIdTransactionsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPriceguideIdTransactionsSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.priceguide[':id'].transactions.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsReviewsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products.reviews)[':id']['$get']>>,
) {
  return ['products', '/products/reviews/:id', toValue(args)] as const
}

export function getProductsReviewsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products.reviews)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsReviewsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.reviews[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsReviewsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products.reviews)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsReviewsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsReviewsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsReviewsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.reviews[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProductsReviewsIdMutationKey() {
  return ['products', '/products/reviews/:id', 'PUT'] as const
}

export function getPutProductsReviewsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.products.reviews)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProductsReviewsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.products.reviews)[':id']['$put']>) {
      return parseResponse(client.products.reviews[':id'].$put(args, options))
    },
  })
}

export function usePutProductsReviewsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.reviews)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.products.reviews)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProductsReviewsIdMutationOptions<TError, TOnMutateResult>(
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

export function getProductsSlugReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>>,
) {
  return ['products', '/products/:slug/reviews', toValue(args)] as const
}

export function getProductsSlugReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsSlugReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products[':slug'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsSlugReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsSlugReviewsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsSlugReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsSlugReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products[':slug'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProductsSlugReviewsMutationKey() {
  return ['products', '/products/:slug/reviews', 'POST'] as const
}

export function getPostProductsSlugReviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.products)[':slug']['reviews']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductsSlugReviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.products)[':slug']['reviews']['$post']>,
    ) {
      return parseResponse(client.products[':slug'].reviews.$post(args, options))
    },
  })
}

export function usePostProductsSlugReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.products)[':slug']['reviews']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductsSlugReviewsMutationOptions<TError, TOnMutateResult>(
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

export function getSalesReverbQueryKey() {
  return ['sales', '/sales/reverb'] as const
}

export function getSalesReverbQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSalesReverbQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sales.reverb.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSalesReverb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>
          >,
          ReturnType<typeof getSalesReverbQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesReverbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSalesReverbQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sales.reverb.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSalesSellerQueryKey() {
  return ['sales', '/sales/seller'] as const
}

export function getSalesSellerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSalesSellerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sales.seller.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSalesSeller<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>
          >,
          ReturnType<typeof getSalesSellerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesSellerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSalesSellerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sales.seller.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSalesSaleIdListingsMutationKey() {
  return ['sales', '/sales/:sale_id/listings', 'POST'] as const
}

export function getPostSalesSaleIdListingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales)[':sale_id']['listings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sales)[':sale_id']['listings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSalesSaleIdListingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sales)[':sale_id']['listings']['$post']>,
    ) {
      return parseResponse(client.sales[':sale_id'].listings.$post(args, options))
    },
  })
}

export function usePostSalesSaleIdListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sales)[':sale_id']['listings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sales)[':sale_id']['listings']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSalesSaleIdListingsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSalesSaleIdListingsMutationKey() {
  return ['sales', '/sales/:sale_id/listings', 'DELETE'] as const
}

export function getDeleteSalesSaleIdListingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales)[':sale_id']['listings']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sales)[':sale_id']['listings']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSalesSaleIdListingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sales)[':sale_id']['listings']['$delete']>,
    ) {
      return parseResponse(client.sales[':sale_id'].listings.$delete(args, options))
    },
  })
}

export function useDeleteSalesSaleIdListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sales)[':sale_id']['listings']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sales)[':sale_id']['listings']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSalesSaleIdListingsMutationOptions<TError, TOnMutateResult>(
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

export function getSalesSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sales)[':slug']['$get']>>,
) {
  return ['sales', '/sales/:slug', toValue(args)] as const
}

export function getSalesSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sales)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSalesSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sales[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSalesSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sales)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>
            >
          >,
          ReturnType<typeof getSalesSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSalesSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSalesSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sales[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShippingProvidersQueryKey() {
  return ['shipping', '/shipping/providers'] as const
}

export function getShippingProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShippingProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipping.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShippingProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>
            >
          >,
          ReturnType<typeof getShippingProvidersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShippingProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShippingProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shipping.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShippingRegionsQueryKey() {
  return ['shipping', '/shipping/regions'] as const
}

export function getShippingRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShippingRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipping.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShippingRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>
            >
          >,
          ReturnType<typeof getShippingRegionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShippingRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShippingRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shipping.regions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShopQueryKey() {
  return ['shop', '/shop'] as const
}

export function getShopQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShopQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shop.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShop<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
          ReturnType<typeof getShopQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShopQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shop.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutShopMutationKey() {
  return ['shop', '/shop', 'PUT'] as const
}

export function getPutShopMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$put>>>>>,
    TError,
    InferRequestType<typeof client.shop.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutShopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shop.$put>) {
      return parseResponse(client.shop.$put(args, options))
    },
  })
}

export function usePutShop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$put>>>>>,
          TError,
          InferRequestType<typeof client.shop.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutShopMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShopListingConditionsQueryKey() {
  return ['shop', '/shop/listing_conditions'] as const
}

export function getShopListingConditionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShopListingConditionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shop.listing_conditions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShopListingConditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
            >
          >,
          ReturnType<typeof getShopListingConditionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShopListingConditionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShopListingConditionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shop.listing_conditions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShopPaymentMethodsQueryKey() {
  return ['shop', '/shop/payment_methods'] as const
}

export function getShopPaymentMethodsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShopPaymentMethodsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shop.payment_methods.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShopPaymentMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>
            >
          >,
          ReturnType<typeof getShopPaymentMethodsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShopPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShopPaymentMethodsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shop.payment_methods.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShopVacationQueryKey() {
  return ['shop', '/shop/vacation'] as const
}

export function getShopVacationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShopVacationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shop.vacation.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShopVacation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
          >,
          ReturnType<typeof getShopVacationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShopVacationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShopVacationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shop.vacation.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostShopVacationMutationKey() {
  return ['shop', '/shop/vacation', 'POST'] as const
}

export function getPostShopVacationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostShopVacationMutationKey(),
    async mutationFn() {
      return parseResponse(client.shop.vacation.$post(undefined, options))
    },
  })
}

export function usePostShopVacation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShopVacationMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteShopVacationMutationKey() {
  return ['shop', '/shop/vacation', 'DELETE'] as const
}

export function getDeleteShopVacationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteShopVacationMutationKey(),
    async mutationFn() {
      return parseResponse(client.shop.vacation.$delete(undefined, options))
    },
  })
}

export function useDeleteShopVacation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$delete>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteShopVacationMutationOptions<TError, TOnMutateResult>(
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

export function getShopsIdStorefrontsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>>,
) {
  return ['shops', '/shops/:id/storefronts', toValue(args)] as const
}

export function getShopsIdStorefrontsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShopsIdStorefrontsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shops[':id'].storefronts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShopsIdStorefronts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShopsIdStorefrontsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShopsIdStorefrontsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShopsIdStorefrontsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shops[':id'].storefronts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShopsShopIdShippingProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>
  >,
) {
  return ['shops', '/shops/:shop_id/shipping_profiles', toValue(args)] as const
}

export function getShopsShopIdShippingProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShopsShopIdShippingProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shops[':shop_id'].shipping_profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShopsShopIdShippingProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShopsShopIdShippingProfilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShopsShopIdShippingProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShopsShopIdShippingProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shops[':shop_id'].shipping_profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShopsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':slug']['$get']>>,
) {
  return ['shops', '/shops/:slug', toValue(args)] as const
}

export function getShopsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShopsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shops[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShopsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>
            >
          >,
          ReturnType<typeof getShopsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShopsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShopsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shops[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShopsSlugFeedbackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>>,
) {
  return ['shops', '/shops/:slug/feedback', toValue(args)] as const
}

export function getShopsSlugFeedbackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShopsSlugFeedbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shops[':slug'].feedback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShopsSlugFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShopsSlugFeedbackQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShopsSlugFeedbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShopsSlugFeedbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shops[':slug'].feedback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShopsSlugFeedbackBuyerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>
  >,
) {
  return ['shops', '/shops/:slug/feedback/buyer', toValue(args)] as const
}

export function getShopsSlugFeedbackBuyerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShopsSlugFeedbackBuyerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shops[':slug'].feedback.buyer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShopsSlugFeedbackBuyer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShopsSlugFeedbackBuyerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShopsSlugFeedbackBuyerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShopsSlugFeedbackBuyerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shops[':slug'].feedback.buyer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShopsSlugFeedbackSellerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>
  >,
) {
  return ['shops', '/shops/:slug/feedback/seller', toValue(args)] as const
}

export function getShopsSlugFeedbackSellerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShopsSlugFeedbackSellerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shops[':slug'].feedback.seller.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShopsSlugFeedbackSeller<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShopsSlugFeedbackSellerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShopsSlugFeedbackSellerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShopsSlugFeedbackSellerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shops[':slug'].feedback.seller.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWantsQueryKey() {
  return ['wants', '/wants'] as const
}

export function getWantsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWantsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wants.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWants<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
          ReturnType<typeof getWantsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWantsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.wants.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWantsIdMutationKey() {
  return ['wants', '/wants/:id', 'PUT'] as const
}

export function getPutWantsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.wants)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.wants)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWantsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.wants)[':id']['$put']>) {
      return parseResponse(client.wants[':id'].$put(args, options))
    },
  })
}

export function usePutWantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wants)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.wants)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWantsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWantsIdMutationKey() {
  return ['wants', '/wants/:id', 'DELETE'] as const
}

export function getDeleteWantsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.wants)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.wants)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWantsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.wants)[':id']['$delete']>) {
      return parseResponse(client.wants[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wants)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.wants)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWantsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksRegistrationsQueryKey() {
  return ['webhooks', '/webhooks/registrations'] as const
}

export function getWebhooksRegistrationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhooksRegistrationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.registrations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksRegistrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
            >
          >,
          ReturnType<typeof getWebhooksRegistrationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksRegistrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhooksRegistrationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.registrations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksRegistrationsMutationKey() {
  return ['webhooks', '/webhooks/registrations', 'POST'] as const
}

export function getPostWebhooksRegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.webhooks.registrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksRegistrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.registrations.$post>) {
      return parseResponse(client.webhooks.registrations.$post(args, options))
    },
  })
}

export function usePostWebhooksRegistrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhooks.registrations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksRegistrationsMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksRegistrationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>>,
) {
  return ['webhooks', '/webhooks/registrations/:id', toValue(args)] as const
}

export function getWebhooksRegistrationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksRegistrationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.registrations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksRegistrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksRegistrationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksRegistrationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksRegistrationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.registrations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksRegistrationsIdMutationKey() {
  return ['webhooks', '/webhooks/registrations/:id', 'DELETE'] as const
}

export function getDeleteWebhooksRegistrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.registrations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksRegistrationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks.registrations)[':id']['$delete']>,
    ) {
      return parseResponse(client.webhooks.registrations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksRegistrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks.registrations)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksRegistrationsIdMutationOptions<TError, TOnMutateResult>(
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
