import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getStatusKey() {
  return ['status'] as const
}

export function getStatus200QueryKey() {
  return ['status', '/status/200'] as const
}

export function getStatus200QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['200']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['200']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus200QueryKey>
  >({
    queryKey: getStatus200QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['200'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus200<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['200']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['200']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus200QueryKey>
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
    return { ...getStatus200QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus201QueryKey() {
  return ['status', '/status/201'] as const
}

export function getStatus201QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['201']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['201']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus201QueryKey>
  >({
    queryKey: getStatus201QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['201'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus201<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['201']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['201']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus201QueryKey>
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
    return { ...getStatus201QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus202QueryKey() {
  return ['status', '/status/202'] as const
}

export function getStatus202QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['202']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['202']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus202QueryKey>
  >({
    queryKey: getStatus202QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['202'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus202<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['202']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['202']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus202QueryKey>
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
    return { ...getStatus202QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus203QueryKey() {
  return ['status', '/status/203'] as const
}

export function getStatus203QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['203']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['203']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus203QueryKey>
  >({
    queryKey: getStatus203QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['203'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus203<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['203']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['203']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus203QueryKey>
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
    return { ...getStatus203QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus204QueryKey() {
  return ['status', '/status/204'] as const
}

export function getStatus204QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus204QueryKey>
  >({
    queryKey: getStatus204QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['204'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus204<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus204QueryKey>
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
    return { ...getStatus204QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus205QueryKey() {
  return ['status', '/status/205'] as const
}

export function getStatus205QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['205']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['205']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus205QueryKey>
  >({
    queryKey: getStatus205QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['205'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus205<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['205']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['205']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus205QueryKey>
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
    return { ...getStatus205QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus206QueryKey() {
  return ['status', '/status/206'] as const
}

export function getStatus206QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['206']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['206']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus206QueryKey>
  >({
    queryKey: getStatus206QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['206'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus206<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['206']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['206']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus206QueryKey>
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
    return { ...getStatus206QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus207QueryKey() {
  return ['status', '/status/207'] as const
}

export function getStatus207QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['207']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['207']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus207QueryKey>
  >({
    queryKey: getStatus207QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['207'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus207<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['207']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['207']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus207QueryKey>
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
    return { ...getStatus207QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus208QueryKey() {
  return ['status', '/status/208'] as const
}

export function getStatus208QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['208']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['208']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus208QueryKey>
  >({
    queryKey: getStatus208QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['208'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus208<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['208']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['208']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus208QueryKey>
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
    return { ...getStatus208QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus218QueryKey() {
  return ['status', '/status/218'] as const
}

export function getStatus218QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['218']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['218']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus218QueryKey>
  >({
    queryKey: getStatus218QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['218'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus218<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['218']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['218']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus218QueryKey>
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
    return { ...getStatus218QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus226QueryKey() {
  return ['status', '/status/226'] as const
}

export function getStatus226QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['226']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['226']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus226QueryKey>
  >({
    queryKey: getStatus226QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['226'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus226<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['226']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['226']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus226QueryKey>
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
    return { ...getStatus226QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus300QueryKey() {
  return ['status', '/status/300'] as const
}

export function getStatus300QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['300']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['300']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus300QueryKey>
  >({
    queryKey: getStatus300QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['300'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus300<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['300']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['300']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus300QueryKey>
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
    return { ...getStatus300QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus301QueryKey() {
  return ['status', '/status/301'] as const
}

export function getStatus301QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['301']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['301']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus301QueryKey>
  >({
    queryKey: getStatus301QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['301'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus301<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['301']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['301']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus301QueryKey>
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
    return { ...getStatus301QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus302QueryKey() {
  return ['status', '/status/302'] as const
}

export function getStatus302QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus302QueryKey>
  >({
    queryKey: getStatus302QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['302'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus302<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus302QueryKey>
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
    return { ...getStatus302QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus303QueryKey() {
  return ['status', '/status/303'] as const
}

export function getStatus303QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['303']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['303']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus303QueryKey>
  >({
    queryKey: getStatus303QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['303'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus303<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['303']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['303']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus303QueryKey>
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
    return { ...getStatus303QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus304QueryKey() {
  return ['status', '/status/304'] as const
}

export function getStatus304QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['304']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['304']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus304QueryKey>
  >({
    queryKey: getStatus304QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['304'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus304<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['304']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['304']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus304QueryKey>
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
    return { ...getStatus304QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus305QueryKey() {
  return ['status', '/status/305'] as const
}

export function getStatus305QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['305']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['305']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus305QueryKey>
  >({
    queryKey: getStatus305QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['305'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus305<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['305']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['305']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus305QueryKey>
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
    return { ...getStatus305QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus306QueryKey() {
  return ['status', '/status/306'] as const
}

export function getStatus306QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['306']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['306']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus306QueryKey>
  >({
    queryKey: getStatus306QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['306'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus306<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['306']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['306']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus306QueryKey>
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
    return { ...getStatus306QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus307QueryKey() {
  return ['status', '/status/307'] as const
}

export function getStatus307QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['307']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['307']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus307QueryKey>
  >({
    queryKey: getStatus307QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['307'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus307<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['307']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['307']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus307QueryKey>
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
    return { ...getStatus307QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus308QueryKey() {
  return ['status', '/status/308'] as const
}

export function getStatus308QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['308']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['308']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus308QueryKey>
  >({
    queryKey: getStatus308QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['308'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus308<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['308']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['308']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus308QueryKey>
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
    return { ...getStatus308QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus400QueryKey() {
  return ['status', '/status/400'] as const
}

export function getStatus400QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['400']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['400']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus400QueryKey>
  >({
    queryKey: getStatus400QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['400'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus400<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['400']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['400']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus400QueryKey>
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
    return { ...getStatus400QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus401QueryKey() {
  return ['status', '/status/401'] as const
}

export function getStatus401QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus401QueryKey>
  >({
    queryKey: getStatus401QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['401'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus401<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus401QueryKey>
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
    return { ...getStatus401QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus402QueryKey() {
  return ['status', '/status/402'] as const
}

export function getStatus402QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['402']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['402']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus402QueryKey>
  >({
    queryKey: getStatus402QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['402'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus402<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['402']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['402']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus402QueryKey>
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
    return { ...getStatus402QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus403QueryKey() {
  return ['status', '/status/403'] as const
}

export function getStatus403QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['403']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['403']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus403QueryKey>
  >({
    queryKey: getStatus403QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['403'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus403<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['403']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['403']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus403QueryKey>
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
    return { ...getStatus403QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus404QueryKey() {
  return ['status', '/status/404'] as const
}

export function getStatus404QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['404']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['404']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus404QueryKey>
  >({
    queryKey: getStatus404QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['404'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus404<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['404']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['404']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus404QueryKey>
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
    return { ...getStatus404QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus405QueryKey() {
  return ['status', '/status/405'] as const
}

export function getStatus405QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['405']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['405']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus405QueryKey>
  >({
    queryKey: getStatus405QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['405'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus405<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['405']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['405']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus405QueryKey>
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
    return { ...getStatus405QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus406QueryKey() {
  return ['status', '/status/406'] as const
}

export function getStatus406QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['406']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['406']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus406QueryKey>
  >({
    queryKey: getStatus406QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['406'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus406<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['406']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['406']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus406QueryKey>
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
    return { ...getStatus406QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus407QueryKey() {
  return ['status', '/status/407'] as const
}

export function getStatus407QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['407']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['407']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus407QueryKey>
  >({
    queryKey: getStatus407QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['407'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus407<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['407']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['407']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus407QueryKey>
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
    return { ...getStatus407QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus408QueryKey() {
  return ['status', '/status/408'] as const
}

export function getStatus408QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['408']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['408']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus408QueryKey>
  >({
    queryKey: getStatus408QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['408'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus408<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['408']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['408']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus408QueryKey>
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
    return { ...getStatus408QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus409QueryKey() {
  return ['status', '/status/409'] as const
}

export function getStatus409QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['409']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['409']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus409QueryKey>
  >({
    queryKey: getStatus409QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['409'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus409<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['409']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['409']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus409QueryKey>
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
    return { ...getStatus409QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus410QueryKey() {
  return ['status', '/status/410'] as const
}

export function getStatus410QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['410']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['410']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus410QueryKey>
  >({
    queryKey: getStatus410QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['410'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus410<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['410']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['410']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus410QueryKey>
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
    return { ...getStatus410QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus411QueryKey() {
  return ['status', '/status/411'] as const
}

export function getStatus411QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['411']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['411']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus411QueryKey>
  >({
    queryKey: getStatus411QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['411'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus411<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['411']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['411']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus411QueryKey>
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
    return { ...getStatus411QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus412QueryKey() {
  return ['status', '/status/412'] as const
}

export function getStatus412QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['412']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['412']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus412QueryKey>
  >({
    queryKey: getStatus412QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['412'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus412<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['412']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['412']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus412QueryKey>
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
    return { ...getStatus412QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus413QueryKey() {
  return ['status', '/status/413'] as const
}

export function getStatus413QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['413']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['413']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus413QueryKey>
  >({
    queryKey: getStatus413QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['413'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus413<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['413']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['413']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus413QueryKey>
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
    return { ...getStatus413QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus414QueryKey() {
  return ['status', '/status/414'] as const
}

export function getStatus414QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['414']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['414']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus414QueryKey>
  >({
    queryKey: getStatus414QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['414'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus414<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['414']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['414']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus414QueryKey>
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
    return { ...getStatus414QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus415QueryKey() {
  return ['status', '/status/415'] as const
}

export function getStatus415QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['415']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['415']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus415QueryKey>
  >({
    queryKey: getStatus415QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['415'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus415<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['415']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['415']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus415QueryKey>
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
    return { ...getStatus415QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus416QueryKey() {
  return ['status', '/status/416'] as const
}

export function getStatus416QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['416']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['416']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus416QueryKey>
  >({
    queryKey: getStatus416QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['416'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus416<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['416']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['416']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus416QueryKey>
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
    return { ...getStatus416QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus417QueryKey() {
  return ['status', '/status/417'] as const
}

export function getStatus417QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['417']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['417']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus417QueryKey>
  >({
    queryKey: getStatus417QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['417'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus417<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['417']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['417']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus417QueryKey>
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
    return { ...getStatus417QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus418QueryKey() {
  return ['status', '/status/418'] as const
}

export function getStatus418QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['418']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['418']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus418QueryKey>
  >({
    queryKey: getStatus418QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['418'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus418<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['418']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['418']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus418QueryKey>
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
    return { ...getStatus418QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus419QueryKey() {
  return ['status', '/status/419'] as const
}

export function getStatus419QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['419']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['419']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus419QueryKey>
  >({
    queryKey: getStatus419QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['419'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus419<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['419']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['419']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus419QueryKey>
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
    return { ...getStatus419QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus420QueryKey() {
  return ['status', '/status/420'] as const
}

export function getStatus420QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['420']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['420']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus420QueryKey>
  >({
    queryKey: getStatus420QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['420'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus420<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['420']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['420']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus420QueryKey>
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
    return { ...getStatus420QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus421QueryKey() {
  return ['status', '/status/421'] as const
}

export function getStatus421QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['421']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['421']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus421QueryKey>
  >({
    queryKey: getStatus421QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['421'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus421<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['421']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['421']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus421QueryKey>
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
    return { ...getStatus421QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus422QueryKey() {
  return ['status', '/status/422'] as const
}

export function getStatus422QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['422']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['422']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus422QueryKey>
  >({
    queryKey: getStatus422QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['422'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus422<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['422']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['422']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus422QueryKey>
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
    return { ...getStatus422QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus423QueryKey() {
  return ['status', '/status/423'] as const
}

export function getStatus423QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['423']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['423']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus423QueryKey>
  >({
    queryKey: getStatus423QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['423'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus423<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['423']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['423']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus423QueryKey>
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
    return { ...getStatus423QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus424QueryKey() {
  return ['status', '/status/424'] as const
}

export function getStatus424QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['424']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['424']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus424QueryKey>
  >({
    queryKey: getStatus424QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['424'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus424<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['424']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['424']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus424QueryKey>
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
    return { ...getStatus424QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus425QueryKey() {
  return ['status', '/status/425'] as const
}

export function getStatus425QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['425']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['425']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus425QueryKey>
  >({
    queryKey: getStatus425QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['425'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus425<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['425']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['425']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus425QueryKey>
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
    return { ...getStatus425QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus426QueryKey() {
  return ['status', '/status/426'] as const
}

export function getStatus426QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['426']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['426']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus426QueryKey>
  >({
    queryKey: getStatus426QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['426'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus426<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['426']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['426']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus426QueryKey>
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
    return { ...getStatus426QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus428QueryKey() {
  return ['status', '/status/428'] as const
}

export function getStatus428QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['428']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['428']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus428QueryKey>
  >({
    queryKey: getStatus428QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['428'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus428<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['428']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['428']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus428QueryKey>
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
    return { ...getStatus428QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus429QueryKey() {
  return ['status', '/status/429'] as const
}

export function getStatus429QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['429']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['429']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus429QueryKey>
  >({
    queryKey: getStatus429QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['429'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus429<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['429']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['429']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus429QueryKey>
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
    return { ...getStatus429QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus430QueryKey() {
  return ['status', '/status/430'] as const
}

export function getStatus430QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['430']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['430']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus430QueryKey>
  >({
    queryKey: getStatus430QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['430'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus430<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['430']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['430']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus430QueryKey>
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
    return { ...getStatus430QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus431QueryKey() {
  return ['status', '/status/431'] as const
}

export function getStatus431QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['431']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['431']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus431QueryKey>
  >({
    queryKey: getStatus431QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['431'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus431<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['431']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['431']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus431QueryKey>
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
    return { ...getStatus431QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus440QueryKey() {
  return ['status', '/status/440'] as const
}

export function getStatus440QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['440']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['440']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus440QueryKey>
  >({
    queryKey: getStatus440QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['440'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus440<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['440']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['440']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus440QueryKey>
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
    return { ...getStatus440QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus444QueryKey() {
  return ['status', '/status/444'] as const
}

export function getStatus444QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['444']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['444']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus444QueryKey>
  >({
    queryKey: getStatus444QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['444'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus444<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['444']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['444']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus444QueryKey>
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
    return { ...getStatus444QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus449QueryKey() {
  return ['status', '/status/449'] as const
}

export function getStatus449QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['449']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['449']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus449QueryKey>
  >({
    queryKey: getStatus449QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['449'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus449<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['449']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['449']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus449QueryKey>
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
    return { ...getStatus449QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus450QueryKey() {
  return ['status', '/status/450'] as const
}

export function getStatus450QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['450']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['450']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus450QueryKey>
  >({
    queryKey: getStatus450QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['450'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus450<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['450']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['450']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus450QueryKey>
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
    return { ...getStatus450QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus451QueryKey() {
  return ['status', '/status/451'] as const
}

export function getStatus451QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['451']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['451']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus451QueryKey>
  >({
    queryKey: getStatus451QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['451'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus451<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['451']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['451']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus451QueryKey>
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
    return { ...getStatus451QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus494QueryKey() {
  return ['status', '/status/494'] as const
}

export function getStatus494QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['494']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['494']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus494QueryKey>
  >({
    queryKey: getStatus494QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['494'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus494<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['494']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['494']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus494QueryKey>
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
    return { ...getStatus494QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus495QueryKey() {
  return ['status', '/status/495'] as const
}

export function getStatus495QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['495']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['495']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus495QueryKey>
  >({
    queryKey: getStatus495QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['495'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus495<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['495']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['495']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus495QueryKey>
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
    return { ...getStatus495QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus496QueryKey() {
  return ['status', '/status/496'] as const
}

export function getStatus496QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['496']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['496']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus496QueryKey>
  >({
    queryKey: getStatus496QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['496'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus496<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['496']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['496']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus496QueryKey>
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
    return { ...getStatus496QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus497QueryKey() {
  return ['status', '/status/497'] as const
}

export function getStatus497QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['497']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['497']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus497QueryKey>
  >({
    queryKey: getStatus497QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['497'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus497<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['497']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['497']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus497QueryKey>
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
    return { ...getStatus497QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus498QueryKey() {
  return ['status', '/status/498'] as const
}

export function getStatus498QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['498']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['498']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus498QueryKey>
  >({
    queryKey: getStatus498QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['498'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus498<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['498']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['498']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus498QueryKey>
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
    return { ...getStatus498QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus499QueryKey() {
  return ['status', '/status/499'] as const
}

export function getStatus499QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['499']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['499']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus499QueryKey>
  >({
    queryKey: getStatus499QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['499'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus499<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['499']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['499']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus499QueryKey>
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
    return { ...getStatus499QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus500QueryKey() {
  return ['status', '/status/500'] as const
}

export function getStatus500QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['500']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['500']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus500QueryKey>
  >({
    queryKey: getStatus500QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['500'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus500<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['500']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['500']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus500QueryKey>
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
    return { ...getStatus500QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus501QueryKey() {
  return ['status', '/status/501'] as const
}

export function getStatus501QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['501']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['501']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus501QueryKey>
  >({
    queryKey: getStatus501QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['501'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus501<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['501']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['501']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus501QueryKey>
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
    return { ...getStatus501QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus502QueryKey() {
  return ['status', '/status/502'] as const
}

export function getStatus502QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['502']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['502']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus502QueryKey>
  >({
    queryKey: getStatus502QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['502'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus502<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['502']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['502']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus502QueryKey>
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
    return { ...getStatus502QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus503QueryKey() {
  return ['status', '/status/503'] as const
}

export function getStatus503QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['503']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['503']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus503QueryKey>
  >({
    queryKey: getStatus503QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['503'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus503<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['503']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['503']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus503QueryKey>
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
    return { ...getStatus503QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus504QueryKey() {
  return ['status', '/status/504'] as const
}

export function getStatus504QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['504']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['504']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus504QueryKey>
  >({
    queryKey: getStatus504QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['504'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus504<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['504']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['504']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus504QueryKey>
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
    return { ...getStatus504QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus505QueryKey() {
  return ['status', '/status/505'] as const
}

export function getStatus505QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['505']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['505']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus505QueryKey>
  >({
    queryKey: getStatus505QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['505'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus505<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['505']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['505']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus505QueryKey>
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
    return { ...getStatus505QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus506QueryKey() {
  return ['status', '/status/506'] as const
}

export function getStatus506QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['506']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['506']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus506QueryKey>
  >({
    queryKey: getStatus506QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['506'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus506<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['506']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['506']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus506QueryKey>
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
    return { ...getStatus506QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus507QueryKey() {
  return ['status', '/status/507'] as const
}

export function getStatus507QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['507']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['507']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus507QueryKey>
  >({
    queryKey: getStatus507QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['507'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus507<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['507']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['507']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus507QueryKey>
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
    return { ...getStatus507QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus508QueryKey() {
  return ['status', '/status/508'] as const
}

export function getStatus508QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['508']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['508']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus508QueryKey>
  >({
    queryKey: getStatus508QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['508'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus508<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['508']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['508']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus508QueryKey>
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
    return { ...getStatus508QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus509QueryKey() {
  return ['status', '/status/509'] as const
}

export function getStatus509QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['509']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['509']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus509QueryKey>
  >({
    queryKey: getStatus509QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['509'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus509<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['509']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['509']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus509QueryKey>
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
    return { ...getStatus509QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus510QueryKey() {
  return ['status', '/status/510'] as const
}

export function getStatus510QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['510']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['510']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus510QueryKey>
  >({
    queryKey: getStatus510QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['510'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus510<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['510']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['510']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus510QueryKey>
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
    return { ...getStatus510QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus511QueryKey() {
  return ['status', '/status/511'] as const
}

export function getStatus511QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['511']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['511']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus511QueryKey>
  >({
    queryKey: getStatus511QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['511'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus511<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['511']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['511']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus511QueryKey>
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
    return { ...getStatus511QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus520QueryKey() {
  return ['status', '/status/520'] as const
}

export function getStatus520QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['520']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['520']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus520QueryKey>
  >({
    queryKey: getStatus520QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['520'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus520<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['520']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['520']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus520QueryKey>
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
    return { ...getStatus520QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus512QueryKey() {
  return ['status', '/status/512'] as const
}

export function getStatus512QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['512']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['512']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus512QueryKey>
  >({
    queryKey: getStatus512QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['512'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus512<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['512']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['512']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus512QueryKey>
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
    return { ...getStatus512QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus522QueryKey() {
  return ['status', '/status/522'] as const
}

export function getStatus522QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['522']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['522']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus522QueryKey>
  >({
    queryKey: getStatus522QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['522'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus522<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['522']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['522']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus522QueryKey>
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
    return { ...getStatus522QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus523QueryKey() {
  return ['status', '/status/523'] as const
}

export function getStatus523QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['523']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['523']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus523QueryKey>
  >({
    queryKey: getStatus523QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['523'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus523<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['523']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['523']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus523QueryKey>
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
    return { ...getStatus523QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus524QueryKey() {
  return ['status', '/status/524'] as const
}

export function getStatus524QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['524']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['524']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus524QueryKey>
  >({
    queryKey: getStatus524QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['524'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus524<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['524']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['524']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus524QueryKey>
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
    return { ...getStatus524QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus525QueryKey() {
  return ['status', '/status/525'] as const
}

export function getStatus525QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['525']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['525']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus525QueryKey>
  >({
    queryKey: getStatus525QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['525'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus525<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['525']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['525']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus525QueryKey>
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
    return { ...getStatus525QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus526QueryKey() {
  return ['status', '/status/526'] as const
}

export function getStatus526QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['526']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['526']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus526QueryKey>
  >({
    queryKey: getStatus526QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['526'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus526<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['526']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['526']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus526QueryKey>
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
    return { ...getStatus526QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus527QueryKey() {
  return ['status', '/status/527'] as const
}

export function getStatus527QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['527']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['527']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus527QueryKey>
  >({
    queryKey: getStatus527QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['527'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus527<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['527']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['527']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus527QueryKey>
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
    return { ...getStatus527QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus529QueryKey() {
  return ['status', '/status/529'] as const
}

export function getStatus529QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['529']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['529']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus529QueryKey>
  >({
    queryKey: getStatus529QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['529'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus529<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['529']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['529']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus529QueryKey>
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
    return { ...getStatus529QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus530QueryKey() {
  return ['status', '/status/530'] as const
}

export function getStatus530QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['530']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['530']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus530QueryKey>
  >({
    queryKey: getStatus530QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['530'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus530<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['530']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['530']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus530QueryKey>
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
    return { ...getStatus530QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus598QueryKey() {
  return ['status', '/status/598'] as const
}

export function getStatus598QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['598']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['598']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus598QueryKey>
  >({
    queryKey: getStatus598QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['598'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus598<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['598']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['598']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus598QueryKey>
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
    return { ...getStatus598QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus100QueryKey() {
  return ['status', '/status/100'] as const
}

export function getStatus100QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['100']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['100']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus100QueryKey>
  >({
    queryKey: getStatus100QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['100'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus100<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['100']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['100']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus100QueryKey>
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
    return { ...getStatus100QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus101QueryKey() {
  return ['status', '/status/101'] as const
}

export function getStatus101QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['101']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['101']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus101QueryKey>
  >({
    queryKey: getStatus101QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['101'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus101<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['101']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['101']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus101QueryKey>
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
    return { ...getStatus101QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus102QueryKey() {
  return ['status', '/status/102'] as const
}

export function getStatus102QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['102']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['102']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus102QueryKey>
  >({
    queryKey: getStatus102QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['102'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus102<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['102']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['102']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus102QueryKey>
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
    return { ...getStatus102QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatus103QueryKey() {
  return ['status', '/status/103'] as const
}

export function getStatus103QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['103']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['103']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus103QueryKey>
  >({
    queryKey: getStatus103QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status['103'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus103<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['103']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['103']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatus103QueryKey>
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
    return { ...getStatus103QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
