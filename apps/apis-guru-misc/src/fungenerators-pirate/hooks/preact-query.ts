import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPirateKey() {
  return ['pirate'] as const
}

export function getPirateGenerateInsultQueryKey(
  args: InferRequestType<typeof client.pirate.generate.insult.$get>,
) {
  return ['pirate', '/pirate/generate/insult', args] as const
}

export function getPirateGenerateInsultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pirate.generate.insult.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPirateGenerateInsultQueryKey>
  >({
    queryKey: getPirateGenerateInsultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pirate.generate.insult.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePirateGenerateInsult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pirate.generate.insult.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPirateGenerateInsultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPirateGenerateInsultQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePirateGenerateInsult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pirate.generate.insult.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPirateGenerateInsultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPirateGenerateInsultQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPirateGenerateLoremIpsumQueryKey(
  args: InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>,
) {
  return ['pirate', '/pirate/generate/lorem-ipsum', args] as const
}

export function getPirateGenerateLoremIpsumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPirateGenerateLoremIpsumQueryKey>
  >({
    queryKey: getPirateGenerateLoremIpsumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pirate.generate['lorem-ipsum'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePirateGenerateLoremIpsum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPirateGenerateLoremIpsumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPirateGenerateLoremIpsumQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePirateGenerateLoremIpsum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPirateGenerateLoremIpsumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPirateGenerateLoremIpsumQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPirateGenerateNameQueryKey(
  args: InferRequestType<typeof client.pirate.generate.name.$get>,
) {
  return ['pirate', '/pirate/generate/name', args] as const
}

export function getPirateGenerateNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pirate.generate.name.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPirateGenerateNameQueryKey>
  >({
    queryKey: getPirateGenerateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pirate.generate.name.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePirateGenerateName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pirate.generate.name.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPirateGenerateNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPirateGenerateNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePirateGenerateName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pirate.generate.name.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPirateGenerateNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPirateGenerateNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPirateTranslateQueryKey(
  args: InferRequestType<typeof client.pirate.translate.$get>,
) {
  return ['pirate', '/pirate/translate', args] as const
}

export function getPirateTranslateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pirate.translate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPirateTranslateQueryKey>
  >({
    queryKey: getPirateTranslateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pirate.translate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePirateTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pirate.translate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPirateTranslateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPirateTranslateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePirateTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pirate.translate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPirateTranslateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPirateTranslateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
