import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getArticlesQueryKey(args: InferRequestType<typeof client.articles.$get>) {
  return ['articles', '/articles', args] as const
}

export function getArticlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.articles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArticlesQueryKey>
  >({
    queryKey: getArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.articles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getArticlesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArticlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArticlesCategoriesQueryKey() {
  return ['articles', '/articles/categories'] as const
}

export function getArticlesCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesCategoriesQueryKey>
  >({
    queryKey: getArticlesCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.articles.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticlesCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getArticlesCategoriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArticlesCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesQueryKey() {
  return ['categories', '/categories'] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCategoriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesFlatQueryKey() {
  return ['categories', '/categories/flat'] as const
}

export function getCategoriesFlatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesFlatQueryKey>
  >({
    queryKey: getCategoriesFlatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.flat.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoriesFlat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCategoriesFlatQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesFlatQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesTaxonomyQueryKey() {
  return ['categories', '/categories/taxonomy'] as const
}

export function getCategoriesTaxonomyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesTaxonomyQueryKey>
  >({
    queryKey: getCategoriesTaxonomyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.taxonomy.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesTaxonomy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCategoriesTaxonomyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesTaxonomyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesProductTypeCategoryQueryKey(
  args: InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>,
) {
  return ['categories', '/categories/:product_type/:category', args] as const
}

export function getCategoriesProductTypeCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCategoriesProductTypeCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':product_type'][':category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesProductTypeCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCategoriesProductTypeCategoryQueryKey>
        >
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
      ...getCategoriesProductTypeCategoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCategoriesUuidQueryKey(
  args: InferRequestType<(typeof client.categories)[':uuid']['$get']>,
) {
  return ['categories', '/categories/:uuid', args] as const
}

export function getCategoriesUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesUuidQueryKey>
  >({
    queryKey: getCategoriesUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':uuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoriesUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCategoriesUuidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getComparisonShoppingPagesQueryKey() {
  return ['comparison_shopping_pages', '/comparison_shopping_pages'] as const
}

export function getComparisonShoppingPagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComparisonShoppingPagesQueryKey>
  >({
    queryKey: getComparisonShoppingPagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.comparison_shopping_pages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createComparisonShoppingPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getComparisonShoppingPagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComparisonShoppingPagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getComparisonShoppingPagesFindQueryKey(
  args: InferRequestType<typeof client.comparison_shopping_pages.find.$get>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/find', args] as const
}

export function getComparisonShoppingPagesFindQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.comparison_shopping_pages.find.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComparisonShoppingPagesFindQueryKey>
  >({
    queryKey: getComparisonShoppingPagesFindQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comparison_shopping_pages.find.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createComparisonShoppingPagesFind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comparison_shopping_pages.find.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getComparisonShoppingPagesFindQueryKey>
        >
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
      ...getComparisonShoppingPagesFindQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getComparisonShoppingPagesIdQueryKey(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/:id', args] as const
}

export function getComparisonShoppingPagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getComparisonShoppingPagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comparison_shopping_pages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createComparisonShoppingPagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getComparisonShoppingPagesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getComparisonShoppingPagesIdListingsQueryKey(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/:id/listings', args] as const
}

export function getComparisonShoppingPagesIdListingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getComparisonShoppingPagesIdListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comparison_shopping_pages[':id'].listings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createComparisonShoppingPagesIdListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.comparison_shopping_pages)[':id']['listings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getComparisonShoppingPagesIdListingsQueryKey>
        >
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
      ...getComparisonShoppingPagesIdListingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getComparisonShoppingPagesIdReviewsQueryKey(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/:id/reviews', args] as const
}

export function getComparisonShoppingPagesIdReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getComparisonShoppingPagesIdReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comparison_shopping_pages[':id'].reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createComparisonShoppingPagesIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getComparisonShoppingPagesIdReviewsQueryKey>
        >
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
      ...getComparisonShoppingPagesIdReviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostConversationsConversationIdOffer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsConversationIdOfferMutationOptions<
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

export function createPostConversationsIdOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsIdOfferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCountriesQueryKey() {
  return ['countries', '/countries'] as const
}

export function getCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountriesQueryKey>
  >({
    queryKey: getCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCountriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCspsQueryKey() {
  return ['csps', '/csps'] as const
}

export function getCspsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCspsQueryKey>
  >({
    queryKey: getCspsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.csps.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCsps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getCspsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCspsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCspsCategoriesQueryKey() {
  return ['csps', '/csps/categories'] as const
}

export function getCspsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCspsCategoriesQueryKey>
  >({
    queryKey: getCspsCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.csps.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCspsCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCspsCategoriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCspsCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCspsFindQueryKey(args: InferRequestType<typeof client.csps.find.$get>) {
  return ['csps', '/csps/find', args] as const
}

export function getCspsFindQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.csps.find.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCspsFindQueryKey>
  >({
    queryKey: getCspsFindQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.csps.find.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCspsFind<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.csps.find.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCspsFindQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCspsFindQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCspsIdQueryKey(args: InferRequestType<(typeof client.csps)[':id']['$get']>) {
  return ['csps', '/csps/:id', args] as const
}

export function getCspsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.csps)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCspsIdQueryKey>
  >({
    queryKey: getCspsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.csps[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCspsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.csps)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCspsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCspsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCuratedSetsSlugQueryKey(
  args: InferRequestType<(typeof client.curated_sets)[':slug']['$get']>,
) {
  return ['curated_sets', '/curated_sets/:slug', args] as const
}

export function getCuratedSetsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.curated_sets)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCuratedSetsSlugQueryKey>
  >({
    queryKey: getCuratedSetsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.curated_sets[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCuratedSetsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.curated_sets)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCuratedSetsSlugQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCuratedSetsSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCurrenciesDisplayQueryKey() {
  return ['currencies', '/currencies/display'] as const
}

export function getCurrenciesDisplayQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCurrenciesDisplayQueryKey>
  >({
    queryKey: getCurrenciesDisplayQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.currencies.display.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCurrenciesDisplay<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCurrenciesDisplayQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCurrenciesDisplayQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCurrenciesListingQueryKey() {
  return ['currencies', '/currencies/listing'] as const
}

export function getCurrenciesListingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCurrenciesListingQueryKey>
  >({
    queryKey: getCurrenciesListingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.currencies.listing.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCurrenciesListing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCurrenciesListingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCurrenciesListingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getFeedbackFeedbackIdQueryKey(
  args: InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>,
) {
  return ['feedback', '/feedback/:feedback_id', args] as const
}

export function getFeedbackFeedbackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedbackFeedbackIdQueryKey>
  >({
    queryKey: getFeedbackFeedbackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feedback[':feedback_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeedbackFeedbackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedbackFeedbackIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeedbackFeedbackIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHandpickedSlugQueryKey(
  args: InferRequestType<(typeof client.handpicked)[':slug']['$get']>,
) {
  return ['handpicked', '/handpicked/:slug', args] as const
}

export function getHandpickedSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.handpicked)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHandpickedSlugQueryKey>
  >({
    queryKey: getHandpickedSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.handpicked[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHandpickedSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.handpicked)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHandpickedSlugQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHandpickedSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingConditionsQueryKey() {
  return ['listing_conditions', '/listing_conditions'] as const
}

export function getListingConditionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingConditionsQueryKey>
  >({
    queryKey: getListingConditionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.listing_conditions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingConditions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingConditionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingConditionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getListingsQueryKey(args: InferRequestType<typeof client.listings.$get>) {
  return ['listings', '/listings', args] as const
}

export function getListingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListingsQueryKey>
  >({
    queryKey: getListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getListingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.listings.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListingsAllQueryKey(args: InferRequestType<typeof client.listings.all.$get>) {
  return ['listings', '/listings/all', args] as const
}

export function getListingsAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listings.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListingsAllQueryKey>
  >({
    queryKey: getListingsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListingsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listings.all.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getListingsAllQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingsFacetsSellerLocationQueryKey() {
  return ['listings', '/listings/facets/seller_location'] as const
}

export function getListingsFacetsSellerLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getListingsFacetsSellerLocationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.listings.facets.seller_location.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingsFacetsSellerLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getListingsFacetsSellerLocationQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingsIdNegotiationQueryKey(
  args: InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>,
) {
  return ['listings', '/listings/:id/negotiation', args] as const
}

export function getListingsIdNegotiationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingsIdNegotiationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings[':id'].negotiation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingsIdNegotiation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getListingsIdNegotiationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostListingsIdOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListingsIdOfferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListingsListingIdBumpQueryKey(
  args: InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>,
) {
  return ['listings', '/listings/:listing_id/bump', args] as const
}

export function getListingsListingIdBumpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingsListingIdBumpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings[':listing_id'].bump.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingsListingIdBump<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getListingsListingIdBumpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostListingsListingIdBumpBudgetType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListingsListingIdBumpBudgetTypeMutationOptions<
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

export function createPostListingsListingIdConversations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListingsListingIdConversationsMutationOptions<
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

export function getListingsListingIdImagesQueryKey(
  args: InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>,
) {
  return ['listings', '/listings/:listing_id/images', args] as const
}

export function getListingsListingIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingsListingIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings[':listing_id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingsListingIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getListingsListingIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteListingsListingIdImagesImageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteListingsListingIdImagesImageIdMutationOptions<
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

export function getListingsListingIdSalesQueryKey(
  args: InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>,
) {
  return ['listings', '/listings/:listing_id/sales', args] as const
}

export function getListingsListingIdSalesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingsListingIdSalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings[':listing_id'].sales.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingsListingIdSales<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getListingsListingIdSalesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingsSlugQueryKey(
  args: InferRequestType<(typeof client.listings)[':slug']['$get']>,
) {
  return ['listings', '/listings/:slug', args] as const
}

export function getListingsSlugQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listings)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsSlugQueryKey>
  >({
    queryKey: getListingsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListingsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listings)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingsSlugQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutListingsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.listings)[':slug']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutListingsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteListingsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteListingsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListingsSlugEditQueryKey(
  args: InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>,
) {
  return ['listings', '/listings/:slug/edit', args] as const
}

export function getListingsSlugEditQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsSlugEditQueryKey>
  >({
    queryKey: getListingsSlugEditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings[':slug'].edit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingsSlugEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingsSlugEditQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsSlugEditQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostListingsSlugFlag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListingsSlugFlagMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListingsSlugReviewsQueryKey(
  args: InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>,
) {
  return ['listings', '/listings/:slug/reviews', args] as const
}

export function getListingsSlugReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingsSlugReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings[':slug'].reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingsSlugReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsSlugReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostListingsSlugReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListingsSlugReviewsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListingsSlugSimilarListingsQueryKey(
  args: InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>,
) {
  return ['listings', '/listings/:slug/similar_listings', args] as const
}

export function getListingsSlugSimilarListingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingsSlugSimilarListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings[':slug'].similar_listings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingsSlugSimilarListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getListingsSlugSimilarListingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMyAccountQueryKey() {
  return ['my', '/my/account'] as const
}

export function getMyAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyAccountQueryKey>
  >({
    queryKey: getMyAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyAccountQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutMyAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.my.account.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMyAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyAddressesQueryKey() {
  return ['my', '/my/addresses'] as const
}

export function getMyAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyAddressesQueryKey>
  >({
    queryKey: getMyAddressesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.addresses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyAddressesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyAddressesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostMyAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyAddressesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutMyAddressesAddressId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMyAddressesAddressIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMyAddressesAddressId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyAddressesAddressIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyConversationsQueryKey(
  args: InferRequestType<typeof client.my.conversations.$get>,
) {
  return ['my', '/my/conversations', args] as const
}

export function getMyConversationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.my.conversations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyConversationsQueryKey>
  >({
    queryKey: getMyConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.conversations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.my.conversations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyConversationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyConversationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMyConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.my.conversations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyConversationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMyConversationsConversationIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyConversationsConversationIdMessagesMutationOptions<
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

export function getMyConversationsIdQueryKey(
  args: InferRequestType<(typeof client.my.conversations)[':id']['$get']>,
) {
  return ['my', '/my/conversations/:id', args] as const
}

export function getMyConversationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.conversations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyConversationsIdQueryKey>
  >({
    queryKey: getMyConversationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.conversations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyConversationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.conversations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyConversationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyConversationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutMyConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMyConversationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyCountsQueryKey() {
  return ['my', '/my/counts'] as const
}

export function getMyCountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyCountsQueryKey>
  >({
    queryKey: getMyCountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.counts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyCounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyCountsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyCountsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostMyCuratedSetProductProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyCuratedSetProductProductIdMutationOptions<
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

export function createDeleteMyCuratedSetProductProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyCuratedSetProductProductIdMutationOptions<
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

export function getMyFeedQueryKey() {
  return ['my', '/my/feed'] as const
}

export function getMyFeedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyFeedQueryKey>
  >({
    queryKey: getMyFeedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.feed.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyFeedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFeedQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyFeedCustomizeQueryKey() {
  return ['my', '/my/feed/customize'] as const
}

export function getMyFeedCustomizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFeedCustomizeQueryKey>
  >({
    queryKey: getMyFeedCustomizeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.feed.customize.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFeedCustomize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyFeedCustomizeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFeedCustomizeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyFeedGridQueryKey() {
  return ['my', '/my/feed/grid'] as const
}

export function getMyFeedGridQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyFeedGridQueryKey>
  >({
    queryKey: getMyFeedGridQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.feed.grid.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyFeedGrid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyFeedGridQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFeedGridQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyFeedbackReceivedQueryKey() {
  return ['my', '/my/feedback/received'] as const
}

export function getMyFeedbackReceivedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFeedbackReceivedQueryKey>
  >({
    queryKey: getMyFeedbackReceivedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.feedback.received.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFeedbackReceived<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyFeedbackReceivedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFeedbackReceivedQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyFeedbackSentQueryKey() {
  return ['my', '/my/feedback/sent'] as const
}

export function getMyFeedbackSentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFeedbackSentQueryKey>
  >({
    queryKey: getMyFeedbackSentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.feedback.sent.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyFeedbackSent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyFeedbackSentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFeedbackSentQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyFollowsQueryKey() {
  return ['my', '/my/follows'] as const
}

export function getMyFollowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyFollowsQueryKey>
  >({
    queryKey: getMyFollowsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyFollows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyFollowsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFollowsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyFollowsArticlesQueryKey() {
  return ['my', '/my/follows/articles'] as const
}

export function getMyFollowsArticlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsArticlesQueryKey>
  >({
    queryKey: getMyFollowsArticlesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.articles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFollowsArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyFollowsArticlesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFollowsArticlesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostMyFollowsArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.my.follows.articles.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsArticlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyFollowsBrandsSlugQueryKey(
  args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>,
) {
  return ['my', '/my/follows/brands/:slug', args] as const
}

export function getMyFollowsBrandsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyFollowsBrandsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.brands[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFollowsBrandsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFollowsBrandsSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMyFollowsBrandsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsBrandsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMyFollowsBrandsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyFollowsBrandsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyFollowsCategoriesCategorySubcategoryQueryKey(
  args: InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
  >,
) {
  return ['my', '/my/follows/categories/:category/:subcategory', args] as const
}

export function getMyFollowsCategoriesCategorySubcategoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyFollowsCategoriesCategorySubcategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.categories[':category'][':subcategory'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFollowsCategoriesCategorySubcategory<
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
  args: () => InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getMyFollowsCategoriesCategorySubcategoryQueryKey>
        >
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
      ...getMyFollowsCategoriesCategorySubcategoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostMyFollowsCategoriesCategorySubcategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsCategoriesCategorySubcategoryMutationOptions<
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

export function createDeleteMyFollowsCategoriesCategorySubcategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyFollowsCategoriesCategorySubcategoryMutationOptions<
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

export function getMyFollowsCategoriesIdentifierQueryKey(
  args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>,
) {
  return ['my', '/my/follows/categories/:identifier', args] as const
}

export function getMyFollowsCategoriesIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyFollowsCategoriesIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.categories[':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFollowsCategoriesIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getMyFollowsCategoriesIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMyFollowsCategoriesIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsCategoriesIdentifierMutationOptions<
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

export function createDeleteMyFollowsCategoriesIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyFollowsCategoriesIdentifierMutationOptions<
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

export function createPostMyFollowsCategoriesUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsCategoriesUuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyFollowsCollectionsSlugQueryKey(
  args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>,
) {
  return ['my', '/my/follows/collections/:slug', args] as const
}

export function getMyFollowsCollectionsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyFollowsCollectionsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.collections[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFollowsCollectionsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getMyFollowsCollectionsSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMyFollowsCollectionsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsCollectionsSlugMutationOptions<
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

export function createDeleteMyFollowsCollectionsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyFollowsCollectionsSlugMutationOptions<
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

export function getMyFollowsHandpickedSlugQueryKey(
  args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>,
) {
  return ['my', '/my/follows/handpicked/:slug', args] as const
}

export function getMyFollowsHandpickedSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyFollowsHandpickedSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.handpicked[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFollowsHandpickedSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getMyFollowsHandpickedSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMyFollowsHandpickedSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsHandpickedSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMyFollowsHandpickedSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyFollowsHandpickedSlugMutationOptions<
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

export function getMyFollowsSearchQueryKey() {
  return ['my', '/my/follows/search'] as const
}

export function getMyFollowsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsSearchQueryKey>
  >({
    queryKey: getMyFollowsSearchQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.search.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFollowsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyFollowsSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFollowsSearchQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostMyFollowsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.my.follows.search.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyFollowsShopsSlugQueryKey(
  args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>,
) {
  return ['my', '/my/follows/shops/:slug', args] as const
}

export function getMyFollowsShopsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyFollowsShopsSlugQueryKey>
  >({
    queryKey: getMyFollowsShopsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.follows.shops[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyFollowsShopsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyFollowsShopsSlugQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyFollowsShopsSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMyFollowsShopsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsShopsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMyFollowsShopsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyFollowsShopsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMyFollowsFollowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyFollowsFollowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMyFollowsFollowIdAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyFollowsFollowIdAlertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMyFollowsFollowIdAlert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyFollowsFollowIdAlertMutationOptions<
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

export function getMyListingsQueryKey(args: InferRequestType<typeof client.my.listings.$get>) {
  return ['my', '/my/listings', args] as const
}

export function getMyListingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.my.listings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyListingsQueryKey>
  >({
    queryKey: getMyListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.listings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.my.listings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyListingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyListingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMyListingsDraftsQueryKey(
  args: InferRequestType<typeof client.my.listings.drafts.$get>,
) {
  return ['my', '/my/listings/drafts', args] as const
}

export function getMyListingsDraftsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.my.listings.drafts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyListingsDraftsQueryKey>
  >({
    queryKey: getMyListingsDraftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.listings.drafts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyListingsDrafts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.my.listings.drafts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyListingsDraftsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyListingsDraftsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMyListingsNegotiationsQueryKey(
  args: InferRequestType<typeof client.my.listings.negotiations.$get>,
) {
  return ['my', '/my/listings/negotiations', args] as const
}

export function getMyListingsNegotiationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.my.listings.negotiations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyListingsNegotiationsQueryKey>
  >({
    queryKey: getMyListingsNegotiationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.listings.negotiations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyListingsNegotiations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.my.listings.negotiations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyListingsNegotiationsQueryKey>
        >
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
      ...getMyListingsNegotiationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutMyListingsSlugStateEnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMyListingsSlugStateEndMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyListsQueryKey() {
  return ['my', '/my/lists'] as const
}

export function getMyListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyListsQueryKey>
  >({
    queryKey: getMyListsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.lists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyListsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyListsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyNegotiationsBuyingQueryKey(
  args: InferRequestType<typeof client.my.negotiations.buying.$get>,
) {
  return ['my', '/my/negotiations/buying', args] as const
}

export function getMyNegotiationsBuyingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.my.negotiations.buying.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyNegotiationsBuyingQueryKey>
  >({
    queryKey: getMyNegotiationsBuyingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.negotiations.buying.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyNegotiationsBuying<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.my.negotiations.buying.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyNegotiationsBuyingQueryKey>
        >
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
      ...getMyNegotiationsBuyingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMyNegotiationsIdQueryKey(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['$get']>,
) {
  return ['my', '/my/negotiations/:id', args] as const
}

export function getMyNegotiationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyNegotiationsIdQueryKey>
  >({
    queryKey: getMyNegotiationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.negotiations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyNegotiationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.negotiations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyNegotiationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyNegotiationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMyNegotiationsIdAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyNegotiationsIdAcceptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMyNegotiationsIdCounter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyNegotiationsIdCounterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMyNegotiationsIdDecline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyNegotiationsIdDeclineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMyOrdersAwaitingFeedbackQueryKey() {
  return ['my', '/my/orders/awaiting_feedback'] as const
}

export function getMyOrdersAwaitingFeedbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersAwaitingFeedbackQueryKey>
  >({
    queryKey: getMyOrdersAwaitingFeedbackQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.awaiting_feedback.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersAwaitingFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyOrdersAwaitingFeedbackQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyOrdersAwaitingFeedbackQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyOrdersBuyingAllQueryKey() {
  return ['my', '/my/orders/buying/all'] as const
}

export function getMyOrdersBuyingAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersBuyingAllQueryKey>
  >({
    queryKey: getMyOrdersBuyingAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.buying.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersBuyingAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyOrdersBuyingAllQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyOrdersBuyingAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyOrdersBuyingByUuidUuidQueryKey(
  args: InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>,
) {
  return ['my', '/my/orders/buying/by_uuid/:uuid', args] as const
}

export function getMyOrdersBuyingByUuidUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyOrdersBuyingByUuidUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.buying.by_uuid[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersBuyingByUuidUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getMyOrdersBuyingByUuidUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMyOrdersBuyingUnpaidQueryKey() {
  return ['my', '/my/orders/buying/unpaid'] as const
}

export function getMyOrdersBuyingUnpaidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersBuyingUnpaidQueryKey>
  >({
    queryKey: getMyOrdersBuyingUnpaidQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.buying.unpaid.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersBuyingUnpaid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyOrdersBuyingUnpaidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyOrdersBuyingUnpaidQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyOrdersBuyingIdQueryKey(
  args: InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>,
) {
  return ['my', '/my/orders/buying/:id', args] as const
}

export function getMyOrdersBuyingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersBuyingIdQueryKey>
  >({
    queryKey: getMyOrdersBuyingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.buying[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersBuyingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyOrdersBuyingIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyOrdersBuyingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMyOrdersBuyingIdMarkReceived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyOrdersBuyingIdMarkReceivedMutationOptions<
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

export function getMyOrdersSellingAllQueryKey() {
  return ['my', '/my/orders/selling/all'] as const
}

export function getMyOrdersSellingAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingAllQueryKey>
  >({
    queryKey: getMyOrdersSellingAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.selling.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersSellingAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyOrdersSellingAllQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyOrdersSellingAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyOrdersSellingAwaitingShipmentQueryKey() {
  return ['my', '/my/orders/selling/awaiting_shipment'] as const
}

export function getMyOrdersSellingAwaitingShipmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getMyOrdersSellingAwaitingShipmentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.selling.awaiting_shipment.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersSellingAwaitingShipment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getMyOrdersSellingAwaitingShipmentQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMyOrdersSellingBuyerHistoryBuyerIdQueryKey(
  args: InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>,
) {
  return ['my', '/my/orders/selling/buyer_history/:buyer_id', args] as const
}

export function getMyOrdersSellingBuyerHistoryBuyerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyOrdersSellingBuyerHistoryBuyerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.selling.buyer_history[':buyer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersSellingBuyerHistoryBuyerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getMyOrdersSellingBuyerHistoryBuyerIdQueryKey>
        >
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
      ...getMyOrdersSellingBuyerHistoryBuyerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMyOrdersSellingByUuidUuidQueryKey(
  args: InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>,
) {
  return ['my', '/my/orders/selling/by_uuid/:uuid', args] as const
}

export function getMyOrdersSellingByUuidUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyOrdersSellingByUuidUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.selling.by_uuid[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersSellingByUuidUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getMyOrdersSellingByUuidUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMyOrdersSellingUnpaidQueryKey() {
  return ['my', '/my/orders/selling/unpaid'] as const
}

export function getMyOrdersSellingUnpaidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingUnpaidQueryKey>
  >({
    queryKey: getMyOrdersSellingUnpaidQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.selling.unpaid.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersSellingUnpaid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyOrdersSellingUnpaidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyOrdersSellingUnpaidQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyOrdersSellingIdQueryKey(
  args: InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>,
) {
  return ['my', '/my/orders/selling/:id', args] as const
}

export function getMyOrdersSellingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyOrdersSellingIdQueryKey>
  >({
    queryKey: getMyOrdersSellingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.orders.selling[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyOrdersSellingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyOrdersSellingIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyOrdersSellingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMyOrdersSellingIdMarkPickedUp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyOrdersSellingIdMarkPickedUpMutationOptions<
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

export function createPostMyOrdersSellingIdShip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyOrdersSellingIdShipMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMyOrdersSellingOrderIdRefundRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMyOrdersSellingOrderIdRefundRequestsMutationOptions<
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

export function getMyPaymentsSellingQueryKey(
  args: InferRequestType<typeof client.my.payments.selling.$get>,
) {
  return ['my', '/my/payments/selling', args] as const
}

export function getMyPaymentsSellingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.my.payments.selling.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyPaymentsSellingQueryKey>
  >({
    queryKey: getMyPaymentsSellingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.payments.selling.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyPaymentsSelling<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.my.payments.selling.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyPaymentsSellingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyPaymentsSellingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMyPaymentsSellingIdQueryKey(
  args: InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>,
) {
  return ['my', '/my/payments/selling/:id', args] as const
}

export function getMyPaymentsSellingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyPaymentsSellingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.payments.selling[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyPaymentsSellingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyPaymentsSellingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMyPayoutsQueryKey() {
  return ['my', '/my/payouts'] as const
}

export function getMyPayoutsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyPayoutsQueryKey>
  >({
    queryKey: getMyPayoutsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.payouts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyPayouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyPayoutsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyPayoutsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyPayoutsIdLineItemsQueryKey(
  args: InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>,
) {
  return ['my', '/my/payouts/:id/line_items', args] as const
}

export function getMyPayoutsIdLineItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMyPayoutsIdLineItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.my.payouts[':id'].line_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyPayoutsIdLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getMyPayoutsIdLineItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMyRefundRequestsSellingQueryKey() {
  return ['my', '/my/refund_requests/selling'] as const
}

export function getMyRefundRequestsSellingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMyRefundRequestsSellingQueryKey>
  >({
    queryKey: getMyRefundRequestsSellingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.refund_requests.selling.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyRefundRequestsSelling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyRefundRequestsSellingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyRefundRequestsSellingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutMyRefundRequestsSellingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMyRefundRequestsSellingIdMutationOptions<
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

export function getMyViewedListingsQueryKey() {
  return ['my', '/my/viewed_listings'] as const
}

export function getMyViewedListingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMyViewedListingsQueryKey>
  >({
    queryKey: getMyViewedListingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.viewed_listings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMyViewedListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMyViewedListingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyViewedListingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMyWishlistQueryKey() {
  return ['my', '/my/wishlist'] as const
}

export function getMyWishlistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMyWishlistQueryKey>
  >({
    queryKey: getMyWishlistQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.my.wishlist.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMyWishlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMyWishlistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMyWishlistQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutMyWishlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.my.wishlist)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.my.wishlist)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMyWishlistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMyWishlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMyWishlistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrdersOrderIdFeedbackBuyerQueryKey(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>,
) {
  return ['orders', '/orders/:order_id/feedback/buyer', args] as const
}

export function getOrdersOrderIdFeedbackBuyerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrdersOrderIdFeedbackBuyerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders[':order_id'].feedback.buyer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrdersOrderIdFeedbackBuyer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrdersOrderIdFeedbackBuyerQueryKey>
        >
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
      ...getOrdersOrderIdFeedbackBuyerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrdersOrderIdFeedbackBuyer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersOrderIdFeedbackBuyerMutationOptions<
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

export function getOrdersOrderIdFeedbackSellerQueryKey(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>,
) {
  return ['orders', '/orders/:order_id/feedback/seller', args] as const
}

export function getOrdersOrderIdFeedbackSellerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrdersOrderIdFeedbackSellerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders[':order_id'].feedback.seller.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrdersOrderIdFeedbackSeller<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrdersOrderIdFeedbackSellerQueryKey>
        >
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
      ...getOrdersOrderIdFeedbackSellerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrdersOrderIdFeedbackSeller<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersOrderIdFeedbackSellerMutationOptions<
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

export function getPaymentMethodsQueryKey() {
  return ['payment_methods', '/payment_methods'] as const
}

export function getPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentMethodsQueryKey>
  >({
    queryKey: getPaymentMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_methods.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaymentMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentMethodsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentMethodsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPriceguideIdTransactionsSummaryQueryKey(
  args: InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>,
) {
  return ['priceguide', '/priceguide/:id/transactions/summary', args] as const
}

export function getPriceguideIdTransactionsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPriceguideIdTransactionsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.priceguide[':id'].transactions.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPriceguideIdTransactionsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.priceguide)[':id']['transactions']['summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getPriceguideIdTransactionsSummaryQueryKey>
        >
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
      ...getPriceguideIdTransactionsSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProductsReviewsIdQueryKey(
  args: InferRequestType<(typeof client.products.reviews)[':id']['$get']>,
) {
  return ['products', '/products/reviews/:id', args] as const
}

export function getProductsReviewsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.reviews)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsReviewsIdQueryKey>
  >({
    queryKey: getProductsReviewsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.reviews[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductsReviewsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products.reviews)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductsReviewsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsReviewsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutProductsReviewsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProductsReviewsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductsSlugReviewsQueryKey(
  args: InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>,
) {
  return ['products', '/products/:slug/reviews', args] as const
}

export function getProductsSlugReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProductsSlugReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products[':slug'].reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductsSlugReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsSlugReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProductsSlugReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductsSlugReviewsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSalesReverbQueryKey() {
  return ['sales', '/sales/reverb'] as const
}

export function getSalesReverbQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesReverbQueryKey>
  >({
    queryKey: getSalesReverbQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sales.reverb.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSalesReverb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSalesReverbQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesReverbQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSalesSellerQueryKey() {
  return ['sales', '/sales/seller'] as const
}

export function getSalesSellerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesSellerQueryKey>
  >({
    queryKey: getSalesSellerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sales.seller.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSalesSeller<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSalesSellerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesSellerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostSalesSaleIdListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSalesSaleIdListingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSalesSaleIdListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSalesSaleIdListingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSalesSlugQueryKey(
  args: InferRequestType<(typeof client.sales)[':slug']['$get']>,
) {
  return ['sales', '/sales/:slug', args] as const
}

export function getSalesSlugQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.sales)[':slug']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSalesSlugQueryKey>
  >({
    queryKey: getSalesSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSalesSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sales)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSalesSlugQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getShippingProvidersQueryKey() {
  return ['shipping', '/shipping/providers'] as const
}

export function getShippingProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShippingProvidersQueryKey>
  >({
    queryKey: getShippingProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shipping.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShippingProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShippingProvidersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShippingProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShippingRegionsQueryKey() {
  return ['shipping', '/shipping/regions'] as const
}

export function getShippingRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShippingRegionsQueryKey>
  >({
    queryKey: getShippingRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shipping.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShippingRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShippingRegionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShippingRegionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShopQueryKey() {
  return ['shop', '/shop'] as const
}

export function getShopQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShopQueryKey>
  >({
    queryKey: getShopQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shop.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShop<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getShopQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShopQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutShop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$put>>>>>,
          TError,
          InferRequestType<typeof client.shop.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutShopMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShopListingConditionsQueryKey() {
  return ['shop', '/shop/listing_conditions'] as const
}

export function getShopListingConditionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShopListingConditionsQueryKey>
  >({
    queryKey: getShopListingConditionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shop.listing_conditions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShopListingConditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShopListingConditionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShopListingConditionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShopPaymentMethodsQueryKey() {
  return ['shop', '/shop/payment_methods'] as const
}

export function getShopPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShopPaymentMethodsQueryKey>
  >({
    queryKey: getShopPaymentMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shop.payment_methods.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShopPaymentMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShopPaymentMethodsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShopPaymentMethodsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShopVacationQueryKey() {
  return ['shop', '/shop/vacation'] as const
}

export function getShopVacationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShopVacationQueryKey>
  >({
    queryKey: getShopVacationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shop.vacation.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShopVacation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getShopVacationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShopVacationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostShopVacation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostShopVacationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteShopVacation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$delete>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteShopVacationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShopsIdStorefrontsQueryKey(
  args: InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>,
) {
  return ['shops', '/shops/:id/storefronts', args] as const
}

export function getShopsIdStorefrontsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getShopsIdStorefrontsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shops[':id'].storefronts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShopsIdStorefronts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShopsIdStorefrontsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getShopsShopIdShippingProfilesQueryKey(
  args: InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>,
) {
  return ['shops', '/shops/:shop_id/shipping_profiles', args] as const
}

export function getShopsShopIdShippingProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getShopsShopIdShippingProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shops[':shop_id'].shipping_profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShopsShopIdShippingProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getShopsShopIdShippingProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getShopsSlugQueryKey(
  args: InferRequestType<(typeof client.shops)[':slug']['$get']>,
) {
  return ['shops', '/shops/:slug', args] as const
}

export function getShopsSlugQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.shops)[':slug']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShopsSlugQueryKey>
  >({
    queryKey: getShopsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shops[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShopsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shops)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShopsSlugQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShopsSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getShopsSlugFeedbackQueryKey(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>,
) {
  return ['shops', '/shops/:slug/feedback', args] as const
}

export function getShopsSlugFeedbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getShopsSlugFeedbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shops[':slug'].feedback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShopsSlugFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShopsSlugFeedbackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getShopsSlugFeedbackBuyerQueryKey(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>,
) {
  return ['shops', '/shops/:slug/feedback/buyer', args] as const
}

export function getShopsSlugFeedbackBuyerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getShopsSlugFeedbackBuyerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shops[':slug'].feedback.buyer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShopsSlugFeedbackBuyer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getShopsSlugFeedbackBuyerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getShopsSlugFeedbackSellerQueryKey(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>,
) {
  return ['shops', '/shops/:slug/feedback/seller', args] as const
}

export function getShopsSlugFeedbackSellerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getShopsSlugFeedbackSellerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shops[':slug'].feedback.seller.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShopsSlugFeedbackSeller<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getShopsSlugFeedbackSellerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWantsQueryKey() {
  return ['wants', '/wants'] as const
}

export function getWantsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWantsQueryKey>
  >({
    queryKey: getWantsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.wants.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWants<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getWantsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWantsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutWantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wants)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.wants)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWantsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wants)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.wants)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWantsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksRegistrationsQueryKey() {
  return ['webhooks', '/webhooks/registrations'] as const
}

export function getWebhooksRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksRegistrationsQueryKey>
  >({
    queryKey: getWebhooksRegistrationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.registrations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksRegistrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhooksRegistrationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksRegistrationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostWebhooksRegistrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhooks.registrations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksRegistrationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksRegistrationsIdQueryKey(
  args: InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>,
) {
  return ['webhooks', '/webhooks/registrations/:id', args] as const
}

export function getWebhooksRegistrationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebhooksRegistrationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.registrations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksRegistrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getWebhooksRegistrationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteWebhooksRegistrationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksRegistrationsIdMutationOptions<
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
