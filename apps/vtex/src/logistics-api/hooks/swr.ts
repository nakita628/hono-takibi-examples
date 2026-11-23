import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesKey(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames',
    keyArgs,
  ] as const
}

export function useGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFrames<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames']['$get']
              >
            >
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
        ? getGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['logistics-capacity'].resources['carrier@{capacityType}@{shippingPolicyId}'][
            'time-frames'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFrames<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames']['$get']
              >
            >
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
        ? getGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['logistics-capacity'].resources['carrier@{capacityType}@{shippingPolicyId}'][
            'time-frames'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeKey(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames'][':windowDayF{windowStartTime}T{windowEndTime}']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames/:windowDayF{windowStartTime}T{windowEndTime}',
    keyArgs,
  ] as const
}

export function useGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames'][':windowDayF{windowStartTime}T{windowEndTime}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames'][':windowDayF{windowStartTime}T{windowEndTime}']['$get']
              >
            >
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
        ? getGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames'][':windowDayF{windowStartTime}T{windowEndTime}']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['logistics-capacity'].resources['carrier@{capacityType}@{shippingPolicyId}'][
            'time-frames'
          ][':windowDayF{windowStartTime}T{windowEndTime}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames'][':windowDayF{windowStartTime}T{windowEndTime}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames'][':windowDayF{windowStartTime}T{windowEndTime}']['$get']
              >
            >
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
        ? getGetApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames'][':windowDayF{windowStartTime}T{windowEndTime}']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['logistics-capacity'].resources['carrier@{capacityType}@{shippingPolicyId}'][
            'time-frames'
          ][':windowDayF{windowStartTime}T{windowEndTime}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/carriers/:carrierId/adddayofweekblocked',
    'POST',
  ] as const
}

export function usePostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblocked<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['adddayofweekblocked']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['adddayofweekblocked']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.carriers[':carrierId'].adddayofweekblocked.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedKey(
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

export function useGetApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblocked<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.carriers[':carrierId'].getdayofweekblocked.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblocked<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.carriers[':carrierId'].getdayofweekblocked.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/carriers/:carrierId/removedayofweekblocked',
    'POST',
  ] as const
}

export function usePostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblocked<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['removedayofweekblocked']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['removedayofweekblocked']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.carriers[
            ':carrierId'
          ].removedayofweekblocked.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationDocksKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/docks', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationDocks<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
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
        ? getGetApiLogisticsPvtConfigurationDocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.configuration.docks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationDocks<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
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
        ? getGetApiLogisticsPvtConfigurationDocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.configuration.docks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationDocksKey() {
  return ['api', '/api/logistics/pvt/configuration/docks', 'POST'] as const
}

export function usePostApiLogisticsPvtConfigurationDocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.docks.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtConfigurationDocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$post> },
      ) => parseResponse(client.api.logistics.pvt.configuration.docks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationDocksDockIdKey(
  args: InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationDocksDockId<TError = unknown>(
  args: InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
            >
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
        ? getGetApiLogisticsPvtConfigurationDocksDockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.docks[':dockId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationDocksDockId<TError = unknown>(
  args: InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
            >
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
        ? getGetApiLogisticsPvtConfigurationDocksDockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.docks[':dockId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiLogisticsPvtConfigurationDocksDockIdKey() {
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId', 'DELETE'] as const
}

export function useDeleteApiLogisticsPvtConfigurationDocksDockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLogisticsPvtConfigurationDocksDockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.docks[':dockId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationDocksDockIdActivationKey() {
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId/activation', 'POST'] as const
}

export function usePostApiLogisticsPvtConfigurationDocksDockIdActivation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['activation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtConfigurationDocksDockIdActivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['activation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.docks[':dockId'].activation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationDocksDockIdDeactivationKey() {
  return ['api', '/api/logistics/pvt/configuration/docks/:dockId/deactivation', 'POST'] as const
}

export function usePostApiLogisticsPvtConfigurationDocksDockIdDeactivation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['deactivation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtConfigurationDocksDockIdDeactivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['deactivation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.docks[':dockId'].deactivation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/freights/:carrierId/values/update',
    'POST',
  ] as const
}

export function usePostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.freights)[':carrierId']['values']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.freights)[':carrierId']['values']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.freights[':carrierId'].values.update.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesKey(
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

export function useGetApiLogisticsPvtConfigurationFreightsCarrierIdCepValues<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.freights[':carrierId'][':cep'].values.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationFreightsCarrierIdCepValues<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.freights[':carrierId'][':cep'].values.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationGeoshapeKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/geoshape', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationGeoshape<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
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
        ? getGetApiLogisticsPvtConfigurationGeoshapeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.configuration.geoshape.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationGeoshape<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
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
        ? getGetApiLogisticsPvtConfigurationGeoshapeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.configuration.geoshape.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiLogisticsPvtConfigurationGeoshapeKey() {
  return ['api', '/api/logistics/pvt/configuration/geoshape', 'PUT'] as const
}

export function usePutApiLogisticsPvtConfigurationGeoshape<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.geoshape.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLogisticsPvtConfigurationGeoshapeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$put> },
      ) => parseResponse(client.api.logistics.pvt.configuration.geoshape.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationGeoshapePolygonNameKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/geoshape/:polygonName', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationGeoshapePolygonName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationGeoshapePolygonNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.geoshape[':polygonName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationGeoshapePolygonName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationGeoshapePolygonNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.geoshape[':polygonName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiLogisticsPvtConfigurationGeoshapePolygonNameKey() {
  return ['api', '/api/logistics/pvt/configuration/geoshape/:polygonName', 'DELETE'] as const
}

export function useDeleteApiLogisticsPvtConfigurationGeoshapePolygonName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLogisticsPvtConfigurationGeoshapePolygonNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.geoshape[':polygonName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationHolidaysKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/holidays', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationHolidays<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
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
        ? getGetApiLogisticsPvtConfigurationHolidaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.configuration.holidays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationHolidays<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
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
        ? getGetApiLogisticsPvtConfigurationHolidaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.holidays.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.configuration.holidays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationHolidaysHolidayIdKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/holidays/:holidayId', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationHolidaysHolidayId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationHolidaysHolidayIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.holidays[':holidayId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationHolidaysHolidayId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationHolidaysHolidayIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.holidays[':holidayId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiLogisticsPvtConfigurationHolidaysHolidayIdKey() {
  return ['api', '/api/logistics/pvt/configuration/holidays/:holidayId', 'PUT'] as const
}

export function usePutApiLogisticsPvtConfigurationHolidaysHolidayId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLogisticsPvtConfigurationHolidaysHolidayIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.holidays[':holidayId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLogisticsPvtConfigurationHolidaysHolidayIdKey() {
  return ['api', '/api/logistics/pvt/configuration/holidays/:holidayId', 'DELETE'] as const
}

export function useDeleteApiLogisticsPvtConfigurationHolidaysHolidayId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLogisticsPvtConfigurationHolidaysHolidayIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.holidays[':holidayId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationPickuppointsKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/pickuppoints', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationPickuppoints<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
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
        ? getGetApiLogisticsPvtConfigurationPickuppointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationPickuppoints<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
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
        ? getGetApiLogisticsPvtConfigurationPickuppointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationPickuppointsSearchKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/_search', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationPickuppointsSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>
            >
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
        ? getGetApiLogisticsPvtConfigurationPickuppointsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints._search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationPickuppointsSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>
            >
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
        ? getGetApiLogisticsPvtConfigurationPickuppointsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints._search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationPickuppointsPickupPointIdKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/:pickupPointId', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationPickuppointsPickupPointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationPickuppointsPickupPointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationPickuppointsPickupPointId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationPickuppointsPickupPointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiLogisticsPvtConfigurationPickuppointsPickupPointIdKey() {
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/:pickupPointId', 'PUT'] as const
}

export function usePutApiLogisticsPvtConfigurationPickuppointsPickupPointId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLogisticsPvtConfigurationPickuppointsPickupPointIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdKey() {
  return ['api', '/api/logistics/pvt/configuration/pickuppoints/:pickupPointId', 'DELETE'] as const
}

export function useDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationWarehousesKey(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/warehouses', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationWarehouses<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
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
        ? getGetApiLogisticsPvtConfigurationWarehousesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.configuration.warehouses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationWarehouses<TError = unknown>(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
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
        ? getGetApiLogisticsPvtConfigurationWarehousesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.configuration.warehouses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationWarehousesKey() {
  return ['api', '/api/logistics/pvt/configuration/warehouses', 'POST'] as const
}

export function usePostApiLogisticsPvtConfigurationWarehouses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.configuration.warehouses.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtConfigurationWarehousesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$post>
        },
      ) =>
        parseResponse(client.api.logistics.pvt.configuration.warehouses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtConfigurationWarehousesWarehouseIdKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/configuration/warehouses/:warehouseId', keyArgs] as const
}

export function useGetApiLogisticsPvtConfigurationWarehousesWarehouseId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationWarehousesWarehouseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtConfigurationWarehousesWarehouseId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtConfigurationWarehousesWarehouseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiLogisticsPvtConfigurationWarehousesWarehouseIdKey() {
  return ['api', '/api/logistics/pvt/configuration/warehouses/:warehouseId', 'DELETE'] as const
}

export function useDeleteApiLogisticsPvtConfigurationWarehousesWarehouseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLogisticsPvtConfigurationWarehousesWarehouseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/warehouses/:warehouseId/activation',
    'POST',
  ] as const
}

export function usePostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['activation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['activation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.warehouses[':warehouseId'].activation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationKey() {
  return [
    'api',
    '/api/logistics/pvt/configuration/warehouses/:warehouseId/deactivation',
    'POST',
  ] as const
}

export function usePostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['deactivation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['deactivation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.configuration.warehouses[':warehouseId'].deactivation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedKey(
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

export function useGetApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatched<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':itemId'].warehouses[
            ':warehouseId'
          ].dispatched.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatched<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':itemId'].warehouses[
            ':warehouseId'
          ].dispatched.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtInventoryItemsSkuIdDocksDockIdKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/inventory/items/:skuId/docks/:dockId', keyArgs] as const
}

export function useGetApiLogisticsPvtInventoryItemsSkuIdDocksDockId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsSkuIdDocksDockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtInventoryItemsSkuIdDocksDockId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsSkuIdDocksDockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdKey(
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

export function useGetApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].warehouses[
            ':warehouseId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].warehouses[
            ':warehouseId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdKey(
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

export function useGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsKey(
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

export function useGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLots<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].warehouses[
            ':warehouseId'
          ].supplyLots.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLots<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].warehouses[
            ':warehouseId'
          ].supplyLots.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdKey() {
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots/:supplyLotId',
    'PUT',
  ] as const
}

export function usePutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].supplyLots[
            ':supplyLotId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferKey() {
  return [
    'api',
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots/:supplyLotId/transfer',
    'POST',
  ] as const
}

export function usePostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransfer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['transfer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['transfer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].supplyLots[
            ':supplyLotId'
          ].transfer.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtInventoryReservationsKey() {
  return ['api', '/api/logistics/pvt/inventory/reservations', 'POST'] as const
}

export function usePostApiLogisticsPvtInventoryReservations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.inventory.reservations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.logistics.pvt.inventory.reservations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtInventoryReservationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.logistics.pvt.inventory.reservations.$post> },
      ) => parseResponse(client.api.logistics.pvt.inventory.reservations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtInventoryReservationsReservationIdKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/inventory/reservations/:reservationId', keyArgs] as const
}

export function useGetApiLogisticsPvtInventoryReservationsReservationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryReservationsReservationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.reservations[':reservationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtInventoryReservationsReservationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryReservationsReservationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.reservations[':reservationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeKey() {
  return [
    'api',
    '/api/logistics/pvt/inventory/reservations/:reservationId/acknowledge',
    'POST',
  ] as const
}

export function usePostApiLogisticsPvtInventoryReservationsReservationIdAcknowledge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['acknowledge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['acknowledge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.inventory.reservations[':reservationId'].acknowledge.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtInventoryReservationsReservationIdCancelKey() {
  return ['api', '/api/logistics/pvt/inventory/reservations/:reservationId/cancel', 'POST'] as const
}

export function usePostApiLogisticsPvtInventoryReservationsReservationIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtInventoryReservationsReservationIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.inventory.reservations[':reservationId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtInventoryReservationsReservationIdConfirmKey() {
  return [
    'api',
    '/api/logistics/pvt/inventory/reservations/:reservationId/confirm',
    'POST',
  ] as const
}

export function usePostApiLogisticsPvtInventoryReservationsReservationIdConfirm<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['confirm']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtInventoryReservationsReservationIdConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['confirm']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.inventory.reservations[':reservationId'].confirm.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdKey(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/inventory/reservations/:warehouseId/:skuId', keyArgs] as const
}

export function useGetApiLogisticsPvtInventoryReservationsWarehouseIdSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.reservations[':warehouseId'][':skuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtInventoryReservationsWarehouseIdSkuId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt.inventory.reservations[':warehouseId'][':skuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogisticsPvtInventorySkusSkuIdKey(
  args: InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/inventory/skus/:skuId', keyArgs] as const
}

export function useGetApiLogisticsPvtInventorySkusSkuId<TError = unknown>(
  args: InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>>
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
        ? getGetApiLogisticsPvtInventorySkusSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.inventory.skus[':skuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtInventorySkusSkuId<TError = unknown>(
  args: InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>>
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
        ? getGetApiLogisticsPvtInventorySkusSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt.inventory.skus[':skuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdKey() {
  return ['api', '/api/logistics/pvt/inventory/skus/:skuId/warehouses/:warehouseId', 'PUT'] as const
}

export function usePutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.logistics.pvt.inventory.skus)[':skuId']['warehouses'][':warehouseId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt.inventory.skus)[':skuId']['warehouses'][':warehouseId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt.inventory.skus[':skuId'].warehouses[':warehouseId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtShippingPoliciesKey(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/shipping-policies', keyArgs] as const
}

export function useGetApiLogisticsPvtShippingPolicies<TError = unknown>(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
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
        ? getGetApiLogisticsPvtShippingPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt['shipping-policies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtShippingPolicies<TError = unknown>(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
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
        ? getGetApiLogisticsPvtShippingPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.logistics.pvt['shipping-policies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLogisticsPvtShippingPoliciesKey() {
  return ['api', '/api/logistics/pvt/shipping-policies', 'POST'] as const
}

export function usePostApiLogisticsPvtShippingPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtShippingPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>
        },
      ) => parseResponse(client.api.logistics.pvt['shipping-policies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogisticsPvtShippingPoliciesIdKey(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/logistics/pvt/shipping-policies/:id', keyArgs] as const
}

export function useGetApiLogisticsPvtShippingPoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
            >
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
        ? getGetApiLogisticsPvtShippingPoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt['shipping-policies'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogisticsPvtShippingPoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
            >
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
        ? getGetApiLogisticsPvtShippingPoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.logistics.pvt['shipping-policies'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiLogisticsPvtShippingPoliciesIdKey() {
  return ['api', '/api/logistics/pvt/shipping-policies/:id', 'PUT'] as const
}

export function usePutApiLogisticsPvtShippingPoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLogisticsPvtShippingPoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt['shipping-policies'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLogisticsPvtShippingPoliciesIdKey() {
  return ['api', '/api/logistics/pvt/shipping-policies/:id', 'DELETE'] as const
}

export function useDeleteApiLogisticsPvtShippingPoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLogisticsPvtShippingPoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.logistics.pvt)['shipping-policies'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.logistics.pvt['shipping-policies'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogisticsPvtShippingCalculateKey() {
  return ['api', '/api/logistics/pvt/shipping/calculate', 'POST'] as const
}

export function usePostApiLogisticsPvtShippingCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.logistics.pvt.shipping.calculate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.logistics.pvt.shipping.calculate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogisticsPvtShippingCalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.logistics.pvt.shipping.calculate.$post> },
      ) => parseResponse(client.api.logistics.pvt.shipping.calculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
