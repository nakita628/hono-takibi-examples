import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1CatalogsProductsQueryKey(
  args: InferRequestType<typeof client.v1.catalogs.products.$get>,
) {
  return ['v1', '/v1/catalogs/products', args] as const
}

export function getV1CatalogsProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.catalogs.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CatalogsProductsQueryKey>
  >({
    queryKey: getV1CatalogsProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.catalogs.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CatalogsProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.catalogs.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CatalogsProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CatalogsProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CatalogsProductsMutationKey() {
  return ['v1', '/v1/catalogs/products', 'POST'] as const
}

export function getPostV1CatalogsProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.catalogs.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CatalogsProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.catalogs.products.$post>) {
      return parseResponse(client.v1.catalogs.products.$post(args, options))
    },
  })
}

export function createPostV1CatalogsProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.catalogs.products.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CatalogsProductsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CatalogsProductsProductIdQueryKey(
  args: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>,
) {
  return ['v1', '/v1/catalogs/products/:product_id', args] as const
}

export function getV1CatalogsProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CatalogsProductsProductIdQueryKey>
  >({
    queryKey: getV1CatalogsProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.catalogs.products[':product_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CatalogsProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CatalogsProductsProductIdQueryKey>
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
      ...getV1CatalogsProductsProductIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchV1CatalogsProductsProductIdMutationKey() {
  return ['v1', '/v1/catalogs/products/:product_id', 'PATCH'] as const
}

export function getPatchV1CatalogsProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CatalogsProductsProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$patch']>,
    ) {
      return parseResponse(client.v1.catalogs.products[':product_id'].$patch(args, options))
    },
  })
}

export function createPatchV1CatalogsProductsProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1CatalogsProductsProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
