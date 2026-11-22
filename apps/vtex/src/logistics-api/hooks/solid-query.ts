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

export function getApiKey() {
  return ['api'] as const
}

export function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryKey(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics-capacity/resources/carrier@:capacityType@:shippingPolicyId/time-frames',
    keyArgs,
  ] as const
}

export function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryOptions<
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
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['logistics-capacity'].resources['carrier@:capacityType@:shippingPolicyId'][
          'time-frames'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFrames<
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
  args: () => InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryKey(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics-capacity/resources/carrier@:capacityType@:shippingPolicyId/time-frames/:windowDayF:windowStartTimeT:windowEndTime',
    keyArgs,
  ] as const
}

export function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryOptions<
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
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api['logistics-capacity'].resources['carrier@:capacityType@:shippingPolicyId'][
          'time-frames'
        ][':windowDayF:windowStartTimeT:windowEndTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime<
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
  args: () => InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@:capacityType@:shippingPolicyId']['time-frames'][':windowDayF:windowStartTimeT:windowEndTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblocked<
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
    const mutationDefaults =
      getPostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedMutationOptions<
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

export function getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics/pvt/configuration/carriers/:carrierId/getdayofweekblocked',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.carriers[':carrierId'].getdayofweekblocked.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblocked<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryKey
          >
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
      ...getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblocked<
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
    const mutationDefaults =
      getPostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedMutationOptions<
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

export function getApiLogisticsPvtConfigurationDocksQueryKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/docks', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationDocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationDocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.docks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationDocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationDocksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiLogisticsPvtConfigurationDocks<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$post>,
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
    const mutationDefaults = getPostApiLogisticsPvtConfigurationDocksMutationOptions<
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

export function getApiLogisticsPvtConfigurationDocksDockIdQueryKey(
  args: InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationDocksDockIdQueryOptions<
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
  args: InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationDocksDockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.docks[':dockId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationDocksDockId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiLogisticsPvtConfigurationDocksDockIdQueryKey>
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
      ...getApiLogisticsPvtConfigurationDocksDockIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiLogisticsPvtConfigurationDocksDockId<
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
    const mutationDefaults = getDeleteApiLogisticsPvtConfigurationDocksDockIdMutationOptions<
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

export function createPostApiLogisticsPvtConfigurationDocksDockIdActivation<
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
    const mutationDefaults =
      getPostApiLogisticsPvtConfigurationDocksDockIdActivationMutationOptions<
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

export function createPostApiLogisticsPvtConfigurationDocksDockIdDeactivation<
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
    const mutationDefaults =
      getPostApiLogisticsPvtConfigurationDocksDockIdDeactivationMutationOptions<
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

export function createPostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdate<
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
    const mutationDefaults =
      getPostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateMutationOptions<
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

export function getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics/pvt/configuration/freights/:carrierId/:cep/values',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.freights[':carrierId'][':cep'].values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationFreightsCarrierIdCepValues<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtConfigurationGeoshapeQueryKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/geoshape', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationGeoshapeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationGeoshapeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.geoshape.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationGeoshape<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationGeoshapeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiLogisticsPvtConfigurationGeoshape<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$put>,
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
    const mutationDefaults = getPutApiLogisticsPvtConfigurationGeoshapeMutationOptions<
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

export function getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/geoshape/:polygonName', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.geoshape[':polygonName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationGeoshapePolygonName<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationGeoshapePolygonNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiLogisticsPvtConfigurationGeoshapePolygonName<
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
    const mutationDefaults =
      getDeleteApiLogisticsPvtConfigurationGeoshapePolygonNameMutationOptions<
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

export function getApiLogisticsPvtConfigurationHolidaysQueryKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/holidays', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationHolidaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationHolidaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.holidays.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationHolidaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/holidays/:holidayId', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.holidays[':holidayId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationHolidaysHolidayId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationHolidaysHolidayIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiLogisticsPvtConfigurationHolidaysHolidayId<
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
    const mutationDefaults = getPutApiLogisticsPvtConfigurationHolidaysHolidayIdMutationOptions<
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

export function createDeleteApiLogisticsPvtConfigurationHolidaysHolidayId<
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
    const mutationDefaults = getDeleteApiLogisticsPvtConfigurationHolidaysHolidayIdMutationOptions<
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

export function getApiLogisticsPvtConfigurationPickuppointsQueryKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/pickuppoints', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationPickuppointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationPickuppointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.pickuppoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationPickuppoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationPickuppointsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtConfigurationPickuppointsSearchQueryKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/_search', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationPickuppointsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationPickuppointsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.pickuppoints._search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationPickuppointsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiLogisticsPvtConfigurationPickuppointsSearchQueryKey>
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
      ...getApiLogisticsPvtConfigurationPickuppointsSearchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/:pickupPointId', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationPickuppointsPickupPointId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationPickuppointsPickupPointIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiLogisticsPvtConfigurationPickuppointsPickupPointId<
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
    const mutationDefaults =
      getPutApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationOptions<
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

export function createDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointId<
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
    const mutationDefaults =
      getDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdMutationOptions<
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

export function getApiLogisticsPvtConfigurationWarehousesQueryKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/warehouses', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationWarehousesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationWarehousesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.warehouses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationWarehouses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationWarehousesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiLogisticsPvtConfigurationWarehouses<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$post>,
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
    const mutationDefaults = getPostApiLogisticsPvtConfigurationWarehousesMutationOptions<
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

export function getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/warehouses/:warehouseId', keyArgs] as const
}

export function getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtConfigurationWarehousesWarehouseId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtConfigurationWarehousesWarehouseIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiLogisticsPvtConfigurationWarehousesWarehouseId<
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
    const mutationDefaults =
      getDeleteApiLogisticsPvtConfigurationWarehousesWarehouseIdMutationOptions<
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

export function createPostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivation<
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
    const mutationDefaults =
      getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationMutationOptions<
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

export function createPostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivation<
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
    const mutationDefaults =
      getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationMutationOptions<
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

export function getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:itemId/warehouses/:warehouseId/dispatched',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':itemId'].warehouses[
          ':warehouseId'
        ].dispatched.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatched<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryKey
          >
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
      ...getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/inventory/items/:skuId/docks/:dockId', keyArgs] as const
}

export function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtInventoryItemsSkuIdDocksDockId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/docks/:dockId/warehouses/:warehouseId',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].warehouses[
          ':warehouseId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryKey
          >
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
      ...getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots',
    keyArgs,
  ] as const
}

export function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.inventory.items[':skuId'].warehouses[
          ':warehouseId'
        ].supplyLots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLots<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryKey
          >
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
      ...getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotId<
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
    const mutationDefaults =
      getPutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdMutationOptions<
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

export function createPostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransfer<
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
    const mutationDefaults =
      getPostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferMutationOptions<
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

export function createPostApiLogisticsPvtInventoryReservations<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.inventory.reservations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.inventory.reservations.$post>,
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
    const mutationDefaults = getPostApiLogisticsPvtInventoryReservationsMutationOptions<
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

export function getApiLogisticsPvtInventoryReservationsReservationIdQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/inventory/reservations/:reservationId', keyArgs] as const
}

export function getApiLogisticsPvtInventoryReservationsReservationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtInventoryReservationsReservationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.inventory.reservations[':reservationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtInventoryReservationsReservationId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtInventoryReservationsReservationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiLogisticsPvtInventoryReservationsReservationIdAcknowledge<
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
    const mutationDefaults =
      getPostApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeMutationOptions<
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

export function createPostApiLogisticsPvtInventoryReservationsReservationIdCancel<
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
    const mutationDefaults =
      getPostApiLogisticsPvtInventoryReservationsReservationIdCancelMutationOptions<
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

export function createPostApiLogisticsPvtInventoryReservationsReservationIdConfirm<
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
    const mutationDefaults =
      getPostApiLogisticsPvtInventoryReservationsReservationIdConfirmMutationOptions<
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

export function getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/inventory/reservations/:warehouseId/:skuId', keyArgs] as const
}

export function getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.inventory.reservations[':warehouseId'][':skuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtInventoryReservationsWarehouseIdSkuId<
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
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiLogisticsPvtInventorySkusSkuIdQueryKey(
  args: InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/inventory/skus/:skuId', keyArgs] as const
}

export function getApiLogisticsPvtInventorySkusSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtInventorySkusSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt.inventory.skus[':skuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtInventorySkusSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiLogisticsPvtInventorySkusSkuIdQueryKey>
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
      ...getApiLogisticsPvtInventorySkusSkuIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseId<
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
    const mutationDefaults =
      getPutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdMutationOptions<
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

export function getApiLogisticsPvtShippingPoliciesQueryKey(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/shipping-policies', keyArgs] as const
}

export function getApiLogisticsPvtShippingPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtShippingPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt['shipping-policies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtShippingPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiLogisticsPvtShippingPoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiLogisticsPvtShippingPolicies<
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
                Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>,
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
    const mutationDefaults = getPostApiLogisticsPvtShippingPoliciesMutationOptions<
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

export function getApiLogisticsPvtShippingPoliciesIdQueryKey(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/shipping-policies/:id', keyArgs] as const
}

export function getApiLogisticsPvtShippingPoliciesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLogisticsPvtShippingPoliciesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logistics.pvt['shipping-policies'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogisticsPvtShippingPoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiLogisticsPvtShippingPoliciesIdQueryKey>
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
      ...getApiLogisticsPvtShippingPoliciesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiLogisticsPvtShippingPoliciesId<
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
                Awaited<
                  ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>,
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
    const mutationDefaults = getPutApiLogisticsPvtShippingPoliciesIdMutationOptions<
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

export function createDeleteApiLogisticsPvtShippingPoliciesId<
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
    const mutationDefaults = getDeleteApiLogisticsPvtShippingPoliciesIdMutationOptions<
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

export function createPostApiLogisticsPvtShippingCalculate<
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
                Awaited<ReturnType<typeof client.api.logistics.pvt.shipping.calculate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.logistics.pvt.shipping.calculate.$post>,
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
    const mutationDefaults = getPostApiLogisticsPvtShippingCalculateMutationOptions<
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
