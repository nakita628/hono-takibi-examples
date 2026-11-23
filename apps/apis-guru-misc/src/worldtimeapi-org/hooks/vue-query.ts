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

export function getIpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
          ReturnType<typeof getIpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ip.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getIpTxtQueryKey() {
  return ['ip.txt', '/ip.txt'] as const
}

export function getIpTxtQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpTxtQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ip.txt'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
          >,
          ReturnType<typeof getIpTxtQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpTxtQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['ip.txt'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpIpv4QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ip)[':ipv4']['$get']>>,
) {
  return ['ip', '/ip/:ipv4', toValue(args)] as const
}

export function getIpIpv4QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ip)[':ipv4']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpIpv4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ip[':ipv4'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpIpv4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ip)[':ipv4']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>
            >
          >,
          ReturnType<typeof getIpIpv4QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpIpv4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpIpv4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ip[':ipv4'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpIpv4TxtQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>>,
) {
  return ['ip', '/ip/:ipv4.txt', toValue(args)] as const
}

export function getIpIpv4TxtQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpIpv4TxtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ip[':ipv4.txt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpIpv4Txt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>
            >
          >,
          ReturnType<typeof getIpIpv4TxtQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpIpv4TxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpIpv4TxtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ip[':ipv4.txt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimezoneQueryKey() {
  return ['timezone', '/timezone'] as const
}

export function getTimezoneQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTimezoneQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timezone.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTimezone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>
          >,
          ReturnType<typeof getTimezoneQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimezoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTimezoneQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.timezone.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimezoneTxtQueryKey() {
  return ['timezone.txt', '/timezone.txt'] as const
}

export function getTimezoneTxtQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTimezoneTxtQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['timezone.txt'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTimezoneTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>
            >
          >,
          ReturnType<typeof getTimezoneTxtQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTimezoneTxtQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['timezone.txt'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimezoneAreaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area']['$get']>>,
) {
  return ['timezone', '/timezone/:area', toValue(args)] as const
}

export function getTimezoneAreaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimezoneAreaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timezone[':area'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimezoneArea<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
            >
          >,
          ReturnType<typeof getTimezoneAreaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimezoneAreaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timezone[':area'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimezoneAreaTxtQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area.txt']['$get']>>,
) {
  return ['timezone', '/timezone/:area.txt', toValue(args)] as const
}

export function getTimezoneAreaTxtQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area.txt']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimezoneAreaTxtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timezone[':area.txt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimezoneAreaTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area.txt']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTimezoneAreaTxtQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimezoneAreaTxtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timezone[':area.txt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimezoneAreaLocationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>>,
) {
  return ['timezone', '/timezone/:area/:location', toValue(args)] as const
}

export function getTimezoneAreaLocationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimezoneAreaLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timezone[':area'][':location'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTimezoneAreaLocationQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimezoneAreaLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timezone[':area'][':location'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimezoneAreaLocationTxtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>
  >,
) {
  return ['timezone', '/timezone/:area/:location.txt', toValue(args)] as const
}

export function getTimezoneAreaLocationTxtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimezoneAreaLocationTxtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timezone[':area'][':location.txt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTimezoneAreaLocationTxtQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaLocationTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimezoneAreaLocationTxtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timezone[':area'][':location.txt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimezoneAreaLocationRegionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>
  >,
) {
  return ['timezone', '/timezone/:area/:location/:region', toValue(args)] as const
}

export function getTimezoneAreaLocationRegionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimezoneAreaLocationRegionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timezone[':area'][':location'][':region'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTimezoneAreaLocationRegionQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaLocationRegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimezoneAreaLocationRegionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timezone[':area'][':location'][':region'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimezoneAreaLocationRegionTxtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
  >,
) {
  return ['timezone', '/timezone/:area/:location/:region.txt', toValue(args)] as const
}

export function getTimezoneAreaLocationRegionTxtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimezoneAreaLocationRegionTxtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timezone[':area'][':location'][':region.txt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTimezoneAreaLocationRegionTxtQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimezoneAreaLocationRegionTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimezoneAreaLocationRegionTxtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timezone[':area'][':location'][':region.txt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
