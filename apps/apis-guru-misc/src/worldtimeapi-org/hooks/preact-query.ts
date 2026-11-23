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

export function getIpKey() {
  return ['ip'] as const
}

export function getIpTxtKey() {
  return ['ip.txt'] as const
}

export function getTimezoneKey() {
  return ['timezone'] as const
}

export function getTimezoneTxtKey() {
  return ['timezone.txt'] as const
}

export function getIpQueryKey() {
  return ['ip', '/ip'] as const
}

export function getIpQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpQueryKey>
  >({
    queryKey: getIpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIpTxtQueryKey() {
  return ['ip.txt', '/ip.txt'] as const
}

export function getIpTxtQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpTxtQueryKey>
  >({
    queryKey: getIpTxtQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['ip.txt'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpTxtQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpTxtQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIpIpv4QueryKey(args: InferRequestType<(typeof client.ip)[':ipv4']['$get']>) {
  return ['ip', '/ip/:ipv4', args] as const
}

export function getIpIpv4QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ip)[':ipv4']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpIpv4QueryKey>
  >({
    queryKey: getIpIpv4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ip[':ipv4'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpIpv4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ip)[':ipv4']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpIpv4QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpIpv4QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpIpv4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ip)[':ipv4']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpIpv4QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpIpv4QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIpIpv4TxtQueryKey(
  args: InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>,
) {
  return ['ip', '/ip/:ipv4.txt', args] as const
}

export function getIpIpv4TxtQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpIpv4TxtQueryKey>
  >({
    queryKey: getIpIpv4TxtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ip[':ipv4.txt'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpIpv4Txt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpIpv4TxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpIpv4TxtQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpIpv4Txt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpIpv4TxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpIpv4TxtQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimezoneQueryKey() {
  return ['timezone', '/timezone'] as const
}

export function getTimezoneQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimezoneQueryKey>
  >({
    queryKey: getTimezoneQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.timezone.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTimezone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTimezoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimezoneQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimezone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTimezoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimezoneQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimezoneTxtQueryKey() {
  return ['timezone.txt', '/timezone.txt'] as const
}

export function getTimezoneTxtQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneTxtQueryKey>
  >({
    queryKey: getTimezoneTxtQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['timezone.txt'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTimezoneTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimezoneTxtQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimezoneTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimezoneTxtQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimezoneAreaQueryKey(
  args: InferRequestType<(typeof client.timezone)[':area']['$get']>,
) {
  return ['timezone', '/timezone/:area', args] as const
}

export function getTimezoneAreaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaQueryKey>
  >({
    queryKey: getTimezoneAreaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timezone[':area'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTimezoneArea<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimezoneAreaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimezoneArea<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimezoneAreaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimezoneAreaTxtQueryKey(
  args: InferRequestType<(typeof client.timezone)[':area.txt']['$get']>,
) {
  return ['timezone', '/timezone/:area.txt', args] as const
}

export function getTimezoneAreaTxtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaTxtQueryKey>
  >({
    queryKey: getTimezoneAreaTxtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timezone[':area.txt'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTimezoneAreaTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area.txt']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimezoneAreaTxtQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimezoneAreaTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area.txt']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimezoneAreaTxtQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimezoneAreaLocationQueryKey(
  args: InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>,
) {
  return ['timezone', '/timezone/:area/:location', args] as const
}

export function getTimezoneAreaLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaLocationQueryKey>
  >({
    queryKey: getTimezoneAreaLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timezone[':area'][':location'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimezoneAreaLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaLocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimezoneAreaLocationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimezoneAreaLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaLocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimezoneAreaLocationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimezoneAreaLocationTxtQueryKey(
  args: InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>,
) {
  return ['timezone', '/timezone/:area/:location.txt', args] as const
}

export function getTimezoneAreaLocationTxtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaLocationTxtQueryKey>
  >({
    queryKey: getTimezoneAreaLocationTxtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timezone[':area'][':location.txt'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimezoneAreaLocationTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaLocationTxtQueryKey>
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
      ...getTimezoneAreaLocationTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimezoneAreaLocationTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaLocationTxtQueryKey>
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
      ...getTimezoneAreaLocationTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTimezoneAreaLocationRegionQueryKey(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>,
) {
  return ['timezone', '/timezone/:area/:location/:region', args] as const
}

export function getTimezoneAreaLocationRegionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaLocationRegionQueryKey>
  >({
    queryKey: getTimezoneAreaLocationRegionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timezone[':area'][':location'][':region'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimezoneAreaLocationRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaLocationRegionQueryKey>
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
      ...getTimezoneAreaLocationRegionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimezoneAreaLocationRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaLocationRegionQueryKey>
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
      ...getTimezoneAreaLocationRegionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTimezoneAreaLocationRegionTxtQueryKey(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>,
) {
  return ['timezone', '/timezone/:area/:location/:region.txt', args] as const
}

export function getTimezoneAreaLocationRegionTxtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaLocationRegionTxtQueryKey>
  >({
    queryKey: getTimezoneAreaLocationRegionTxtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timezone[':area'][':location'][':region.txt'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimezoneAreaLocationRegionTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaLocationRegionTxtQueryKey>
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
      ...getTimezoneAreaLocationRegionTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimezoneAreaLocationRegionTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimezoneAreaLocationRegionTxtQueryKey>
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
      ...getTimezoneAreaLocationRegionTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
