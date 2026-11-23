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

export function getQodKey() {
  return ['qod'] as const
}

export function getQshowKey() {
  return ['qshow'] as const
}

export function getQuoteKey() {
  return ['quote'] as const
}

export function getQodQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.qod.$get>>) {
  return ['qod', '/qod', toValue(args)] as const
}

export function getQodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qod.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qod.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qod.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
          ReturnType<typeof getQodQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qod.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQodCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qod.categories.$get>>,
) {
  return ['qod', '/qod/categories', toValue(args)] as const
}

export function getQodCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qod.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQodCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qod.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQodCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qod.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
          >,
          ReturnType<typeof getQodCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQodCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQodCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qod.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQodLanguagesQueryKey() {
  return ['qod', '/qod/languages'] as const
}

export function getQodLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQodLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qod.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQodLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
          >,
          ReturnType<typeof getQodLanguagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQodLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQodLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.qod.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQshowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.$get>>,
) {
  return ['qshow', '/qshow', toValue(args)] as const
}

export function getQshowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQshowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qshow.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQshow<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
          ReturnType<typeof getQshowQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQshowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQshowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qshow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutQshowMutationKey() {
  return ['qshow', '/qshow', 'PUT'] as const
}

export function getPutQshowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$put>>>>>,
    TError,
    InferRequestType<typeof client.qshow.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQshowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.$put>) {
      return parseResponse(client.qshow.$put(args, options))
    },
  })
}

export function usePutQshow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$put>>>>>,
          TError,
          InferRequestType<typeof client.qshow.$put>,
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
  const mutationDefaults = getPutQshowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQshowMutationKey() {
  return ['qshow', '/qshow', 'DELETE'] as const
}

export function getDeleteQshowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$delete>>>>>,
    TError,
    InferRequestType<typeof client.qshow.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQshowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.$delete>) {
      return parseResponse(client.qshow.$delete(args, options))
    },
  })
}

export function useDeleteQshow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.qshow.$delete>,
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
  const mutationDefaults = getDeleteQshowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchQshowMutationKey() {
  return ['qshow', '/qshow', 'PATCH'] as const
}

export function getPatchQshowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$patch>>>>>,
    TError,
    InferRequestType<typeof client.qshow.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchQshowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.$patch>) {
      return parseResponse(client.qshow.$patch(args, options))
    },
  })
}

export function usePatchQshow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.qshow.$patch>,
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
  const mutationDefaults = getPatchQshowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQshowListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.list.$get>>,
) {
  return ['qshow', '/qshow/list', toValue(args)] as const
}

export function getQshowListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQshowListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qshow.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQshowList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>
          >,
          ReturnType<typeof getQshowListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQshowListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQshowListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qshow.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQshowQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.quotes.$get>>,
) {
  return ['qshow', '/qshow/quotes', toValue(args)] as const
}

export function getQshowQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQshowQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qshow.quotes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQshowQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qshow.quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
          >,
          ReturnType<typeof getQshowQuotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQshowQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQshowQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qshow.quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQshowQuotesAddMutationKey() {
  return ['qshow', '/qshow/quotes/add', 'POST'] as const
}

export function getPostQshowQuotesAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.qshow.quotes.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQshowQuotesAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.quotes.add.$post>) {
      return parseResponse(client.qshow.quotes.add.$post(args, options))
    },
  })
}

export function usePostQshowQuotesAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.qshow.quotes.add.$post>,
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
  const mutationDefaults = getPostQshowQuotesAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostQshowQuotesRemoveMutationKey() {
  return ['qshow', '/qshow/quotes/remove', 'POST'] as const
}

export function getPostQshowQuotesRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.qshow.quotes.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQshowQuotesRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.quotes.remove.$post>) {
      return parseResponse(client.qshow.quotes.remove.$post(args, options))
    },
  })
}

export function usePostQshowQuotesRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.qshow.quotes.remove.$post>,
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
  const mutationDefaults = getPostQshowQuotesRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.$get>>,
) {
  return ['quote', '/quote', toValue(args)] as const
}

export function getQuoteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuote<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
          ReturnType<typeof getQuoteQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutQuoteMutationKey() {
  return ['quote', '/quote', 'PUT'] as const
}

export function getPutQuoteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$put>>>>>,
    TError,
    InferRequestType<typeof client.quote.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.$put>) {
      return parseResponse(client.quote.$put(args, options))
    },
  })
}

export function usePutQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$put>>>>>,
          TError,
          InferRequestType<typeof client.quote.$put>,
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
  const mutationDefaults = getPutQuoteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuoteMutationKey() {
  return ['quote', '/quote', 'POST'] as const
}

export function getPostQuoteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$post>>>>>,
    TError,
    InferRequestType<typeof client.quote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.$post>) {
      return parseResponse(client.quote.$post(args, options))
    },
  })
}

export function usePostQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$post>>>>>,
          TError,
          InferRequestType<typeof client.quote.$post>,
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
  const mutationDefaults = getPostQuoteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQuoteMutationKey() {
  return ['quote', '/quote', 'DELETE'] as const
}

export function getDeleteQuoteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$delete>>>>>,
    TError,
    InferRequestType<typeof client.quote.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.$delete>) {
      return parseResponse(client.quote.$delete(args, options))
    },
  })
}

export function useDeleteQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.$delete>,
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
  const mutationDefaults = getDeleteQuoteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchQuoteMutationKey() {
  return ['quote', '/quote', 'PATCH'] as const
}

export function getPatchQuoteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$patch>>>>>,
    TError,
    InferRequestType<typeof client.quote.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.$patch>) {
      return parseResponse(client.quote.$patch(args, options))
    },
  })
}

export function usePatchQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.$patch>,
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
  const mutationDefaults = getPatchQuoteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuoteAuthorsPopularQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.authors.popular.$get>>,
) {
  return ['quote', '/quote/authors/popular', toValue(args)] as const
}

export function getQuoteAuthorsPopularQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.authors.popular.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteAuthorsPopularQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.authors.popular.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteAuthorsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.authors.popular.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
            >
          >,
          ReturnType<typeof getQuoteAuthorsPopularQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteAuthorsPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteAuthorsPopularQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.authors.popular.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteAuthorsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.authors.search.$get>>,
) {
  return ['quote', '/quote/authors/search', toValue(args)] as const
}

export function getQuoteAuthorsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.authors.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteAuthorsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.authors.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteAuthorsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.authors.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>
            >
          >,
          ReturnType<typeof getQuoteAuthorsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteAuthorsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteAuthorsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.authors.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteCategoriesPopularQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.categories.popular.$get>>,
) {
  return ['quote', '/quote/categories/popular', toValue(args)] as const
}

export function getQuoteCategoriesPopularQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.categories.popular.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteCategoriesPopularQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.categories.popular.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteCategoriesPopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.categories.popular.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
            >
          >,
          ReturnType<typeof getQuoteCategoriesPopularQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteCategoriesPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteCategoriesPopularQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.categories.popular.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteCategoriesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.categories.search.$get>>,
) {
  return ['quote', '/quote/categories/search', toValue(args)] as const
}

export function getQuoteCategoriesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.categories.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteCategoriesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.categories.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteCategoriesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.categories.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
            >
          >,
          ReturnType<typeof getQuoteCategoriesSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteCategoriesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteCategoriesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.categories.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutQuoteDislikeMutationKey() {
  return ['quote', '/quote/dislike', 'PUT'] as const
}

export function getPutQuoteDislikeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.dislike.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuoteDislikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.dislike.$put>) {
      return parseResponse(client.quote.dislike.$put(args, options))
    },
  })
}

export function usePutQuoteDislike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.dislike.$put>,
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
  const mutationDefaults = getPutQuoteDislikeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuoteDislikeMutationKey() {
  return ['quote', '/quote/dislike', 'POST'] as const
}

export function getPostQuoteDislikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.dislike.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteDislikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.dislike.$post>) {
      return parseResponse(client.quote.dislike.$post(args, options))
    },
  })
}

export function usePostQuoteDislike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.dislike.$post>,
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
  const mutationDefaults = getPostQuoteDislikeMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteQuoteDislikeMutationKey() {
  return ['quote', '/quote/dislike', 'DELETE'] as const
}

export function getDeleteQuoteDislikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.dislike.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteDislikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.dislike.$delete>) {
      return parseResponse(client.quote.dislike.$delete(args, options))
    },
  })
}

export function useDeleteQuoteDislike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quote.dislike.$delete>,
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
  const mutationDefaults = getDeleteQuoteDislikeMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteImageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.$get>>,
) {
  return ['quote', '/quote/image', toValue(args)] as const
}

export function getQuoteImageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.image.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuoteImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
          >,
          ReturnType<typeof getQuoteImageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.image.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutQuoteImageMutationKey() {
  return ['quote', '/quote/image', 'PUT'] as const
}

export function getPutQuoteImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$put>>>>>,
    TError,
    InferRequestType<typeof client.quote.image.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuoteImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.$put>) {
      return parseResponse(client.quote.image.$put(args, options))
    },
  })
}

export function usePutQuoteImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.image.$put>,
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
  const mutationDefaults = getPutQuoteImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQuoteImageMutationKey() {
  return ['quote', '/quote/image', 'DELETE'] as const
}

export function getDeleteQuoteImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.image.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.$delete>) {
      return parseResponse(client.quote.image.$delete(args, options))
    },
  })
}

export function useDeleteQuoteImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.image.$delete>,
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
  const mutationDefaults = getDeleteQuoteImageMutationOptions<TError, TOnMutateResult>(
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

export function getPostQuoteImageBackgroundMutationKey() {
  return ['quote', '/quote/image/background', 'POST'] as const
}

export function getPostQuoteImageBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.background.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageBackgroundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.background.$post>) {
      return parseResponse(client.quote.image.background.$post(args, options))
    },
  })
}

export function usePostQuoteImageBackground<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quote.image.background.$post>,
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
  const mutationDefaults = getPostQuoteImageBackgroundMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteQuoteImageBackgroundMutationKey() {
  return ['quote', '/quote/image/background', 'DELETE'] as const
}

export function getDeleteQuoteImageBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.background.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteImageBackgroundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.background.$delete>) {
      return parseResponse(client.quote.image.background.$delete(args, options))
    },
  })
}

export function useDeleteQuoteImageBackground<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.quote.image.background.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.quote.image.background.$delete>,
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
  const mutationDefaults = getDeleteQuoteImageBackgroundMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteImageBackgroundListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.background.list.$get>>,
) {
  return ['quote', '/quote/image/background/list', toValue(args)] as const
}

export function getQuoteImageBackgroundListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.background.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteImageBackgroundListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.image.background.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteImageBackgroundList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.background.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.quote.image.background.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.quote.image.background.list.$get>>
              >
            >
          >,
          ReturnType<typeof getQuoteImageBackgroundListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageBackgroundListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteImageBackgroundListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.image.background.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteImageBackgroundSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.background.search.$get>>,
) {
  return ['quote', '/quote/image/background/search', toValue(args)] as const
}

export function getQuoteImageBackgroundSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.background.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteImageBackgroundSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.image.background.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteImageBackgroundSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.background.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.quote.image.background.search.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.quote.image.background.search.$get>>
              >
            >
          >,
          ReturnType<typeof getQuoteImageBackgroundSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageBackgroundSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteImageBackgroundSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.image.background.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQuoteImageBackgroundTagsAddMutationKey() {
  return ['quote', '/quote/image/background/tags/add', 'POST'] as const
}

export function getPostQuoteImageBackgroundTagsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.quote.image.background.tags.add.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.background.tags.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageBackgroundTagsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.background.tags.add.$post>) {
      return parseResponse(client.quote.image.background.tags.add.$post(args, options))
    },
  })
}

export function usePostQuoteImageBackgroundTagsAdd<
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
                Awaited<ReturnType<typeof client.quote.image.background.tags.add.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.quote.image.background.tags.add.$post>,
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
  const mutationDefaults = getPostQuoteImageBackgroundTagsAddMutationOptions<
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

export function getPostQuoteImageBackgroundTagsRemoveMutationKey() {
  return ['quote', '/quote/image/background/tags/remove', 'POST'] as const
}

export function getPostQuoteImageBackgroundTagsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.quote.image.background.tags.remove.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.background.tags.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageBackgroundTagsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.quote.image.background.tags.remove.$post>,
    ) {
      return parseResponse(client.quote.image.background.tags.remove.$post(args, options))
    },
  })
}

export function usePostQuoteImageBackgroundTagsRemove<
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
                Awaited<ReturnType<typeof client.quote.image.background.tags.remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.quote.image.background.tags.remove.$post>,
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
  const mutationDefaults = getPostQuoteImageBackgroundTagsRemoveMutationOptions<
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

export function getPostQuoteImageFontMutationKey() {
  return ['quote', '/quote/image/font', 'POST'] as const
}

export function getPostQuoteImageFontMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.image.font.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageFontMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.font.$post>) {
      return parseResponse(client.quote.image.font.$post(args, options))
    },
  })
}

export function usePostQuoteImageFont<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quote.image.font.$post>,
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
  const mutationDefaults = getPostQuoteImageFontMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteQuoteImageFontMutationKey() {
  return ['quote', '/quote/image/font', 'DELETE'] as const
}

export function getDeleteQuoteImageFontMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.image.font.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteImageFontMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.font.$delete>) {
      return parseResponse(client.quote.image.font.$delete(args, options))
    },
  })
}

export function useDeleteQuoteImageFont<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quote.image.font.$delete>,
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
  const mutationDefaults = getDeleteQuoteImageFontMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteImageFontListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.font.list.$get>>,
) {
  return ['quote', '/quote/image/font/list', toValue(args)] as const
}

export function getQuoteImageFontListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.font.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteImageFontListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.image.font.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteImageFontList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.font.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
            >
          >,
          ReturnType<typeof getQuoteImageFontListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageFontListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteImageFontListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.image.font.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteImageFontSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.font.search.$get>>,
) {
  return ['quote', '/quote/image/font/search', toValue(args)] as const
}

export function getQuoteImageFontSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.font.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteImageFontSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.image.font.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteImageFontSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.font.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
            >
          >,
          ReturnType<typeof getQuoteImageFontSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageFontSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteImageFontSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.image.font.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQuoteImageFontTagsAddMutationKey() {
  return ['quote', '/quote/image/font/tags/add', 'POST'] as const
}

export function getPostQuoteImageFontTagsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.tags.add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.font.tags.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageFontTagsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.font.tags.add.$post>) {
      return parseResponse(client.quote.image.font.tags.add.$post(args, options))
    },
  })
}

export function usePostQuoteImageFontTagsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.quote.image.font.tags.add.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.quote.image.font.tags.add.$post>,
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
  const mutationDefaults = getPostQuoteImageFontTagsAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostQuoteImageFontTagsRemoveMutationKey() {
  return ['quote', '/quote/image/font/tags/remove', 'POST'] as const
}

export function getPostQuoteImageFontTagsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.tags.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.font.tags.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageFontTagsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.font.tags.remove.$post>) {
      return parseResponse(client.quote.image.font.tags.remove.$post(args, options))
    },
  })
}

export function usePostQuoteImageFontTagsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.quote.image.font.tags.remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.quote.image.font.tags.remove.$post>,
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
  const mutationDefaults = getPostQuoteImageFontTagsRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteImageSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.search.$get>>,
) {
  return ['quote', '/quote/image/search', toValue(args)] as const
}

export function getQuoteImageSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteImageSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.image.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteImageSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.image.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>
            >
          >,
          ReturnType<typeof getQuoteImageSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteImageSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.image.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutQuoteLikeMutationKey() {
  return ['quote', '/quote/like', 'PUT'] as const
}

export function getPutQuoteLikeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$put>>>>>,
    TError,
    InferRequestType<typeof client.quote.like.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuoteLikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.like.$put>) {
      return parseResponse(client.quote.like.$put(args, options))
    },
  })
}

export function usePutQuoteLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.like.$put>,
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
  const mutationDefaults = getPutQuoteLikeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuoteLikeMutationKey() {
  return ['quote', '/quote/like', 'POST'] as const
}

export function getPostQuoteLikeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$post>>>>>,
    TError,
    InferRequestType<typeof client.quote.like.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteLikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.like.$post>) {
      return parseResponse(client.quote.like.$post(args, options))
    },
  })
}

export function usePostQuoteLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.like.$post>,
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
  const mutationDefaults = getPostQuoteLikeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQuoteLikeMutationKey() {
  return ['quote', '/quote/like', 'DELETE'] as const
}

export function getDeleteQuoteLikeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.like.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteLikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.like.$delete>) {
      return parseResponse(client.quote.like.$delete(args, options))
    },
  })
}

export function useDeleteQuoteLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.quote.like.$delete>,
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
  const mutationDefaults = getDeleteQuoteLikeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuoteListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.list.$get>>,
) {
  return ['quote', '/quote/list', toValue(args)] as const
}

export function getQuoteListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuoteList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>
          >,
          ReturnType<typeof getQuoteListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteRandomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.random.$get>>,
) {
  return ['quote', '/quote/random', toValue(args)] as const
}

export function getQuoteRandomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.random.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteRandomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.random.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuoteRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.random.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
          >,
          ReturnType<typeof getQuoteRandomQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteRandomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.random.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.search.$get>>,
) {
  return ['quote', '/quote/search', toValue(args)] as const
}

export function getQuoteSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuoteSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
          >,
          ReturnType<typeof getQuoteSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQuoteTagsAddMutationKey() {
  return ['quote', '/quote/tags/add', 'POST'] as const
}

export function getPostQuoteTagsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.tags.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteTagsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.tags.add.$post>) {
      return parseResponse(client.quote.tags.add.$post(args, options))
    },
  })
}

export function usePostQuoteTagsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quote.tags.add.$post>,
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
  const mutationDefaults = getPostQuoteTagsAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostQuoteTagsRemoveMutationKey() {
  return ['quote', '/quote/tags/remove', 'POST'] as const
}

export function getPostQuoteTagsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.tags.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteTagsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.tags.remove.$post>) {
      return parseResponse(client.quote.tags.remove.$post(args, options))
    },
  })
}

export function usePostQuoteTagsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quote.tags.remove.$post>,
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
  const mutationDefaults = getPostQuoteTagsRemoveMutationOptions<TError, TOnMutateResult>(
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
