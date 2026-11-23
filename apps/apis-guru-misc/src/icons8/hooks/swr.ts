import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['categories?platform=:platform&language=:language']['$get']
  >,
) {
  return ['api', '/api/iconsets/v3/categories?platform=:platform&language=:language', args] as const
}

export function useGetApiIconsetsV3CategoriesPlatformPlatformLanguageLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['categories?platform=:platform&language=:language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['categories?platform=:platform&language=:language']['$get']
              >
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
        ? getGetApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['categories?platform=:platform&language=:language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v3['categories?platform=:platform&language=:language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIconsetsV3CategoriesPlatformPlatformLanguageLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['categories?platform=:platform&language=:language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['categories?platform=:platform&language=:language']['$get']
              >
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
        ? getGetApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['categories?platform=:platform&language=:language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v3['categories?platform=:platform&language=:language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v3/category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language',
    args,
  ] as const
}

export function useGetApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
              >
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
        ? getGetApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v3[
            'category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
              >
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
        ? getGetApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v3[
            'category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v3/latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language',
    args,
  ] as const
}

export function useGetApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
              >
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
        ? getGetApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v3[
            'latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
              >
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
        ? getGetApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v3[
            'latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v3/search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount',
    args,
  ] as const
}

export function useGetApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
              >
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
        ? getGetApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v3[
            'search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
              >
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
        ? getGetApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v3)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v3[
            'search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiIconsetsV3TotalSinceSinceKey(
  args: InferRequestType<(typeof client.api.iconsets.v3)['total?since=:since']['$get']>,
) {
  return ['api', '/api/iconsets/v3/total?since=:since', args] as const
}

export function useGetApiIconsetsV3TotalSinceSince<TError = unknown>(
  args: InferRequestType<(typeof client.api.iconsets.v3)['total?since=:since']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.iconsets.v3)['total?since=:since']['$get']>>
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
        ? getGetApiIconsetsV3TotalSinceSinceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.iconsets.v3)['total?since=:since']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.iconsets.v3['total?since=:since'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIconsetsV3TotalSinceSince<TError = unknown>(
  args: InferRequestType<(typeof client.api.iconsets.v3)['total?since=:since']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.iconsets.v3)['total?since=:since']['$get']>>
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
        ? getGetApiIconsetsV3TotalSinceSinceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.iconsets.v3)['total?since=:since']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.iconsets.v3['total?since=:since'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountKey(
  args: InferRequestType<
    (typeof client.api.iconsets.v4)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
  >,
) {
  return [
    'api',
    '/api/iconsets/v4/search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount',
    args,
  ] as const
}

export function useGetApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v4)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v4)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
              >
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
        ? getGetApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v4)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v4[
            'search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.iconsets.v4)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v4)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
              >
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
        ? getGetApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.iconsets.v4)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.iconsets.v4[
            'search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiTaskWebFontCollectionKey() {
  return ['api', '/api/task/web-font/collection', 'POST'] as const
}

export function usePostApiTaskWebFontCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.task)['web-font']['collection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.task)['web-font']['collection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTaskWebFontCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.task)['web-font']['collection']['$post']> },
      ) => parseResponse(client.api.task['web-font'].collection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTaskWebFontIconsKey() {
  return ['api', '/api/task/web-font/icons', 'POST'] as const
}

export function usePostApiTaskWebFontIcons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.task)['web-font']['icons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.task)['web-font']['icons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTaskWebFontIconsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.task)['web-font']['icons']['$post']> },
      ) => parseResponse(client.api.task['web-font'].icons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
