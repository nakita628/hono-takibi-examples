import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetCarDealerInventoryActiveKey(
  args: InferRequestType<typeof client.car.dealer.inventory.active.$get>,
) {
  return ['car', '/car/dealer/inventory/active', args] as const
}

export function useGetCarDealerInventoryActive<TError = unknown>(
  args: InferRequestType<typeof client.car.dealer.inventory.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
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
        ? getGetCarDealerInventoryActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.car.dealer.inventory.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCarDealerInventoryActive<TError = unknown>(
  args: InferRequestType<typeof client.car.dealer.inventory.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
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
        ? getGetCarDealerInventoryActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.car.dealer.inventory.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.car.dealer.inventory.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCarRecallVinKey(
  args: InferRequestType<(typeof client.car.recall)[':vin']['$get']>,
) {
  return ['car', '/car/recall/:vin', args] as const
}

export function useGetCarRecallVin<TError = unknown>(
  args: InferRequestType<(typeof client.car.recall)[':vin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCarRecallVinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.car.recall[':vin'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCarRecallVin<TError = unknown>(
  args: InferRequestType<(typeof client.car.recall)[':vin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCarRecallVinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.car.recall)[':vin']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.car.recall[':vin'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClientConfigureGetKey(
  args: InferRequestType<typeof client.client.configure.get.$get>,
) {
  return ['client', '/client/configure/get', args] as const
}

export function useGetClientConfigureGet<TError = unknown>(
  args: InferRequestType<typeof client.client.configure.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>
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
        ? getGetClientConfigureGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.client.configure.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientConfigureGet<TError = unknown>(
  args: InferRequestType<typeof client.client.configure.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>
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
        ? getGetClientConfigureGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.client.configure.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClientConfigureSetKey() {
  return ['client', '/client/configure/set', 'POST'] as const
}

export function usePostClientConfigureSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.client.configure.set.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.client.configure.set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientConfigureSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.client.configure.set.$post> },
      ) => parseResponse(client.client.configure.set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmCheckCarVinKey(
  args: InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>,
) {
  return ['crm_check', '/crm_check/car/:vin', args] as const
}

export function useGetCrmCheckCarVin<TError = unknown>(
  args: InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmCheckCarVinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm_check.car[':vin'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmCheckCarVin<TError = unknown>(
  args: InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmCheckCarVinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm_check.car)[':vin']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm_check.car[':vin'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealerCarUkIdKey(
  args: InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>,
) {
  return ['dealer', '/dealer/car/uk/:id', args] as const
}

export function useGetDealerCarUkId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDealerCarUkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer.car.uk[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealerCarUkId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDealerCarUkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car.uk)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer.car.uk[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealerCarIdKey(
  args: InferRequestType<(typeof client.dealer.car)[':id']['$get']>,
) {
  return ['dealer', '/dealer/car/:id', args] as const
}

export function useGetDealerCarId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer.car)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDealerCarIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer.car[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealerCarId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer.car)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDealerCarIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.car)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer.car[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealerHeavyEquipmentIdKey(
  args: InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>,
) {
  return ['dealer', '/dealer/heavy-equipment/:id', args] as const
}

export function useGetDealerHeavyEquipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
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
        ? getGetDealerHeavyEquipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer['heavy-equipment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealerHeavyEquipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
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
        ? getGetDealerHeavyEquipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer['heavy-equipment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealerMotorcycleIdKey(
  args: InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>,
) {
  return ['dealer', '/dealer/motorcycle/:id', args] as const
}

export function useGetDealerMotorcycleId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>
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
        ? getGetDealerMotorcycleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer.motorcycle[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealerMotorcycleId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>
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
        ? getGetDealerMotorcycleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealer.motorcycle)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer.motorcycle[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealerRvIdKey(
  args: InferRequestType<(typeof client.dealer.rv)[':id']['$get']>,
) {
  return ['dealer', '/dealer/rv/:id', args] as const
}

export function useGetDealerRvId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer.rv)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDealerRvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer.rv[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealerRvId<TError = unknown>(
  args: InferRequestType<(typeof client.dealer.rv)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDealerRvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dealer.rv)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealer.rv[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealersCarKey(args: InferRequestType<typeof client.dealers.car.$get>) {
  return ['dealers', '/dealers/car', args] as const
}

export function useGetDealersCar<TError = unknown>(
  args: InferRequestType<typeof client.dealers.car.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDealersCarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers.car.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealersCar<TError = unknown>(
  args: InferRequestType<typeof client.dealers.car.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDealersCarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers.car.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealersCarUkKey(args: InferRequestType<typeof client.dealers.car.uk.$get>) {
  return ['dealers', '/dealers/car/uk', args] as const
}

export function useGetDealersCarUk<TError = unknown>(
  args: InferRequestType<typeof client.dealers.car.uk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDealersCarUkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers.car.uk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealersCarUk<TError = unknown>(
  args: InferRequestType<typeof client.dealers.car.uk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDealersCarUkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.car.uk.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers.car.uk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealersHeavyEquipmentKey(
  args: InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>,
) {
  return ['dealers', '/dealers/heavy-equipment', args] as const
}

export function useGetDealersHeavyEquipment<TError = unknown>(
  args: InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>
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
        ? getGetDealersHeavyEquipmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers['heavy-equipment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealersHeavyEquipment<TError = unknown>(
  args: InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>
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
        ? getGetDealersHeavyEquipmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dealers)['heavy-equipment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers['heavy-equipment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealersMotorcycleKey(
  args: InferRequestType<typeof client.dealers.motorcycle.$get>,
) {
  return ['dealers', '/dealers/motorcycle', args] as const
}

export function useGetDealersMotorcycle<TError = unknown>(
  args: InferRequestType<typeof client.dealers.motorcycle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
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
        ? getGetDealersMotorcycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers.motorcycle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealersMotorcycle<TError = unknown>(
  args: InferRequestType<typeof client.dealers.motorcycle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
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
        ? getGetDealersMotorcycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.motorcycle.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers.motorcycle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDealersRvKey(args: InferRequestType<typeof client.dealers.rv.$get>) {
  return ['dealers', '/dealers/rv', args] as const
}

export function useGetDealersRv<TError = unknown>(
  args: InferRequestType<typeof client.dealers.rv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDealersRvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers.rv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealersRv<TError = unknown>(
  args: InferRequestType<typeof client.dealers.rv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDealersRvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dealers.rv.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dealers.rv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDecodeCarEpiVinSpecsKey(
  args: InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>,
) {
  return ['decode', '/decode/car/epi/:vin/specs', args] as const
}

export function useGetDecodeCarEpiVinSpecs<TError = unknown>(
  args: InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
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
        ? getGetDecodeCarEpiVinSpecsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.decode.car.epi[':vin'].specs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDecodeCarEpiVinSpecs<TError = unknown>(
  args: InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
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
        ? getGetDecodeCarEpiVinSpecsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.decode.car.epi[':vin'].specs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDecodeCarNeovinVinSpecsKey(
  args: InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>,
) {
  return ['decode', '/decode/car/neovin/:vin/specs', args] as const
}

export function useGetDecodeCarNeovinVinSpecs<TError = unknown>(
  args: InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
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
        ? getGetDecodeCarNeovinVinSpecsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.decode.car.neovin[':vin'].specs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDecodeCarNeovinVinSpecs<TError = unknown>(
  args: InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
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
        ? getGetDecodeCarNeovinVinSpecsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.decode.car.neovin[':vin'].specs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDecodeCarVinSpecsKey(
  args: InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>,
) {
  return ['decode', '/decode/car/:vin/specs', args] as const
}

export function useGetDecodeCarVinSpecs<TError = unknown>(
  args: InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>
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
        ? getGetDecodeCarVinSpecsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.decode.car[':vin'].specs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDecodeCarVinSpecs<TError = unknown>(
  args: InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>
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
        ? getGetDecodeCarVinSpecsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.decode.car)[':vin']['specs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.decode.car[':vin'].specs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryCarUkVrmKey(
  args: InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>,
) {
  return ['history', '/history/car/uk/:vrm', args] as const
}

export function useGetHistoryCarUkVrm<TError = unknown>(
  args: InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
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
        ? getGetHistoryCarUkVrmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.car.uk[':vrm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryCarUkVrm<TError = unknown>(
  args: InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
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
        ? getGetHistoryCarUkVrmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.car.uk)[':vrm']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.car.uk[':vrm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryCarVinKey(
  args: InferRequestType<(typeof client.history.car)[':vin']['$get']>,
) {
  return ['history', '/history/car/:vin', args] as const
}

export function useGetHistoryCarVin<TError = unknown>(
  args: InferRequestType<(typeof client.history.car)[':vin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetHistoryCarVinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.car[':vin'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryCarVin<TError = unknown>(
  args: InferRequestType<(typeof client.history.car)[':vin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetHistoryCarVinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.car)[':vin']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.car[':vin'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImageCacheCarListingIDImageIDKey(
  args: InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>,
) {
  return ['image', '/image/cache/car/:listingID/:imageID', args] as const
}

export function useGetImageCacheCarListingIDImageID<TError = unknown>(
  args: InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>>
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
        ? getGetImageCacheCarListingIDImageIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.image.cache.car[':listingID'][':imageID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImageCacheCarListingIDImageID<TError = unknown>(
  args: InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>>
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
        ? getGetImageCacheCarListingIDImageIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.image.cache.car[':listingID'][':imageID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarAuctionIdKey(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>,
) {
  return ['listing', '/listing/car/auction/:id', args] as const
}

export function useGetListingCarAuctionId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>
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
        ? getGetListingCarAuctionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.auction[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarAuctionId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>
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
        ? getGetListingCarAuctionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.auction[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarAuctionIdExtraKey(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/car/auction/:id/extra', args] as const
}

export function useGetListingCarAuctionIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
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
        ? getGetListingCarAuctionIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.auction[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarAuctionIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
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
        ? getGetListingCarAuctionIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.auction[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarAuctionIdMediaKey(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/car/auction/:id/media', args] as const
}

export function useGetListingCarAuctionIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
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
        ? getGetListingCarAuctionIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.auction[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarAuctionIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
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
        ? getGetListingCarAuctionIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.auction)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.auction[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarFsboIdKey(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>,
) {
  return ['listing', '/listing/car/fsbo/:id', args] as const
}

export function useGetListingCarFsboId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
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
        ? getGetListingCarFsboIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.fsbo[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarFsboId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
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
        ? getGetListingCarFsboIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.fsbo[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarFsboIdExtraKey(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/car/fsbo/:id/extra', args] as const
}

export function useGetListingCarFsboIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
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
        ? getGetListingCarFsboIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.fsbo[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarFsboIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
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
        ? getGetListingCarFsboIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.fsbo[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarFsboIdMediaKey(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/car/fsbo/:id/media', args] as const
}

export function useGetListingCarFsboIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
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
        ? getGetListingCarFsboIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.fsbo[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarFsboIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
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
        ? getGetListingCarFsboIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.fsbo[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarUkIdKey(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>,
) {
  return ['listing', '/listing/car/uk/:id', args] as const
}

export function useGetListingCarUkId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListingCarUkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.uk[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarUkId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListingCarUkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.uk[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarUkIdExtraKey(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/car/uk/:id/extra', args] as const
}

export function useGetListingCarUkIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
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
        ? getGetListingCarUkIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.uk[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarUkIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
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
        ? getGetListingCarUkIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.uk[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarUkIdMediaKey(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/car/uk/:id/media', args] as const
}

export function useGetListingCarUkIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
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
        ? getGetListingCarUkIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.uk[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarUkIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
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
        ? getGetListingCarUkIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car.uk)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car.uk[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarIdKey(
  args: InferRequestType<(typeof client.listing.car)[':id']['$get']>,
) {
  return ['listing', '/listing/car/:id', args] as const
}

export function useGetListingCarId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListingCarIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListingCarIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.car)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarIdExtraKey(
  args: InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/car/:id/extra', args] as const
}

export function useGetListingCarIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>
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
        ? getGetListingCarIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>
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
        ? getGetListingCarIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingCarIdMediaKey(
  args: InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/car/:id/media', args] as const
}

export function useGetListingCarIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>
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
        ? getGetListingCarIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingCarIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>
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
        ? getGetListingCarIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.car)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.car[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingHeavyEquipmentIdKey(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>,
) {
  return ['listing', '/listing/heavy-equipment/:id', args] as const
}

export function useGetListingHeavyEquipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
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
        ? getGetListingHeavyEquipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing['heavy-equipment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingHeavyEquipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
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
        ? getGetListingHeavyEquipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing['heavy-equipment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingHeavyEquipmentIdExtraKey(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>,
) {
  return ['listing', '/listing/heavy-equipment/:id/extra', args] as const
}

export function useGetListingHeavyEquipmentIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>>
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
        ? getGetListingHeavyEquipmentIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.listing['heavy-equipment'][':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingHeavyEquipmentIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>>
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
        ? getGetListingHeavyEquipmentIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.listing['heavy-equipment'][':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingHeavyEquipmentIdMediaKey(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>,
) {
  return ['listing', '/listing/heavy-equipment/:id/media', args] as const
}

export function useGetListingHeavyEquipmentIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>>
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
        ? getGetListingHeavyEquipmentIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.listing['heavy-equipment'][':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingHeavyEquipmentIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>>
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
        ? getGetListingHeavyEquipmentIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.listing['heavy-equipment'][':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingMotorcycleIdKey(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>,
) {
  return ['listing', '/listing/motorcycle/:id', args] as const
}

export function useGetListingMotorcycleId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>
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
        ? getGetListingMotorcycleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.motorcycle[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingMotorcycleId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>
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
        ? getGetListingMotorcycleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.motorcycle[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingMotorcycleIdExtraKey(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/motorcycle/:id/extra', args] as const
}

export function useGetListingMotorcycleIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
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
        ? getGetListingMotorcycleIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.motorcycle[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingMotorcycleIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
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
        ? getGetListingMotorcycleIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.motorcycle[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingMotorcycleIdMediaKey(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/motorcycle/:id/media', args] as const
}

export function useGetListingMotorcycleIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
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
        ? getGetListingMotorcycleIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.motorcycle[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingMotorcycleIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
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
        ? getGetListingMotorcycleIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.motorcycle)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.motorcycle[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingRvUkIdKey(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>,
) {
  return ['listing', '/listing/rv/uk/:id', args] as const
}

export function useGetListingRvUkId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListingRvUkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv.uk[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingRvUkId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListingRvUkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv.uk[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingRvUkIdExtraKey(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/rv/uk/:id/extra', args] as const
}

export function useGetListingRvUkIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
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
        ? getGetListingRvUkIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv.uk[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingRvUkIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
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
        ? getGetListingRvUkIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv.uk[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingRvUkIdMediaKey(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/rv/uk/:id/media', args] as const
}

export function useGetListingRvUkIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
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
        ? getGetListingRvUkIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv.uk[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingRvUkIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
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
        ? getGetListingRvUkIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv.uk)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv.uk[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingRvIdKey(
  args: InferRequestType<(typeof client.listing.rv)[':id']['$get']>,
) {
  return ['listing', '/listing/rv/:id', args] as const
}

export function useGetListingRvId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListingRvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingRvId<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListingRvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.listing.rv)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingRvIdExtraKey(
  args: InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>,
) {
  return ['listing', '/listing/rv/:id/extra', args] as const
}

export function useGetListingRvIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>
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
        ? getGetListingRvIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingRvIdExtra<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>
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
        ? getGetListingRvIdExtraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv)[':id']['extra']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv[':id'].extra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingRvIdMediaKey(
  args: InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>,
) {
  return ['listing', '/listing/rv/:id/media', args] as const
}

export function useGetListingRvIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>
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
        ? getGetListingRvIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingRvIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>
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
        ? getGetListingRvIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.listing.rv)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing.rv[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMdsCarKey(args: InferRequestType<typeof client.mds.car.$get>) {
  return ['mds', '/mds/car', args] as const
}

export function useGetMdsCar<TError = unknown>(
  args: InferRequestType<typeof client.mds.car.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMdsCarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mds.car.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMdsCar<TError = unknown>(
  args: InferRequestType<typeof client.mds.car.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMdsCarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mds.car.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mds.car.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPopularCarsKey(args: InferRequestType<typeof client.popular.cars.$get>) {
  return ['popular', '/popular/cars', args] as const
}

export function useGetPopularCars<TError = unknown>(
  args: InferRequestType<typeof client.popular.cars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPopularCarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.popular.cars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPopularCars<TError = unknown>(
  args: InferRequestType<typeof client.popular.cars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPopularCarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.popular.cars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.popular.cars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPredictCarPriceKey(
  args: InferRequestType<typeof client.predict.car.price.$get>,
) {
  return ['predict', '/predict/car/price', args] as const
}

export function useGetPredictCarPrice<TError = unknown>(
  args: InferRequestType<typeof client.predict.car.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
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
        ? getGetPredictCarPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predict.car.price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPredictCarPrice<TError = unknown>(
  args: InferRequestType<typeof client.predict.car.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
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
        ? getGetPredictCarPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.price.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predict.car.price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPredictCarUkFmvKey(
  args: InferRequestType<typeof client.predict.car.uk.fmv.$get>,
) {
  return ['predict', '/predict/car/uk/fmv', args] as const
}

export function useGetPredictCarUkFmv<TError = unknown>(
  args: InferRequestType<typeof client.predict.car.uk.fmv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
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
        ? getGetPredictCarUkFmvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predict.car.uk.fmv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPredictCarUkFmv<TError = unknown>(
  args: InferRequestType<typeof client.predict.car.uk.fmv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
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
        ? getGetPredictCarUkFmvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.fmv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predict.car.uk.fmv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPredictCarUkPriceKey(
  args: InferRequestType<typeof client.predict.car.uk.price.$get>,
) {
  return ['predict', '/predict/car/uk/price', args] as const
}

export function useGetPredictCarUkPrice<TError = unknown>(
  args: InferRequestType<typeof client.predict.car.uk.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>
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
        ? getGetPredictCarUkPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predict.car.uk.price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPredictCarUkPrice<TError = unknown>(
  args: InferRequestType<typeof client.predict.car.uk.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>
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
        ? getGetPredictCarUkPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.predict.car.uk.price.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predict.car.uk.price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSalesCarKey(args: InferRequestType<typeof client.sales.car.$get>) {
  return ['sales', '/sales/car', args] as const
}

export function useGetSalesCar<TError = unknown>(
  args: InferRequestType<typeof client.sales.car.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesCarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales.car.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesCar<TError = unknown>(
  args: InferRequestType<typeof client.sales.car.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesCarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.car.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales.car.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchCarActiveKey(
  args: InferRequestType<typeof client.search.car.active.$get>,
) {
  return ['search', '/search/car/active', args] as const
}

export function useGetSearchCarActive<TError = unknown>(
  args: InferRequestType<typeof client.search.car.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
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
        ? getGetSearchCarActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCarActive<TError = unknown>(
  args: InferRequestType<typeof client.search.car.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
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
        ? getGetSearchCarActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchCarActiveRankKey() {
  return ['search', '/search/car/active/rank', 'POST'] as const
}

export function usePostSearchCarActiveRank<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.car.active.rank.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.car.active.rank.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchCarActiveRankKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.search.car.active.rank.$post> },
      ) => parseResponse(client.search.car.active.rank.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchCarActiveRankListingsKey() {
  return ['search', '/search/car/active/rank/listings', 'POST'] as const
}

export function usePostSearchCarActiveRankListings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.search.car.active.rank.listings.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.car.active.rank.listings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchCarActiveRankListingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.search.car.active.rank.listings.$post> },
      ) => parseResponse(client.search.car.active.rank.listings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchCarAuctionActiveKey(
  args: InferRequestType<typeof client.search.car.auction.active.$get>,
) {
  return ['search', '/search/car/auction/active', args] as const
}

export function useGetSearchCarAuctionActive<TError = unknown>(
  args: InferRequestType<typeof client.search.car.auction.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
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
        ? getGetSearchCarAuctionActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.auction.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCarAuctionActive<TError = unknown>(
  args: InferRequestType<typeof client.search.car.auction.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
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
        ? getGetSearchCarAuctionActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.auction.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.auction.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchCarAutoCompleteKey(
  args: InferRequestType<(typeof client.search.car)['auto-complete']['$get']>,
) {
  return ['search', '/search/car/auto-complete', args] as const
}

export function useGetSearchCarAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.search.car)['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>
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
        ? getGetSearchCarAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCarAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.search.car)['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>
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
        ? getGetSearchCarAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.car)['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchCarFsboActiveKey(
  args: InferRequestType<typeof client.search.car.fsbo.active.$get>,
) {
  return ['search', '/search/car/fsbo/active', args] as const
}

export function useGetSearchCarFsboActive<TError = unknown>(
  args: InferRequestType<typeof client.search.car.fsbo.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
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
        ? getGetSearchCarFsboActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.fsbo.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCarFsboActive<TError = unknown>(
  args: InferRequestType<typeof client.search.car.fsbo.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
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
        ? getGetSearchCarFsboActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.fsbo.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.fsbo.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchCarIncentiveOemKey(
  args: InferRequestType<typeof client.search.car.incentive.oem.$get>,
) {
  return ['search', '/search/car/incentive/oem', args] as const
}

export function useGetSearchCarIncentiveOem<TError = unknown>(
  args: InferRequestType<typeof client.search.car.incentive.oem.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
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
        ? getGetSearchCarIncentiveOemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.incentive.oem.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCarIncentiveOem<TError = unknown>(
  args: InferRequestType<typeof client.search.car.incentive.oem.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
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
        ? getGetSearchCarIncentiveOemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.incentive.oem.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.incentive.oem.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchCarRecentsKey(
  args: InferRequestType<typeof client.search.car.recents.$get>,
) {
  return ['search', '/search/car/recents', args] as const
}

export function useGetSearchCarRecents<TError = unknown>(
  args: InferRequestType<typeof client.search.car.recents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
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
        ? getGetSearchCarRecentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.recents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCarRecents<TError = unknown>(
  args: InferRequestType<typeof client.search.car.recents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
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
        ? getGetSearchCarRecentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.car.recents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.recents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchCarUkActiveKey(
  args: InferRequestType<typeof client.search.car.uk.active.$get>,
) {
  return ['search', '/search/car/uk/active', args] as const
}

export function useGetSearchCarUkActive<TError = unknown>(
  args: InferRequestType<typeof client.search.car.uk.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>
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
        ? getGetSearchCarUkActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.uk.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCarUkActive<TError = unknown>(
  args: InferRequestType<typeof client.search.car.uk.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>
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
        ? getGetSearchCarUkActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.uk.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchCarUkRecentsKey(
  args: InferRequestType<typeof client.search.car.uk.recents.$get>,
) {
  return ['search', '/search/car/uk/recents', args] as const
}

export function useGetSearchCarUkRecents<TError = unknown>(
  args: InferRequestType<typeof client.search.car.uk.recents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
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
        ? getGetSearchCarUkRecentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.uk.recents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCarUkRecents<TError = unknown>(
  args: InferRequestType<typeof client.search.car.uk.recents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
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
        ? getGetSearchCarUkRecentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.car.uk.recents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.car.uk.recents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchHeavyEquipmentActiveKey(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>,
) {
  return ['search', '/search/heavy-equipment/active', args] as const
}

export function useGetSearchHeavyEquipmentActive<TError = unknown>(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
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
        ? getGetSearchHeavyEquipmentActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search['heavy-equipment'].active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchHeavyEquipmentActive<TError = unknown>(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
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
        ? getGetSearchHeavyEquipmentActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['heavy-equipment']['active']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search['heavy-equipment'].active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchHeavyEquipmentAutoCompleteKey(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>,
) {
  return ['search', '/search/heavy-equipment/auto-complete', args] as const
}

export function useGetSearchHeavyEquipmentAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>>
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
        ? getGetSearchHeavyEquipmentAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search['heavy-equipment']['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchHeavyEquipmentAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>>
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
        ? getGetSearchHeavyEquipmentAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search['heavy-equipment']['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchMotorcycleActiveKey(
  args: InferRequestType<typeof client.search.motorcycle.active.$get>,
) {
  return ['search', '/search/motorcycle/active', args] as const
}

export function useGetSearchMotorcycleActive<TError = unknown>(
  args: InferRequestType<typeof client.search.motorcycle.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
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
        ? getGetSearchMotorcycleActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.motorcycle.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMotorcycleActive<TError = unknown>(
  args: InferRequestType<typeof client.search.motorcycle.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
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
        ? getGetSearchMotorcycleActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.motorcycle.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.motorcycle.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchMotorcycleAutoCompleteKey(
  args: InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>,
) {
  return ['search', '/search/motorcycle/auto-complete', args] as const
}

export function useGetSearchMotorcycleAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
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
        ? getGetSearchMotorcycleAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search.motorcycle['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMotorcycleAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
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
        ? getGetSearchMotorcycleAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.motorcycle)['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search.motorcycle['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchRvActiveKey(
  args: InferRequestType<typeof client.search.rv.active.$get>,
) {
  return ['search', '/search/rv/active', args] as const
}

export function useGetSearchRvActive<TError = unknown>(
  args: InferRequestType<typeof client.search.rv.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchRvActiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.rv.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchRvActive<TError = unknown>(
  args: InferRequestType<typeof client.search.rv.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchRvActiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.rv.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchRvAutoCompleteKey(
  args: InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>,
) {
  return ['search', '/search/rv/auto-complete', args] as const
}

export function useGetSearchRvAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>
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
        ? getGetSearchRvAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.rv['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchRvAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>
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
        ? getGetSearchRvAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.rv)['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.rv['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchRvUkActiveKey(
  args: InferRequestType<typeof client.search.rv.uk.active.$get>,
) {
  return ['search', '/search/rv/uk/active', args] as const
}

export function useGetSearchRvUkActive<TError = unknown>(
  args: InferRequestType<typeof client.search.rv.uk.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>
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
        ? getGetSearchRvUkActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.rv.uk.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchRvUkActive<TError = unknown>(
  args: InferRequestType<typeof client.search.rv.uk.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>
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
        ? getGetSearchRvUkActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.rv.uk.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.rv.uk.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpecsCarAutoCompleteKey(
  args: InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>,
) {
  return ['specs', '/specs/car/auto-complete', args] as const
}

export function useGetSpecsCarAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>
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
        ? getGetSpecsCarAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.specs.car['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpecsCarAutoComplete<TError = unknown>(
  args: InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>
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
        ? getGetSpecsCarAutoCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.specs.car)['auto-complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.specs.car['auto-complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpecsCarTermsKey(args: InferRequestType<typeof client.specs.car.terms.$get>) {
  return ['specs', '/specs/car/terms', args] as const
}

export function useGetSpecsCarTerms<TError = unknown>(
  args: InferRequestType<typeof client.specs.car.terms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpecsCarTermsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.specs.car.terms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpecsCarTerms<TError = unknown>(
  args: InferRequestType<typeof client.specs.car.terms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpecsCarTermsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.specs.car.terms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.specs.car.terms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCarKey(args: InferRequestType<typeof client.stats.car.$get>) {
  return ['stats', '/stats/car', args] as const
}

export function useGetStatsCar<TError = unknown>(
  args: InferRequestType<typeof client.stats.car.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsCarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.car.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCar<TError = unknown>(
  args: InferRequestType<typeof client.stats.car.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsCarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.car.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.car.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
