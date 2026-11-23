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

export function getApiKey() {
  return ['api'] as const
}

export function getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageQueryKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['categories?platform={platform}&language={language}']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v3/categories?platform={platform}&language={language}',
    args,
  ] as const
}

export function getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v3)['categories?platform={platform}&language={language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['categories?platform={platform}&language={language}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.iconsets.v3)['categories?platform={platform}&language={language}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageQueryKey>
  >({
    queryKey: getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.iconsets.v3['categories?platform={platform}&language={language}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiIconsetsV3CategoriesPlatformPlatformLanguageLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v3)['categories?platform={platform}&language={language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.iconsets.v3)['categories?platform={platform}&language={language}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.iconsets.v3)['categories?platform={platform}&language={language}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageQueryKey>
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
      ...getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v3/category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}',
    args,
  ] as const
}

export function getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v3)['category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.iconsets.v3)['category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryKey
    >
  >({
    queryKey:
      getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.iconsets.v3[
          'category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v3)['category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.iconsets.v3)['category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.iconsets.v3)['category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryKey
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
      ...getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v3/latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}',
    args,
  ] as const
}

export function getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v3)['latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.iconsets.v3)['latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryKey
    >
  >({
    queryKey:
      getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.iconsets.v3[
          'latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v3)['latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.iconsets.v3)['latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.iconsets.v3)['latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryKey
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
      ...getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v3/search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}',
    args,
  ] as const
}

export function getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v3)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.iconsets.v3)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryKey
    >
  >({
    queryKey:
      getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.iconsets.v3[
          'search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v3)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.iconsets.v3)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.iconsets.v3)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryKey
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
      ...getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiIconsetsV3TotalSinceSinceQueryKey(
  args: InferRequestType<(typeof client.api.iconsets.v3)['total?since={since}']['$get']>,
) {
  return ['api', '/api/iconsets/v3/total?since={since}', args] as const
}

export function getApiIconsetsV3TotalSinceSinceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.iconsets.v3)['total?since={since}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.iconsets.v3)['total?since={since}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.iconsets.v3)['total?since={since}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIconsetsV3TotalSinceSinceQueryKey>
  >({
    queryKey: getApiIconsetsV3TotalSinceSinceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.iconsets.v3['total?since={since}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiIconsetsV3TotalSinceSince<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.iconsets.v3)['total?since={since}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.iconsets.v3)['total?since={since}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.iconsets.v3)['total?since={since}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIconsetsV3TotalSinceSinceQueryKey>
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
      ...getApiIconsetsV3TotalSinceSinceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v4)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v4/search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}',
    args,
  ] as const
}

export function getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v4)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v4)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.iconsets.v4)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryKey
    >
  >({
    queryKey:
      getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.iconsets.v4[
          'search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.iconsets.v4)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.iconsets.v4)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.iconsets.v4)['search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryKey
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
      ...getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiTaskWebFontCollectionMutationKey() {
  return ['api', '/api/task/web-font/collection', 'POST'] as const
}

export function getPostApiTaskWebFontCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.task)['web-font']['collection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.task)['web-font']['collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaskWebFontCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.task)['web-font']['collection']['$post']>,
    ) {
      return parseResponse(client.api.task['web-font'].collection.$post(args, options))
    },
  })
}

export function createPostApiTaskWebFontCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.task)['web-font']['collection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.task)['web-font']['collection']['$post']>,
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
    const mutationDefaults = getPostApiTaskWebFontCollectionMutationOptions<
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

export function getPostApiTaskWebFontIconsMutationKey() {
  return ['api', '/api/task/web-font/icons', 'POST'] as const
}

export function getPostApiTaskWebFontIconsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.task)['web-font']['icons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.task)['web-font']['icons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaskWebFontIconsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.task)['web-font']['icons']['$post']>,
    ) {
      return parseResponse(client.api.task['web-font'].icons.$post(args, options))
    },
  })
}

export function createPostApiTaskWebFontIcons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.task)['web-font']['icons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.task)['web-font']['icons']['$post']>,
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
    const mutationDefaults = getPostApiTaskWebFontIconsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
