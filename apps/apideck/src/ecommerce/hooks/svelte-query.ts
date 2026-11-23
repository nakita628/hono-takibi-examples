import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEcommerceKey() {
  return ['ecommerce'] as const
}

export function getEcommerceCustomersQueryKey(
  args: InferRequestType<typeof client.ecommerce.customers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/customers', keyArgs] as const
}

export function getEcommerceCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ecommerce.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceCustomersQueryKey>
  >({
    queryKey: getEcommerceCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEcommerceCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ecommerce.customers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEcommerceCustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEcommerceCustomersIdQueryKey(
  args: InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/customers/:id', keyArgs] as const
}

export function getEcommerceCustomersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceCustomersIdQueryKey>
  >({
    queryKey: getEcommerceCustomersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.customers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcommerceCustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceCustomersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEcommerceCustomersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcommerceOrdersQueryKey(
  args: InferRequestType<typeof client.ecommerce.orders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/orders', keyArgs] as const
}

export function getEcommerceOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ecommerce.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceOrdersQueryKey>
  >({
    queryKey: getEcommerceOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEcommerceOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ecommerce.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEcommerceOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEcommerceOrdersIdQueryKey(
  args: InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/orders/:id', keyArgs] as const
}

export function getEcommerceOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceOrdersIdQueryKey>
  >({
    queryKey: getEcommerceOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.orders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcommerceOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEcommerceOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEcommerceProductsQueryKey(
  args: InferRequestType<typeof client.ecommerce.products.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/products', keyArgs] as const
}

export function getEcommerceProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ecommerce.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceProductsQueryKey>
  >({
    queryKey: getEcommerceProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEcommerceProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ecommerce.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEcommerceProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEcommerceProductsIdQueryKey(
  args: InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/products/:id', keyArgs] as const
}

export function getEcommerceProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceProductsIdQueryKey>
  >({
    queryKey: getEcommerceProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.products[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcommerceProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEcommerceProductsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEcommerceStoreQueryKey(
  args: InferRequestType<typeof client.ecommerce.store.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/store', keyArgs] as const
}

export function getEcommerceStoreQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ecommerce.store.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceStoreQueryKey>
  >({
    queryKey: getEcommerceStoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.store.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEcommerceStore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ecommerce.store.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceStoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEcommerceStoreQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
