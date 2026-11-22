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

export function getCarKey() {
  return ['car'] as const
}

export function getClientKey() {
  return ['client'] as const
}

export function getCrmCheckKey() {
  return ['crm_check'] as const
}

export function getDealerKey() {
  return ['dealer'] as const
}

export function getDealersKey() {
  return ['dealers'] as const
}

export function getDecodeKey() {
  return ['decode'] as const
}

export function getHistoryKey() {
  return ['history'] as const
}

export function getImageKey() {
  return ['image'] as const
}

export function getListingKey() {
  return ['listing'] as const
}

export function getMdsKey() {
  return ['mds'] as const
}

export function getPopularKey() {
  return ['popular'] as const
}

export function getPredictKey() {
  return ['predict'] as const
}

export function getSalesKey() {
  return ['sales'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSpecsKey() {
  return ['specs'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getCarDealerInventoryActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.car.dealer.inventory.active.$get>>,
) {
  return ['car', '/car/dealer/inventory/active', toValue(args)] as const
}

export function getCarDealerInventoryActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.car.dealer.inventory.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCarDealerInventoryActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.car.dealer.inventory.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCarDealerInventoryActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.car.dealer.inventory.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>
              >
            >
          >,
          ReturnType<typeof getCarDealerInventoryActiveQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCarDealerInventoryActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCarDealerInventoryActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.car.dealer.inventory.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCarRecallVinQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.car.recall)[':vin']['$get']>>,
) {
  return ['car', '/car/recall/:vin', toValue(args)] as const
}

export function getCarRecallVinQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.car.recall)[':vin']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCarRecallVinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.car.recall[':vin'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCarRecallVin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.car.recall)[':vin']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
            >
          >,
          ReturnType<typeof getCarRecallVinQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCarRecallVinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCarRecallVinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.car.recall[':vin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientConfigureGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.client.configure.get.$get>>,
) {
  return ['client', '/client/configure/get', toValue(args)] as const
}

export function getClientConfigureGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.client.configure.get.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientConfigureGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.client.configure.get.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientConfigureGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.client.configure.get.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>
            >
          >,
          ReturnType<typeof getClientConfigureGetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientConfigureGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientConfigureGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.client.configure.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClientConfigureSetMutationKey() {
  return ['client', '/client/configure/set', 'POST'] as const
}

export function getPostClientConfigureSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.set.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.client.configure.set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientConfigureSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.client.configure.set.$post>) {
      return parseResponse(client.client.configure.set.$post(args, options))
    },
  })
}

export function usePostClientConfigureSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.set.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.client.configure.set.$post>,
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
  const mutationDefaults = getPostClientConfigureSetMutationOptions<TError, TOnMutateResult>(
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

export function getCrmCheckCarVinQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>>,
) {
  return ['crm_check', '/crm_check/car/:vin', toValue(args)] as const
}

export function getCrmCheckCarVinQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmCheckCarVinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm_check.car[':vin'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmCheckCarVin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmCheckCarVinQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmCheckCarVinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmCheckCarVinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm_check.car[':vin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealerCarUkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>>,
) {
  return ['dealer', '/dealer/car/uk/:id', toValue(args)] as const
}

export function getDealerCarUkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealerCarUkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealer.car.uk[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDealerCarUkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDealerCarUkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerCarUkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealerCarUkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealer.car.uk[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealerCarIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.car)[':id']['$get']>>,
) {
  return ['dealer', '/dealer/car/:id', toValue(args)] as const
}

export function getDealerCarIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.car)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealerCarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealer.car[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDealerCarId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.car)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDealerCarIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerCarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealerCarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealer.car[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealerHeavyEquipmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>
  >,
) {
  return ['dealer', '/dealer/heavy-equipment/:id', toValue(args)] as const
}

export function getDealerHeavyEquipmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealerHeavyEquipmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealer['heavy-equipment'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDealerHeavyEquipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDealerHeavyEquipmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerHeavyEquipmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealerHeavyEquipmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealer['heavy-equipment'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealerMotorcycleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>>,
) {
  return ['dealer', '/dealer/motorcycle/:id', toValue(args)] as const
}

export function getDealerMotorcycleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealerMotorcycleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealer.motorcycle[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDealerMotorcycleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDealerMotorcycleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerMotorcycleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealerMotorcycleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealer.motorcycle[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealerRvIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.rv)[':id']['$get']>>,
) {
  return ['dealer', '/dealer/rv/:id', toValue(args)] as const
}

export function getDealerRvIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.rv)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealerRvIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealer.rv[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDealerRvId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealer.rv)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDealerRvIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerRvIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealerRvIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealer.rv[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealersCarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.car.$get>>,
) {
  return ['dealers', '/dealers/car', toValue(args)] as const
}

export function getDealersCarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.car.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealersCarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealers.car.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDealersCar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.car.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
          >,
          ReturnType<typeof getDealersCarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDealersCarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealersCarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealers.car.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealersCarUkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.car.uk.$get>>,
) {
  return ['dealers', '/dealers/car/uk', toValue(args)] as const
}

export function getDealersCarUkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.car.uk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealersCarUkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealers.car.uk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDealersCarUk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.car.uk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
          >,
          ReturnType<typeof getDealersCarUkQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDealersCarUkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealersCarUkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealers.car.uk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealersHeavyEquipmentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>>,
) {
  return ['dealers', '/dealers/heavy-equipment', toValue(args)] as const
}

export function getDealersHeavyEquipmentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealersHeavyEquipmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealers['heavy-equipment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDealersHeavyEquipment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDealersHeavyEquipmentQueryKey>
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
          Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealersHeavyEquipmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealersHeavyEquipmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealers['heavy-equipment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealersMotorcycleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.motorcycle.$get>>,
) {
  return ['dealers', '/dealers/motorcycle', toValue(args)] as const
}

export function getDealersMotorcycleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.motorcycle.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealersMotorcycleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealers.motorcycle.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDealersMotorcycle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.motorcycle.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>
            >
          >,
          ReturnType<typeof getDealersMotorcycleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDealersMotorcycleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealersMotorcycleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealers.motorcycle.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDealersRvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.rv.$get>>,
) {
  return ['dealers', '/dealers/rv', toValue(args)] as const
}

export function getDealersRvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.rv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDealersRvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dealers.rv.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDealersRv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dealers.rv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>
          >,
          ReturnType<typeof getDealersRvQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDealersRvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDealersRvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dealers.rv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDecodeCarEpiVinSpecsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>,
) {
  return ['decode', '/decode/car/epi/:vin/specs', toValue(args)] as const
}

export function getDecodeCarEpiVinSpecsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDecodeCarEpiVinSpecsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.decode.car.epi[':vin'].specs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDecodeCarEpiVinSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDecodeCarEpiVinSpecsQueryKey>
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
          Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDecodeCarEpiVinSpecsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDecodeCarEpiVinSpecsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.decode.car.epi[':vin'].specs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDecodeCarNeovinVinSpecsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>
  >,
) {
  return ['decode', '/decode/car/neovin/:vin/specs', toValue(args)] as const
}

export function getDecodeCarNeovinVinSpecsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDecodeCarNeovinVinSpecsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.decode.car.neovin[':vin'].specs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDecodeCarNeovinVinSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDecodeCarNeovinVinSpecsQueryKey>
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
          Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDecodeCarNeovinVinSpecsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDecodeCarNeovinVinSpecsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.decode.car.neovin[':vin'].specs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDecodeCarVinSpecsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>>,
) {
  return ['decode', '/decode/car/:vin/specs', toValue(args)] as const
}

export function getDecodeCarVinSpecsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDecodeCarVinSpecsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.decode.car[':vin'].specs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDecodeCarVinSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDecodeCarVinSpecsQueryKey>
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
          Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDecodeCarVinSpecsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDecodeCarVinSpecsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.decode.car[':vin'].specs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHistoryCarUkVrmQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>>,
) {
  return ['history', '/history/car/uk/:vrm', toValue(args)] as const
}

export function getHistoryCarUkVrmQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHistoryCarUkVrmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.history.car.uk[':vrm'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHistoryCarUkVrm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHistoryCarUkVrmQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryCarUkVrmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHistoryCarUkVrmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.history.car.uk[':vrm'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHistoryCarVinQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.history.car)[':vin']['$get']>>,
) {
  return ['history', '/history/car/:vin', toValue(args)] as const
}

export function getHistoryCarVinQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.history.car)[':vin']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHistoryCarVinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.history.car[':vin'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHistoryCarVin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.history.car)[':vin']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
            >
          >,
          ReturnType<typeof getHistoryCarVinQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryCarVinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHistoryCarVinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.history.car[':vin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImageCacheCarListingIDImageIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>
  >,
) {
  return ['image', '/image/cache/car/:listingID/:imageID', toValue(args)] as const
}

export function getImageCacheCarListingIDImageIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImageCacheCarListingIDImageIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.image.cache.car[':listingID'][':imageID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImageCacheCarListingIDImageID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>
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
                  ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImageCacheCarListingIDImageIDQueryKey>
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
          Awaited<ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImageCacheCarListingIDImageIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImageCacheCarListingIDImageIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.image.cache.car[':listingID'][':imageID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarAuctionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>>,
) {
  return ['listing', '/listing/car/auction/:id', toValue(args)] as const
}

export function getListingCarAuctionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarAuctionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.auction[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarAuctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarAuctionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarAuctionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarAuctionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.auction[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarAuctionIdExtraQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>
  >,
) {
  return ['listing', '/listing/car/auction/:id/extra', toValue(args)] as const
}

export function getListingCarAuctionIdExtraQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarAuctionIdExtraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.auction[':id'].extra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarAuctionIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarAuctionIdExtraQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarAuctionIdExtraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarAuctionIdExtraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.auction[':id'].extra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarAuctionIdMediaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>
  >,
) {
  return ['listing', '/listing/car/auction/:id/media', toValue(args)] as const
}

export function getListingCarAuctionIdMediaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarAuctionIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.auction[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarAuctionIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarAuctionIdMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarAuctionIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarAuctionIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.auction[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarFsboIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>>,
) {
  return ['listing', '/listing/car/fsbo/:id', toValue(args)] as const
}

export function getListingCarFsboIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarFsboIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.fsbo[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarFsboId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarFsboIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarFsboIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarFsboIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.fsbo[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarFsboIdExtraQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>
  >,
) {
  return ['listing', '/listing/car/fsbo/:id/extra', toValue(args)] as const
}

export function getListingCarFsboIdExtraQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarFsboIdExtraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.fsbo[':id'].extra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarFsboIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarFsboIdExtraQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarFsboIdExtraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarFsboIdExtraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.fsbo[':id'].extra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarFsboIdMediaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>
  >,
) {
  return ['listing', '/listing/car/fsbo/:id/media', toValue(args)] as const
}

export function getListingCarFsboIdMediaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarFsboIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.fsbo[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarFsboIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarFsboIdMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarFsboIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarFsboIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.fsbo[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarUkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>>,
) {
  return ['listing', '/listing/car/uk/:id', toValue(args)] as const
}

export function getListingCarUkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarUkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.uk[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarUkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarUkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarUkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarUkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.uk[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarUkIdExtraQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>,
) {
  return ['listing', '/listing/car/uk/:id/extra', toValue(args)] as const
}

export function getListingCarUkIdExtraQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarUkIdExtraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.uk[':id'].extra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarUkIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarUkIdExtraQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarUkIdExtraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarUkIdExtraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.uk[':id'].extra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarUkIdMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>>,
) {
  return ['listing', '/listing/car/uk/:id/media', toValue(args)] as const
}

export function getListingCarUkIdMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarUkIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car.uk[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarUkIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarUkIdMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarUkIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarUkIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car.uk[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['$get']>>,
) {
  return ['listing', '/listing/car/:id', toValue(args)] as const
}

export function getListingCarIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getListingCarIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarIdExtraQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>>,
) {
  return ['listing', '/listing/car/:id/extra', toValue(args)] as const
}

export function getListingCarIdExtraQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarIdExtraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car[':id'].extra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarIdExtraQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarIdExtraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarIdExtraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car[':id'].extra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingCarIdMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>>,
) {
  return ['listing', '/listing/car/:id/media', toValue(args)] as const
}

export function getListingCarIdMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingCarIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.car[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingCarIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingCarIdMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingCarIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.car[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingHeavyEquipmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>
  >,
) {
  return ['listing', '/listing/heavy-equipment/:id', toValue(args)] as const
}

export function getListingHeavyEquipmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingHeavyEquipmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing['heavy-equipment'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingHeavyEquipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingHeavyEquipmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingHeavyEquipmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingHeavyEquipmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing['heavy-equipment'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingHeavyEquipmentIdExtraQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>
  >,
) {
  return ['listing', '/listing/heavy-equipment/:id/extra', toValue(args)] as const
}

export function getListingHeavyEquipmentIdExtraQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingHeavyEquipmentIdExtraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing['heavy-equipment'][':id'].extra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingHeavyEquipmentIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>
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
                  ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getListingHeavyEquipmentIdExtraQueryKey>
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
          Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingHeavyEquipmentIdExtraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingHeavyEquipmentIdExtraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing['heavy-equipment'][':id'].extra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingHeavyEquipmentIdMediaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>
  >,
) {
  return ['listing', '/listing/heavy-equipment/:id/media', toValue(args)] as const
}

export function getListingHeavyEquipmentIdMediaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingHeavyEquipmentIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing['heavy-equipment'][':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingHeavyEquipmentIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>
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
                  ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getListingHeavyEquipmentIdMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingHeavyEquipmentIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingHeavyEquipmentIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing['heavy-equipment'][':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingMotorcycleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>>,
) {
  return ['listing', '/listing/motorcycle/:id', toValue(args)] as const
}

export function getListingMotorcycleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingMotorcycleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.motorcycle[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingMotorcycleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingMotorcycleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingMotorcycleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingMotorcycleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.motorcycle[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingMotorcycleIdExtraQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>
  >,
) {
  return ['listing', '/listing/motorcycle/:id/extra', toValue(args)] as const
}

export function getListingMotorcycleIdExtraQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingMotorcycleIdExtraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.motorcycle[':id'].extra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingMotorcycleIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingMotorcycleIdExtraQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingMotorcycleIdExtraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingMotorcycleIdExtraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.motorcycle[':id'].extra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingMotorcycleIdMediaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>
  >,
) {
  return ['listing', '/listing/motorcycle/:id/media', toValue(args)] as const
}

export function getListingMotorcycleIdMediaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingMotorcycleIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.motorcycle[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingMotorcycleIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingMotorcycleIdMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingMotorcycleIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingMotorcycleIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.motorcycle[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingRvUkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>>,
) {
  return ['listing', '/listing/rv/uk/:id', toValue(args)] as const
}

export function getListingRvUkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingRvUkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.rv.uk[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingRvUkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingRvUkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingRvUkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingRvUkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.rv.uk[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingRvUkIdExtraQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>,
) {
  return ['listing', '/listing/rv/uk/:id/extra', toValue(args)] as const
}

export function getListingRvUkIdExtraQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingRvUkIdExtraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.rv.uk[':id'].extra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingRvUkIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingRvUkIdExtraQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingRvUkIdExtraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingRvUkIdExtraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.rv.uk[':id'].extra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingRvUkIdMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>,
) {
  return ['listing', '/listing/rv/uk/:id/media', toValue(args)] as const
}

export function getListingRvUkIdMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingRvUkIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.rv.uk[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingRvUkIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingRvUkIdMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingRvUkIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingRvUkIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.rv.uk[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingRvIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['$get']>>,
) {
  return ['listing', '/listing/rv/:id', toValue(args)] as const
}

export function getListingRvIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingRvIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.rv[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingRvId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getListingRvIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingRvIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingRvIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.rv[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingRvIdExtraQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>>,
) {
  return ['listing', '/listing/rv/:id/extra', toValue(args)] as const
}

export function getListingRvIdExtraQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingRvIdExtraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.rv[':id'].extra.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingRvIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingRvIdExtraQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingRvIdExtraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingRvIdExtraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.rv[':id'].extra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingRvIdMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>>,
) {
  return ['listing', '/listing/rv/:id/media', toValue(args)] as const
}

export function getListingRvIdMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingRvIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing.rv[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingRvIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListingRvIdMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingRvIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingRvIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing.rv[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMdsCarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mds.car.$get>>,
) {
  return ['mds', '/mds/car', toValue(args)] as const
}

export function getMdsCarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mds.car.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMdsCarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mds.car.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMdsCar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mds.car.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>
          >,
          ReturnType<typeof getMdsCarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMdsCarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMdsCarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mds.car.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPopularCarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.popular.cars.$get>>,
) {
  return ['popular', '/popular/cars', toValue(args)] as const
}

export function getPopularCarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.popular.cars.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPopularCarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.popular.cars.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePopularCars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.popular.cars.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
          >,
          ReturnType<typeof getPopularCarsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPopularCarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPopularCarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.popular.cars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPredictCarPriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.price.$get>>,
) {
  return ['predict', '/predict/car/price', toValue(args)] as const
}

export function getPredictCarPriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.price.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictCarPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predict.car.price.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePredictCarPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.price.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>
            >
          >,
          ReturnType<typeof getPredictCarPriceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPredictCarPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictCarPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predict.car.price.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPredictCarUkFmvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.uk.fmv.$get>>,
) {
  return ['predict', '/predict/car/uk/fmv', toValue(args)] as const
}

export function getPredictCarUkFmvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.uk.fmv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictCarUkFmvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predict.car.uk.fmv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePredictCarUkFmv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.uk.fmv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>
            >
          >,
          ReturnType<typeof getPredictCarUkFmvQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPredictCarUkFmvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictCarUkFmvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predict.car.uk.fmv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPredictCarUkPriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.uk.price.$get>>,
) {
  return ['predict', '/predict/car/uk/price', toValue(args)] as const
}

export function getPredictCarUkPriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.uk.price.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictCarUkPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predict.car.uk.price.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePredictCarUkPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.car.uk.price.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>
            >
          >,
          ReturnType<typeof getPredictCarUkPriceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPredictCarUkPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictCarUkPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predict.car.uk.price.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSalesCarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sales.car.$get>>,
) {
  return ['sales', '/sales/car', toValue(args)] as const
}

export function getSalesCarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sales.car.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSalesCarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sales.car.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSalesCar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sales.car.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>
          >,
          ReturnType<typeof getSalesCarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesCarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSalesCarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sales.car.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchCarActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.active.$get>>,
) {
  return ['search', '/search/car/active', toValue(args)] as const
}

export function getSearchCarActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCarActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.car.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCarActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>
            >
          >,
          ReturnType<typeof getSearchCarActiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCarActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.car.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchCarActiveRankMutationKey() {
  return ['search', '/search/car/active/rank', 'POST'] as const
}

export function getPostSearchCarActiveRankMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.rank.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.search.car.active.rank.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchCarActiveRankMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.car.active.rank.$post>) {
      return parseResponse(client.search.car.active.rank.$post(args, options))
    },
  })
}

export function usePostSearchCarActiveRank<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.rank.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.car.active.rank.$post>,
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
  const mutationDefaults = getPostSearchCarActiveRankMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchCarActiveRankListingsMutationKey() {
  return ['search', '/search/car/active/rank/listings', 'POST'] as const
}

export function getPostSearchCarActiveRankListingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.search.car.active.rank.listings.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.search.car.active.rank.listings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchCarActiveRankListingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.car.active.rank.listings.$post>) {
      return parseResponse(client.search.car.active.rank.listings.$post(args, options))
    },
  })
}

export function usePostSearchCarActiveRankListings<
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
                Awaited<ReturnType<typeof client.search.car.active.rank.listings.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.search.car.active.rank.listings.$post>,
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
  const mutationDefaults = getPostSearchCarActiveRankListingsMutationOptions<
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

export function getSearchCarAuctionActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.auction.active.$get>>,
) {
  return ['search', '/search/car/auction/active', toValue(args)] as const
}

export function getSearchCarAuctionActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.auction.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCarAuctionActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.car.auction.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCarAuctionActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.auction.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.search.car.auction.active.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.search.car.auction.active.$get>>
              >
            >
          >,
          ReturnType<typeof getSearchCarAuctionActiveQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarAuctionActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCarAuctionActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.car.auction.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchCarAutoCompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.car)['auto-complete']['$get']>>,
) {
  return ['search', '/search/car/auto-complete', toValue(args)] as const
}

export function getSearchCarAutoCompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.car)['auto-complete']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCarAutoCompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.car['auto-complete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCarAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.car)['auto-complete']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchCarAutoCompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarAutoCompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCarAutoCompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.car['auto-complete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchCarFsboActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.fsbo.active.$get>>,
) {
  return ['search', '/search/car/fsbo/active', toValue(args)] as const
}

export function getSearchCarFsboActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.fsbo.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCarFsboActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.car.fsbo.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCarFsboActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.fsbo.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
            >
          >,
          ReturnType<typeof getSearchCarFsboActiveQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarFsboActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCarFsboActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.car.fsbo.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchCarIncentiveOemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.incentive.oem.$get>>,
) {
  return ['search', '/search/car/incentive/oem', toValue(args)] as const
}

export function getSearchCarIncentiveOemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.incentive.oem.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCarIncentiveOemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.car.incentive.oem.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCarIncentiveOem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.incentive.oem.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
            >
          >,
          ReturnType<typeof getSearchCarIncentiveOemQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarIncentiveOemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCarIncentiveOemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.car.incentive.oem.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchCarRecentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.recents.$get>>,
) {
  return ['search', '/search/car/recents', toValue(args)] as const
}

export function getSearchCarRecentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.recents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCarRecentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.car.recents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCarRecents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.recents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>
            >
          >,
          ReturnType<typeof getSearchCarRecentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarRecentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCarRecentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.car.recents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchCarUkActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.uk.active.$get>>,
) {
  return ['search', '/search/car/uk/active', toValue(args)] as const
}

export function getSearchCarUkActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.uk.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCarUkActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.car.uk.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCarUkActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.uk.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>
            >
          >,
          ReturnType<typeof getSearchCarUkActiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarUkActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCarUkActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.car.uk.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchCarUkRecentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.uk.recents.$get>>,
) {
  return ['search', '/search/car/uk/recents', toValue(args)] as const
}

export function getSearchCarUkRecentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.uk.recents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCarUkRecentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.car.uk.recents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCarUkRecents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.car.uk.recents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
            >
          >,
          ReturnType<typeof getSearchCarUkRecentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarUkRecentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCarUkRecentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.car.uk.recents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchHeavyEquipmentActiveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>
  >,
) {
  return ['search', '/search/heavy-equipment/active', toValue(args)] as const
}

export function getSearchHeavyEquipmentActiveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchHeavyEquipmentActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search['heavy-equipment'].active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchHeavyEquipmentActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchHeavyEquipmentActiveQueryKey>
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
          Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchHeavyEquipmentActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchHeavyEquipmentActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search['heavy-equipment'].active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchHeavyEquipmentAutoCompleteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>
  >,
) {
  return ['search', '/search/heavy-equipment/auto-complete', toValue(args)] as const
}

export function getSearchHeavyEquipmentAutoCompleteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchHeavyEquipmentAutoCompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search['heavy-equipment']['auto-complete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchHeavyEquipmentAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>
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
                  ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSearchHeavyEquipmentAutoCompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchHeavyEquipmentAutoCompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchHeavyEquipmentAutoCompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search['heavy-equipment']['auto-complete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchMotorcycleActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.motorcycle.active.$get>>,
) {
  return ['search', '/search/motorcycle/active', toValue(args)] as const
}

export function getSearchMotorcycleActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.motorcycle.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchMotorcycleActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.motorcycle.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMotorcycleActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.motorcycle.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
            >
          >,
          ReturnType<typeof getSearchMotorcycleActiveQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMotorcycleActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchMotorcycleActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.motorcycle.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchMotorcycleAutoCompleteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>
  >,
) {
  return ['search', '/search/motorcycle/auto-complete', toValue(args)] as const
}

export function getSearchMotorcycleAutoCompleteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchMotorcycleAutoCompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.motorcycle['auto-complete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMotorcycleAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchMotorcycleAutoCompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMotorcycleAutoCompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchMotorcycleAutoCompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.motorcycle['auto-complete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchRvActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.rv.active.$get>>,
) {
  return ['search', '/search/rv/active', toValue(args)] as const
}

export function getSearchRvActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.rv.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchRvActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.rv.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchRvActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.rv.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>
            >
          >,
          ReturnType<typeof getSearchRvActiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchRvActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchRvActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.rv.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchRvAutoCompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>>,
) {
  return ['search', '/search/rv/auto-complete', toValue(args)] as const
}

export function getSearchRvAutoCompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchRvAutoCompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.rv['auto-complete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchRvAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchRvAutoCompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchRvAutoCompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchRvAutoCompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.rv['auto-complete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchRvUkActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.rv.uk.active.$get>>,
) {
  return ['search', '/search/rv/uk/active', toValue(args)] as const
}

export function getSearchRvUkActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.rv.uk.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchRvUkActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.rv.uk.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchRvUkActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.rv.uk.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>
            >
          >,
          ReturnType<typeof getSearchRvUkActiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchRvUkActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchRvUkActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.rv.uk.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpecsCarAutoCompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>>,
) {
  return ['specs', '/specs/car/auto-complete', toValue(args)] as const
}

export function getSpecsCarAutoCompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpecsCarAutoCompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.specs.car['auto-complete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpecsCarAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpecsCarAutoCompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpecsCarAutoCompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpecsCarAutoCompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.specs.car['auto-complete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpecsCarTermsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.specs.car.terms.$get>>,
) {
  return ['specs', '/specs/car/terms', toValue(args)] as const
}

export function getSpecsCarTermsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.specs.car.terms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpecsCarTermsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.specs.car.terms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpecsCarTerms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.specs.car.terms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>
            >
          >,
          ReturnType<typeof getSpecsCarTermsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpecsCarTermsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpecsCarTermsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.specs.car.terms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.car.$get>>,
) {
  return ['stats', '/stats/car', toValue(args)] as const
}

export function getStatsCarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.car.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.car.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsCar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.car.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>
          >,
          ReturnType<typeof getStatsCarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsCarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsCarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.car.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
