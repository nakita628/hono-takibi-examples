import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHypernymsKey() {
  return ['hypernyms'] as const
}

export function getHyponymsKey() {
  return ['hyponyms'] as const
}

export function getInflectionsKey() {
  return ['inflections'] as const
}

export function getLmKey() {
  return ['lm'] as const
}

export function getSensesKey() {
  return ['senses'] as const
}

export function getValuesKey() {
  return ['values'] as const
}

export function getHypernymsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hypernyms.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hypernyms', '/hypernyms', keyArgs] as const
}

export function getHypernymsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hypernyms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHypernymsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hypernyms.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHypernyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hypernyms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
          >,
          ReturnType<typeof getHypernymsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHypernymsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHypernymsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hypernyms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHyponymsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hyponyms.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hyponyms', '/hyponyms', keyArgs] as const
}

export function getHyponymsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hyponyms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHyponymsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hyponyms.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHyponyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hyponyms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>
          >,
          ReturnType<typeof getHyponymsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHyponymsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHyponymsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hyponyms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInflectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inflections.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['inflections', '/inflections', keyArgs] as const
}

export function getInflectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inflections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInflectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inflections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInflections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inflections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
          >,
          ReturnType<typeof getInflectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInflectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInflectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inflections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLmFamilyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lm.family.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lm', '/lm/family', keyArgs] as const
}

export function getLmFamilyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lm.family.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLmFamilyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lm.family.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLmFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lm.family.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
          >,
          ReturnType<typeof getLmFamilyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLmFamilyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLmFamilyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lm.family.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['senses', '/senses', keyArgs] as const
}

export function getSensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.senses.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSenses<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
          ReturnType<typeof getSensesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.senses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.values.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['values', '/values', keyArgs] as const
}

export function getValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.values.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useValues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
          ReturnType<typeof getValuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
