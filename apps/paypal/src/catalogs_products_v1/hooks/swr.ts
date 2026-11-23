import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1CatalogsProductsKey(
  args: InferRequestType<typeof client.v1.catalogs.products.$get>,
) {
  return ['v1', '/v1/catalogs/products', args] as const
}

export function useGetV1CatalogsProducts<TError = unknown>(
  args: InferRequestType<typeof client.v1.catalogs.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>
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
        ? getGetV1CatalogsProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.catalogs.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CatalogsProducts<TError = unknown>(
  args: InferRequestType<typeof client.v1.catalogs.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>
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
        ? getGetV1CatalogsProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.catalogs.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CatalogsProductsKey() {
  return ['v1', '/v1/catalogs/products', 'POST'] as const
}

export function usePostV1CatalogsProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.catalogs.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CatalogsProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.catalogs.products.$post> },
      ) => parseResponse(client.v1.catalogs.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CatalogsProductsProductIdKey(
  args: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>,
) {
  return ['v1', '/v1/catalogs/products/:product_id', args] as const
}

export function useGetV1CatalogsProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
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
        ? getGetV1CatalogsProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.catalogs.products[':product_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CatalogsProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
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
        ? getGetV1CatalogsProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.catalogs.products[':product_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1CatalogsProductsProductIdKey() {
  return ['v1', '/v1/catalogs/products/:product_id', 'PATCH'] as const
}

export function usePatchV1CatalogsProductsProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CatalogsProductsProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$patch']> },
      ) => parseResponse(client.v1.catalogs.products[':product_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
