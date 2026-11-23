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

export function getApiKey() {
  return ['api'] as const
}

export function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/logistics-capacity/resources/carrier@:capacityType@:shippingPolicyId/time-frames',
    keyArgs,
  ] as const
}

export function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['logistics-capacity'].resources['carrier@:capacityType@:shippingPolicyId'][
          'time-frames'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFrames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
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
                    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
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
                    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryKey
          >
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
              (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api['logistics-capacity'].resources['carrier@:capacityType@:shippingPolicyId'][
            'time-frames'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/logistics-capacity/resources/carrier@:capacityType@:shippingPolicyId/time-frames/:windowDayF:windowStartTimeT:windowEndTime',
    keyArgs,
  ] as const
}

export function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['logistics-capacity'].resources['carrier@:capacityType@:shippingPolicyId'][
          'time-frames'
        ][':windowDayF:windowStartTimeT:windowEndTime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
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
                    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
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
                    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryKey
          >
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
              (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api['logistics-capacity'].resources['carrier@:capacityType@:shippingPolicyId'][
            'time-frames'
          ][':windowDayF:windowStartTimeT:windowEndTime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/carriers/:carrierId/adddayofweekblocked',
    'POST',
  ] as const
}

export function getPostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['adddayofweekblocked']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['adddayofweekblocked']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['adddayofweekblocked']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.carriers[':carrierId'].adddayofweekblocked.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblocked<
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
                    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['adddayofweekblocked']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['adddayofweekblocked']['$post']
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
    getPostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedMutationOptions<
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

export function getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/logistics/pvt/configuration/carriers/:carrierId/getdayofweekblocked',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.carriers[':carrierId'].getdayofweekblocked.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblocked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryKey
          >
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
              (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.carriers[':carrierId'].getdayofweekblocked.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/carriers/:carrierId/removedayofweekblocked',
    'POST',
  ] as const
}

export function getPostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['removedayofweekblocked']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['removedayofweekblocked']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['removedayofweekblocked']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.carriers[':carrierId'].removedayofweekblocked.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblocked<
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
                    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['removedayofweekblocked']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['removedayofweekblocked']['$post']
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
    getPostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedMutationOptions<
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

export function getApiLogisticsPvtConfigurationDocksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/docks', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationDocksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationDocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.docks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationDocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationDocksQueryKey>
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
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationDocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationDocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.docks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLogisticsPvtConfigurationDocksMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/docks', 'POST'] as const
}

export function getPostApiLogisticsPvtConfigurationDocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtConfigurationDocksMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$post>,
    ) {
      return parseResponse(client.api.logistics.pvt.configuration.docks.$post(args, options))
    },
  })
}

export function usePostApiLogisticsPvtConfigurationDocks<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$post>,
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
  const mutationDefaults = getPostApiLogisticsPvtConfigurationDocksMutationOptions<
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

export function getApiLogisticsPvtConfigurationDocksDockIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationDocksDockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationDocksDockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.docks[':dockId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationDocksDockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
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
                    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationDocksDockIdQueryKey>
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
            ReturnType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationDocksDockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationDocksDockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.docks[':dockId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLogisticsPvtConfigurationDocksDockIdMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId', 'DELETE'] as const
}

export function getDeleteApiLogisticsPvtConfigurationDocksDockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLogisticsPvtConfigurationDocksDockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.docks[':dockId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiLogisticsPvtConfigurationDocksDockId<
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
                    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$delete']
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
  const mutationDefaults = getDeleteApiLogisticsPvtConfigurationDocksDockIdMutationOptions<
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

export function getPostApiLogisticsPvtConfigurationDocksDockIdActivationMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId/activation', 'POST'] as const
}

export function getPostApiLogisticsPvtConfigurationDocksDockIdActivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['activation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['activation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtConfigurationDocksDockIdActivationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['activation']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.docks[':dockId'].activation.$post(args, options),
      )
    },
  })
}

export function usePostApiLogisticsPvtConfigurationDocksDockIdActivation<
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
                    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['activation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['activation']['$post']
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
  const mutationDefaults = getPostApiLogisticsPvtConfigurationDocksDockIdActivationMutationOptions<
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

export function getPostApiLogisticsPvtConfigurationDocksDockIdDeactivationMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId/deactivation', 'POST'] as const
}

export function getPostApiLogisticsPvtConfigurationDocksDockIdDeactivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['deactivation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['deactivation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtConfigurationDocksDockIdDeactivationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['deactivation']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.docks[':dockId'].deactivation.$post(args, options),
      )
    },
  })
}

export function usePostApiLogisticsPvtConfigurationDocksDockIdDeactivation<
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
                    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['deactivation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['deactivation']['$post']
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
    getPostApiLogisticsPvtConfigurationDocksDockIdDeactivationMutationOptions<
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

export function getPostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/freights/:carrierId/values/update',
    'POST',
  ] as const
}

export function getPostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.freights)[':carrierId']['values']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.freights)[':carrierId']['values']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.freights)[':carrierId']['values']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.freights[':carrierId'].values.update.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdate<
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
                    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId']['values']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.freights)[':carrierId']['values']['update']['$post']
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
    getPostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateMutationOptions<
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

export function getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/logistics/pvt/configuration/freights/:carrierId/:cep/values',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.freights[':carrierId'][':cep'].values.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationFreightsCarrierIdCepValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryKey>
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
              (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.freights[':carrierId'][':cep'].values.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtConfigurationGeoshapeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/geoshape', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationGeoshapeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationGeoshapeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.geoshape.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationGeoshape<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationGeoshapeQueryKey>
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
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationGeoshapeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationGeoshapeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.geoshape.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiLogisticsPvtConfigurationGeoshapeMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/geoshape', 'PUT'] as const
}

export function getPutApiLogisticsPvtConfigurationGeoshapeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLogisticsPvtConfigurationGeoshapeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$put>,
    ) {
      return parseResponse(client.api.logistics.pvt.configuration.geoshape.$put(args, options))
    },
  })
}

export function usePutApiLogisticsPvtConfigurationGeoshape<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$put>,
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
  const mutationDefaults = getPutApiLogisticsPvtConfigurationGeoshapeMutationOptions<
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

export function getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/geoshape/:polygonName', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.geoshape[':polygonName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationGeoshapePolygonName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryKey>
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
              (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.geoshape[':polygonName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLogisticsPvtConfigurationGeoshapePolygonNameMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/geoshape/:polygonName', 'DELETE'] as const
}

export function getDeleteApiLogisticsPvtConfigurationGeoshapePolygonNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLogisticsPvtConfigurationGeoshapePolygonNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.geoshape[':polygonName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiLogisticsPvtConfigurationGeoshapePolygonName<
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
                    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$delete']
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
  const mutationDefaults = getDeleteApiLogisticsPvtConfigurationGeoshapePolygonNameMutationOptions<
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

export function getApiLogisticsPvtConfigurationHolidaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/holidays', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationHolidaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationHolidaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.holidays.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationHolidaysQueryKey>
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
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationHolidaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationHolidaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.holidays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/holidays/:holidayId', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.holidays[':holidayId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationHolidaysHolidayId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']>
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
                    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryKey>
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
              (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.holidays[':holidayId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiLogisticsPvtConfigurationHolidaysHolidayIdMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/holidays/:holidayId', 'PUT'] as const
}

export function getPutApiLogisticsPvtConfigurationHolidaysHolidayIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiLogisticsPvtConfigurationHolidaysHolidayIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.holidays[':holidayId'].$put(args, options),
      )
    },
  })
}

export function usePutApiLogisticsPvtConfigurationHolidaysHolidayId<
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
                    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$put']
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
  const mutationDefaults = getPutApiLogisticsPvtConfigurationHolidaysHolidayIdMutationOptions<
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

export function getDeleteApiLogisticsPvtConfigurationHolidaysHolidayIdMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/holidays/:holidayId', 'DELETE'] as const
}

export function getDeleteApiLogisticsPvtConfigurationHolidaysHolidayIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLogisticsPvtConfigurationHolidaysHolidayIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.holidays[':holidayId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiLogisticsPvtConfigurationHolidaysHolidayId<
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
                    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$delete']
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
  const mutationDefaults = getDeleteApiLogisticsPvtConfigurationHolidaysHolidayIdMutationOptions<
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

export function getApiLogisticsPvtConfigurationPickuppointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/pickuppoints', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationPickuppointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationPickuppointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.pickuppoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationPickuppoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationPickuppointsQueryKey>
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
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationPickuppointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationPickuppointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtConfigurationPickuppointsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/_search', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationPickuppointsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationPickuppointsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.pickuppoints._search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationPickuppointsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>
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
                    typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get
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
                    typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationPickuppointsSearchQueryKey>
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
            ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationPickuppointsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationPickuppointsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints._search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/:pickupPointId', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationPickuppointsPickupPointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryKey>
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
              (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/:pickupPointId', 'PUT'] as const
}

export function getPutApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$put(args, options),
      )
    },
  })
}

export function usePutApiLogisticsPvtConfigurationPickuppointsPickupPointId<
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
                    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$put']
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
    getPutApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationOptions<
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

export function getDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/:pickupPointId', 'DELETE'] as const
}

export function getDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointId<
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
                    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$delete']
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
    getDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationOptions<
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

export function getApiLogisticsPvtConfigurationWarehousesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/warehouses', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationWarehousesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationWarehousesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.warehouses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationWarehouses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationWarehousesQueryKey>
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
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationWarehousesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationWarehousesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.warehouses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLogisticsPvtConfigurationWarehousesMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/warehouses', 'POST'] as const
}

export function getPostApiLogisticsPvtConfigurationWarehousesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtConfigurationWarehousesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$post>,
    ) {
      return parseResponse(client.api.logistics.pvt.configuration.warehouses.$post(args, options))
    },
  })
}

export function usePostApiLogisticsPvtConfigurationWarehouses<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$post>,
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
  const mutationDefaults = getPostApiLogisticsPvtConfigurationWarehousesMutationOptions<
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

export function getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/configuration/warehouses/:warehouseId', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtConfigurationWarehousesWarehouseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
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
                    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryKey>
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
              (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLogisticsPvtConfigurationWarehousesWarehouseIdMutationKey() {
  return ['api', '/api/logistics/pvt/configuration/warehouses/:warehouseId', 'DELETE'] as const
}

export function getDeleteApiLogisticsPvtConfigurationWarehousesWarehouseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLogisticsPvtConfigurationWarehousesWarehouseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiLogisticsPvtConfigurationWarehousesWarehouseId<
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
                    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$delete']
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
    getDeleteApiLogisticsPvtConfigurationWarehousesWarehouseIdMutationOptions<
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

export function getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/warehouses/:warehouseId/activation',
    'POST',
  ] as const
}

export function getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['activation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['activation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['activation']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.warehouses[':warehouseId'].activation.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivation<
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
                    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['activation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['activation']['$post']
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
    getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationMutationOptions<
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

export function getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/warehouses/:warehouseId/deactivation',
    'POST',
  ] as const
}

export function getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['deactivation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['deactivation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['deactivation']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.configuration.warehouses[':warehouseId'].deactivation.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivation<
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
                    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['deactivation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['deactivation']['$post']
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
    getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationMutationOptions<
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

export function getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:itemId/warehouses/:warehouseId/dispatched',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':itemId'].warehouses[
          ':warehouseId'
        ].dispatched.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatched<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryKey
          >
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
              (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.inventory.items[':itemId'].warehouses[
            ':warehouseId'
          ].dispatched.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/inventory/items/:skuId/docks/:dockId', keyArgs] as const
}

export function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtInventoryItemsSkuIdDocksDockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryKey>
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
              (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/docks/:dockId/warehouses/:warehouseId',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].warehouses[
          ':warehouseId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryKey
          >
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
              (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].warehouses[
            ':warehouseId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryKey>
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
              (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].warehouses[
          ':warehouseId'
        ].supplyLots.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryKey
          >
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
              (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].warehouses[
            ':warehouseId'
          ].supplyLots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots/:supplyLotId',
    'PUT',
  ] as const
}

export function getPutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].supplyLots[
          ':supplyLotId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotId<
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['$put']
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
    getPutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdMutationOptions<
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

export function getPostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots/:supplyLotId/transfer',
    'POST',
  ] as const
}

export function getPostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['transfer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['transfer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['transfer']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].supplyLots[
          ':supplyLotId'
        ].transfer.$post(args, options),
      )
    },
  })
}

export function usePostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransfer<
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
                    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['transfer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['transfer']['$post']
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
    getPostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferMutationOptions<
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

export function getPostApiLogisticsPvtInventoryReservationsMutationKey() {
  return ['api', '/api/logistics/pvt/inventory/reservations', 'POST'] as const
}

export function getPostApiLogisticsPvtInventoryReservationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.inventory.reservations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.logistics.pvt.inventory.reservations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtInventoryReservationsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.logistics.pvt.inventory.reservations.$post>,
    ) {
      return parseResponse(client.api.logistics.pvt.inventory.reservations.$post(args, options))
    },
  })
}

export function usePostApiLogisticsPvtInventoryReservations<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.inventory.reservations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.inventory.reservations.$post>,
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
  const mutationDefaults = getPostApiLogisticsPvtInventoryReservationsMutationOptions<
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

export function getApiLogisticsPvtInventoryReservationsReservationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/inventory/reservations/:reservationId', keyArgs] as const
}

export function getApiLogisticsPvtInventoryReservationsReservationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtInventoryReservationsReservationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.inventory.reservations[':reservationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtInventoryReservationsReservationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtInventoryReservationsReservationIdQueryKey>
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
              (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtInventoryReservationsReservationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtInventoryReservationsReservationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.inventory.reservations[':reservationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/inventory/reservations/:reservationId/acknowledge',
    'POST',
  ] as const
}

export function getPostApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['acknowledge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['acknowledge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['acknowledge']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.inventory.reservations[':reservationId'].acknowledge.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiLogisticsPvtInventoryReservationsReservationIdAcknowledge<
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
                    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['acknowledge']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['acknowledge']['$post']
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
    getPostApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeMutationOptions<
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

export function getPostApiLogisticsPvtInventoryReservationsReservationIdCancelMutationKey() {
  return ['api', '/api/logistics/pvt/inventory/reservations/:reservationId/cancel', 'POST'] as const
}

export function getPostApiLogisticsPvtInventoryReservationsReservationIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtInventoryReservationsReservationIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.inventory.reservations[':reservationId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiLogisticsPvtInventoryReservationsReservationIdCancel<
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
                    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['cancel']['$post']
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
    getPostApiLogisticsPvtInventoryReservationsReservationIdCancelMutationOptions<
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

export function getPostApiLogisticsPvtInventoryReservationsReservationIdConfirmMutationKey() {
  return [
    'api',
    '/api/logistics/pvt/inventory/reservations/:reservationId/confirm',
    'POST',
  ] as const
}

export function getPostApiLogisticsPvtInventoryReservationsReservationIdConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['confirm']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['confirm']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtInventoryReservationsReservationIdConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['confirm']['$post']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.inventory.reservations[':reservationId'].confirm.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiLogisticsPvtInventoryReservationsReservationIdConfirm<
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
                    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['confirm']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['confirm']['$post']
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
    getPostApiLogisticsPvtInventoryReservationsReservationIdConfirmMutationOptions<
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

export function getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/inventory/reservations/:warehouseId/:skuId', keyArgs] as const
}

export function getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.inventory.reservations[':warehouseId'][':skuId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiLogisticsPvtInventoryReservationsWarehouseIdSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
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
                    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryKey>
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
              (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.inventory.reservations[':warehouseId'][':skuId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogisticsPvtInventorySkusSkuIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/inventory/skus/:skuId', keyArgs] as const
}

export function getApiLogisticsPvtInventorySkusSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtInventorySkusSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt.inventory.skus[':skuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtInventorySkusSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>
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
                  ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtInventorySkusSkuIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtInventorySkusSkuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtInventorySkusSkuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt.inventory.skus[':skuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdMutationKey() {
  return ['api', '/api/logistics/pvt/inventory/skus/:skuId/warehouses/:warehouseId', 'PUT'] as const
}

export function getPutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.logistics.pvt.inventory.skus)[':skuId']['warehouses'][':warehouseId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.skus)[':skuId']['warehouses'][':warehouseId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt.inventory.skus)[':skuId']['warehouses'][':warehouseId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt.inventory.skus[':skuId'].warehouses[':warehouseId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseId<
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
                    (typeof client.api.logistics.pvt.inventory.skus)[':skuId']['warehouses'][':warehouseId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt.inventory.skus)[':skuId']['warehouses'][':warehouseId']['$put']
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
    getPutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdMutationOptions<
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

export function getApiLogisticsPvtShippingPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/shipping-policies', keyArgs] as const
}

export function getApiLogisticsPvtShippingPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtShippingPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt['shipping-policies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtShippingPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtShippingPoliciesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtShippingPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtShippingPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt['shipping-policies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLogisticsPvtShippingPoliciesMutationKey() {
  return ['api', '/api/logistics/pvt/shipping-policies', 'POST'] as const
}

export function getPostApiLogisticsPvtShippingPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtShippingPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>,
    ) {
      return parseResponse(client.api.logistics.pvt['shipping-policies'].$post(args, options))
    },
  })
}

export function usePostApiLogisticsPvtShippingPolicies<
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
                Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>,
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
  const mutationDefaults = getPostApiLogisticsPvtShippingPoliciesMutationOptions<
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

export function getApiLogisticsPvtShippingPoliciesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/logistics/pvt/shipping-policies/:id', keyArgs] as const
}

export function getApiLogisticsPvtShippingPoliciesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogisticsPvtShippingPoliciesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logistics.pvt['shipping-policies'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogisticsPvtShippingPoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
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
                  ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiLogisticsPvtShippingPoliciesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogisticsPvtShippingPoliciesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogisticsPvtShippingPoliciesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logistics.pvt['shipping-policies'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiLogisticsPvtShippingPoliciesIdMutationKey() {
  return ['api', '/api/logistics/pvt/shipping-policies/:id', 'PUT'] as const
}

export function getPutApiLogisticsPvtShippingPoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLogisticsPvtShippingPoliciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>,
    ) {
      return parseResponse(client.api.logistics.pvt['shipping-policies'][':id'].$put(args, options))
    },
  })
}

export function usePutApiLogisticsPvtShippingPoliciesId<
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
                  ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>,
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
  const mutationDefaults = getPutApiLogisticsPvtShippingPoliciesIdMutationOptions<
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

export function getDeleteApiLogisticsPvtShippingPoliciesIdMutationKey() {
  return ['api', '/api/logistics/pvt/shipping-policies/:id', 'DELETE'] as const
}

export function getDeleteApiLogisticsPvtShippingPoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLogisticsPvtShippingPoliciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.logistics.pvt)['shipping-policies'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.logistics.pvt['shipping-policies'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiLogisticsPvtShippingPoliciesId<
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
                    (typeof client.api.logistics.pvt)['shipping-policies'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.logistics.pvt)['shipping-policies'][':id']['$delete']
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
  const mutationDefaults = getDeleteApiLogisticsPvtShippingPoliciesIdMutationOptions<
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

export function getPostApiLogisticsPvtShippingCalculateMutationKey() {
  return ['api', '/api/logistics/pvt/shipping/calculate', 'POST'] as const
}

export function getPostApiLogisticsPvtShippingCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.shipping.calculate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.logistics.pvt.shipping.calculate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogisticsPvtShippingCalculateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.logistics.pvt.shipping.calculate.$post>,
    ) {
      return parseResponse(client.api.logistics.pvt.shipping.calculate.$post(args, options))
    },
  })
}

export function usePostApiLogisticsPvtShippingCalculate<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.shipping.calculate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.shipping.calculate.$post>,
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
  const mutationDefaults = getPostApiLogisticsPvtShippingCalculateMutationOptions<
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
