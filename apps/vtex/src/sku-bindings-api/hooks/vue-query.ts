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

export function getCatalogKey() {
  return ['catalog'] as const
}

export function getSkuBindingKey() {
  return ['sku-binding'] as const
}

export function getCatalogPvtSkusellersSkuIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['catalog', '/catalog/pvt/skusellers/:skuId', keyArgs] as const
}

export function getCatalogPvtSkusellersSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogPvtSkusellersSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalog.pvt.skusellers[':skuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogPvtSkusellersSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCatalogPvtSkusellersSkuIdQueryKey>
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
          Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogPvtSkusellersSkuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogPvtSkusellersSkuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalog.pvt.skusellers[':skuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/activate/:sellerId/:skuSellerId',
    'POST',
  ] as const
}

export function getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.activate[':sellerId'][':skuSellerId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerActivateSellerIdSkuSellerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
          >,
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
  const mutationDefaults = getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationOptions<
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

export function getSkuBindingPvtSkusellerAdminQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sku-binding', '/sku-binding/pvt/skuseller/admin', keyArgs] as const
}

export function getSkuBindingPvtSkusellerAdminQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkuBindingPvtSkusellerAdminQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.admin.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkuBindingPvtSkusellerAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>
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
                  ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSkuBindingPvtSkusellerAdminQueryKey>
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
          Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkuBindingPvtSkusellerAdminQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkuBindingPvtSkusellerAdminQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sku-binding'].pvt.skuseller.admin.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/changenotification/:sellerId/:sellerSkuId',
    'POST',
  ] as const
}

export function getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.changenotification[':sellerId'][':sellerSkuId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
          >,
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
  const mutationDefaults =
    getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationOptions<
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

export function getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/changenotification/:skuId', 'POST'] as const
}

export function getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.changenotification[':skuId'].$post(args, options),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerChangenotificationSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
          >,
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
  const mutationDefaults = getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationOptions<
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

export function getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/inactivate/:sellerId/:skuSellerId',
    'POST',
  ] as const
}

export function getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.inactivate[':sellerId'][':skuSellerId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
          >,
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
  const mutationDefaults =
    getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationOptions<
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

export function getPostSkuBindingPvtSkusellerInsertionMutationKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/insertion', 'POST'] as const
}

export function getPostSkuBindingPvtSkusellerInsertionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerInsertionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']
      >,
    ) {
      return parseResponse(client['sku-binding'].pvt.skuseller.insertion.$post(args, options))
    },
  })
}

export function usePostSkuBindingPvtSkusellerInsertion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']
          >,
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
  const mutationDefaults = getPostSkuBindingPvtSkusellerInsertionMutationOptions<
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

export function getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sku-binding', '/sku-binding/pvt/skuseller/list/bysellerId/:sellerId', keyArgs] as const
}

export function getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.list.bysellerId[':sellerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkuBindingPvtSkusellerListBysellerIdSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
                  >
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
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sku-binding'].pvt.skuseller.list.bysellerId[':sellerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sku-binding', '/sku-binding/pvt/skuseller/paged/sellerid/:sellerId', keyArgs] as const
}

export function getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.paged.sellerid[':sellerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkuBindingPvtSkusellerPagedSelleridSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
                  >
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
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sku-binding'].pvt.skuseller.paged.sellerid[':sellerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/remove/:sellerId/:sellerSkuId',
    'POST',
  ] as const
}

export function getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.remove[':sellerId'][':sellerSkuId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
          >,
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
  const mutationDefaults = getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationOptions<
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

export function getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sku-binding', '/sku-binding/pvt/skuseller/:sellerId/:sellerSkuId', keyArgs] as const
}

export function getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkuBindingPvtSkusellerSellerIdSellerSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
                  >
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
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/:sellerId/:sellerSkuId', 'PUT'] as const
}

export function getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$put(args, options),
      )
    },
  })
}

export function usePutSkuBindingPvtSkusellerSellerIdSellerSkuId<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
          >,
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
  const mutationDefaults = getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationOptions<
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
