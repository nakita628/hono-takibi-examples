import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEcommerceKey() {
  return ['ecommerce'] as const
}

export function getGetEcommerceCustomersKey(
  args: InferRequestType<typeof client.ecommerce.customers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/customers', keyArgs] as const
}

export function useGetEcommerceCustomers<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceCustomers<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.customers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceCustomersIdKey(
  args: InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/customers/:id', keyArgs] as const
}

export function useGetEcommerceCustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceCustomersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceCustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceCustomersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecommerce.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceOrdersKey(
  args: InferRequestType<typeof client.ecommerce.orders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/orders', keyArgs] as const
}

export function useGetEcommerceOrders<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceOrders<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceOrdersIdKey(
  args: InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/orders/:id', keyArgs] as const
}

export function useGetEcommerceOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ecommerce.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceProductsKey(
  args: InferRequestType<typeof client.ecommerce.products.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/products', keyArgs] as const
}

export function useGetEcommerceProducts<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceProducts<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceProductsIdKey(
  args: InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/products/:id', keyArgs] as const
}

export function useGetEcommerceProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecommerce.products)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceStoreKey(
  args: InferRequestType<typeof client.ecommerce.store.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ecommerce', '/ecommerce/store', keyArgs] as const
}

export function useGetEcommerceStore<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.store.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEcommerceStoreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.store.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceStore<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.store.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEcommerceStoreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.store.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.store.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
