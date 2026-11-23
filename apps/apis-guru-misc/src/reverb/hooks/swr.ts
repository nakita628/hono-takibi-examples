import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetArticlesKey(args: InferRequestType<typeof client.articles.$get>) {
  return ['articles', '/articles', args] as const
}

export function useGetArticles<TError = unknown>(
  args: InferRequestType<typeof client.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.articles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetArticles<TError = unknown>(
  args: InferRequestType<typeof client.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.articles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetArticlesCategoriesKey() {
  return ['articles', '/articles/categories'] as const
}

export function useGetArticlesCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.articles.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesKey() {
  return ['categories', '/categories'] as const
}

export function useGetCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesFlatKey() {
  return ['categories', '/categories/flat'] as const
}

export function useGetCategoriesFlat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesFlatKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.flat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesFlat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesFlatKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.flat.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.flat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesTaxonomyKey() {
  return ['categories', '/categories/taxonomy'] as const
}

export function useGetCategoriesTaxonomy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesTaxonomyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.taxonomy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesTaxonomy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesTaxonomyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categories.taxonomy.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.taxonomy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesProductTypeCategoryKey(
  args: InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>,
) {
  return ['categories', '/categories/:product_type/:category', args] as const
}

export function useGetCategoriesProductTypeCategory<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesProductTypeCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.categories[':product_type'][':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesProductTypeCategory<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesProductTypeCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':product_type'][':category']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.categories[':product_type'][':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesUuidKey(
  args: InferRequestType<(typeof client.categories)[':uuid']['$get']>,
) {
  return ['categories', '/categories/:uuid', args] as const
}

export function useGetCategoriesUuid<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesUuid<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComparisonShoppingPagesKey() {
  return ['comparison_shopping_pages', '/comparison_shopping_pages'] as const
}

export function useGetComparisonShoppingPages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comparison_shopping_pages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComparisonShoppingPages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.comparison_shopping_pages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comparison_shopping_pages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComparisonShoppingPagesFindKey(
  args: InferRequestType<typeof client.comparison_shopping_pages.find.$get>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/find', args] as const
}

export function useGetComparisonShoppingPagesFind<TError = unknown>(
  args: InferRequestType<typeof client.comparison_shopping_pages.find.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesFindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comparison_shopping_pages.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComparisonShoppingPagesFind<TError = unknown>(
  args: InferRequestType<typeof client.comparison_shopping_pages.find.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesFindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.comparison_shopping_pages.find.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comparison_shopping_pages.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComparisonShoppingPagesIdKey(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/:id', args] as const
}

export function useGetComparisonShoppingPagesId<TError = unknown>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comparison_shopping_pages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComparisonShoppingPagesId<TError = unknown>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comparison_shopping_pages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComparisonShoppingPagesIdListingsKey(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/:id/listings', args] as const
}

export function useGetComparisonShoppingPagesIdListings<TError = unknown>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesIdListingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comparison_shopping_pages[':id'].listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComparisonShoppingPagesIdListings<TError = unknown>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesIdListingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comparison_shopping_pages[':id'].listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComparisonShoppingPagesIdReviewsKey(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>,
) {
  return ['comparison_shopping_pages', '/comparison_shopping_pages/:id/reviews', args] as const
}

export function useGetComparisonShoppingPagesIdReviews<TError = unknown>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesIdReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comparison_shopping_pages[':id'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComparisonShoppingPagesIdReviews<TError = unknown>(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComparisonShoppingPagesIdReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comparison_shopping_pages[':id'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConversationIdOfferKey() {
  return ['conversations', '/conversations/:conversation_id/offer', 'POST'] as const
}

export function usePostConversationsConversationIdOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['offer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['offer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdOfferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':conversation_id']['offer']['$post']>
        },
      ) => parseResponse(client.conversations[':conversation_id'].offer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsIdOfferKey() {
  return ['conversations', '/conversations/:id/offer', 'POST'] as const
}

export function usePostConversationsIdOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':id']['offer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':id']['offer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsIdOfferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversations)[':id']['offer']['$post']> },
      ) => parseResponse(client.conversations[':id'].offer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCountriesKey() {
  return ['countries', '/countries'] as const
}

export function useGetCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCspsKey() {
  return ['csps', '/csps'] as const
}

export function useGetCsps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetCspsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.csps.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCsps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetCspsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.csps.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCspsCategoriesKey() {
  return ['csps', '/csps/categories'] as const
}

export function useGetCspsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCspsCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.csps.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCspsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCspsCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.csps.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCspsFindKey(args: InferRequestType<typeof client.csps.find.$get>) {
  return ['csps', '/csps/find', args] as const
}

export function useGetCspsFind<TError = unknown>(
  args: InferRequestType<typeof client.csps.find.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCspsFindKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.csps.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCspsFind<TError = unknown>(
  args: InferRequestType<typeof client.csps.find.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCspsFindKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csps.find.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.csps.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCspsIdKey(args: InferRequestType<(typeof client.csps)[':id']['$get']>) {
  return ['csps', '/csps/:id', args] as const
}

export function useGetCspsId<TError = unknown>(
  args: InferRequestType<(typeof client.csps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCspsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.csps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCspsId<TError = unknown>(
  args: InferRequestType<(typeof client.csps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCspsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.csps)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.csps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCuratedSetsSlugKey(
  args: InferRequestType<(typeof client.curated_sets)[':slug']['$get']>,
) {
  return ['curated_sets', '/curated_sets/:slug', args] as const
}

export function useGetCuratedSetsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.curated_sets)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCuratedSetsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curated_sets[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCuratedSetsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.curated_sets)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCuratedSetsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.curated_sets)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curated_sets[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCurrenciesDisplayKey() {
  return ['currencies', '/currencies/display'] as const
}

export function useGetCurrenciesDisplay<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesDisplayKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies.display.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurrenciesDisplay<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesDisplayKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.display.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies.display.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCurrenciesListingKey() {
  return ['currencies', '/currencies/listing'] as const
}

export function useGetCurrenciesListing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesListingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies.listing.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurrenciesListing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesListingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.listing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies.listing.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeedbackFeedbackIdKey(
  args: InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>,
) {
  return ['feedback', '/feedback/:feedback_id', args] as const
}

export function useGetFeedbackFeedbackId<TError = unknown>(
  args: InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeedbackFeedbackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feedback[':feedback_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedbackFeedbackId<TError = unknown>(
  args: InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeedbackFeedbackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.feedback)[':feedback_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feedback[':feedback_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHandpickedSlugKey(
  args: InferRequestType<(typeof client.handpicked)[':slug']['$get']>,
) {
  return ['handpicked', '/handpicked/:slug', args] as const
}

export function useGetHandpickedSlug<TError = unknown>(
  args: InferRequestType<(typeof client.handpicked)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHandpickedSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.handpicked[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHandpickedSlug<TError = unknown>(
  args: InferRequestType<(typeof client.handpicked)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHandpickedSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.handpicked)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.handpicked[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingConditionsKey() {
  return ['listing_conditions', '/listing_conditions'] as const
}

export function useGetListingConditions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingConditionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing_conditions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingConditions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingConditionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_conditions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing_conditions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsKey(args: InferRequestType<typeof client.listings.$get>) {
  return ['listings', '/listings', args] as const
}

export function useGetListings<TError = unknown>(
  args: InferRequestType<typeof client.listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.listings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetListings<TError = unknown>(
  args: InferRequestType<typeof client.listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.listings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostListingsKey() {
  return ['listings', '/listings', 'POST'] as const
}

export function usePostListings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listings.$post> }) =>
        parseResponse(client.listings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListingsAllKey(args: InferRequestType<typeof client.listings.all.$get>) {
  return ['listings', '/listings/all', args] as const
}

export function useGetListingsAll<TError = unknown>(
  args: InferRequestType<typeof client.listings.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsAll<TError = unknown>(
  args: InferRequestType<typeof client.listings.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsFacetsSellerLocationKey() {
  return ['listings', '/listings/facets/seller_location'] as const
}

export function useGetListingsFacetsSellerLocation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsFacetsSellerLocationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.listings.facets.seller_location.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsFacetsSellerLocation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsFacetsSellerLocationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.listings.facets.seller_location.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.listings.facets.seller_location.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsIdNegotiationKey(
  args: InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>,
) {
  return ['listings', '/listings/:id/negotiation', args] as const
}

export function useGetListingsIdNegotiation<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsIdNegotiationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':id'].negotiation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsIdNegotiation<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsIdNegotiationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':id']['negotiation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':id'].negotiation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListingsIdOfferKey() {
  return ['listings', '/listings/:id/offer', 'POST'] as const
}

export function usePostListingsIdOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':id']['offer']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.listings)[':id']['offer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListingsIdOfferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.listings)[':id']['offer']['$post']> },
      ) => parseResponse(client.listings[':id'].offer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListingsListingIdBumpKey(
  args: InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>,
) {
  return ['listings', '/listings/:listing_id/bump', args] as const
}

export function useGetListingsListingIdBump<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsListingIdBumpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':listing_id'].bump.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsListingIdBump<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsListingIdBumpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['bump']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':listing_id'].bump.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListingsListingIdBumpBudgetTypeKey() {
  return ['listings', '/listings/:listing_id/bump/:budget_type', 'POST'] as const
}

export function usePostListingsListingIdBumpBudgetType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.listings)[':listing_id']['bump'][':budget_type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListingsListingIdBumpBudgetTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.listings)[':listing_id']['bump'][':budget_type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.listings[':listing_id'].bump[':budget_type'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostListingsListingIdConversationsKey() {
  return ['listings', '/listings/:listing_id/conversations', 'POST'] as const
}

export function usePostListingsListingIdConversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':listing_id']['conversations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.listings)[':listing_id']['conversations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListingsListingIdConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.listings)[':listing_id']['conversations']['$post']>
        },
      ) => parseResponse(client.listings[':listing_id'].conversations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListingsListingIdImagesKey(
  args: InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>,
) {
  return ['listings', '/listings/:listing_id/images', args] as const
}

export function useGetListingsListingIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsListingIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':listing_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsListingIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsListingIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':listing_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteListingsListingIdImagesImageIdKey() {
  return ['listings', '/listings/:listing_id/images/:image_id', 'DELETE'] as const
}

export function useDeleteListingsListingIdImagesImageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.listings)[':listing_id']['images'][':image_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteListingsListingIdImagesImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.listings)[':listing_id']['images'][':image_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.listings[':listing_id'].images[':image_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetListingsListingIdSalesKey(
  args: InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>,
) {
  return ['listings', '/listings/:listing_id/sales', args] as const
}

export function useGetListingsListingIdSales<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsListingIdSalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':listing_id'].sales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsListingIdSales<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsListingIdSalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':listing_id']['sales']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':listing_id'].sales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsSlugKey(
  args: InferRequestType<(typeof client.listings)[':slug']['$get']>,
) {
  return ['listings', '/listings/:slug', args] as const
}

export function useGetListingsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListingsSlugKey() {
  return ['listings', '/listings/:slug', 'PUT'] as const
}

export function usePutListingsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.listings)[':slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListingsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.listings)[':slug']['$put']> },
      ) => parseResponse(client.listings[':slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteListingsSlugKey() {
  return ['listings', '/listings/:slug', 'DELETE'] as const
}

export function useDeleteListingsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listings)[':slug']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.listings)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteListingsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.listings)[':slug']['$delete']> },
      ) => parseResponse(client.listings[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListingsSlugEditKey(
  args: InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>,
) {
  return ['listings', '/listings/:slug/edit', args] as const
}

export function useGetListingsSlugEdit<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsSlugEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':slug'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsSlugEdit<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsSlugEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':slug'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListingsSlugFlagKey() {
  return ['listings', '/listings/:slug/flag', 'POST'] as const
}

export function usePostListingsSlugFlag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':slug']['flag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.listings)[':slug']['flag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListingsSlugFlagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.listings)[':slug']['flag']['$post']> },
      ) => parseResponse(client.listings[':slug'].flag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListingsSlugReviewsKey(
  args: InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>,
) {
  return ['listings', '/listings/:slug/reviews', args] as const
}

export function useGetListingsSlugReviews<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsSlugReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':slug'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsSlugReviews<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsSlugReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings[':slug'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListingsSlugReviewsKey() {
  return ['listings', '/listings/:slug/reviews', 'POST'] as const
}

export function usePostListingsSlugReviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.listings)[':slug']['reviews']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.listings)[':slug']['reviews']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListingsSlugReviewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.listings)[':slug']['reviews']['$post']> },
      ) => parseResponse(client.listings[':slug'].reviews.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListingsSlugSimilarListingsKey(
  args: InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>,
) {
  return ['listings', '/listings/:slug/similar_listings', args] as const
}

export function useGetListingsSlugSimilarListings<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsSlugSimilarListingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.listings[':slug'].similar_listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsSlugSimilarListings<TError = unknown>(
  args: InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingsSlugSimilarListingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listings)[':slug']['similar_listings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.listings[':slug'].similar_listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyAccountKey() {
  return ['my', '/my/account'] as const
}

export function useGetMyAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMyAccountKey() {
  return ['my', '/my/account', 'PUT'] as const
}

export function usePutMyAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.account.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.my.account.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMyAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.my.account.$put> }) =>
        parseResponse(client.my.account.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyAddressesKey() {
  return ['my', '/my/addresses'] as const
}

export function useGetMyAddresses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyAddressesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.addresses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyAddresses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyAddressesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.addresses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyAddressesKey() {
  return ['my', '/my/addresses', 'POST'] as const
}

export function usePostMyAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.addresses.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.my.addresses.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMyAddressesAddressIdKey() {
  return ['my', '/my/addresses/:address_id', 'PUT'] as const
}

export function usePutMyAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.addresses)[':address_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.addresses)[':address_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMyAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.addresses)[':address_id']['$put']> },
      ) => parseResponse(client.my.addresses[':address_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyAddressesAddressIdKey() {
  return ['my', '/my/addresses/:address_id', 'DELETE'] as const
}

export function useDeleteMyAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.addresses)[':address_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.addresses)[':address_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.addresses)[':address_id']['$delete']> },
      ) => parseResponse(client.my.addresses[':address_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyConversationsKey(
  args: InferRequestType<typeof client.my.conversations.$get>,
) {
  return ['my', '/my/conversations', args] as const
}

export function useGetMyConversations<TError = unknown>(
  args: InferRequestType<typeof client.my.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyConversations<TError = unknown>(
  args: InferRequestType<typeof client.my.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyConversationsKey() {
  return ['my', '/my/conversations', 'POST'] as const
}

export function usePostMyConversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.conversations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.my.conversations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.my.conversations.$post> }) =>
        parseResponse(client.my.conversations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMyConversationsConversationIdMessagesKey() {
  return ['my', '/my/conversations/:conversation_id/messages', 'POST'] as const
}

export function usePostMyConversationsConversationIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.my.conversations)[':conversation_id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyConversationsConversationIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.my.conversations)[':conversation_id']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.my.conversations[':conversation_id'].messages.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMyConversationsIdKey(
  args: InferRequestType<(typeof client.my.conversations)[':id']['$get']>,
) {
  return ['my', '/my/conversations/:id', args] as const
}

export function useGetMyConversationsId<TError = unknown>(
  args: InferRequestType<(typeof client.my.conversations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyConversationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.conversations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyConversationsId<TError = unknown>(
  args: InferRequestType<(typeof client.my.conversations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyConversationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.conversations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMyConversationsIdKey() {
  return ['my', '/my/conversations/:id', 'PUT'] as const
}

export function usePutMyConversationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.conversations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.conversations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMyConversationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.conversations)[':id']['$put']> },
      ) => parseResponse(client.my.conversations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyCountsKey() {
  return ['my', '/my/counts'] as const
}

export function useGetMyCounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyCountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.counts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyCounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyCountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.counts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.counts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyCuratedSetProductProductIdKey() {
  return ['my', '/my/curated_set/product/:product_id', 'POST'] as const
}

export function usePostMyCuratedSetProductProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.curated_set.product)[':product_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyCuratedSetProductProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$post']>
        },
      ) => parseResponse(client.my.curated_set.product[':product_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyCuratedSetProductProductIdKey() {
  return ['my', '/my/curated_set/product/:product_id', 'DELETE'] as const
}

export function useDeleteMyCuratedSetProductProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.curated_set.product)[':product_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyCuratedSetProductProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$delete']>
        },
      ) => parseResponse(client.my.curated_set.product[':product_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyFeedKey() {
  return ['my', '/my/feed'] as const
}

export function useGetMyFeed<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feed.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFeed<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feed.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyFeedCustomizeKey() {
  return ['my', '/my/feed/customize'] as const
}

export function useGetMyFeedCustomize<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedCustomizeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feed.customize.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFeedCustomize<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedCustomizeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.customize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feed.customize.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyFeedGridKey() {
  return ['my', '/my/feed/grid'] as const
}

export function useGetMyFeedGrid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedGridKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feed.grid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFeedGrid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedGridKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feed.grid.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feed.grid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyFeedbackReceivedKey() {
  return ['my', '/my/feedback/received'] as const
}

export function useGetMyFeedbackReceived<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedbackReceivedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feedback.received.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFeedbackReceived<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedbackReceivedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.received.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feedback.received.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyFeedbackSentKey() {
  return ['my', '/my/feedback/sent'] as const
}

export function useGetMyFeedbackSent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedbackSentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feedback.sent.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFeedbackSent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFeedbackSentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.feedback.sent.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.feedback.sent.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyFollowsKey() {
  return ['my', '/my/follows'] as const
}

export function useGetMyFollows<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFollowsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollows<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFollowsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyFollowsArticlesKey() {
  return ['my', '/my/follows/articles'] as const
}

export function useGetMyFollowsArticles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFollowsArticlesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.articles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollowsArticles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFollowsArticlesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.articles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyFollowsArticlesKey() {
  return ['my', '/my/follows/articles', 'POST'] as const
}

export function usePostMyFollowsArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.articles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.my.follows.articles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.my.follows.articles.$post> }) =>
        parseResponse(client.my.follows.articles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyFollowsBrandsSlugKey(
  args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>,
) {
  return ['my', '/my/follows/brands/:slug', args] as const
}

export function useGetMyFollowsBrandsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsBrandsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.brands[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollowsBrandsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsBrandsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.brands[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyFollowsBrandsSlugKey() {
  return ['my', '/my/follows/brands/:slug', 'POST'] as const
}

export function usePostMyFollowsBrandsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.brands)[':slug']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsBrandsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.follows.brands)[':slug']['$post']> },
      ) => parseResponse(client.my.follows.brands[':slug'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyFollowsBrandsSlugKey() {
  return ['my', '/my/follows/brands/:slug', 'DELETE'] as const
}

export function useDeleteMyFollowsBrandsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.brands)[':slug']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.brands)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyFollowsBrandsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.follows.brands)[':slug']['$delete']> },
      ) => parseResponse(client.my.follows.brands[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyFollowsCategoriesCategorySubcategoryKey(
  args: InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
  >,
) {
  return ['my', '/my/follows/categories/:category/:subcategory', args] as const
}

export function useGetMyFollowsCategoriesCategorySubcategory<TError = unknown>(
  args: InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsCategoriesCategorySubcategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.my.follows.categories[':category'][':subcategory'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollowsCategoriesCategorySubcategory<TError = unknown>(
  args: InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsCategoriesCategorySubcategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.my.follows.categories)[':category'][':subcategory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.my.follows.categories[':category'][':subcategory'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMyFollowsCategoriesCategorySubcategoryKey() {
  return ['my', '/my/follows/categories/:category/:subcategory', 'POST'] as const
}

export function usePostMyFollowsCategoriesCategorySubcategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.my.follows.categories)[':category'][':subcategory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsCategoriesCategorySubcategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.my.follows.categories)[':category'][':subcategory']['$post']
          >
        },
      ) =>
        parseResponse(
          client.my.follows.categories[':category'][':subcategory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyFollowsCategoriesCategorySubcategoryKey() {
  return ['my', '/my/follows/categories/:category/:subcategory', 'DELETE'] as const
}

export function useDeleteMyFollowsCategoriesCategorySubcategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.my.follows.categories)[':category'][':subcategory']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyFollowsCategoriesCategorySubcategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.my.follows.categories)[':category'][':subcategory']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.my.follows.categories[':category'][':subcategory'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMyFollowsCategoriesIdentifierKey(
  args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>,
) {
  return ['my', '/my/follows/categories/:identifier', args] as const
}

export function useGetMyFollowsCategoriesIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsCategoriesIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.my.follows.categories[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollowsCategoriesIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsCategoriesIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.my.follows.categories[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyFollowsCategoriesIdentifierKey() {
  return ['my', '/my/follows/categories/:identifier', 'POST'] as const
}

export function usePostMyFollowsCategoriesIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.categories)[':identifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsCategoriesIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$post']> },
      ) => parseResponse(client.my.follows.categories[':identifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyFollowsCategoriesIdentifierKey() {
  return ['my', '/my/follows/categories/:identifier', 'DELETE'] as const
}

export function useDeleteMyFollowsCategoriesIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.categories)[':identifier']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.categories)[':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyFollowsCategoriesIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$delete']>
        },
      ) => parseResponse(client.my.follows.categories[':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMyFollowsCategoriesUuidKey() {
  return ['my', '/my/follows/categories/:uuid', 'POST'] as const
}

export function usePostMyFollowsCategoriesUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.categories)[':uuid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.categories)[':uuid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsCategoriesUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.follows.categories)[':uuid']['$post']> },
      ) => parseResponse(client.my.follows.categories[':uuid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyFollowsCollectionsSlugKey(
  args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>,
) {
  return ['my', '/my/follows/collections/:slug', args] as const
}

export function useGetMyFollowsCollectionsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsCollectionsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.collections[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollowsCollectionsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsCollectionsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.collections[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyFollowsCollectionsSlugKey() {
  return ['my', '/my/follows/collections/:slug', 'POST'] as const
}

export function usePostMyFollowsCollectionsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.collections)[':slug']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsCollectionsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.follows.collections)[':slug']['$post']> },
      ) => parseResponse(client.my.follows.collections[':slug'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyFollowsCollectionsSlugKey() {
  return ['my', '/my/follows/collections/:slug', 'DELETE'] as const
}

export function useDeleteMyFollowsCollectionsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.collections)[':slug']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.collections)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyFollowsCollectionsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.follows.collections)[':slug']['$delete']> },
      ) => parseResponse(client.my.follows.collections[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyFollowsHandpickedSlugKey(
  args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>,
) {
  return ['my', '/my/follows/handpicked/:slug', args] as const
}

export function useGetMyFollowsHandpickedSlug<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsHandpickedSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.handpicked[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollowsHandpickedSlug<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsHandpickedSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.handpicked[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyFollowsHandpickedSlugKey() {
  return ['my', '/my/follows/handpicked/:slug', 'POST'] as const
}

export function usePostMyFollowsHandpickedSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsHandpickedSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$post']> },
      ) => parseResponse(client.my.follows.handpicked[':slug'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyFollowsHandpickedSlugKey() {
  return ['my', '/my/follows/handpicked/:slug', 'DELETE'] as const
}

export function useDeleteMyFollowsHandpickedSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.handpicked)[':slug']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyFollowsHandpickedSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$delete']> },
      ) => parseResponse(client.my.follows.handpicked[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyFollowsSearchKey() {
  return ['my', '/my/follows/search'] as const
}

export function useGetMyFollowsSearch<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFollowsSearchKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.search.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollowsSearch<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyFollowsSearchKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.search.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyFollowsSearchKey() {
  return ['my', '/my/follows/search', 'POST'] as const
}

export function usePostMyFollowsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.follows.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.my.follows.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.my.follows.search.$post> }) =>
        parseResponse(client.my.follows.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyFollowsShopsSlugKey(
  args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>,
) {
  return ['my', '/my/follows/shops/:slug', args] as const
}

export function useGetMyFollowsShopsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsShopsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.shops[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyFollowsShopsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyFollowsShopsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.follows.shops[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyFollowsShopsSlugKey() {
  return ['my', '/my/follows/shops/:slug', 'POST'] as const
}

export function usePostMyFollowsShopsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.shops)[':slug']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsShopsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.follows.shops)[':slug']['$post']> },
      ) => parseResponse(client.my.follows.shops[':slug'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyFollowsShopsSlugKey() {
  return ['my', '/my/follows/shops/:slug', 'DELETE'] as const
}

export function useDeleteMyFollowsShopsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows.shops)[':slug']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows.shops)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyFollowsShopsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.follows.shops)[':slug']['$delete']> },
      ) => parseResponse(client.my.follows.shops[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyFollowsFollowIdKey() {
  return ['my', '/my/follows/:follow_id', 'DELETE'] as const
}

export function useDeleteMyFollowsFollowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows)[':follow_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyFollowsFollowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.follows)[':follow_id']['$delete']> },
      ) => parseResponse(client.my.follows[':follow_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMyFollowsFollowIdAlertKey() {
  return ['my', '/my/follows/:follow_id/alert', 'POST'] as const
}

export function usePostMyFollowsFollowIdAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['alert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyFollowsFollowIdAlertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$post']> },
      ) => parseResponse(client.my.follows[':follow_id'].alert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyFollowsFollowIdAlertKey() {
  return ['my', '/my/follows/:follow_id/alert', 'DELETE'] as const
}

export function useDeleteMyFollowsFollowIdAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.follows)[':follow_id']['alert']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyFollowsFollowIdAlertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$delete']> },
      ) => parseResponse(client.my.follows[':follow_id'].alert.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyListingsKey(args: InferRequestType<typeof client.my.listings.$get>) {
  return ['my', '/my/listings', args] as const
}

export function useGetMyListings<TError = unknown>(
  args: InferRequestType<typeof client.my.listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyListingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyListings<TError = unknown>(
  args: InferRequestType<typeof client.my.listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyListingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyListingsDraftsKey(
  args: InferRequestType<typeof client.my.listings.drafts.$get>,
) {
  return ['my', '/my/listings/drafts', args] as const
}

export function useGetMyListingsDrafts<TError = unknown>(
  args: InferRequestType<typeof client.my.listings.drafts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyListingsDraftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.listings.drafts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyListingsDrafts<TError = unknown>(
  args: InferRequestType<typeof client.my.listings.drafts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyListingsDraftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.drafts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.listings.drafts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyListingsNegotiationsKey(
  args: InferRequestType<typeof client.my.listings.negotiations.$get>,
) {
  return ['my', '/my/listings/negotiations', args] as const
}

export function useGetMyListingsNegotiations<TError = unknown>(
  args: InferRequestType<typeof client.my.listings.negotiations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyListingsNegotiationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.listings.negotiations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyListingsNegotiations<TError = unknown>(
  args: InferRequestType<typeof client.my.listings.negotiations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyListingsNegotiationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.listings.negotiations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.listings.negotiations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMyListingsSlugStateEndKey() {
  return ['my', '/my/listings/:slug/state/end', 'PUT'] as const
}

export function usePutMyListingsSlugStateEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.listings)[':slug']['state']['end']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.listings)[':slug']['state']['end']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMyListingsSlugStateEndKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.listings)[':slug']['state']['end']['$put']> },
      ) => parseResponse(client.my.listings[':slug'].state.end.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyListsKey() {
  return ['my', '/my/lists'] as const
}

export function useGetMyLists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyListsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.lists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyLists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyListsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.lists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.lists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyNegotiationsBuyingKey(
  args: InferRequestType<typeof client.my.negotiations.buying.$get>,
) {
  return ['my', '/my/negotiations/buying', args] as const
}

export function useGetMyNegotiationsBuying<TError = unknown>(
  args: InferRequestType<typeof client.my.negotiations.buying.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyNegotiationsBuyingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.negotiations.buying.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyNegotiationsBuying<TError = unknown>(
  args: InferRequestType<typeof client.my.negotiations.buying.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyNegotiationsBuyingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.negotiations.buying.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.negotiations.buying.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyNegotiationsIdKey(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['$get']>,
) {
  return ['my', '/my/negotiations/:id', args] as const
}

export function useGetMyNegotiationsId<TError = unknown>(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyNegotiationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.negotiations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyNegotiationsId<TError = unknown>(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyNegotiationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.negotiations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.negotiations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyNegotiationsIdAcceptKey() {
  return ['my', '/my/negotiations/:id/accept', 'POST'] as const
}

export function usePostMyNegotiationsIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.negotiations)[':id']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.negotiations)[':id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyNegotiationsIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.negotiations)[':id']['accept']['$post']> },
      ) => parseResponse(client.my.negotiations[':id'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMyNegotiationsIdCounterKey() {
  return ['my', '/my/negotiations/:id/counter', 'POST'] as const
}

export function usePostMyNegotiationsIdCounter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.negotiations)[':id']['counter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.negotiations)[':id']['counter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyNegotiationsIdCounterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.negotiations)[':id']['counter']['$post']> },
      ) => parseResponse(client.my.negotiations[':id'].counter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMyNegotiationsIdDeclineKey() {
  return ['my', '/my/negotiations/:id/decline', 'POST'] as const
}

export function usePostMyNegotiationsIdDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.negotiations)[':id']['decline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.negotiations)[':id']['decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyNegotiationsIdDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.negotiations)[':id']['decline']['$post']> },
      ) => parseResponse(client.my.negotiations[':id'].decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyOrdersAwaitingFeedbackKey() {
  return ['my', '/my/orders/awaiting_feedback'] as const
}

export function useGetMyOrdersAwaitingFeedback<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersAwaitingFeedbackKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.awaiting_feedback.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersAwaitingFeedback<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersAwaitingFeedbackKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.awaiting_feedback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.awaiting_feedback.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersBuyingAllKey() {
  return ['my', '/my/orders/buying/all'] as const
}

export function useGetMyOrdersBuyingAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyOrdersBuyingAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.buying.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersBuyingAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyOrdersBuyingAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.buying.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersBuyingByUuidUuidKey(
  args: InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>,
) {
  return ['my', '/my/orders/buying/by_uuid/:uuid', args] as const
}

export function useGetMyOrdersBuyingByUuidUuid<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersBuyingByUuidUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.buying.by_uuid[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersBuyingByUuidUuid<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersBuyingByUuidUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.buying.by_uuid[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersBuyingUnpaidKey() {
  return ['my', '/my/orders/buying/unpaid'] as const
}

export function useGetMyOrdersBuyingUnpaid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersBuyingUnpaidKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.buying.unpaid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersBuyingUnpaid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersBuyingUnpaidKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.buying.unpaid.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.buying.unpaid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersBuyingIdKey(
  args: InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>,
) {
  return ['my', '/my/orders/buying/:id', args] as const
}

export function useGetMyOrdersBuyingId<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersBuyingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.buying[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersBuyingId<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersBuyingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.buying[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyOrdersBuyingIdMarkReceivedKey() {
  return ['my', '/my/orders/buying/:id/mark_received', 'POST'] as const
}

export function usePostMyOrdersBuyingIdMarkReceived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyOrdersBuyingIdMarkReceivedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>
        },
      ) => parseResponse(client.my.orders.buying[':id'].mark_received.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyOrdersSellingAllKey() {
  return ['my', '/my/orders/selling/all'] as const
}

export function useGetMyOrdersSellingAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyOrdersSellingAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.selling.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersSellingAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyOrdersSellingAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.selling.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersSellingAwaitingShipmentKey() {
  return ['my', '/my/orders/selling/awaiting_shipment'] as const
}

export function useGetMyOrdersSellingAwaitingShipment<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingAwaitingShipmentKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.my.orders.selling.awaiting_shipment.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersSellingAwaitingShipment<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingAwaitingShipmentKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.my.orders.selling.awaiting_shipment.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.my.orders.selling.awaiting_shipment.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersSellingBuyerHistoryBuyerIdKey(
  args: InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>,
) {
  return ['my', '/my/orders/selling/buyer_history/:buyer_id', args] as const
}

export function useGetMyOrdersSellingBuyerHistoryBuyerId<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingBuyerHistoryBuyerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.my.orders.selling.buyer_history[':buyer_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersSellingBuyerHistoryBuyerId<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingBuyerHistoryBuyerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.my.orders.selling.buyer_history[':buyer_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersSellingByUuidUuidKey(
  args: InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>,
) {
  return ['my', '/my/orders/selling/by_uuid/:uuid', args] as const
}

export function useGetMyOrdersSellingByUuidUuid<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingByUuidUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.my.orders.selling.by_uuid[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersSellingByUuidUuid<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingByUuidUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.my.orders.selling.by_uuid[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersSellingUnpaidKey() {
  return ['my', '/my/orders/selling/unpaid'] as const
}

export function useGetMyOrdersSellingUnpaid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingUnpaidKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.selling.unpaid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersSellingUnpaid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingUnpaidKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.orders.selling.unpaid.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.selling.unpaid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyOrdersSellingIdKey(
  args: InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>,
) {
  return ['my', '/my/orders/selling/:id', args] as const
}

export function useGetMyOrdersSellingId<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.selling[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyOrdersSellingId<TError = unknown>(
  args: InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyOrdersSellingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.orders.selling[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMyOrdersSellingIdMarkPickedUpKey() {
  return ['my', '/my/orders/selling/:id/mark_picked_up', 'POST'] as const
}

export function usePostMyOrdersSellingIdMarkPickedUp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyOrdersSellingIdMarkPickedUpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>
        },
      ) => parseResponse(client.my.orders.selling[':id'].mark_picked_up.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMyOrdersSellingIdShipKey() {
  return ['my', '/my/orders/selling/:id/ship', 'POST'] as const
}

export function usePostMyOrdersSellingIdShip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.orders.selling)[':id']['ship']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.orders.selling)[':id']['ship']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyOrdersSellingIdShipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.orders.selling)[':id']['ship']['$post']> },
      ) => parseResponse(client.my.orders.selling[':id'].ship.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMyOrdersSellingOrderIdRefundRequestsKey() {
  return ['my', '/my/orders/selling/:order_id/refund_requests', 'POST'] as const
}

export function usePostMyOrdersSellingOrderIdRefundRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.my.orders.selling)[':order_id']['refund_requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMyOrdersSellingOrderIdRefundRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.my.orders.selling)[':order_id']['refund_requests']['$post']
          >
        },
      ) =>
        parseResponse(
          client.my.orders.selling[':order_id'].refund_requests.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMyPaymentsSellingKey(
  args: InferRequestType<typeof client.my.payments.selling.$get>,
) {
  return ['my', '/my/payments/selling', args] as const
}

export function useGetMyPaymentsSelling<TError = unknown>(
  args: InferRequestType<typeof client.my.payments.selling.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyPaymentsSellingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.payments.selling.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyPaymentsSelling<TError = unknown>(
  args: InferRequestType<typeof client.my.payments.selling.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyPaymentsSellingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.payments.selling.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.payments.selling.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyPaymentsSellingIdKey(
  args: InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>,
) {
  return ['my', '/my/payments/selling/:id', args] as const
}

export function useGetMyPaymentsSellingId<TError = unknown>(
  args: InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyPaymentsSellingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.payments.selling[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyPaymentsSellingId<TError = unknown>(
  args: InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyPaymentsSellingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.payments.selling)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.payments.selling[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyPayoutsKey() {
  return ['my', '/my/payouts'] as const
}

export function useGetMyPayouts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyPayoutsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.payouts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyPayouts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyPayoutsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.payouts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.payouts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyPayoutsIdLineItemsKey(
  args: InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>,
) {
  return ['my', '/my/payouts/:id/line_items', args] as const
}

export function useGetMyPayoutsIdLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyPayoutsIdLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.payouts[':id'].line_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyPayoutsIdLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyPayoutsIdLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.my.payouts)[':id']['line_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.payouts[':id'].line_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyRefundRequestsSellingKey() {
  return ['my', '/my/refund_requests/selling'] as const
}

export function useGetMyRefundRequestsSelling<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyRefundRequestsSellingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.refund_requests.selling.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyRefundRequestsSelling<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMyRefundRequestsSellingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.my.refund_requests.selling.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.refund_requests.selling.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMyRefundRequestsSellingIdKey() {
  return ['my', '/my/refund_requests/selling/:id', 'PUT'] as const
}

export function usePutMyRefundRequestsSellingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.my.refund_requests.selling)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.refund_requests.selling)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMyRefundRequestsSellingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.my.refund_requests.selling)[':id']['$put']> },
      ) => parseResponse(client.my.refund_requests.selling[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMyViewedListingsKey() {
  return ['my', '/my/viewed_listings'] as const
}

export function useGetMyViewedListings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyViewedListingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.viewed_listings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyViewedListings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyViewedListingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.viewed_listings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.viewed_listings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMyWishlistKey() {
  return ['my', '/my/wishlist'] as const
}

export function useGetMyWishlist<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyWishlistKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.wishlist.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMyWishlist<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMyWishlistKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.my.wishlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.my.wishlist.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMyWishlistIdKey() {
  return ['my', '/my/wishlist/:id', 'PUT'] as const
}

export function usePutMyWishlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.wishlist)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.wishlist)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMyWishlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.wishlist)[':id']['$put']> },
      ) => parseResponse(client.my.wishlist[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMyWishlistIdKey() {
  return ['my', '/my/wishlist/:id', 'DELETE'] as const
}

export function useDeleteMyWishlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.my.wishlist)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.my.wishlist)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMyWishlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.my.wishlist)[':id']['$delete']> },
      ) => parseResponse(client.my.wishlist[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersOrderIdFeedbackBuyerKey(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>,
) {
  return ['orders', '/orders/:order_id/feedback/buyer', args] as const
}

export function useGetOrdersOrderIdFeedbackBuyer<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrdersOrderIdFeedbackBuyerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orders[':order_id'].feedback.buyer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersOrderIdFeedbackBuyer<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrdersOrderIdFeedbackBuyerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orders[':order_id'].feedback.buyer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrdersOrderIdFeedbackBuyerKey() {
  return ['orders', '/orders/:order_id/feedback/buyer', 'POST'] as const
}

export function usePostOrdersOrderIdFeedbackBuyer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdFeedbackBuyerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>
        },
      ) => parseResponse(client.orders[':order_id'].feedback.buyer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersOrderIdFeedbackSellerKey(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>,
) {
  return ['orders', '/orders/:order_id/feedback/seller', args] as const
}

export function useGetOrdersOrderIdFeedbackSeller<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrdersOrderIdFeedbackSellerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orders[':order_id'].feedback.seller.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersOrderIdFeedbackSeller<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrdersOrderIdFeedbackSellerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orders[':order_id'].feedback.seller.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrdersOrderIdFeedbackSellerKey() {
  return ['orders', '/orders/:order_id/feedback/seller', 'POST'] as const
}

export function usePostOrdersOrderIdFeedbackSeller<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdFeedbackSellerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>
        },
      ) => parseResponse(client.orders[':order_id'].feedback.seller.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentMethodsKey() {
  return ['payment_methods', '/payment_methods'] as const
}

export function useGetPaymentMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentMethodsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentMethodsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPriceguideIdTransactionsSummaryKey(
  args: InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>,
) {
  return ['priceguide', '/priceguide/:id/transactions/summary', args] as const
}

export function useGetPriceguideIdTransactionsSummary<TError = unknown>(
  args: InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPriceguideIdTransactionsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.priceguide[':id'].transactions.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceguideIdTransactionsSummary<TError = unknown>(
  args: InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPriceguideIdTransactionsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.priceguide[':id'].transactions.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsReviewsIdKey(
  args: InferRequestType<(typeof client.products.reviews)[':id']['$get']>,
) {
  return ['products', '/products/reviews/:id', args] as const
}

export function useGetProductsReviewsId<TError = unknown>(
  args: InferRequestType<(typeof client.products.reviews)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsReviewsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.reviews[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsReviewsId<TError = unknown>(
  args: InferRequestType<(typeof client.products.reviews)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsReviewsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.reviews[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProductsReviewsIdKey() {
  return ['products', '/products/reviews/:id', 'PUT'] as const
}

export function usePutProductsReviewsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products.reviews)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.products.reviews)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductsReviewsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.products.reviews)[':id']['$put']> },
      ) => parseResponse(client.products.reviews[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsSlugReviewsKey(
  args: InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>,
) {
  return ['products', '/products/:slug/reviews', args] as const
}

export function useGetProductsSlugReviews<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsSlugReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':slug'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsSlugReviews<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsSlugReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':slug'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductsSlugReviewsKey() {
  return ['products', '/products/:slug/reviews', 'POST'] as const
}

export function usePostProductsSlugReviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products)[':slug']['reviews']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':slug']['reviews']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsSlugReviewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.products)[':slug']['reviews']['$post']> },
      ) => parseResponse(client.products[':slug'].reviews.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalesReverbKey() {
  return ['sales', '/sales/reverb'] as const
}

export function useGetSalesReverb<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesReverbKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales.reverb.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesReverb<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesReverbKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.reverb.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales.reverb.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSalesSellerKey() {
  return ['sales', '/sales/seller'] as const
}

export function useGetSalesSeller<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesSellerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales.seller.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesSeller<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesSellerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.seller.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales.seller.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSalesSaleIdListingsKey() {
  return ['sales', '/sales/:sale_id/listings', 'POST'] as const
}

export function usePostSalesSaleIdListings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales)[':sale_id']['listings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales)[':sale_id']['listings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSalesSaleIdListingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sales)[':sale_id']['listings']['$post']> },
      ) => parseResponse(client.sales[':sale_id'].listings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSalesSaleIdListingsKey() {
  return ['sales', '/sales/:sale_id/listings', 'DELETE'] as const
}

export function useDeleteSalesSaleIdListings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales)[':sale_id']['listings']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales)[':sale_id']['listings']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSalesSaleIdListingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sales)[':sale_id']['listings']['$delete']> },
      ) => parseResponse(client.sales[':sale_id'].listings.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalesSlugKey(args: InferRequestType<(typeof client.sales)[':slug']['$get']>) {
  return ['sales', '/sales/:slug', args] as const
}

export function useGetSalesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.sales)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.sales)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShippingProvidersKey() {
  return ['shipping', '/shipping/providers'] as const
}

export function useGetShippingProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShippingProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipping.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShippingProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShippingProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipping.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShippingRegionsKey() {
  return ['shipping', '/shipping/regions'] as const
}

export function useGetShippingRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShippingRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipping.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShippingRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShippingRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipping.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShopKey() {
  return ['shop', '/shop'] as const
}

export function useGetShop<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetShopKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shop.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShop<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetShopKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shop.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutShopKey() {
  return ['shop', '/shop', 'PUT'] as const
}

export function usePutShop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.shop.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shop.$put> }) =>
        parseResponse(client.shop.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShopListingConditionsKey() {
  return ['shop', '/shop/listing_conditions'] as const
}

export function useGetShopListingConditions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopListingConditionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shop.listing_conditions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopListingConditions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopListingConditionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shop.listing_conditions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shop.listing_conditions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShopPaymentMethodsKey() {
  return ['shop', '/shop/payment_methods'] as const
}

export function useGetShopPaymentMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShopPaymentMethodsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shop.payment_methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopPaymentMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShopPaymentMethodsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shop.payment_methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shop.payment_methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShopVacationKey() {
  return ['shop', '/shop/vacation'] as const
}

export function useGetShopVacation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShopVacationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shop.vacation.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopVacation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShopVacationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shop.vacation.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShopVacationKey() {
  return ['shop', '/shop/vacation', 'POST'] as const
}

export function usePostShopVacation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShopVacationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.shop.vacation.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShopVacationKey() {
  return ['shop', '/shop/vacation', 'DELETE'] as const
}

export function useDeleteShopVacation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.vacation.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShopVacationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.shop.vacation.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShopsIdStorefrontsKey(
  args: InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>,
) {
  return ['shops', '/shops/:id/storefronts', args] as const
}

export function useGetShopsIdStorefronts<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsIdStorefrontsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':id'].storefronts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopsIdStorefronts<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsIdStorefrontsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':id']['storefronts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':id'].storefronts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShopsShopIdShippingProfilesKey(
  args: InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>,
) {
  return ['shops', '/shops/:shop_id/shipping_profiles', args] as const
}

export function useGetShopsShopIdShippingProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsShopIdShippingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shops[':shop_id'].shipping_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopsShopIdShippingProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsShopIdShippingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shops[':shop_id'].shipping_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShopsSlugKey(args: InferRequestType<(typeof client.shops)[':slug']['$get']>) {
  return ['shops', '/shops/:slug', args] as const
}

export function useGetShopsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShopsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShopsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shops)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShopsSlugFeedbackKey(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>,
) {
  return ['shops', '/shops/:slug/feedback', args] as const
}

export function useGetShopsSlugFeedback<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsSlugFeedbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':slug'].feedback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopsSlugFeedback<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsSlugFeedbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':slug'].feedback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShopsSlugFeedbackBuyerKey(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>,
) {
  return ['shops', '/shops/:slug/feedback/buyer', args] as const
}

export function useGetShopsSlugFeedbackBuyer<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsSlugFeedbackBuyerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':slug'].feedback.buyer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopsSlugFeedbackBuyer<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsSlugFeedbackBuyerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':slug'].feedback.buyer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShopsSlugFeedbackSellerKey(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>,
) {
  return ['shops', '/shops/:slug/feedback/seller', args] as const
}

export function useGetShopsSlugFeedbackSeller<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsSlugFeedbackSellerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':slug'].feedback.seller.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShopsSlugFeedbackSeller<TError = unknown>(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShopsSlugFeedbackSellerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shops[':slug'].feedback.seller.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWantsKey() {
  return ['wants', '/wants'] as const
}

export function useGetWants<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetWantsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wants.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWants<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetWantsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wants.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wants.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWantsIdKey() {
  return ['wants', '/wants/:id', 'PUT'] as const
}

export function usePutWantsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.wants)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wants)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWantsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.wants)[':id']['$put']> }) =>
        parseResponse(client.wants[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWantsIdKey() {
  return ['wants', '/wants/:id', 'DELETE'] as const
}

export function useDeleteWantsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.wants)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wants)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWantsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.wants)[':id']['$delete']> }) =>
        parseResponse(client.wants[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksRegistrationsKey() {
  return ['webhooks', '/webhooks/registrations'] as const
}

export function useGetWebhooksRegistrations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksRegistrationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.registrations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksRegistrations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksRegistrationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.registrations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksRegistrationsKey() {
  return ['webhooks', '/webhooks/registrations', 'POST'] as const
}

export function usePostWebhooksRegistrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.registrations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.registrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksRegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.webhooks.registrations.$post> },
      ) => parseResponse(client.webhooks.registrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksRegistrationsIdKey(
  args: InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>,
) {
  return ['webhooks', '/webhooks/registrations/:id', args] as const
}

export function useGetWebhooksRegistrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksRegistrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.registrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksRegistrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksRegistrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.registrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksRegistrationsIdKey() {
  return ['webhooks', '/webhooks/registrations/:id', 'DELETE'] as const
}

export function useDeleteWebhooksRegistrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.registrations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks.registrations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksRegistrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks.registrations)[':id']['$delete']> },
      ) => parseResponse(client.webhooks.registrations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
