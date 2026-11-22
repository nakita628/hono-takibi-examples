import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createHypernyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hypernyms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHypernymsQueryKey>
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
    return { ...getHypernymsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createHyponyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hyponyms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHyponymsQueryKey>
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
    return { ...getHyponymsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createInflections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inflections.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInflectionsQueryKey>
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
    return { ...getInflectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createLmFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.lm.family.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLmFamilyQueryKey>
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
    return { ...getLmFamilyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createSenses<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.senses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSensesQueryKey>
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
    return { ...getSensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createValues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.values.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getValuesQueryKey>
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
    return { ...getValuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
