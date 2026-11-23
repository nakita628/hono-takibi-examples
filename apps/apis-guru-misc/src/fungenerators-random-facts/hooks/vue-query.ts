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

export function getFactKey() {
  return ['fact'] as const
}

export function getFactQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.fact.$get>>) {
  return ['fact', '/fact', toValue(args)] as const
}

export function getFactQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFact<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
          ReturnType<typeof getFactQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFactMutationKey() {
  return ['fact', '/fact', 'PUT'] as const
}

export function getPutFactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$put>>>>>,
    TError,
    InferRequestType<typeof client.fact.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fact.$put>) {
      return parseResponse(client.fact.$put(args, options))
    },
  })
}

export function usePutFact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$put>>>>>,
          TError,
          InferRequestType<typeof client.fact.$put>,
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
  const mutationDefaults = getPutFactMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFactMutationKey() {
  return ['fact', '/fact', 'DELETE'] as const
}

export function getDeleteFactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$delete>>>>>,
    TError,
    InferRequestType<typeof client.fact.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fact.$delete>) {
      return parseResponse(client.fact.$delete(args, options))
    },
  })
}

export function useDeleteFact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.fact.$delete>,
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
  const mutationDefaults = getDeleteFactMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFactCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.categories.$get>>,
) {
  return ['fact', '/fact/categories', toValue(args)] as const
}

export function getFactCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFactCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>
            >
          >,
          ReturnType<typeof getFactCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFactFodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.fod.$get>>,
) {
  return ['fact', '/fact/fod', toValue(args)] as const
}

export function getFactFodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.fod.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactFodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.fod.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFactFod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.fod.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>
          >,
          ReturnType<typeof getFactFodQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactFodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactFodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.fod.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFactFodCategoriesQueryKey() {
  return ['fact', '/fact/fod/categories'] as const
}

export function getFactFodCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFactFodCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.fod.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFactFodCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>
            >
          >,
          ReturnType<typeof getFactFodCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactFodCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFactFodCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.fod.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFactNumbersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.numbers.$get>>,
) {
  return ['fact', '/fact/numbers', toValue(args)] as const
}

export function getFactNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.numbers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFactNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
          >,
          ReturnType<typeof getFactNumbersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFactOnthisdayBornQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.born.$get>>,
) {
  return ['fact', '/fact/onthisday/born', toValue(args)] as const
}

export function getFactOnthisdayBornQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.born.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactOnthisdayBornQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.onthisday.born.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFactOnthisdayBorn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.born.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
            >
          >,
          ReturnType<typeof getFactOnthisdayBornQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayBornQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactOnthisdayBornQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.onthisday.born.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFactOnthisdayDiedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.died.$get>>,
) {
  return ['fact', '/fact/onthisday/died', toValue(args)] as const
}

export function getFactOnthisdayDiedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.died.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactOnthisdayDiedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.onthisday.died.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFactOnthisdayDied<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.died.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
            >
          >,
          ReturnType<typeof getFactOnthisdayDiedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayDiedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactOnthisdayDiedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.onthisday.died.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFactOnthisdayEventQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.event.$get>>,
) {
  return ['fact', '/fact/onthisday/event', toValue(args)] as const
}

export function getFactOnthisdayEventQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.event.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactOnthisdayEventQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.onthisday.event.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFactOnthisdayEvent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.onthisday.event.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
            >
          >,
          ReturnType<typeof getFactOnthisdayEventQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayEventQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactOnthisdayEventQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.onthisday.event.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFactRandomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.random.$get>>,
) {
  return ['fact', '/fact/random', toValue(args)] as const
}

export function getFactRandomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.random.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactRandomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.random.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFactRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.random.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
          >,
          ReturnType<typeof getFactRandomQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactRandomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.random.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFactSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.search.$get>>,
) {
  return ['fact', '/fact/search', toValue(args)] as const
}

export function getFactSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFactSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fact.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFactSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fact.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
          >,
          ReturnType<typeof getFactSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFactSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fact.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
