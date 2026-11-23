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

export function getEcommerceKey() {
  return ['ecommerce'] as const
}

export function getEcommerceCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.customers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ecommerce', '/ecommerce/customers', keyArgs] as const
}

export function getEcommerceCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcommerceCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>
            >
          >,
          ReturnType<typeof getEcommerceCustomersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcommerceCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceCustomersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ecommerce', '/ecommerce/customers/:id', keyArgs] as const
}

export function getEcommerceCustomersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcommerceCustomersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.customers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceCustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEcommerceCustomersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceCustomersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcommerceCustomersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.customers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.orders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ecommerce', '/ecommerce/orders', keyArgs] as const
}

export function getEcommerceOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcommerceOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>
            >
          >,
          ReturnType<typeof getEcommerceOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcommerceOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ecommerce', '/ecommerce/orders/:id', keyArgs] as const
}

export function getEcommerceOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcommerceOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.orders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEcommerceOrdersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcommerceOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.orders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.products.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ecommerce', '/ecommerce/products', keyArgs] as const
}

export function getEcommerceProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcommerceProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>
            >
          >,
          ReturnType<typeof getEcommerceProductsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcommerceProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceProductsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ecommerce', '/ecommerce/products/:id', keyArgs] as const
}

export function getEcommerceProductsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcommerceProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEcommerceProductsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcommerceProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceStoreQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.store.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ecommerce', '/ecommerce/store', keyArgs] as const
}

export function getEcommerceStoreQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.store.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcommerceStoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.store.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceStore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.store.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>
            >
          >,
          ReturnType<typeof getEcommerceStoreQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceStoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcommerceStoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.store.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
