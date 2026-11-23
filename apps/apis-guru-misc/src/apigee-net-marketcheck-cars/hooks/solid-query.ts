import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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
  args: InferRequestType<typeof client.car.dealer.inventory.active.$get>,
) {
  return ['car', '/car/dealer/inventory/active', args] as const
}

export function getCarDealerInventoryActiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.car.dealer.inventory.active.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCarDealerInventoryActiveQueryKey>
  >({
    queryKey: getCarDealerInventoryActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.car.dealer.inventory.active.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCarDealerInventoryActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.car.dealer.inventory.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCarDealerInventoryActiveQueryKey>
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
    return {
      ...getCarDealerInventoryActiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCarRecallVinQueryKey(
  args: InferRequestType<(typeof client.car.recall)[':vin']['$get']>,
) {
  return ['car', '/car/recall/:vin', args] as const
}

export function getCarRecallVinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.car.recall)[':vin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCarRecallVinQueryKey>
  >({
    queryKey: getCarRecallVinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.car.recall[':vin'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCarRecallVin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.car.recall)[':vin']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCarRecallVinQueryKey>
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
    return { ...getCarRecallVinQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getClientConfigureGetQueryKey(
  args: InferRequestType<typeof client.client.configure.get.$get>,
) {
  return ['client', '/client/configure/get', args] as const
}

export function getClientConfigureGetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.client.configure.get.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientConfigureGetQueryKey>
  >({
    queryKey: getClientConfigureGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.client.configure.get.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClientConfigureGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.client.configure.get.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClientConfigureGetQueryKey>
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
    return { ...getClientConfigureGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostClientConfigureSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.set.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.client.configure.set.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClientConfigureSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmCheckCarVinQueryKey(
  args: InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>,
) {
  return ['crm_check', '/crm_check/car/:vin', args] as const
}

export function getCrmCheckCarVinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmCheckCarVinQueryKey>
  >({
    queryKey: getCrmCheckCarVinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm_check.car[':vin'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCrmCheckCarVin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrmCheckCarVinQueryKey>
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
    return { ...getCrmCheckCarVinQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDealerCarUkIdQueryKey(
  args: InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>,
) {
  return ['dealer', '/dealer/car/uk/:id', args] as const
}

export function getDealerCarUkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerCarUkIdQueryKey>
  >({
    queryKey: getDealerCarUkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealer.car.uk[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDealerCarUkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDealerCarUkIdQueryKey>
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
    return { ...getDealerCarUkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDealerCarIdQueryKey(
  args: InferRequestType<(typeof client.dealer.car)[':id']['$get']>,
) {
  return ['dealer', '/dealer/car/:id', args] as const
}

export function getDealerCarIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dealer.car)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerCarIdQueryKey>
  >({
    queryKey: getDealerCarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealer.car[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDealerCarId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dealer.car)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDealerCarIdQueryKey>
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
    return { ...getDealerCarIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDealerHeavyEquipmentIdQueryKey(
  args: InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>,
) {
  return ['dealer', '/dealer/heavy-equipment/:id', args] as const
}

export function getDealerHeavyEquipmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDealerHeavyEquipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealer['heavy-equipment'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDealerHeavyEquipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDealerHeavyEquipmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDealerMotorcycleIdQueryKey(
  args: InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>,
) {
  return ['dealer', '/dealer/motorcycle/:id', args] as const
}

export function getDealerMotorcycleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerMotorcycleIdQueryKey>
  >({
    queryKey: getDealerMotorcycleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealer.motorcycle[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDealerMotorcycleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDealerMotorcycleIdQueryKey>
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
    return { ...getDealerMotorcycleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDealerRvIdQueryKey(
  args: InferRequestType<(typeof client.dealer.rv)[':id']['$get']>,
) {
  return ['dealer', '/dealer/rv/:id', args] as const
}

export function getDealerRvIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dealer.rv)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDealerRvIdQueryKey>
  >({
    queryKey: getDealerRvIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealer.rv[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDealerRvId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dealer.rv)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDealerRvIdQueryKey>
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
    return { ...getDealerRvIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDealersCarQueryKey(args: InferRequestType<typeof client.dealers.car.$get>) {
  return ['dealers', '/dealers/car', args] as const
}

export function getDealersCarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dealers.car.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDealersCarQueryKey>
  >({
    queryKey: getDealersCarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealers.car.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDealersCar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dealers.car.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDealersCarQueryKey>
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
    return { ...getDealersCarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDealersCarUkQueryKey(args: InferRequestType<typeof client.dealers.car.uk.$get>) {
  return ['dealers', '/dealers/car/uk', args] as const
}

export function getDealersCarUkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dealers.car.uk.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDealersCarUkQueryKey>
  >({
    queryKey: getDealersCarUkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealers.car.uk.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDealersCarUk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dealers.car.uk.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDealersCarUkQueryKey>
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
    return { ...getDealersCarUkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDealersHeavyEquipmentQueryKey(
  args: InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>,
) {
  return ['dealers', '/dealers/heavy-equipment', args] as const
}

export function getDealersHeavyEquipmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDealersHeavyEquipmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealers['heavy-equipment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDealersHeavyEquipment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDealersHeavyEquipmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDealersMotorcycleQueryKey(
  args: InferRequestType<typeof client.dealers.motorcycle.$get>,
) {
  return ['dealers', '/dealers/motorcycle', args] as const
}

export function getDealersMotorcycleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dealers.motorcycle.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDealersMotorcycleQueryKey>
  >({
    queryKey: getDealersMotorcycleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealers.motorcycle.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDealersMotorcycle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dealers.motorcycle.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDealersMotorcycleQueryKey>
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
    return { ...getDealersMotorcycleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDealersRvQueryKey(args: InferRequestType<typeof client.dealers.rv.$get>) {
  return ['dealers', '/dealers/rv', args] as const
}

export function getDealersRvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dealers.rv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDealersRvQueryKey>
  >({
    queryKey: getDealersRvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dealers.rv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDealersRv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dealers.rv.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDealersRvQueryKey>
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
    return { ...getDealersRvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDecodeCarEpiVinSpecsQueryKey(
  args: InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>,
) {
  return ['decode', '/decode/car/epi/:vin/specs', args] as const
}

export function getDecodeCarEpiVinSpecsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDecodeCarEpiVinSpecsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.decode.car.epi[':vin'].specs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDecodeCarEpiVinSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDecodeCarEpiVinSpecsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDecodeCarNeovinVinSpecsQueryKey(
  args: InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>,
) {
  return ['decode', '/decode/car/neovin/:vin/specs', args] as const
}

export function getDecodeCarNeovinVinSpecsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDecodeCarNeovinVinSpecsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.decode.car.neovin[':vin'].specs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDecodeCarNeovinVinSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDecodeCarNeovinVinSpecsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDecodeCarVinSpecsQueryKey(
  args: InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>,
) {
  return ['decode', '/decode/car/:vin/specs', args] as const
}

export function getDecodeCarVinSpecsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDecodeCarVinSpecsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.decode.car[':vin'].specs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDecodeCarVinSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDecodeCarVinSpecsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHistoryCarUkVrmQueryKey(
  args: InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>,
) {
  return ['history', '/history/car/uk/:vrm', args] as const
}

export function getHistoryCarUkVrmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryCarUkVrmQueryKey>
  >({
    queryKey: getHistoryCarUkVrmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.car.uk[':vrm'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHistoryCarUkVrm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryCarUkVrmQueryKey>
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
    return { ...getHistoryCarUkVrmQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHistoryCarVinQueryKey(
  args: InferRequestType<(typeof client.history.car)[':vin']['$get']>,
) {
  return ['history', '/history/car/:vin', args] as const
}

export function getHistoryCarVinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.history.car)[':vin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryCarVinQueryKey>
  >({
    queryKey: getHistoryCarVinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.car[':vin'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHistoryCarVin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.history.car)[':vin']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryCarVinQueryKey>
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
    return { ...getHistoryCarVinQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getImageCacheCarListingIDImageIDQueryKey(
  args: InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>,
) {
  return ['image', '/image/cache/car/:listingID/:imageID', args] as const
}

export function getImageCacheCarListingIDImageIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getImageCacheCarListingIDImageIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.image.cache.car[':listingID'][':imageID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImageCacheCarListingIDImageID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getImageCacheCarListingIDImageIDQueryKey>
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
    return {
      ...getImageCacheCarListingIDImageIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingCarAuctionIdQueryKey(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>,
) {
  return ['listing', '/listing/car/auction/:id', args] as const
}

export function getListingCarAuctionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarAuctionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.auction[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarAuctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingCarAuctionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingCarAuctionIdExtraQueryKey(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/car/auction/:id/extra', args] as const
}

export function getListingCarAuctionIdExtraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarAuctionIdExtraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.auction[':id'].extra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarAuctionIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getListingCarAuctionIdExtraQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingCarAuctionIdMediaQueryKey(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/car/auction/:id/media', args] as const
}

export function getListingCarAuctionIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarAuctionIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.auction[':id'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarAuctionIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getListingCarAuctionIdMediaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingCarFsboIdQueryKey(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>,
) {
  return ['listing', '/listing/car/fsbo/:id', args] as const
}

export function getListingCarFsboIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarFsboIdQueryKey>
  >({
    queryKey: getListingCarFsboIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.fsbo[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarFsboId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingCarFsboIdQueryKey>
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
    return { ...getListingCarFsboIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingCarFsboIdExtraQueryKey(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/car/fsbo/:id/extra', args] as const
}

export function getListingCarFsboIdExtraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarFsboIdExtraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.fsbo[':id'].extra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarFsboIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getListingCarFsboIdExtraQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingCarFsboIdMediaQueryKey(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/car/fsbo/:id/media', args] as const
}

export function getListingCarFsboIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarFsboIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.fsbo[':id'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarFsboIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getListingCarFsboIdMediaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingCarUkIdQueryKey(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>,
) {
  return ['listing', '/listing/car/uk/:id', args] as const
}

export function getListingCarUkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarUkIdQueryKey>
  >({
    queryKey: getListingCarUkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.uk[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListingCarUkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingCarUkIdQueryKey>
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
    return { ...getListingCarUkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingCarUkIdExtraQueryKey(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/car/uk/:id/extra', args] as const
}

export function getListingCarUkIdExtraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarUkIdExtraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.uk[':id'].extra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarUkIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingCarUkIdExtraQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingCarUkIdMediaQueryKey(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/car/uk/:id/media', args] as const
}

export function getListingCarUkIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarUkIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car.uk[':id'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarUkIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingCarUkIdMediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingCarIdQueryKey(
  args: InferRequestType<(typeof client.listing.car)[':id']['$get']>,
) {
  return ['listing', '/listing/car/:id', args] as const
}

export function getListingCarIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingCarIdQueryKey>
  >({
    queryKey: getListingCarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListingCarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingCarIdQueryKey>
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
    return { ...getListingCarIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingCarIdExtraQueryKey(
  args: InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/car/:id/extra', args] as const
}

export function getListingCarIdExtraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarIdExtraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car[':id'].extra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingCarIdExtraQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingCarIdMediaQueryKey(
  args: InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/car/:id/media', args] as const
}

export function getListingCarIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingCarIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.car[':id'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingCarIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingCarIdMediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingHeavyEquipmentIdQueryKey(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>,
) {
  return ['listing', '/listing/heavy-equipment/:id', args] as const
}

export function getListingHeavyEquipmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingHeavyEquipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing['heavy-equipment'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingHeavyEquipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getListingHeavyEquipmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingHeavyEquipmentIdExtraQueryKey(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>,
) {
  return ['listing', '/listing/heavy-equipment/:id/extra', args] as const
}

export function getListingHeavyEquipmentIdExtraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingHeavyEquipmentIdExtraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing['heavy-equipment'][':id'].extra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingHeavyEquipmentIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getListingHeavyEquipmentIdExtraQueryKey>
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
    return {
      ...getListingHeavyEquipmentIdExtraQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingHeavyEquipmentIdMediaQueryKey(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>,
) {
  return ['listing', '/listing/heavy-equipment/:id/media', args] as const
}

export function getListingHeavyEquipmentIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingHeavyEquipmentIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing['heavy-equipment'][':id'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingHeavyEquipmentIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getListingHeavyEquipmentIdMediaQueryKey>
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
    return {
      ...getListingHeavyEquipmentIdMediaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingMotorcycleIdQueryKey(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>,
) {
  return ['listing', '/listing/motorcycle/:id', args] as const
}

export function getListingMotorcycleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingMotorcycleIdQueryKey>
  >({
    queryKey: getListingMotorcycleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.motorcycle[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingMotorcycleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingMotorcycleIdQueryKey>
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
    return { ...getListingMotorcycleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingMotorcycleIdExtraQueryKey(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/motorcycle/:id/extra', args] as const
}

export function getListingMotorcycleIdExtraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingMotorcycleIdExtraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.motorcycle[':id'].extra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingMotorcycleIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getListingMotorcycleIdExtraQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingMotorcycleIdMediaQueryKey(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/motorcycle/:id/media', args] as const
}

export function getListingMotorcycleIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingMotorcycleIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.motorcycle[':id'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingMotorcycleIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getListingMotorcycleIdMediaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListingRvUkIdQueryKey(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>,
) {
  return ['listing', '/listing/rv/uk/:id', args] as const
}

export function getListingRvUkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingRvUkIdQueryKey>
  >({
    queryKey: getListingRvUkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.rv.uk[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListingRvUkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingRvUkIdQueryKey>
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
    return { ...getListingRvUkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingRvUkIdExtraQueryKey(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/rv/uk/:id/extra', args] as const
}

export function getListingRvUkIdExtraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingRvUkIdExtraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.rv.uk[':id'].extra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingRvUkIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingRvUkIdExtraQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingRvUkIdMediaQueryKey(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/rv/uk/:id/media', args] as const
}

export function getListingRvUkIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingRvUkIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.rv.uk[':id'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingRvUkIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingRvUkIdMediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingRvIdQueryKey(
  args: InferRequestType<(typeof client.listing.rv)[':id']['$get']>,
) {
  return ['listing', '/listing/rv/:id', args] as const
}

export function getListingRvIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingRvIdQueryKey>
  >({
    queryKey: getListingRvIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.rv[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListingRvId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.rv)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListingRvIdQueryKey>
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
    return { ...getListingRvIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingRvIdExtraQueryKey(
  args: InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/rv/:id/extra', args] as const
}

export function getListingRvIdExtraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingRvIdExtraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.rv[':id'].extra.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingRvIdExtra<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingRvIdExtraQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListingRvIdMediaQueryKey(
  args: InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/rv/:id/media', args] as const
}

export function getListingRvIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListingRvIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing.rv[':id'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListingRvIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getListingRvIdMediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMdsCarQueryKey(args: InferRequestType<typeof client.mds.car.$get>) {
  return ['mds', '/mds/car', args] as const
}

export function getMdsCarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mds.car.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMdsCarQueryKey>
  >({
    queryKey: getMdsCarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mds.car.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMdsCar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mds.car.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMdsCarQueryKey>
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
    return { ...getMdsCarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPopularCarsQueryKey(args: InferRequestType<typeof client.popular.cars.$get>) {
  return ['popular', '/popular/cars', args] as const
}

export function getPopularCarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.popular.cars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPopularCarsQueryKey>
  >({
    queryKey: getPopularCarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.popular.cars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPopularCars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.popular.cars.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPopularCarsQueryKey>
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
    return { ...getPopularCarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPredictCarPriceQueryKey(
  args: InferRequestType<typeof client.predict.car.price.$get>,
) {
  return ['predict', '/predict/car/price', args] as const
}

export function getPredictCarPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.predict.car.price.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPredictCarPriceQueryKey>
  >({
    queryKey: getPredictCarPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predict.car.price.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPredictCarPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.predict.car.price.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPredictCarPriceQueryKey>
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
    return { ...getPredictCarPriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPredictCarUkFmvQueryKey(
  args: InferRequestType<typeof client.predict.car.uk.fmv.$get>,
) {
  return ['predict', '/predict/car/uk/fmv', args] as const
}

export function getPredictCarUkFmvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.predict.car.uk.fmv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPredictCarUkFmvQueryKey>
  >({
    queryKey: getPredictCarUkFmvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predict.car.uk.fmv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPredictCarUkFmv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.predict.car.uk.fmv.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPredictCarUkFmvQueryKey>
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
    return { ...getPredictCarUkFmvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPredictCarUkPriceQueryKey(
  args: InferRequestType<typeof client.predict.car.uk.price.$get>,
) {
  return ['predict', '/predict/car/uk/price', args] as const
}

export function getPredictCarUkPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.predict.car.uk.price.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPredictCarUkPriceQueryKey>
  >({
    queryKey: getPredictCarUkPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predict.car.uk.price.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPredictCarUkPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.predict.car.uk.price.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPredictCarUkPriceQueryKey>
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
    return { ...getPredictCarUkPriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSalesCarQueryKey(args: InferRequestType<typeof client.sales.car.$get>) {
  return ['sales', '/sales/car', args] as const
}

export function getSalesCarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sales.car.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesCarQueryKey>
  >({
    queryKey: getSalesCarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales.car.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSalesCar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sales.car.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSalesCarQueryKey>
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
    return { ...getSalesCarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchCarActiveQueryKey(
  args: InferRequestType<typeof client.search.car.active.$get>,
) {
  return ['search', '/search/car/active', args] as const
}

export function getSearchCarActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.car.active.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarActiveQueryKey>
  >({
    queryKey: getSearchCarActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.car.active.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchCarActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.car.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchCarActiveQueryKey>
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
    return { ...getSearchCarActiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSearchCarActiveRank<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.rank.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.car.active.rank.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSearchCarActiveRankMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSearchCarActiveRankListings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSearchCarActiveRankListingsMutationOptions<
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

export function getSearchCarAuctionActiveQueryKey(
  args: InferRequestType<typeof client.search.car.auction.active.$get>,
) {
  return ['search', '/search/car/auction/active', args] as const
}

export function getSearchCarAuctionActiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.car.auction.active.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarAuctionActiveQueryKey>
  >({
    queryKey: getSearchCarAuctionActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.car.auction.active.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchCarAuctionActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.car.auction.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.search.car.auction.active.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchCarAuctionActiveQueryKey>
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
    return {
      ...getSearchCarAuctionActiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchCarAutoCompleteQueryKey(
  args: InferRequestType<(typeof client.search.car)['auto-complete']['$get']>,
) {
  return ['search', '/search/car/auto-complete', args] as const
}

export function getSearchCarAutoCompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.car)['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchCarAutoCompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.car['auto-complete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchCarAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search.car)['auto-complete']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getSearchCarAutoCompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchCarFsboActiveQueryKey(
  args: InferRequestType<typeof client.search.car.fsbo.active.$get>,
) {
  return ['search', '/search/car/fsbo/active', args] as const
}

export function getSearchCarFsboActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.car.fsbo.active.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarFsboActiveQueryKey>
  >({
    queryKey: getSearchCarFsboActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.car.fsbo.active.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchCarFsboActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.car.fsbo.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchCarFsboActiveQueryKey>
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
    return { ...getSearchCarFsboActiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchCarIncentiveOemQueryKey(
  args: InferRequestType<typeof client.search.car.incentive.oem.$get>,
) {
  return ['search', '/search/car/incentive/oem', args] as const
}

export function getSearchCarIncentiveOemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.car.incentive.oem.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarIncentiveOemQueryKey>
  >({
    queryKey: getSearchCarIncentiveOemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.car.incentive.oem.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchCarIncentiveOem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.car.incentive.oem.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchCarIncentiveOemQueryKey>
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
    return {
      ...getSearchCarIncentiveOemQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchCarRecentsQueryKey(
  args: InferRequestType<typeof client.search.car.recents.$get>,
) {
  return ['search', '/search/car/recents', args] as const
}

export function getSearchCarRecentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.car.recents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarRecentsQueryKey>
  >({
    queryKey: getSearchCarRecentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.car.recents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchCarRecents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.car.recents.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchCarRecentsQueryKey>
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
    return { ...getSearchCarRecentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchCarUkActiveQueryKey(
  args: InferRequestType<typeof client.search.car.uk.active.$get>,
) {
  return ['search', '/search/car/uk/active', args] as const
}

export function getSearchCarUkActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.car.uk.active.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarUkActiveQueryKey>
  >({
    queryKey: getSearchCarUkActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.car.uk.active.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchCarUkActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.car.uk.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchCarUkActiveQueryKey>
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
    return { ...getSearchCarUkActiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchCarUkRecentsQueryKey(
  args: InferRequestType<typeof client.search.car.uk.recents.$get>,
) {
  return ['search', '/search/car/uk/recents', args] as const
}

export function getSearchCarUkRecentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.car.uk.recents.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCarUkRecentsQueryKey>
  >({
    queryKey: getSearchCarUkRecentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.car.uk.recents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchCarUkRecents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.car.uk.recents.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchCarUkRecentsQueryKey>
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
    return { ...getSearchCarUkRecentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchHeavyEquipmentActiveQueryKey(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>,
) {
  return ['search', '/search/heavy-equipment/active', args] as const
}

export function getSearchHeavyEquipmentActiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchHeavyEquipmentActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search['heavy-equipment'].active.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchHeavyEquipmentActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getSearchHeavyEquipmentActiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchHeavyEquipmentAutoCompleteQueryKey(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>,
) {
  return ['search', '/search/heavy-equipment/auto-complete', args] as const
}

export function getSearchHeavyEquipmentAutoCompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchHeavyEquipmentAutoCompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search['heavy-equipment']['auto-complete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchHeavyEquipmentAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getSearchHeavyEquipmentAutoCompleteQueryKey>
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
    return {
      ...getSearchHeavyEquipmentAutoCompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchMotorcycleActiveQueryKey(
  args: InferRequestType<typeof client.search.motorcycle.active.$get>,
) {
  return ['search', '/search/motorcycle/active', args] as const
}

export function getSearchMotorcycleActiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.motorcycle.active.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMotorcycleActiveQueryKey>
  >({
    queryKey: getSearchMotorcycleActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.motorcycle.active.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchMotorcycleActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.motorcycle.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchMotorcycleActiveQueryKey>
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
    return {
      ...getSearchMotorcycleActiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchMotorcycleAutoCompleteQueryKey(
  args: InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>,
) {
  return ['search', '/search/motorcycle/auto-complete', args] as const
}

export function getSearchMotorcycleAutoCompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchMotorcycleAutoCompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.motorcycle['auto-complete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchMotorcycleAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getSearchMotorcycleAutoCompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchRvActiveQueryKey(
  args: InferRequestType<typeof client.search.rv.active.$get>,
) {
  return ['search', '/search/rv/active', args] as const
}

export function getSearchRvActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.rv.active.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchRvActiveQueryKey>
  >({
    queryKey: getSearchRvActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.rv.active.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchRvActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.rv.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchRvActiveQueryKey>
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
    return { ...getSearchRvActiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchRvAutoCompleteQueryKey(
  args: InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>,
) {
  return ['search', '/search/rv/auto-complete', args] as const
}

export function getSearchRvAutoCompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchRvAutoCompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.rv['auto-complete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchRvAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getSearchRvAutoCompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchRvUkActiveQueryKey(
  args: InferRequestType<typeof client.search.rv.uk.active.$get>,
) {
  return ['search', '/search/rv/uk/active', args] as const
}

export function getSearchRvUkActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.rv.uk.active.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchRvUkActiveQueryKey>
  >({
    queryKey: getSearchRvUkActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.rv.uk.active.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchRvUkActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.rv.uk.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchRvUkActiveQueryKey>
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
    return { ...getSearchRvUkActiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSpecsCarAutoCompleteQueryKey(
  args: InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>,
) {
  return ['specs', '/specs/car/auto-complete', args] as const
}

export function getSpecsCarAutoCompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpecsCarAutoCompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.specs.car['auto-complete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSpecsCarAutoComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getSpecsCarAutoCompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSpecsCarTermsQueryKey(
  args: InferRequestType<typeof client.specs.car.terms.$get>,
) {
  return ['specs', '/specs/car/terms', args] as const
}

export function getSpecsCarTermsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.specs.car.terms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpecsCarTermsQueryKey>
  >({
    queryKey: getSpecsCarTermsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.specs.car.terms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSpecsCarTerms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.specs.car.terms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSpecsCarTermsQueryKey>
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
    return { ...getSpecsCarTermsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStatsCarQueryKey(args: InferRequestType<typeof client.stats.car.$get>) {
  return ['stats', '/stats/car', args] as const
}

export function getStatsCarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.car.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsCarQueryKey>
  >({
    queryKey: getStatsCarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.car.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsCar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.car.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStatsCarQueryKey>
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
    return { ...getStatsCarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
