import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function getHypernymsQueryKey(args: InferRequestType<typeof client.hypernyms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hypernyms', '/hypernyms', keyArgs] as const
}

export function getHypernymsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hypernyms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHypernymsQueryKey>
  >({
    queryKey: getHypernymsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hypernyms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHypernyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hypernyms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHypernymsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHypernymsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHypernyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hypernyms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHypernymsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHypernymsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHyponymsQueryKey(args: InferRequestType<typeof client.hyponyms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hyponyms', '/hyponyms', keyArgs] as const
}

export function getHyponymsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hyponyms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHyponymsQueryKey>
  >({
    queryKey: getHyponymsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hyponyms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHyponyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hyponyms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHyponymsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHyponymsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHyponyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hyponyms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHyponymsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHyponymsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInflectionsQueryKey(args: InferRequestType<typeof client.inflections.$get>) {
  const { header: _, ...keyArgs } = args
  return ['inflections', '/inflections', keyArgs] as const
}

export function getInflectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inflections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInflectionsQueryKey>
  >({
    queryKey: getInflectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inflections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInflections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inflections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInflectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInflectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInflections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inflections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInflectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInflectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLmFamilyQueryKey(args: InferRequestType<typeof client.lm.family.$get>) {
  const { header: _, ...keyArgs } = args
  return ['lm', '/lm/family', keyArgs] as const
}

export function getLmFamilyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lm.family.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLmFamilyQueryKey>
  >({
    queryKey: getLmFamilyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lm.family.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLmFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lm.family.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLmFamilyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLmFamilyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLmFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lm.family.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLmFamilyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLmFamilyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSensesQueryKey(args: InferRequestType<typeof client.senses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['senses', '/senses', keyArgs] as const
}

export function getSensesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.senses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSensesQueryKey>
  >({
    queryKey: getSensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.senses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSenses<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.senses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSensesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSenses<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.senses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSensesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getValuesQueryKey(args: InferRequestType<typeof client.values.$get>) {
  const { header: _, ...keyArgs } = args
  return ['values', '/values', keyArgs] as const
}

export function getValuesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.values.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValuesQueryKey>
  >({
    queryKey: getValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.values.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useValues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.values.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getValuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseValues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.values.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getValuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
