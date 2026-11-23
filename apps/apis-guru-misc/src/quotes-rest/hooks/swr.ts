import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getQodKey() {
  return ['qod'] as const
}

export function getQshowKey() {
  return ['qshow'] as const
}

export function getQuoteKey() {
  return ['quote'] as const
}

export function getGetQodKey(args: InferRequestType<typeof client.qod.$get>) {
  return ['qod', '/qod', args] as const
}

export function useGetQod<TError = unknown>(
  args: InferRequestType<typeof client.qod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.qod.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQod<TError = unknown>(
  args: InferRequestType<typeof client.qod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.qod.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetQodCategoriesKey(args: InferRequestType<typeof client.qod.categories.$get>) {
  return ['qod', '/qod/categories', args] as const
}

export function useGetQodCategories<TError = unknown>(
  args: InferRequestType<typeof client.qod.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQodCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qod.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQodCategories<TError = unknown>(
  args: InferRequestType<typeof client.qod.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQodCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qod.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQodLanguagesKey() {
  return ['qod', '/qod/languages'] as const
}

export function useGetQodLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQodLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qod.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQodLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQodLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qod.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQshowKey(args: InferRequestType<typeof client.qshow.$get>) {
  return ['qshow', '/qshow', args] as const
}

export function useGetQshow<TError = unknown>(
  args: InferRequestType<typeof client.qshow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQshowKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.qshow.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQshow<TError = unknown>(
  args: InferRequestType<typeof client.qshow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQshowKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.qshow.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutQshowKey() {
  return ['qshow', '/qshow', 'PUT'] as const
}

export function usePutQshow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qshow.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQshowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qshow.$put> }) =>
        parseResponse(client.qshow.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQshowKey() {
  return ['qshow', '/qshow', 'DELETE'] as const
}

export function useDeleteQshow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qshow.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQshowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qshow.$delete> }) =>
        parseResponse(client.qshow.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchQshowKey() {
  return ['qshow', '/qshow', 'PATCH'] as const
}

export function usePatchQshow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qshow.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchQshowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qshow.$patch> }) =>
        parseResponse(client.qshow.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQshowListKey(args: InferRequestType<typeof client.qshow.list.$get>) {
  return ['qshow', '/qshow/list', args] as const
}

export function useGetQshowList<TError = unknown>(
  args: InferRequestType<typeof client.qshow.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQshowListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qshow.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQshowList<TError = unknown>(
  args: InferRequestType<typeof client.qshow.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQshowListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qshow.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQshowQuotesKey(args: InferRequestType<typeof client.qshow.quotes.$get>) {
  return ['qshow', '/qshow/quotes', args] as const
}

export function useGetQshowQuotes<TError = unknown>(
  args: InferRequestType<typeof client.qshow.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQshowQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qshow.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQshowQuotes<TError = unknown>(
  args: InferRequestType<typeof client.qshow.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQshowQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qshow.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQshowQuotesAddKey() {
  return ['qshow', '/qshow/quotes/add', 'POST'] as const
}

export function usePostQshowQuotesAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.qshow.quotes.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQshowQuotesAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qshow.quotes.add.$post> }) =>
        parseResponse(client.qshow.quotes.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQshowQuotesRemoveKey() {
  return ['qshow', '/qshow/quotes/remove', 'POST'] as const
}

export function usePostQshowQuotesRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.remove.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.qshow.quotes.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQshowQuotesRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qshow.quotes.remove.$post> }) =>
        parseResponse(client.qshow.quotes.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuoteKey(args: InferRequestType<typeof client.quote.$get>) {
  return ['quote', '/quote', args] as const
}

export function useGetQuote<TError = unknown>(
  args: InferRequestType<typeof client.quote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quote.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQuote<TError = unknown>(
  args: InferRequestType<typeof client.quote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quote.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutQuoteKey() {
  return ['quote', '/quote', 'PUT'] as const
}

export function usePutQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quote.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.$put> }) =>
        parseResponse(client.quote.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteKey() {
  return ['quote', '/quote', 'POST'] as const
}

export function usePostQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quote.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.$post> }) =>
        parseResponse(client.quote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuoteKey() {
  return ['quote', '/quote', 'DELETE'] as const
}

export function useDeleteQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quote.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.$delete> }) =>
        parseResponse(client.quote.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchQuoteKey() {
  return ['quote', '/quote', 'PATCH'] as const
}

export function usePatchQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quote.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.$patch> }) =>
        parseResponse(client.quote.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuoteAuthorsPopularKey(
  args: InferRequestType<typeof client.quote.authors.popular.$get>,
) {
  return ['quote', '/quote/authors/popular', args] as const
}

export function useGetQuoteAuthorsPopular<TError = unknown>(
  args: InferRequestType<typeof client.quote.authors.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
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
        ? getGetQuoteAuthorsPopularKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.authors.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteAuthorsPopular<TError = unknown>(
  args: InferRequestType<typeof client.quote.authors.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
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
        ? getGetQuoteAuthorsPopularKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.authors.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuoteAuthorsSearchKey(
  args: InferRequestType<typeof client.quote.authors.search.$get>,
) {
  return ['quote', '/quote/authors/search', args] as const
}

export function useGetQuoteAuthorsSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.authors.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>
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
        ? getGetQuoteAuthorsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.authors.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteAuthorsSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.authors.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>
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
        ? getGetQuoteAuthorsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.authors.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuoteCategoriesPopularKey(
  args: InferRequestType<typeof client.quote.categories.popular.$get>,
) {
  return ['quote', '/quote/categories/popular', args] as const
}

export function useGetQuoteCategoriesPopular<TError = unknown>(
  args: InferRequestType<typeof client.quote.categories.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
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
        ? getGetQuoteCategoriesPopularKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.categories.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteCategoriesPopular<TError = unknown>(
  args: InferRequestType<typeof client.quote.categories.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
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
        ? getGetQuoteCategoriesPopularKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.categories.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuoteCategoriesSearchKey(
  args: InferRequestType<typeof client.quote.categories.search.$get>,
) {
  return ['quote', '/quote/categories/search', args] as const
}

export function useGetQuoteCategoriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.categories.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
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
        ? getGetQuoteCategoriesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.categories.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteCategoriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.categories.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
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
        ? getGetQuoteCategoriesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.categories.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuoteDislikeKey() {
  return ['quote', '/quote/dislike', 'PUT'] as const
}

export function usePutQuoteDislike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.dislike.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuoteDislikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.dislike.$put> }) =>
        parseResponse(client.quote.dislike.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteDislikeKey() {
  return ['quote', '/quote/dislike', 'POST'] as const
}

export function usePostQuoteDislike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.dislike.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteDislikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.dislike.$post> }) =>
        parseResponse(client.quote.dislike.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuoteDislikeKey() {
  return ['quote', '/quote/dislike', 'DELETE'] as const
}

export function useDeleteQuoteDislike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.dislike.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuoteDislikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.dislike.$delete> }) =>
        parseResponse(client.quote.dislike.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuoteImageKey(args: InferRequestType<typeof client.quote.image.$get>) {
  return ['quote', '/quote/image', args] as const
}

export function useGetQuoteImage<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteImageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteImage<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteImageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuoteImageKey() {
  return ['quote', '/quote/image', 'PUT'] as const
}

export function usePutQuoteImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuoteImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.image.$put> }) =>
        parseResponse(client.quote.image.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuoteImageKey() {
  return ['quote', '/quote/image', 'DELETE'] as const
}

export function useDeleteQuoteImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuoteImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.image.$delete> }) =>
        parseResponse(client.quote.image.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteImageBackgroundKey() {
  return ['quote', '/quote/image/background', 'POST'] as const
}

export function usePostQuoteImageBackground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.background.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteImageBackgroundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.quote.image.background.$post> },
      ) => parseResponse(client.quote.image.background.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuoteImageBackgroundKey() {
  return ['quote', '/quote/image/background', 'DELETE'] as const
}

export function useDeleteQuoteImageBackground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.background.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuoteImageBackgroundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.quote.image.background.$delete> },
      ) => parseResponse(client.quote.image.background.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuoteImageBackgroundListKey(
  args: InferRequestType<typeof client.quote.image.background.list.$get>,
) {
  return ['quote', '/quote/image/background/list', args] as const
}

export function useGetQuoteImageBackgroundList<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.background.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
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
        ? getGetQuoteImageBackgroundListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.background.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteImageBackgroundList<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.background.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
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
        ? getGetQuoteImageBackgroundListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.background.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuoteImageBackgroundSearchKey(
  args: InferRequestType<typeof client.quote.image.background.search.$get>,
) {
  return ['quote', '/quote/image/background/search', args] as const
}

export function useGetQuoteImageBackgroundSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.background.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.quote.image.background.search.$get>>
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
        ? getGetQuoteImageBackgroundSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.quote.image.background.search.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.background.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteImageBackgroundSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.background.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.quote.image.background.search.$get>>
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
        ? getGetQuoteImageBackgroundSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.quote.image.background.search.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.background.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuoteImageBackgroundTagsAddKey() {
  return ['quote', '/quote/image/background/tags/add', 'POST'] as const
}

export function usePostQuoteImageBackgroundTagsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.quote.image.background.tags.add.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.background.tags.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteImageBackgroundTagsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.quote.image.background.tags.add.$post> },
      ) => parseResponse(client.quote.image.background.tags.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteImageBackgroundTagsRemoveKey() {
  return ['quote', '/quote/image/background/tags/remove', 'POST'] as const
}

export function usePostQuoteImageBackgroundTagsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.quote.image.background.tags.remove.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.background.tags.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteImageBackgroundTagsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.quote.image.background.tags.remove.$post> },
      ) => parseResponse(client.quote.image.background.tags.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteImageFontKey() {
  return ['quote', '/quote/image/font', 'POST'] as const
}

export function usePostQuoteImageFont<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.font.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteImageFontKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.image.font.$post> }) =>
        parseResponse(client.quote.image.font.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuoteImageFontKey() {
  return ['quote', '/quote/image/font', 'DELETE'] as const
}

export function useDeleteQuoteImageFont<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.font.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuoteImageFontKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.image.font.$delete> }) =>
        parseResponse(client.quote.image.font.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuoteImageFontListKey(
  args: InferRequestType<typeof client.quote.image.font.list.$get>,
) {
  return ['quote', '/quote/image/font/list', args] as const
}

export function useGetQuoteImageFontList<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.font.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
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
        ? getGetQuoteImageFontListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.font.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteImageFontList<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.font.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
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
        ? getGetQuoteImageFontListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.font.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuoteImageFontSearchKey(
  args: InferRequestType<typeof client.quote.image.font.search.$get>,
) {
  return ['quote', '/quote/image/font/search', args] as const
}

export function useGetQuoteImageFontSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.font.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
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
        ? getGetQuoteImageFontSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.font.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteImageFontSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.font.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
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
        ? getGetQuoteImageFontSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.font.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuoteImageFontTagsAddKey() {
  return ['quote', '/quote/image/font/tags/add', 'POST'] as const
}

export function usePostQuoteImageFontTagsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.tags.add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.font.tags.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteImageFontTagsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.quote.image.font.tags.add.$post> },
      ) => parseResponse(client.quote.image.font.tags.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteImageFontTagsRemoveKey() {
  return ['quote', '/quote/image/font/tags/remove', 'POST'] as const
}

export function usePostQuoteImageFontTagsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.tags.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.image.font.tags.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteImageFontTagsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.quote.image.font.tags.remove.$post> },
      ) => parseResponse(client.quote.image.font.tags.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuoteImageSearchKey(
  args: InferRequestType<typeof client.quote.image.search.$get>,
) {
  return ['quote', '/quote/image/search', args] as const
}

export function useGetQuoteImageSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
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
        ? getGetQuoteImageSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteImageSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.image.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
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
        ? getGetQuoteImageSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.image.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuoteLikeKey() {
  return ['quote', '/quote/like', 'PUT'] as const
}

export function usePutQuoteLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quote.like.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuoteLikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.like.$put> }) =>
        parseResponse(client.quote.like.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteLikeKey() {
  return ['quote', '/quote/like', 'POST'] as const
}

export function usePostQuoteLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quote.like.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteLikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.like.$post> }) =>
        parseResponse(client.quote.like.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuoteLikeKey() {
  return ['quote', '/quote/like', 'DELETE'] as const
}

export function useDeleteQuoteLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.like.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuoteLikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.like.$delete> }) =>
        parseResponse(client.quote.like.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuoteListKey(args: InferRequestType<typeof client.quote.list.$get>) {
  return ['quote', '/quote/list', args] as const
}

export function useGetQuoteList<TError = unknown>(
  args: InferRequestType<typeof client.quote.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteList<TError = unknown>(
  args: InferRequestType<typeof client.quote.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuoteRandomKey(args: InferRequestType<typeof client.quote.random.$get>) {
  return ['quote', '/quote/random', args] as const
}

export function useGetQuoteRandom<TError = unknown>(
  args: InferRequestType<typeof client.quote.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteRandom<TError = unknown>(
  args: InferRequestType<typeof client.quote.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuoteSearchKey(args: InferRequestType<typeof client.quote.search.$get>) {
  return ['quote', '/quote/search', args] as const
}

export function useGetQuoteSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteSearch<TError = unknown>(
  args: InferRequestType<typeof client.quote.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuoteTagsAddKey() {
  return ['quote', '/quote/tags/add', 'POST'] as const
}

export function usePostQuoteTagsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.tags.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteTagsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.tags.add.$post> }) =>
        parseResponse(client.quote.tags.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteTagsRemoveKey() {
  return ['quote', '/quote/tags/remove', 'POST'] as const
}

export function usePostQuoteTagsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.remove.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quote.tags.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteTagsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quote.tags.remove.$post> }) =>
        parseResponse(client.quote.tags.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
