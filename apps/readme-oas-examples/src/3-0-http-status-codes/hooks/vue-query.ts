import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getStatusKey() {
  return ['status'] as const
}

export function getStatus200QueryKey() {
  return ['status', '/status/200'] as const
}

export function getStatus200QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus200QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['200'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus200<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['200']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['200']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['200']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus200QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['200']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus200QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus200QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['200'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus201QueryKey() {
  return ['status', '/status/201'] as const
}

export function getStatus201QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus201QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['201'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus201<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['201']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['201']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['201']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus201QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['201']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus201QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus201QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['201'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus202QueryKey() {
  return ['status', '/status/202'] as const
}

export function getStatus202QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus202QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['202'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus202<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['202']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['202']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['202']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus202QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['202']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus202QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus202QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['202'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus203QueryKey() {
  return ['status', '/status/203'] as const
}

export function getStatus203QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus203QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['203'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus203<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['203']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['203']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['203']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus203QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['203']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus203QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus203QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['203'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus204QueryKey() {
  return ['status', '/status/204'] as const
}

export function getStatus204QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus204QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['204'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus204<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus204QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus204QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus204QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['204'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus205QueryKey() {
  return ['status', '/status/205'] as const
}

export function getStatus205QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus205QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['205'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus205<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['205']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['205']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['205']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus205QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['205']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus205QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus205QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['205'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus206QueryKey() {
  return ['status', '/status/206'] as const
}

export function getStatus206QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus206QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['206'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus206<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['206']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['206']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['206']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus206QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['206']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus206QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus206QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['206'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus207QueryKey() {
  return ['status', '/status/207'] as const
}

export function getStatus207QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus207QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['207'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus207<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['207']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['207']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['207']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus207QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['207']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus207QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus207QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['207'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus208QueryKey() {
  return ['status', '/status/208'] as const
}

export function getStatus208QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus208QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['208'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus208<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['208']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['208']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['208']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus208QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['208']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus208QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus208QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['208'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus218QueryKey() {
  return ['status', '/status/218'] as const
}

export function getStatus218QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus218QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['218'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus218<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['218']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['218']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['218']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus218QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['218']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus218QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus218QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['218'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus226QueryKey() {
  return ['status', '/status/226'] as const
}

export function getStatus226QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus226QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['226'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus226<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['226']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['226']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['226']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus226QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['226']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus226QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus226QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['226'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus300QueryKey() {
  return ['status', '/status/300'] as const
}

export function getStatus300QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus300QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['300'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus300<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['300']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['300']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['300']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus300QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['300']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus300QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus300QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['300'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus301QueryKey() {
  return ['status', '/status/301'] as const
}

export function getStatus301QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus301QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['301'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus301<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['301']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['301']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['301']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus301QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['301']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus301QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus301QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['301'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus302QueryKey() {
  return ['status', '/status/302'] as const
}

export function getStatus302QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus302QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['302'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus302<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus302QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus302QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus302QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['302'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus303QueryKey() {
  return ['status', '/status/303'] as const
}

export function getStatus303QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus303QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['303'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus303<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['303']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['303']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['303']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus303QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['303']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus303QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus303QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['303'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus304QueryKey() {
  return ['status', '/status/304'] as const
}

export function getStatus304QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus304QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['304'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus304<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['304']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['304']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['304']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus304QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['304']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus304QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus304QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['304'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus305QueryKey() {
  return ['status', '/status/305'] as const
}

export function getStatus305QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus305QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['305'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus305<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['305']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['305']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['305']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus305QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['305']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus305QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus305QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['305'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus306QueryKey() {
  return ['status', '/status/306'] as const
}

export function getStatus306QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus306QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['306'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus306<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['306']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['306']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['306']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus306QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['306']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus306QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus306QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['306'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus307QueryKey() {
  return ['status', '/status/307'] as const
}

export function getStatus307QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus307QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['307'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus307<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['307']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['307']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['307']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus307QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['307']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus307QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus307QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['307'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus308QueryKey() {
  return ['status', '/status/308'] as const
}

export function getStatus308QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus308QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['308'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus308<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['308']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['308']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['308']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus308QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['308']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus308QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus308QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['308'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus400QueryKey() {
  return ['status', '/status/400'] as const
}

export function getStatus400QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus400QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['400'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus400<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['400']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['400']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['400']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus400QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['400']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus400QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus400QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['400'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus401QueryKey() {
  return ['status', '/status/401'] as const
}

export function getStatus401QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus401QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['401'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus401<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus401QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus401QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus401QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['401'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus402QueryKey() {
  return ['status', '/status/402'] as const
}

export function getStatus402QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus402QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['402'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus402<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['402']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['402']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['402']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus402QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['402']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus402QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus402QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['402'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus403QueryKey() {
  return ['status', '/status/403'] as const
}

export function getStatus403QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus403QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['403'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus403<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['403']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['403']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['403']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus403QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['403']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus403QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus403QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['403'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus404QueryKey() {
  return ['status', '/status/404'] as const
}

export function getStatus404QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus404QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['404'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus404<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['404']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['404']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['404']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus404QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['404']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus404QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus404QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['404'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus405QueryKey() {
  return ['status', '/status/405'] as const
}

export function getStatus405QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus405QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['405'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus405<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['405']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['405']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['405']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus405QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['405']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus405QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus405QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['405'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus406QueryKey() {
  return ['status', '/status/406'] as const
}

export function getStatus406QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus406QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['406'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus406<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['406']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['406']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['406']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus406QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['406']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus406QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus406QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['406'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus407QueryKey() {
  return ['status', '/status/407'] as const
}

export function getStatus407QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus407QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['407'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus407<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['407']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['407']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['407']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus407QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['407']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus407QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus407QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['407'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus408QueryKey() {
  return ['status', '/status/408'] as const
}

export function getStatus408QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus408QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['408'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus408<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['408']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['408']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['408']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus408QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['408']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus408QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus408QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['408'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus409QueryKey() {
  return ['status', '/status/409'] as const
}

export function getStatus409QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus409QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['409'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus409<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['409']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['409']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['409']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus409QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['409']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus409QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus409QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['409'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus410QueryKey() {
  return ['status', '/status/410'] as const
}

export function getStatus410QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus410QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['410'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus410<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['410']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['410']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['410']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus410QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['410']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus410QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus410QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['410'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus411QueryKey() {
  return ['status', '/status/411'] as const
}

export function getStatus411QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus411QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['411'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus411<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['411']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['411']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['411']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus411QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['411']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus411QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus411QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['411'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus412QueryKey() {
  return ['status', '/status/412'] as const
}

export function getStatus412QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus412QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['412'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus412<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['412']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['412']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['412']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus412QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['412']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus412QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus412QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['412'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus413QueryKey() {
  return ['status', '/status/413'] as const
}

export function getStatus413QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus413QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['413'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus413<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['413']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['413']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['413']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus413QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['413']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus413QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus413QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['413'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus414QueryKey() {
  return ['status', '/status/414'] as const
}

export function getStatus414QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus414QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['414'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus414<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['414']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['414']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['414']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus414QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['414']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus414QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus414QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['414'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus415QueryKey() {
  return ['status', '/status/415'] as const
}

export function getStatus415QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus415QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['415'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus415<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['415']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['415']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['415']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus415QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['415']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus415QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus415QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['415'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus416QueryKey() {
  return ['status', '/status/416'] as const
}

export function getStatus416QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus416QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['416'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus416<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['416']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['416']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['416']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus416QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['416']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus416QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus416QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['416'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus417QueryKey() {
  return ['status', '/status/417'] as const
}

export function getStatus417QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus417QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['417'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus417<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['417']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['417']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['417']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus417QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['417']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus417QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus417QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['417'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus418QueryKey() {
  return ['status', '/status/418'] as const
}

export function getStatus418QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus418QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['418'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus418<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['418']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['418']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['418']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus418QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['418']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus418QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus418QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['418'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus419QueryKey() {
  return ['status', '/status/419'] as const
}

export function getStatus419QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus419QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['419'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus419<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['419']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['419']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['419']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus419QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['419']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus419QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus419QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['419'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus420QueryKey() {
  return ['status', '/status/420'] as const
}

export function getStatus420QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus420QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['420'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus420<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['420']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['420']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['420']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus420QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['420']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus420QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus420QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['420'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus421QueryKey() {
  return ['status', '/status/421'] as const
}

export function getStatus421QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus421QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['421'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus421<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['421']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['421']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['421']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus421QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['421']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus421QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus421QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['421'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus422QueryKey() {
  return ['status', '/status/422'] as const
}

export function getStatus422QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus422QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['422'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus422<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['422']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['422']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['422']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus422QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['422']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus422QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus422QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['422'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus423QueryKey() {
  return ['status', '/status/423'] as const
}

export function getStatus423QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus423QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['423'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus423<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['423']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['423']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['423']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus423QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['423']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus423QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus423QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['423'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus424QueryKey() {
  return ['status', '/status/424'] as const
}

export function getStatus424QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus424QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['424'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus424<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['424']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['424']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['424']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus424QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['424']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus424QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus424QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['424'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus425QueryKey() {
  return ['status', '/status/425'] as const
}

export function getStatus425QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus425QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['425'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus425<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['425']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['425']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['425']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus425QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['425']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus425QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus425QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['425'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus426QueryKey() {
  return ['status', '/status/426'] as const
}

export function getStatus426QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus426QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['426'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus426<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['426']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['426']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['426']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus426QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['426']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus426QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus426QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['426'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus428QueryKey() {
  return ['status', '/status/428'] as const
}

export function getStatus428QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus428QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['428'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus428<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['428']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['428']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['428']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus428QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['428']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus428QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus428QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['428'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus429QueryKey() {
  return ['status', '/status/429'] as const
}

export function getStatus429QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus429QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['429'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus429<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['429']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['429']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['429']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus429QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['429']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus429QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus429QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['429'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus430QueryKey() {
  return ['status', '/status/430'] as const
}

export function getStatus430QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus430QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['430'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus430<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['430']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['430']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['430']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus430QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['430']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus430QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus430QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['430'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus431QueryKey() {
  return ['status', '/status/431'] as const
}

export function getStatus431QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus431QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['431'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus431<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['431']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['431']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['431']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus431QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['431']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus431QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus431QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['431'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus440QueryKey() {
  return ['status', '/status/440'] as const
}

export function getStatus440QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus440QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['440'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus440<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['440']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['440']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['440']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus440QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['440']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus440QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus440QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['440'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus444QueryKey() {
  return ['status', '/status/444'] as const
}

export function getStatus444QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus444QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['444'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus444<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['444']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['444']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['444']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus444QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['444']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus444QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus444QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['444'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus449QueryKey() {
  return ['status', '/status/449'] as const
}

export function getStatus449QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus449QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['449'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus449<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['449']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['449']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['449']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus449QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['449']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus449QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus449QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['449'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus450QueryKey() {
  return ['status', '/status/450'] as const
}

export function getStatus450QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus450QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['450'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus450<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['450']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['450']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['450']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus450QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['450']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus450QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus450QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['450'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus451QueryKey() {
  return ['status', '/status/451'] as const
}

export function getStatus451QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus451QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['451'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus451<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['451']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['451']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['451']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus451QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['451']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus451QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus451QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['451'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus494QueryKey() {
  return ['status', '/status/494'] as const
}

export function getStatus494QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus494QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['494'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus494<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['494']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['494']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['494']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus494QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['494']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus494QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus494QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['494'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus495QueryKey() {
  return ['status', '/status/495'] as const
}

export function getStatus495QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus495QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['495'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus495<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['495']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['495']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['495']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus495QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['495']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus495QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus495QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['495'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus496QueryKey() {
  return ['status', '/status/496'] as const
}

export function getStatus496QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus496QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['496'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus496<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['496']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['496']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['496']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus496QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['496']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus496QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus496QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['496'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus497QueryKey() {
  return ['status', '/status/497'] as const
}

export function getStatus497QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus497QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['497'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus497<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['497']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['497']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['497']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus497QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['497']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus497QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus497QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['497'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus498QueryKey() {
  return ['status', '/status/498'] as const
}

export function getStatus498QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus498QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['498'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus498<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['498']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['498']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['498']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus498QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['498']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus498QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus498QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['498'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus499QueryKey() {
  return ['status', '/status/499'] as const
}

export function getStatus499QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus499QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['499'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus499<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['499']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['499']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['499']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus499QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['499']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus499QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus499QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['499'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus500QueryKey() {
  return ['status', '/status/500'] as const
}

export function getStatus500QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus500QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['500'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus500<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['500']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['500']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['500']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus500QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['500']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus500QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus500QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['500'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus501QueryKey() {
  return ['status', '/status/501'] as const
}

export function getStatus501QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus501QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['501'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus501<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['501']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['501']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['501']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus501QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['501']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus501QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus501QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['501'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus502QueryKey() {
  return ['status', '/status/502'] as const
}

export function getStatus502QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus502QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['502'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus502<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['502']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['502']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['502']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus502QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['502']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus502QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus502QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['502'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus503QueryKey() {
  return ['status', '/status/503'] as const
}

export function getStatus503QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus503QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['503'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus503<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['503']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['503']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['503']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus503QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['503']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus503QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus503QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['503'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus504QueryKey() {
  return ['status', '/status/504'] as const
}

export function getStatus504QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus504QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['504'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus504<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['504']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['504']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['504']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus504QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['504']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus504QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus504QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['504'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus505QueryKey() {
  return ['status', '/status/505'] as const
}

export function getStatus505QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus505QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['505'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus505<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['505']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['505']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['505']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus505QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['505']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus505QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus505QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['505'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus506QueryKey() {
  return ['status', '/status/506'] as const
}

export function getStatus506QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus506QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['506'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus506<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['506']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['506']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['506']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus506QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['506']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus506QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus506QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['506'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus507QueryKey() {
  return ['status', '/status/507'] as const
}

export function getStatus507QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus507QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['507'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus507<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['507']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['507']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['507']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus507QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['507']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus507QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus507QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['507'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus508QueryKey() {
  return ['status', '/status/508'] as const
}

export function getStatus508QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus508QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['508'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus508<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['508']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['508']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['508']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus508QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['508']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus508QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus508QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['508'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus509QueryKey() {
  return ['status', '/status/509'] as const
}

export function getStatus509QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus509QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['509'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus509<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['509']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['509']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['509']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus509QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['509']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus509QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus509QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['509'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus510QueryKey() {
  return ['status', '/status/510'] as const
}

export function getStatus510QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus510QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['510'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus510<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['510']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['510']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['510']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus510QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['510']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus510QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus510QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['510'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus511QueryKey() {
  return ['status', '/status/511'] as const
}

export function getStatus511QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus511QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['511'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus511<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['511']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['511']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['511']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus511QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['511']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus511QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus511QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['511'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus520QueryKey() {
  return ['status', '/status/520'] as const
}

export function getStatus520QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus520QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['520'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus520<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['520']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['520']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['520']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus520QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['520']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus520QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus520QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['520'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus512QueryKey() {
  return ['status', '/status/512'] as const
}

export function getStatus512QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus512QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['512'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus512<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['512']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['512']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['512']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus512QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['512']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus512QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus512QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['512'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus522QueryKey() {
  return ['status', '/status/522'] as const
}

export function getStatus522QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus522QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['522'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus522<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['522']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['522']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['522']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus522QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['522']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus522QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus522QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['522'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus523QueryKey() {
  return ['status', '/status/523'] as const
}

export function getStatus523QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus523QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['523'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus523<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['523']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['523']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['523']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus523QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['523']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus523QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus523QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['523'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus524QueryKey() {
  return ['status', '/status/524'] as const
}

export function getStatus524QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus524QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['524'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus524<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['524']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['524']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['524']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus524QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['524']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus524QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus524QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['524'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus525QueryKey() {
  return ['status', '/status/525'] as const
}

export function getStatus525QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus525QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['525'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus525<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['525']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['525']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['525']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus525QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['525']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus525QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus525QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['525'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus526QueryKey() {
  return ['status', '/status/526'] as const
}

export function getStatus526QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus526QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['526'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus526<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['526']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['526']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['526']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus526QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['526']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus526QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus526QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['526'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus527QueryKey() {
  return ['status', '/status/527'] as const
}

export function getStatus527QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus527QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['527'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus527<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['527']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['527']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['527']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus527QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['527']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus527QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus527QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['527'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus529QueryKey() {
  return ['status', '/status/529'] as const
}

export function getStatus529QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus529QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['529'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus529<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['529']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['529']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['529']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus529QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['529']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus529QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus529QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['529'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus530QueryKey() {
  return ['status', '/status/530'] as const
}

export function getStatus530QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus530QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['530'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus530<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['530']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['530']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['530']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus530QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['530']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus530QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus530QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['530'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus598QueryKey() {
  return ['status', '/status/598'] as const
}

export function getStatus598QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus598QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['598'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus598<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['598']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['598']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['598']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus598QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['598']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus598QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus598QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['598'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus100QueryKey() {
  return ['status', '/status/100'] as const
}

export function getStatus100QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus100QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['100'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus100<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['100']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['100']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['100']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus100QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['100']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus100QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus100QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['100'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus101QueryKey() {
  return ['status', '/status/101'] as const
}

export function getStatus101QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus101QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['101'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus101<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['101']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['101']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['101']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus101QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['101']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus101QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus101QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['101'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus102QueryKey() {
  return ['status', '/status/102'] as const
}

export function getStatus102QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus102QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['102'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus102<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['102']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['102']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['102']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus102QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['102']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus102QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus102QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['102'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus103QueryKey() {
  return ['status', '/status/103'] as const
}

export function getStatus103QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus103QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['103'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus103<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['103']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['103']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['103']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus103QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['103']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus103QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus103QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['103'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
