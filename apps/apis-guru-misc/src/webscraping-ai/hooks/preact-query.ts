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

export function getAccountKey() {
  return ['account'] as const
}

export function getHtmlKey() {
  return ['html'] as const
}

export function getSelectedKey() {
  return ['selected'] as const
}

export function getSelectedMultipleKey() {
  return ['selected-multiple'] as const
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHtmlQueryKey(args: InferRequestType<typeof client.html.$get>) {
  return ['html', '/html', args] as const
}

export function getHtmlQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.html.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtmlQueryKey>
  >({
    queryKey: getHtmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.html.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHtml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.html.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHtmlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHtmlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHtml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.html.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHtmlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHtmlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelectedQueryKey(args: InferRequestType<typeof client.selected.$get>) {
  return ['selected', '/selected', args] as const
}

export function getSelectedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.selected.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelectedQueryKey>
  >({
    queryKey: getSelectedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.selected.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelected<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.selected.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelectedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelectedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelected<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.selected.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelectedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelectedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelectedMultipleQueryKey(
  args: InferRequestType<(typeof client)['selected-multiple']['$get']>,
) {
  return ['selected-multiple', '/selected-multiple', args] as const
}

export function getSelectedMultipleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['selected-multiple']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelectedMultipleQueryKey>
  >({
    queryKey: getSelectedMultipleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['selected-multiple'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelectedMultiple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['selected-multiple']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelectedMultipleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelectedMultipleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelectedMultiple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['selected-multiple']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelectedMultipleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelectedMultipleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
