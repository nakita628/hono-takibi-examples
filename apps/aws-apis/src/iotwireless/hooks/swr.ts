import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDestinationsKey() {
  return ['destinations'] as const
}

export function getDeviceProfilesKey() {
  return ['device-profiles'] as const
}

export function getEventConfigurationsKey() {
  return ['event-configurations'] as const
}

export function getEventConfigurationsResourceTypeKey() {
  return ['event-configurations#resourceType'] as const
}

export function getEventConfigurationsResourceTypesKey() {
  return ['event-configurations-resource-types'] as const
}

export function getFuotaTasksKey() {
  return ['fuota-tasks'] as const
}

export function getLogLevelsKey() {
  return ['log-levels'] as const
}

export function getMulticastGroupsKey() {
  return ['multicast-groups'] as const
}

export function getNetworkAnalyzerConfigurationsKey() {
  return ['network-analyzer-configurations'] as const
}

export function getPartnerAccountsKey() {
  return ['partner-accounts'] as const
}

export function getPositionConfigurationsKey() {
  return ['position-configurations'] as const
}

export function getPositionEstimateKey() {
  return ['position-estimate'] as const
}

export function getPositionsKey() {
  return ['positions'] as const
}

export function getResourcePositionsKey() {
  return ['resource-positions'] as const
}

export function getServiceEndpointKey() {
  return ['service-endpoint'] as const
}

export function getServiceProfilesKey() {
  return ['service-profiles'] as const
}

export function getTagsResourceArnKey() {
  return ['tags#resourceArn'] as const
}

export function getTagsResourceArnTagKeysKey() {
  return ['tags#resourceArn&tagKeys'] as const
}

export function getWirelessDevicesKey() {
  return ['wireless-devices'] as const
}

export function getWirelessGatewayTaskDefinitionsKey() {
  return ['wireless-gateway-task-definitions'] as const
}

export function getWirelessGatewaysKey() {
  return ['wireless-gateways'] as const
}

export function getWirelessDeviceImportTaskKey() {
  return ['wireless_device_import_task'] as const
}

export function getWirelessDeviceImportTaskIdKey() {
  return ['wireless_device_import_task#id'] as const
}

export function getWirelessDeviceImportTasksKey() {
  return ['wireless_device_import_tasks'] as const
}

export function getWirelessSingleDeviceImportTaskKey() {
  return ['wireless_single_device_import_task'] as const
}

export function getGetPartnerAccountsKey(
  args: InferRequestType<(typeof client)['partner-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['partner-accounts', '/partner-accounts', keyArgs] as const
}

export function useGetPartnerAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['partner-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
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
        ? getGetPartnerAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['partner-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPartnerAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['partner-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
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
        ? getGetPartnerAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['partner-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPartnerAccountsKey() {
  return ['partner-accounts', '/partner-accounts', 'POST'] as const
}

export function usePostPartnerAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['partner-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['partner-accounts']['$post']> },
      ) => parseResponse(client['partner-accounts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFuotaTasksIdMulticastGroupKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id/multicast-group', 'PUT'] as const
}

export function usePutFuotaTasksIdMulticastGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFuotaTasksIdMulticastGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>
        },
      ) => parseResponse(client['fuota-tasks'][':Id']['multicast-group'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFuotaTasksIdWirelessDeviceKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id/wireless-device', 'PUT'] as const
}

export function usePutFuotaTasksIdWirelessDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFuotaTasksIdWirelessDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>
        },
      ) => parseResponse(client['fuota-tasks'][':Id']['wireless-device'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMulticastGroupsIdWirelessDeviceKey() {
  return ['multicast-groups', '/multicast-groups/:Id/wireless-device', 'PUT'] as const
}

export function usePutMulticastGroupsIdWirelessDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['multicast-groups'][':Id']['wireless-device']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['wireless-device']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMulticastGroupsIdWirelessDeviceKey()
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
            (typeof client)['multicast-groups'][':Id']['wireless-device']['$put']
          >
        },
      ) =>
        parseResponse(
          client['multicast-groups'][':Id']['wireless-device'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutWirelessDevicesIdThingKey() {
  return ['wireless-devices', '/wireless-devices/:Id/thing', 'PUT'] as const
}

export function usePutWirelessDevicesIdThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['thing']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWirelessDevicesIdThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$put']> },
      ) => parseResponse(client['wireless-devices'][':Id'].thing.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWirelessDevicesIdThingKey() {
  return ['wireless-devices', '/wireless-devices/:Id/thing', 'DELETE'] as const
}

export function useDeleteWirelessDevicesIdThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessDevicesIdThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>
        },
      ) => parseResponse(client['wireless-devices'][':Id'].thing.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessGatewaysIdCertificateKey(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Id/certificate', keyArgs] as const
}

export function useGetWirelessGatewaysIdCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
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
        ? getGetWirelessGatewaysIdCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-gateways'][':Id'].certificate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessGatewaysIdCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
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
        ? getGetWirelessGatewaysIdCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-gateways'][':Id'].certificate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWirelessGatewaysIdCertificateKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/certificate', 'PUT'] as const
}

export function usePutWirelessGatewaysIdCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWirelessGatewaysIdCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>
        },
      ) => parseResponse(client['wireless-gateways'][':Id'].certificate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWirelessGatewaysIdCertificateKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/certificate', 'DELETE'] as const
}

export function useDeleteWirelessGatewaysIdCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessGatewaysIdCertificateKey()
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
            (typeof client)['wireless-gateways'][':Id']['certificate']['$delete']
          >
        },
      ) =>
        parseResponse(client['wireless-gateways'][':Id'].certificate.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWirelessGatewaysIdThingKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/thing', 'PUT'] as const
}

export function usePutWirelessGatewaysIdThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWirelessGatewaysIdThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']> },
      ) => parseResponse(client['wireless-gateways'][':Id'].thing.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWirelessGatewaysIdThingKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/thing', 'DELETE'] as const
}

export function useDeleteWirelessGatewaysIdThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessGatewaysIdThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>
        },
      ) => parseResponse(client['wireless-gateways'][':Id'].thing.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMulticastGroupsIdSessionKey(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['multicast-groups', '/multicast-groups/:Id/session', keyArgs] as const
}

export function useGetMulticastGroupsIdSession<TError = unknown>(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
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
        ? getGetMulticastGroupsIdSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['multicast-groups'][':Id'].session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMulticastGroupsIdSession<TError = unknown>(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
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
        ? getGetMulticastGroupsIdSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['multicast-groups'][':Id'].session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMulticastGroupsIdSessionKey() {
  return ['multicast-groups', '/multicast-groups/:Id/session', 'PUT'] as const
}

export function usePutMulticastGroupsIdSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMulticastGroupsIdSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$put']> },
      ) => parseResponse(client['multicast-groups'][':Id'].session.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMulticastGroupsIdSessionKey() {
  return ['multicast-groups', '/multicast-groups/:Id/session', 'DELETE'] as const
}

export function useDeleteMulticastGroupsIdSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMulticastGroupsIdSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>
        },
      ) => parseResponse(client['multicast-groups'][':Id'].session.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDestinationsKey(args: InferRequestType<typeof client.destinations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['destinations', '/destinations', keyArgs] as const
}

export function useGetDestinations<TError = unknown>(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDestinationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestinations<TError = unknown>(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDestinationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDestinationsKey() {
  return ['destinations', '/destinations', 'POST'] as const
}

export function usePostDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.destinations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestinationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.destinations.$post> }) =>
        parseResponse(client.destinations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeviceProfilesKey(
  args: InferRequestType<(typeof client)['device-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['device-profiles', '/device-profiles', keyArgs] as const
}

export function useGetDeviceProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['device-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDeviceProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['device-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['device-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDeviceProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['device-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeviceProfilesKey() {
  return ['device-profiles', '/device-profiles', 'POST'] as const
}

export function usePostDeviceProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['device-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['device-profiles']['$post']> },
      ) => parseResponse(client['device-profiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFuotaTasksKey(
  args: InferRequestType<(typeof client)['fuota-tasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fuota-tasks', '/fuota-tasks', keyArgs] as const
}

export function useGetFuotaTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['fuota-tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFuotaTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['fuota-tasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuotaTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['fuota-tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFuotaTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['fuota-tasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFuotaTasksKey() {
  return ['fuota-tasks', '/fuota-tasks', 'POST'] as const
}

export function usePostFuotaTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['fuota-tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFuotaTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['fuota-tasks']['$post']> }) =>
        parseResponse(client['fuota-tasks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMulticastGroupsKey(
  args: InferRequestType<(typeof client)['multicast-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['multicast-groups', '/multicast-groups', keyArgs] as const
}

export function useGetMulticastGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['multicast-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
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
        ? getGetMulticastGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['multicast-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMulticastGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['multicast-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
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
        ? getGetMulticastGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['multicast-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMulticastGroupsKey() {
  return ['multicast-groups', '/multicast-groups', 'POST'] as const
}

export function usePostMulticastGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMulticastGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['multicast-groups']['$post']> },
      ) => parseResponse(client['multicast-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkAnalyzerConfigurationsKey(
  args: InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['network-analyzer-configurations', '/network-analyzer-configurations', keyArgs] as const
}

export function useGetNetworkAnalyzerConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
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
        ? getGetNetworkAnalyzerConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['network-analyzer-configurations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkAnalyzerConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
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
        ? getGetNetworkAnalyzerConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['network-analyzer-configurations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkAnalyzerConfigurationsKey() {
  return ['network-analyzer-configurations', '/network-analyzer-configurations', 'POST'] as const
}

export function usePostNetworkAnalyzerConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-analyzer-configurations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkAnalyzerConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['network-analyzer-configurations']['$post']> },
      ) => parseResponse(client['network-analyzer-configurations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServiceProfilesKey(
  args: InferRequestType<(typeof client)['service-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service-profiles', '/service-profiles', keyArgs] as const
}

export function useGetServiceProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['service-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
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
        ? getGetServiceProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['service-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
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
        ? getGetServiceProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServiceProfilesKey() {
  return ['service-profiles', '/service-profiles', 'POST'] as const
}

export function usePostServiceProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['service-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServiceProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['service-profiles']['$post']> },
      ) => parseResponse(client['service-profiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessDevicesKey(
  args: InferRequestType<(typeof client)['wireless-devices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-devices', '/wireless-devices', keyArgs] as const
}

export function useGetWirelessDevices<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
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
        ? getGetWirelessDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless-devices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDevices<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
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
        ? getGetWirelessDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless-devices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWirelessDevicesKey() {
  return ['wireless-devices', '/wireless-devices', 'POST'] as const
}

export function usePostWirelessDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['wireless-devices']['$post']> },
      ) => parseResponse(client['wireless-devices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessGatewaysKey(
  args: InferRequestType<(typeof client)['wireless-gateways']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways', keyArgs] as const
}

export function useGetWirelessGateways<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
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
        ? getGetWirelessGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless-gateways'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessGateways<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
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
        ? getGetWirelessGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless-gateways'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWirelessGatewaysKey() {
  return ['wireless-gateways', '/wireless-gateways', 'POST'] as const
}

export function usePostWirelessGateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessGatewaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['wireless-gateways']['$post']> },
      ) => parseResponse(client['wireless-gateways'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessGatewaysIdTasksKey(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Id/tasks', keyArgs] as const
}

export function useGetWirelessGatewaysIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
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
        ? getGetWirelessGatewaysIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless-gateways'][':Id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessGatewaysIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
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
        ? getGetWirelessGatewaysIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless-gateways'][':Id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWirelessGatewaysIdTasksKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/tasks', 'POST'] as const
}

export function usePostWirelessGatewaysIdTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessGatewaysIdTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']> },
      ) => parseResponse(client['wireless-gateways'][':Id'].tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWirelessGatewaysIdTasksKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/tasks', 'DELETE'] as const
}

export function useDeleteWirelessGatewaysIdTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessGatewaysIdTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>
        },
      ) => parseResponse(client['wireless-gateways'][':Id'].tasks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessGatewayTaskDefinitionsKey(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions',
    keyArgs,
  ] as const
}

export function useGetWirelessGatewayTaskDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
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
        ? getGetWirelessGatewayTaskDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-gateway-task-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessGatewayTaskDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
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
        ? getGetWirelessGatewayTaskDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-gateway-task-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWirelessGatewayTaskDefinitionsKey() {
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions',
    'POST',
  ] as const
}

export function usePostWirelessGatewayTaskDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessGatewayTaskDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$post']> },
      ) => parseResponse(client['wireless-gateway-task-definitions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDestinationsNameKey(
  args: InferRequestType<(typeof client.destinations)[':Name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['destinations', '/destinations/:Name', keyArgs] as const
}

export function useGetDestinationsName<TError = unknown>(
  args: InferRequestType<(typeof client.destinations)[':Name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
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
        ? getGetDestinationsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations[':Name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestinationsName<TError = unknown>(
  args: InferRequestType<(typeof client.destinations)[':Name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
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
        ? getGetDestinationsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations[':Name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDestinationsNameKey() {
  return ['destinations', '/destinations/:Name', 'DELETE'] as const
}

export function useDeleteDestinationsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.destinations)[':Name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':Name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDestinationsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.destinations)[':Name']['$delete']> },
      ) => parseResponse(client.destinations[':Name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDestinationsNameKey() {
  return ['destinations', '/destinations/:Name', 'PATCH'] as const
}

export function usePatchDestinationsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':Name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDestinationsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.destinations)[':Name']['$patch']> },
      ) => parseResponse(client.destinations[':Name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeviceProfilesIdKey(
  args: InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['device-profiles', '/device-profiles/:Id', keyArgs] as const
}

export function useGetDeviceProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>
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
        ? getGetDeviceProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['device-profiles'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>
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
        ? getGetDeviceProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['device-profiles'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDeviceProfilesIdKey() {
  return ['device-profiles', '/device-profiles/:Id', 'DELETE'] as const
}

export function useDeleteDeviceProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['device-profiles'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeviceProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['device-profiles'][':Id']['$delete']> },
      ) => parseResponse(client['device-profiles'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFuotaTasksIdKey(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fuota-tasks', '/fuota-tasks/:Id', keyArgs] as const
}

export function useGetFuotaTasksId<TError = unknown>(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFuotaTasksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['fuota-tasks'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuotaTasksId<TError = unknown>(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFuotaTasksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['fuota-tasks'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFuotaTasksIdKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id', 'PUT'] as const
}

export function usePutFuotaTasksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFuotaTasksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$put']> },
      ) => parseResponse(client['fuota-tasks'][':Id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFuotaTasksIdKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id', 'DELETE'] as const
}

export function useDeleteFuotaTasksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFuotaTasksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$delete']> },
      ) => parseResponse(client['fuota-tasks'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFuotaTasksIdKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id', 'PATCH'] as const
}

export function usePatchFuotaTasksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFuotaTasksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$patch']> },
      ) => parseResponse(client['fuota-tasks'][':Id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMulticastGroupsIdKey(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['multicast-groups', '/multicast-groups/:Id', keyArgs] as const
}

export function useGetMulticastGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
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
        ? getGetMulticastGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['multicast-groups'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMulticastGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
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
        ? getGetMulticastGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['multicast-groups'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMulticastGroupsIdKey() {
  return ['multicast-groups', '/multicast-groups/:Id', 'DELETE'] as const
}

export function useDeleteMulticastGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMulticastGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['multicast-groups'][':Id']['$delete']> },
      ) => parseResponse(client['multicast-groups'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMulticastGroupsIdKey() {
  return ['multicast-groups', '/multicast-groups/:Id', 'PATCH'] as const
}

export function usePatchMulticastGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMulticastGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['multicast-groups'][':Id']['$patch']> },
      ) => parseResponse(client['multicast-groups'][':Id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkAnalyzerConfigurationsConfigurationNameKey(
  args: InferRequestType<
    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'network-analyzer-configurations',
    '/network-analyzer-configurations/:ConfigurationName',
    keyArgs,
  ] as const
}

export function useGetNetworkAnalyzerConfigurationsConfigurationName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
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
        ? getGetNetworkAnalyzerConfigurationsConfigurationNameKey(args)
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
                (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
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
          client['network-analyzer-configurations'][':ConfigurationName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkAnalyzerConfigurationsConfigurationName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
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
        ? getGetNetworkAnalyzerConfigurationsConfigurationNameKey(args)
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
                (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
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
          client['network-analyzer-configurations'][':ConfigurationName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteNetworkAnalyzerConfigurationsConfigurationNameKey() {
  return [
    'network-analyzer-configurations',
    '/network-analyzer-configurations/:ConfigurationName',
    'DELETE',
  ] as const
}

export function useDeleteNetworkAnalyzerConfigurationsConfigurationName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkAnalyzerConfigurationsConfigurationNameKey()
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
            (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['network-analyzer-configurations'][':ConfigurationName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchNetworkAnalyzerConfigurationsConfigurationNameKey() {
  return [
    'network-analyzer-configurations',
    '/network-analyzer-configurations/:ConfigurationName',
    'PATCH',
  ] as const
}

export function usePatchNetworkAnalyzerConfigurationsConfigurationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNetworkAnalyzerConfigurationsConfigurationNameKey()
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
            (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['network-analyzer-configurations'][':ConfigurationName'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWirelessDevicesIdDataMessageIdKey() {
  return ['wireless-devices', '/wireless-devices/:Id/data#messageId', 'DELETE'] as const
}

export function useDeleteWirelessDevicesIdDataMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-devices'][':Id']['data#messageId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['data#messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessDevicesIdDataMessageIdKey()
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
            (typeof client)['wireless-devices'][':Id']['data#messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['wireless-devices'][':Id']['data#messageId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServiceProfilesIdKey(
  args: InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service-profiles', '/service-profiles/:Id', keyArgs] as const
}

export function useGetServiceProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
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
        ? getGetServiceProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-profiles'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
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
        ? getGetServiceProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-profiles'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteServiceProfilesIdKey() {
  return ['service-profiles', '/service-profiles/:Id', 'DELETE'] as const
}

export function useDeleteServiceProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['service-profiles'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServiceProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['service-profiles'][':Id']['$delete']> },
      ) => parseResponse(client['service-profiles'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWirelessDevicesIdKey() {
  return ['wireless-devices', '/wireless-devices/:Id', 'DELETE'] as const
}

export function useDeleteWirelessDevicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessDevicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['wireless-devices'][':Id']['$delete']> },
      ) => parseResponse(client['wireless-devices'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWirelessDevicesIdKey() {
  return ['wireless-devices', '/wireless-devices/:Id', 'PATCH'] as const
}

export function usePatchWirelessDevicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWirelessDevicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['wireless-devices'][':Id']['$patch']> },
      ) => parseResponse(client['wireless-devices'][':Id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessDeviceImportTaskIdKey(
  args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless_device_import_task', '/wireless_device_import_task/:Id', keyArgs] as const
}

export function useGetWirelessDeviceImportTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
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
        ? getGetWirelessDeviceImportTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wireless_device_import_task[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDeviceImportTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
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
        ? getGetWirelessDeviceImportTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wireless_device_import_task[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWirelessDeviceImportTaskIdKey() {
  return ['wireless_device_import_task', '/wireless_device_import_task/:Id', 'DELETE'] as const
}

export function useDeleteWirelessDeviceImportTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessDeviceImportTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$delete']> },
      ) => parseResponse(client.wireless_device_import_task[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWirelessDeviceImportTaskIdKey() {
  return ['wireless_device_import_task', '/wireless_device_import_task/:Id', 'PATCH'] as const
}

export function usePatchWirelessDeviceImportTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWirelessDeviceImportTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$patch']> },
      ) => parseResponse(client.wireless_device_import_task[':Id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWirelessGatewaysIdKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id', 'DELETE'] as const
}

export function useDeleteWirelessGatewaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessGatewaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['wireless-gateways'][':Id']['$delete']> },
      ) => parseResponse(client['wireless-gateways'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWirelessGatewaysIdKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id', 'PATCH'] as const
}

export function usePatchWirelessGatewaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWirelessGatewaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['wireless-gateways'][':Id']['$patch']> },
      ) => parseResponse(client['wireless-gateways'][':Id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessGatewayTaskDefinitionsIdKey(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions/:Id',
    keyArgs,
  ] as const
}

export function useGetWirelessGatewayTaskDefinitionsId<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
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
        ? getGetWirelessGatewayTaskDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-gateway-task-definitions'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessGatewayTaskDefinitionsId<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
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
        ? getGetWirelessGatewayTaskDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-gateway-task-definitions'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWirelessGatewayTaskDefinitionsIdKey() {
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions/:Id',
    'DELETE',
  ] as const
}

export function useDeleteWirelessGatewayTaskDefinitionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessGatewayTaskDefinitionsIdKey()
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
            (typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['wireless-gateway-task-definitions'][':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWirelessDevicesIdentifierDeregisterKey() {
  return ['wireless-devices', '/wireless-devices/:Identifier/deregister', 'PATCH'] as const
}

export function usePatchWirelessDevicesIdentifierDeregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['wireless-devices'][':Identifier']['deregister']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices'][':Identifier']['deregister']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWirelessDevicesIdentifierDeregisterKey()
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
            (typeof client)['wireless-devices'][':Identifier']['deregister']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['wireless-devices'][':Identifier'].deregister.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPartnerAccountsPartnerAccountIdPartnerTypeKey(
  args: InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['partner-accounts', '/partner-accounts/:PartnerAccountId#partnerType', keyArgs] as const
}

export function useGetPartnerAccountsPartnerAccountIdPartnerType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
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
        ? getGetPartnerAccountsPartnerAccountIdPartnerTypeKey(args)
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
                (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
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
          client['partner-accounts'][':PartnerAccountId#partnerType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPartnerAccountsPartnerAccountIdPartnerType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
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
        ? getGetPartnerAccountsPartnerAccountIdPartnerTypeKey(args)
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
                (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
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
          client['partner-accounts'][':PartnerAccountId#partnerType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeletePartnerAccountsPartnerAccountIdPartnerTypeKey() {
  return ['partner-accounts', '/partner-accounts/:PartnerAccountId#partnerType', 'DELETE'] as const
}

export function useDeletePartnerAccountsPartnerAccountIdPartnerType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePartnerAccountsPartnerAccountIdPartnerTypeKey()
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
            (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['partner-accounts'][':PartnerAccountId#partnerType'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPartnerAccountsPartnerAccountIdPartnerTypeKey() {
  return ['partner-accounts', '/partner-accounts/:PartnerAccountId#partnerType', 'PATCH'] as const
}

export function usePatchPartnerAccountsPartnerAccountIdPartnerType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPartnerAccountsPartnerAccountIdPartnerTypeKey()
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
            (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['partner-accounts'][':PartnerAccountId#partnerType'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFuotaTasksIdMulticastGroupsMulticastGroupIdKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id/multicast-groups/:MulticastGroupId', 'DELETE'] as const
}

export function useDeleteFuotaTasksIdMulticastGroupsMulticastGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFuotaTasksIdMulticastGroupsMulticastGroupIdKey()
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
            (typeof client)['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFuotaTasksIdWirelessDevicesWirelessDeviceIdKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id/wireless-devices/:WirelessDeviceId', 'DELETE'] as const
}

export function useDeleteFuotaTasksIdWirelessDevicesWirelessDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFuotaTasksIdWirelessDevicesWirelessDeviceIdKey()
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
            (typeof client)['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdKey() {
  return [
    'multicast-groups',
    '/multicast-groups/:Id/wireless-devices/:WirelessDeviceId',
    'DELETE',
  ] as const
}

export function useDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdKey()
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
            (typeof client)['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventConfigurationsResourceTypesKey(
  args: InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event-configurations-resource-types',
    '/event-configurations-resource-types',
    keyArgs,
  ] as const
}

export function useGetEventConfigurationsResourceTypes<TError = unknown>(
  args: InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
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
        ? getGetEventConfigurationsResourceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['event-configurations-resource-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventConfigurationsResourceTypes<TError = unknown>(
  args: InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
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
        ? getGetEventConfigurationsResourceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['event-configurations-resource-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchEventConfigurationsResourceTypesKey() {
  return [
    'event-configurations-resource-types',
    '/event-configurations-resource-types',
    'PATCH',
  ] as const
}

export function usePatchEventConfigurationsResourceTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['event-configurations-resource-types']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEventConfigurationsResourceTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['event-configurations-resource-types']['$patch']>
        },
      ) => parseResponse(client['event-configurations-resource-types'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogLevelsKey(args: InferRequestType<(typeof client)['log-levels']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['log-levels', '/log-levels', keyArgs] as const
}

export function useGetLogLevels<TError = unknown>(
  args: InferRequestType<(typeof client)['log-levels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogLevelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['log-levels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogLevels<TError = unknown>(
  args: InferRequestType<(typeof client)['log-levels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogLevelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['log-levels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLogLevelsKey() {
  return ['log-levels', '/log-levels', 'POST'] as const
}

export function usePostLogLevels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['log-levels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogLevelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['log-levels']['$post']> }) =>
        parseResponse(client['log-levels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLogLevelsKey() {
  return ['log-levels', '/log-levels', 'DELETE'] as const
}

export function useDeleteLogLevels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['log-levels']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLogLevelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['log-levels']['$delete']> },
      ) => parseResponse(client['log-levels'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPositionsResourceIdentifierResourceTypeKey(
  args: InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['positions', '/positions/:ResourceIdentifier#resourceType', keyArgs] as const
}

export function useGetPositionsResourceIdentifierResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
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
        ? getGetPositionsResourceIdentifierResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.positions[':ResourceIdentifier#resourceType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPositionsResourceIdentifierResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
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
        ? getGetPositionsResourceIdentifierResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.positions[':ResourceIdentifier#resourceType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchPositionsResourceIdentifierResourceTypeKey() {
  return ['positions', '/positions/:ResourceIdentifier#resourceType', 'PATCH'] as const
}

export function usePatchPositionsResourceIdentifierResourceType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPositionsResourceIdentifierResourceTypeKey()
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
            (typeof client.positions)[':ResourceIdentifier#resourceType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.positions[':ResourceIdentifier#resourceType'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPositionConfigurationsResourceIdentifierResourceTypeKey(
  args: InferRequestType<
    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'position-configurations',
    '/position-configurations/:ResourceIdentifier#resourceType',
    keyArgs,
  ] as const
}

export function useGetPositionConfigurationsResourceIdentifierResourceType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
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
        ? getGetPositionConfigurationsResourceIdentifierResourceTypeKey(args)
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
                (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
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
          client['position-configurations'][':ResourceIdentifier#resourceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPositionConfigurationsResourceIdentifierResourceType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
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
        ? getGetPositionConfigurationsResourceIdentifierResourceTypeKey(args)
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
                (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
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
          client['position-configurations'][':ResourceIdentifier#resourceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPositionConfigurationsResourceIdentifierResourceTypeKey() {
  return [
    'position-configurations',
    '/position-configurations/:ResourceIdentifier#resourceType',
    'PUT',
  ] as const
}

export function usePutPositionConfigurationsResourceIdentifierResourceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPositionConfigurationsResourceIdentifierResourceTypeKey()
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
            (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$put']
          >
        },
      ) =>
        parseResponse(
          client['position-configurations'][':ResourceIdentifier#resourceType'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPositionEstimateKey() {
  return ['position-estimate', '/position-estimate', 'POST'] as const
}

export function usePostPositionEstimate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['position-estimate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['position-estimate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPositionEstimateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['position-estimate']['$post']> },
      ) => parseResponse(client['position-estimate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventConfigurationsIdentifierIdentifierTypeKey(
  args: InferRequestType<
    (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event-configurations',
    '/event-configurations/:Identifier#identifierType',
    keyArgs,
  ] as const
}

export function useGetEventConfigurationsIdentifierIdentifierType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
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
        ? getGetEventConfigurationsIdentifierIdentifierTypeKey(args)
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
                (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
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
          client['event-configurations'][':Identifier#identifierType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventConfigurationsIdentifierIdentifierType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
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
        ? getGetEventConfigurationsIdentifierIdentifierTypeKey(args)
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
                (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
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
          client['event-configurations'][':Identifier#identifierType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchEventConfigurationsIdentifierIdentifierTypeKey() {
  return [
    'event-configurations',
    '/event-configurations/:Identifier#identifierType',
    'PATCH',
  ] as const
}

export function usePatchEventConfigurationsIdentifierIdentifierType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['event-configurations'][':Identifier#identifierType']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['event-configurations'][':Identifier#identifierType']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEventConfigurationsIdentifierIdentifierTypeKey()
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
            (typeof client)['event-configurations'][':Identifier#identifierType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['event-configurations'][':Identifier#identifierType'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLogLevelsResourceIdentifierResourceTypeKey(
  args: InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['log-levels', '/log-levels/:ResourceIdentifier#resourceType', keyArgs] as const
}

export function useGetLogLevelsResourceIdentifierResourceType<TError = unknown>(
  args: InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
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
        ? getGetLogLevelsResourceIdentifierResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['log-levels'][':ResourceIdentifier#resourceType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogLevelsResourceIdentifierResourceType<TError = unknown>(
  args: InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
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
        ? getGetLogLevelsResourceIdentifierResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['log-levels'][':ResourceIdentifier#resourceType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLogLevelsResourceIdentifierResourceTypeKey() {
  return ['log-levels', '/log-levels/:ResourceIdentifier#resourceType', 'PUT'] as const
}

export function usePutLogLevelsResourceIdentifierResourceType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLogLevelsResourceIdentifierResourceTypeKey()
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
            (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']
          >
        },
      ) =>
        parseResponse(
          client['log-levels'][':ResourceIdentifier#resourceType'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLogLevelsResourceIdentifierResourceTypeKey() {
  return ['log-levels', '/log-levels/:ResourceIdentifier#resourceType', 'DELETE'] as const
}

export function useDeleteLogLevelsResourceIdentifierResourceType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLogLevelsResourceIdentifierResourceTypeKey()
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
            (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['log-levels'][':ResourceIdentifier#resourceType'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetResourcePositionsResourceIdentifierResourceTypeKey(
  args: InferRequestType<
    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'resource-positions',
    '/resource-positions/:ResourceIdentifier#resourceType',
    keyArgs,
  ] as const
}

export function useGetResourcePositionsResourceIdentifierResourceType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
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
        ? getGetResourcePositionsResourceIdentifierResourceTypeKey(args)
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
                (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
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
          client['resource-positions'][':ResourceIdentifier#resourceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcePositionsResourceIdentifierResourceType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
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
        ? getGetResourcePositionsResourceIdentifierResourceTypeKey(args)
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
                (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
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
          client['resource-positions'][':ResourceIdentifier#resourceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchResourcePositionsResourceIdentifierResourceTypeKey() {
  return [
    'resource-positions',
    '/resource-positions/:ResourceIdentifier#resourceType',
    'PATCH',
  ] as const
}

export function usePatchResourcePositionsResourceIdentifierResourceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchResourcePositionsResourceIdentifierResourceTypeKey()
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
            (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['resource-positions'][':ResourceIdentifier#resourceType'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServiceEndpointKey(
  args: InferRequestType<(typeof client)['service-endpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service-endpoint', '/service-endpoint', keyArgs] as const
}

export function useGetServiceEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['service-endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
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
        ? getGetServiceEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-endpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['service-endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
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
        ? getGetServiceEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-endpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWirelessDevicesIdentifierIdentifierTypeKey(
  args: InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-devices', '/wireless-devices/:Identifier#identifierType', keyArgs] as const
}

export function useGetWirelessDevicesIdentifierIdentifierType<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
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
        ? getGetWirelessDevicesIdentifierIdentifierTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['wireless-devices'][':Identifier#identifierType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDevicesIdentifierIdentifierType<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
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
        ? getGetWirelessDevicesIdentifierIdentifierTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['wireless-devices'][':Identifier#identifierType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWirelessDevicesIdStatisticsKey(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-devices', '/wireless-devices/:Id/statistics', keyArgs] as const
}

export function useGetWirelessDevicesIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
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
        ? getGetWirelessDevicesIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-devices'][':Id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDevicesIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
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
        ? getGetWirelessDevicesIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-devices'][':Id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWirelessGatewaysIdentifierIdentifierTypeKey(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Identifier#identifierType', keyArgs] as const
}

export function useGetWirelessGatewaysIdentifierIdentifierType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
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
        ? getGetWirelessGatewaysIdentifierIdentifierTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['wireless-gateways'][':Identifier#identifierType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessGatewaysIdentifierIdentifierType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
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
        ? getGetWirelessGatewaysIdentifierIdentifierTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['wireless-gateways'][':Identifier#identifierType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWirelessGatewaysIdFirmwareInformationKey(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Id/firmware-information', keyArgs] as const
}

export function useGetWirelessGatewaysIdFirmwareInformation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
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
        ? getGetWirelessGatewaysIdFirmwareInformationKey(args)
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
                (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
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
          client['wireless-gateways'][':Id']['firmware-information'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessGatewaysIdFirmwareInformation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
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
        ? getGetWirelessGatewaysIdFirmwareInformationKey(args)
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
                (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
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
          client['wireless-gateways'][':Id']['firmware-information'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWirelessGatewaysIdStatisticsKey(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Id/statistics', keyArgs] as const
}

export function useGetWirelessGatewaysIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
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
        ? getGetWirelessGatewaysIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-gateways'][':Id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessGatewaysIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
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
        ? getGetWirelessGatewaysIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['wireless-gateways'][':Id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWirelessDeviceImportTaskId2Key(
  args: InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless_device_import_task#id', '/wireless_device_import_task#id', keyArgs] as const
}

export function useGetWirelessDeviceImportTaskId2<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
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
        ? getGetWirelessDeviceImportTaskId2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless_device_import_task#id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDeviceImportTaskId2<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
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
        ? getGetWirelessDeviceImportTaskId2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless_device_import_task#id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventConfigurationsResourceTypeKey(
  args: InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event-configurations#resourceType',
    '/event-configurations#resourceType',
    keyArgs,
  ] as const
}

export function useGetEventConfigurationsResourceType<TError = unknown>(
  args: InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
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
        ? getGetEventConfigurationsResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['event-configurations#resourceType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventConfigurationsResourceType<TError = unknown>(
  args: InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
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
        ? getGetEventConfigurationsResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['event-configurations#resourceType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuotaTasksIdMulticastGroupsKey(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fuota-tasks', '/fuota-tasks/:Id/multicast-groups', keyArgs] as const
}

export function useGetFuotaTasksIdMulticastGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
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
        ? getGetFuotaTasksIdMulticastGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['fuota-tasks'][':Id']['multicast-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuotaTasksIdMulticastGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
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
        ? getGetFuotaTasksIdMulticastGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['fuota-tasks'][':Id']['multicast-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPositionConfigurationsKey(
  args: InferRequestType<(typeof client)['position-configurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['position-configurations', '/position-configurations', keyArgs] as const
}

export function useGetPositionConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client)['position-configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
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
        ? getGetPositionConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['position-configurations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPositionConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client)['position-configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
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
        ? getGetPositionConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['position-configurations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWirelessDevicesIdDataKey(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-devices', '/wireless-devices/:Id/data', keyArgs] as const
}

export function useGetWirelessDevicesIdData<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
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
        ? getGetWirelessDevicesIdDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless-devices'][':Id'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDevicesIdData<TError = unknown>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
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
        ? getGetWirelessDevicesIdDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wireless-devices'][':Id'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWirelessDevicesIdDataKey() {
  return ['wireless-devices', '/wireless-devices/:Id/data', 'POST'] as const
}

export function usePostWirelessDevicesIdData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessDevicesIdDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$post']> },
      ) => parseResponse(client['wireless-devices'][':Id'].data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags#resourceArn', '/tags#resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tags#resourceArn']['$post']> },
      ) => parseResponse(client['tags#resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessDeviceImportTasksKey(
  args: InferRequestType<typeof client.wireless_device_import_tasks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless_device_import_tasks', '/wireless_device_import_tasks', keyArgs] as const
}

export function useGetWirelessDeviceImportTasks<TError = unknown>(
  args: InferRequestType<typeof client.wireless_device_import_tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
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
        ? getGetWirelessDeviceImportTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wireless_device_import_tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDeviceImportTasks<TError = unknown>(
  args: InferRequestType<typeof client.wireless_device_import_tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
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
        ? getGetWirelessDeviceImportTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wireless_device_import_tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMulticastGroupsIdDataKey() {
  return ['multicast-groups', '/multicast-groups/:Id/data', 'POST'] as const
}

export function usePostMulticastGroupsIdData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['data']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['data']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMulticastGroupsIdDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['multicast-groups'][':Id']['data']['$post']> },
      ) => parseResponse(client['multicast-groups'][':Id'].data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMulticastGroupsIdBulkKey() {
  return ['multicast-groups', '/multicast-groups/:Id/bulk', 'POST'] as const
}

export function usePostMulticastGroupsIdBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMulticastGroupsIdBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']> },
      ) => parseResponse(client['multicast-groups'][':Id'].bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMulticastGroupsIdBulkKey() {
  return ['multicast-groups', '/multicast-groups/:Id/bulk', 'PATCH'] as const
}

export function usePatchMulticastGroupsIdBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMulticastGroupsIdBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']> },
      ) => parseResponse(client['multicast-groups'][':Id'].bulk.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWirelessSingleDeviceImportTaskKey() {
  return [
    'wireless_single_device_import_task',
    '/wireless_single_device_import_task',
    'POST',
  ] as const
}

export function usePostWirelessSingleDeviceImportTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wireless_single_device_import_task.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wireless_single_device_import_task.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessSingleDeviceImportTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wireless_single_device_import_task.$post> },
      ) => parseResponse(client.wireless_single_device_import_task.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWirelessDeviceImportTaskKey() {
  return ['wireless_device_import_task', '/wireless_device_import_task', 'POST'] as const
}

export function usePostWirelessDeviceImportTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_task.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wireless_device_import_task.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessDeviceImportTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wireless_device_import_task.$post> },
      ) => parseResponse(client.wireless_device_import_task.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWirelessDevicesIdTestKey() {
  return ['wireless-devices', '/wireless-devices/:Id/test', 'POST'] as const
}

export function usePostWirelessDevicesIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessDevicesIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['wireless-devices'][':Id']['test']['$post']> },
      ) => parseResponse(client['wireless-devices'][':Id'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags#resourceArn&tagKeys', '/tags#resourceArn&tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']> },
      ) => parseResponse(client['tags#resourceArn&tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
