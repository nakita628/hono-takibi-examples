import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1CatalogsProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.catalogs.products.$get>>,
) {
  return ['v1', '/v1/catalogs/products', toValue(args)] as const
}

export function getV1CatalogsProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.catalogs.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CatalogsProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.catalogs.products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CatalogsProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.catalogs.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>
            >
          >,
          ReturnType<typeof getV1CatalogsProductsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CatalogsProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CatalogsProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.catalogs.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1CatalogsProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.products.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.catalogs.products.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CatalogsProductsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1CatalogsProductsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>
  >,
) {
  return ['v1', '/v1/catalogs/products/:product_id', toValue(args)] as const
}

export function getV1CatalogsProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CatalogsProductsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.catalogs.products[':product_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CatalogsProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CatalogsProductsProductIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.catalogs.products)[':product_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CatalogsProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CatalogsProductsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.catalogs.products[':product_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV1CatalogsProductsProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1CatalogsProductsProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
