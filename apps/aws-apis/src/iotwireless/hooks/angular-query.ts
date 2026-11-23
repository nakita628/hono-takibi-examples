import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPartnerAccountsQueryKey(
  args: InferRequestType<(typeof client)['partner-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['partner-accounts', '/partner-accounts', keyArgs] as const
}

export function getPartnerAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['partner-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartnerAccountsQueryKey>
  >({
    queryKey: getPartnerAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['partner-accounts'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPartnerAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['partner-accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPartnerAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPartnerAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPartnerAccountsMutationKey() {
  return ['partner-accounts', '/partner-accounts', 'POST'] as const
}

export function getPostPartnerAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['partner-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerAccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['partner-accounts']['$post']>) {
      return parseResponse(client['partner-accounts'].$post(args, options))
    },
  })
}

export function injectPostPartnerAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['partner-accounts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPartnerAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutFuotaTasksIdMulticastGroupMutationKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id/multicast-group', 'PUT'] as const
}

export function getPutFuotaTasksIdMulticastGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFuotaTasksIdMulticastGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>,
    ) {
      return parseResponse(client['fuota-tasks'][':Id']['multicast-group'].$put(args, options))
    },
  })
}

export function injectPutFuotaTasksIdMulticastGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFuotaTasksIdMulticastGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutFuotaTasksIdWirelessDeviceMutationKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id/wireless-device', 'PUT'] as const
}

export function getPutFuotaTasksIdWirelessDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFuotaTasksIdWirelessDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>,
    ) {
      return parseResponse(client['fuota-tasks'][':Id']['wireless-device'].$put(args, options))
    },
  })
}

export function injectPutFuotaTasksIdWirelessDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFuotaTasksIdWirelessDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutMulticastGroupsIdWirelessDeviceMutationKey() {
  return ['multicast-groups', '/multicast-groups/:Id/wireless-device', 'PUT'] as const
}

export function getPutMulticastGroupsIdWirelessDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['multicast-groups'][':Id']['wireless-device']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMulticastGroupsIdWirelessDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multicast-groups'][':Id']['wireless-device']['$put']>,
    ) {
      return parseResponse(client['multicast-groups'][':Id']['wireless-device'].$put(args, options))
    },
  })
}

export function injectPutMulticastGroupsIdWirelessDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['multicast-groups'][':Id']['wireless-device']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMulticastGroupsIdWirelessDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutWirelessDevicesIdThingMutationKey() {
  return ['wireless-devices', '/wireless-devices/:Id/thing', 'PUT'] as const
}

export function getPutWirelessDevicesIdThingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['thing']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWirelessDevicesIdThingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$put']>,
    ) {
      return parseResponse(client['wireless-devices'][':Id'].thing.$put(args, options))
    },
  })
}

export function injectPutWirelessDevicesIdThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['thing']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWirelessDevicesIdThingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWirelessDevicesIdThingMutationKey() {
  return ['wireless-devices', '/wireless-devices/:Id/thing', 'DELETE'] as const
}

export function getDeleteWirelessDevicesIdThingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessDevicesIdThingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>,
    ) {
      return parseResponse(client['wireless-devices'][':Id'].thing.$delete(args, options))
    },
  })
}

export function injectDeleteWirelessDevicesIdThing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessDevicesIdThingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWirelessGatewaysIdCertificateQueryKey(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Id/certificate', keyArgs] as const
}

export function getWirelessGatewaysIdCertificateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdCertificateQueryKey>
  >({
    queryKey: getWirelessGatewaysIdCertificateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-gateways'][':Id'].certificate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessGatewaysIdCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessGatewaysIdCertificateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessGatewaysIdCertificateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutWirelessGatewaysIdCertificateMutationKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/certificate', 'PUT'] as const
}

export function getPutWirelessGatewaysIdCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWirelessGatewaysIdCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>,
    ) {
      return parseResponse(client['wireless-gateways'][':Id'].certificate.$put(args, options))
    },
  })
}

export function injectPutWirelessGatewaysIdCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWirelessGatewaysIdCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWirelessGatewaysIdCertificateMutationKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/certificate', 'DELETE'] as const
}

export function getDeleteWirelessGatewaysIdCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessGatewaysIdCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$delete']>,
    ) {
      return parseResponse(client['wireless-gateways'][':Id'].certificate.$delete(args, options))
    },
  })
}

export function injectDeleteWirelessGatewaysIdCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessGatewaysIdCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutWirelessGatewaysIdThingMutationKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/thing', 'PUT'] as const
}

export function getPutWirelessGatewaysIdThingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWirelessGatewaysIdThingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']>,
    ) {
      return parseResponse(client['wireless-gateways'][':Id'].thing.$put(args, options))
    },
  })
}

export function injectPutWirelessGatewaysIdThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWirelessGatewaysIdThingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWirelessGatewaysIdThingMutationKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/thing', 'DELETE'] as const
}

export function getDeleteWirelessGatewaysIdThingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessGatewaysIdThingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>,
    ) {
      return parseResponse(client['wireless-gateways'][':Id'].thing.$delete(args, options))
    },
  })
}

export function injectDeleteWirelessGatewaysIdThing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessGatewaysIdThingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMulticastGroupsIdSessionQueryKey(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['multicast-groups', '/multicast-groups/:Id/session', keyArgs] as const
}

export function getMulticastGroupsIdSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMulticastGroupsIdSessionQueryKey>
  >({
    queryKey: getMulticastGroupsIdSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['multicast-groups'][':Id'].session.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMulticastGroupsIdSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMulticastGroupsIdSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMulticastGroupsIdSessionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutMulticastGroupsIdSessionMutationKey() {
  return ['multicast-groups', '/multicast-groups/:Id/session', 'PUT'] as const
}

export function getPutMulticastGroupsIdSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMulticastGroupsIdSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$put']>,
    ) {
      return parseResponse(client['multicast-groups'][':Id'].session.$put(args, options))
    },
  })
}

export function injectPutMulticastGroupsIdSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMulticastGroupsIdSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMulticastGroupsIdSessionMutationKey() {
  return ['multicast-groups', '/multicast-groups/:Id/session', 'DELETE'] as const
}

export function getDeleteMulticastGroupsIdSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMulticastGroupsIdSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>,
    ) {
      return parseResponse(client['multicast-groups'][':Id'].session.$delete(args, options))
    },
  })
}

export function injectDeleteMulticastGroupsIdSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMulticastGroupsIdSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDestinationsQueryKey(args: InferRequestType<typeof client.destinations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['destinations', '/destinations', keyArgs] as const
}

export function getDestinationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.destinations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDestinationsQueryKey>
  >({
    queryKey: getDestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.destinations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDestinations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.destinations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDestinationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDestinationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDestinationsMutationKey() {
  return ['destinations', '/destinations', 'POST'] as const
}

export function getPostDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.destinations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestinationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.destinations.$post>) {
      return parseResponse(client.destinations.$post(args, options))
    },
  })
}

export function injectPostDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.destinations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestinationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeviceProfilesQueryKey(
  args: InferRequestType<(typeof client)['device-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['device-profiles', '/device-profiles', keyArgs] as const
}

export function getDeviceProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['device-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceProfilesQueryKey>
  >({
    queryKey: getDeviceProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['device-profiles'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDeviceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['device-profiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeviceProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeviceProfilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDeviceProfilesMutationKey() {
  return ['device-profiles', '/device-profiles', 'POST'] as const
}

export function getPostDeviceProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['device-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceProfilesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['device-profiles']['$post']>) {
      return parseResponse(client['device-profiles'].$post(args, options))
    },
  })
}

export function injectPostDeviceProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['device-profiles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceProfilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFuotaTasksQueryKey(
  args: InferRequestType<(typeof client)['fuota-tasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fuota-tasks', '/fuota-tasks', keyArgs] as const
}

export function getFuotaTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['fuota-tasks']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuotaTasksQueryKey>
  >({
    queryKey: getFuotaTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['fuota-tasks'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFuotaTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['fuota-tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFuotaTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFuotaTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFuotaTasksMutationKey() {
  return ['fuota-tasks', '/fuota-tasks', 'POST'] as const
}

export function getPostFuotaTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['fuota-tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFuotaTasksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fuota-tasks']['$post']>) {
      return parseResponse(client['fuota-tasks'].$post(args, options))
    },
  })
}

export function injectPostFuotaTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['fuota-tasks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFuotaTasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMulticastGroupsQueryKey(
  args: InferRequestType<(typeof client)['multicast-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['multicast-groups', '/multicast-groups', keyArgs] as const
}

export function getMulticastGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['multicast-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMulticastGroupsQueryKey>
  >({
    queryKey: getMulticastGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['multicast-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMulticastGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['multicast-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMulticastGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMulticastGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMulticastGroupsMutationKey() {
  return ['multicast-groups', '/multicast-groups', 'POST'] as const
}

export function getPostMulticastGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['multicast-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMulticastGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['multicast-groups']['$post']>) {
      return parseResponse(client['multicast-groups'].$post(args, options))
    },
  })
}

export function injectPostMulticastGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['multicast-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMulticastGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNetworkAnalyzerConfigurationsQueryKey(
  args: InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['network-analyzer-configurations', '/network-analyzer-configurations', keyArgs] as const
}

export function getNetworkAnalyzerConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkAnalyzerConfigurationsQueryKey>
  >({
    queryKey: getNetworkAnalyzerConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-analyzer-configurations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkAnalyzerConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkAnalyzerConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworkAnalyzerConfigurationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNetworkAnalyzerConfigurationsMutationKey() {
  return ['network-analyzer-configurations', '/network-analyzer-configurations', 'POST'] as const
}

export function getPostNetworkAnalyzerConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-analyzer-configurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkAnalyzerConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-analyzer-configurations']['$post']>,
    ) {
      return parseResponse(client['network-analyzer-configurations'].$post(args, options))
    },
  })
}

export function injectPostNetworkAnalyzerConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-analyzer-configurations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetworkAnalyzerConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getServiceProfilesQueryKey(
  args: InferRequestType<(typeof client)['service-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service-profiles', '/service-profiles', keyArgs] as const
}

export function getServiceProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['service-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceProfilesQueryKey>
  >({
    queryKey: getServiceProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['service-profiles'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServiceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['service-profiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServiceProfilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostServiceProfilesMutationKey() {
  return ['service-profiles', '/service-profiles', 'POST'] as const
}

export function getPostServiceProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['service-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServiceProfilesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['service-profiles']['$post']>) {
      return parseResponse(client['service-profiles'].$post(args, options))
    },
  })
}

export function injectPostServiceProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['service-profiles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServiceProfilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWirelessDevicesQueryKey(
  args: InferRequestType<(typeof client)['wireless-devices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-devices', '/wireless-devices', keyArgs] as const
}

export function getWirelessDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDevicesQueryKey>
  >({
    queryKey: getWirelessDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-devices'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWirelessDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-devices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWirelessDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostWirelessDevicesMutationKey() {
  return ['wireless-devices', '/wireless-devices', 'POST'] as const
}

export function getPostWirelessDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['wireless-devices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessDevicesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['wireless-devices']['$post']>) {
      return parseResponse(client['wireless-devices'].$post(args, options))
    },
  })
}

export function injectPostWirelessDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['wireless-devices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWirelessDevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWirelessGatewaysQueryKey(
  args: InferRequestType<(typeof client)['wireless-gateways']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways', keyArgs] as const
}

export function getWirelessGatewaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-gateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysQueryKey>
  >({
    queryKey: getWirelessGatewaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-gateways'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWirelessGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-gateways']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessGatewaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWirelessGatewaysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostWirelessGatewaysMutationKey() {
  return ['wireless-gateways', '/wireless-gateways', 'POST'] as const
}

export function getPostWirelessGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['wireless-gateways']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessGatewaysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['wireless-gateways']['$post']>) {
      return parseResponse(client['wireless-gateways'].$post(args, options))
    },
  })
}

export function injectPostWirelessGateways<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['wireless-gateways']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWirelessGatewaysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWirelessGatewaysIdTasksQueryKey(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Id/tasks', keyArgs] as const
}

export function getWirelessGatewaysIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdTasksQueryKey>
  >({
    queryKey: getWirelessGatewaysIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-gateways'][':Id'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessGatewaysIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessGatewaysIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessGatewaysIdTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostWirelessGatewaysIdTasksMutationKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/tasks', 'POST'] as const
}

export function getPostWirelessGatewaysIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessGatewaysIdTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']>,
    ) {
      return parseResponse(client['wireless-gateways'][':Id'].tasks.$post(args, options))
    },
  })
}

export function injectPostWirelessGatewaysIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWirelessGatewaysIdTasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWirelessGatewaysIdTasksMutationKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id/tasks', 'DELETE'] as const
}

export function getDeleteWirelessGatewaysIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessGatewaysIdTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>,
    ) {
      return parseResponse(client['wireless-gateways'][':Id'].tasks.$delete(args, options))
    },
  })
}

export function injectDeleteWirelessGatewaysIdTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessGatewaysIdTasksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWirelessGatewayTaskDefinitionsQueryKey(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions',
    keyArgs,
  ] as const
}

export function getWirelessGatewayTaskDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewayTaskDefinitionsQueryKey>
  >({
    queryKey: getWirelessGatewayTaskDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-gateway-task-definitions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessGatewayTaskDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessGatewayTaskDefinitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessGatewayTaskDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostWirelessGatewayTaskDefinitionsMutationKey() {
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions',
    'POST',
  ] as const
}

export function getPostWirelessGatewayTaskDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessGatewayTaskDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$post']>,
    ) {
      return parseResponse(client['wireless-gateway-task-definitions'].$post(args, options))
    },
  })
}

export function injectPostWirelessGatewayTaskDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWirelessGatewayTaskDefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDestinationsNameQueryKey(
  args: InferRequestType<(typeof client.destinations)[':Name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['destinations', '/destinations/:Name', keyArgs] as const
}

export function getDestinationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.destinations)[':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestinationsNameQueryKey>
  >({
    queryKey: getDestinationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.destinations[':Name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDestinationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.destinations)[':Name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestinationsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDestinationsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteDestinationsNameMutationKey() {
  return ['destinations', '/destinations/:Name', 'DELETE'] as const
}

export function getDeleteDestinationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.destinations)[':Name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.destinations)[':Name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDestinationsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.destinations)[':Name']['$delete']>) {
      return parseResponse(client.destinations[':Name'].$delete(args, options))
    },
  })
}

export function injectDeleteDestinationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':Name']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.destinations)[':Name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDestinationsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchDestinationsNameMutationKey() {
  return ['destinations', '/destinations/:Name', 'PATCH'] as const
}

export function getPatchDestinationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.destinations)[':Name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDestinationsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.destinations)[':Name']['$patch']>) {
      return parseResponse(client.destinations[':Name'].$patch(args, options))
    },
  })
}

export function injectPatchDestinationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':Name']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.destinations)[':Name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDestinationsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeviceProfilesIdQueryKey(
  args: InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['device-profiles', '/device-profiles/:Id', keyArgs] as const
}

export function getDeviceProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceProfilesIdQueryKey>
  >({
    queryKey: getDeviceProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['device-profiles'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDeviceProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeviceProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeviceProfilesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteDeviceProfilesIdMutationKey() {
  return ['device-profiles', '/device-profiles/:Id', 'DELETE'] as const
}

export function getDeleteDeviceProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['device-profiles'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeviceProfilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['device-profiles'][':Id']['$delete']>) {
      return parseResponse(client['device-profiles'][':Id'].$delete(args, options))
    },
  })
}

export function injectDeleteDeviceProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['device-profiles'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeviceProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFuotaTasksIdQueryKey(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fuota-tasks', '/fuota-tasks/:Id', keyArgs] as const
}

export function getFuotaTasksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuotaTasksIdQueryKey>
  >({
    queryKey: getFuotaTasksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['fuota-tasks'][':Id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFuotaTasksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFuotaTasksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFuotaTasksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutFuotaTasksIdMutationKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id', 'PUT'] as const
}

export function getPutFuotaTasksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFuotaTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$put']>) {
      return parseResponse(client['fuota-tasks'][':Id'].$put(args, options))
    },
  })
}

export function injectPutFuotaTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['fuota-tasks'][':Id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFuotaTasksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFuotaTasksIdMutationKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id', 'DELETE'] as const
}

export function getDeleteFuotaTasksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFuotaTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$delete']>) {
      return parseResponse(client['fuota-tasks'][':Id'].$delete(args, options))
    },
  })
}

export function injectDeleteFuotaTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['fuota-tasks'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFuotaTasksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFuotaTasksIdMutationKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id', 'PATCH'] as const
}

export function getPatchFuotaTasksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFuotaTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$patch']>) {
      return parseResponse(client['fuota-tasks'][':Id'].$patch(args, options))
    },
  })
}

export function injectPatchFuotaTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['fuota-tasks'][':Id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFuotaTasksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMulticastGroupsIdQueryKey(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['multicast-groups', '/multicast-groups/:Id', keyArgs] as const
}

export function getMulticastGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMulticastGroupsIdQueryKey>
  >({
    queryKey: getMulticastGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['multicast-groups'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMulticastGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMulticastGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMulticastGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteMulticastGroupsIdMutationKey() {
  return ['multicast-groups', '/multicast-groups/:Id', 'DELETE'] as const
}

export function getDeleteMulticastGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMulticastGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$delete']>,
    ) {
      return parseResponse(client['multicast-groups'][':Id'].$delete(args, options))
    },
  })
}

export function injectDeleteMulticastGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['multicast-groups'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMulticastGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchMulticastGroupsIdMutationKey() {
  return ['multicast-groups', '/multicast-groups/:Id', 'PATCH'] as const
}

export function getPatchMulticastGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMulticastGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$patch']>) {
      return parseResponse(client['multicast-groups'][':Id'].$patch(args, options))
    },
  })
}

export function injectPatchMulticastGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['multicast-groups'][':Id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMulticastGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNetworkAnalyzerConfigurationsConfigurationNameQueryKey(
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

export function getNetworkAnalyzerConfigurationsConfigurationNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getNetworkAnalyzerConfigurationsConfigurationNameQueryKey>
  >({
    queryKey: getNetworkAnalyzerConfigurationsConfigurationNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-analyzer-configurations'][':ConfigurationName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkAnalyzerConfigurationsConfigurationName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getNetworkAnalyzerConfigurationsConfigurationNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworkAnalyzerConfigurationsConfigurationNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteNetworkAnalyzerConfigurationsConfigurationNameMutationKey() {
  return [
    'network-analyzer-configurations',
    '/network-analyzer-configurations/:ConfigurationName',
    'DELETE',
  ] as const
}

export function getDeleteNetworkAnalyzerConfigurationsConfigurationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkAnalyzerConfigurationsConfigurationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$delete']
      >,
    ) {
      return parseResponse(
        client['network-analyzer-configurations'][':ConfigurationName'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteNetworkAnalyzerConfigurationsConfigurationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNetworkAnalyzerConfigurationsConfigurationNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchNetworkAnalyzerConfigurationsConfigurationNameMutationKey() {
  return [
    'network-analyzer-configurations',
    '/network-analyzer-configurations/:ConfigurationName',
    'PATCH',
  ] as const
}

export function getPatchNetworkAnalyzerConfigurationsConfigurationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkAnalyzerConfigurationsConfigurationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$patch']
      >,
    ) {
      return parseResponse(
        client['network-analyzer-configurations'][':ConfigurationName'].$patch(args, options),
      )
    },
  })
}

export function injectPatchNetworkAnalyzerConfigurationsConfigurationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNetworkAnalyzerConfigurationsConfigurationNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWirelessDevicesIdDataMessageIdMutationKey() {
  return ['wireless-devices', '/wireless-devices/:Id/data#messageId', 'DELETE'] as const
}

export function getDeleteWirelessDevicesIdDataMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['wireless-devices'][':Id']['data#messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessDevicesIdDataMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['wireless-devices'][':Id']['data#messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client['wireless-devices'][':Id']['data#messageId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteWirelessDevicesIdDataMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['wireless-devices'][':Id']['data#messageId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-devices'][':Id']['data#messageId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessDevicesIdDataMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getServiceProfilesIdQueryKey(
  args: InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service-profiles', '/service-profiles/:Id', keyArgs] as const
}

export function getServiceProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceProfilesIdQueryKey>
  >({
    queryKey: getServiceProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['service-profiles'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServiceProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServiceProfilesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteServiceProfilesIdMutationKey() {
  return ['service-profiles', '/service-profiles/:Id', 'DELETE'] as const
}

export function getDeleteServiceProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['service-profiles'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServiceProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['service-profiles'][':Id']['$delete']>,
    ) {
      return parseResponse(client['service-profiles'][':Id'].$delete(args, options))
    },
  })
}

export function injectDeleteServiceProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['service-profiles'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServiceProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWirelessDevicesIdMutationKey() {
  return ['wireless-devices', '/wireless-devices/:Id', 'DELETE'] as const
}

export function getDeleteWirelessDevicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessDevicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-devices'][':Id']['$delete']>,
    ) {
      return parseResponse(client['wireless-devices'][':Id'].$delete(args, options))
    },
  })
}

export function injectDeleteWirelessDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-devices'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessDevicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchWirelessDevicesIdMutationKey() {
  return ['wireless-devices', '/wireless-devices/:Id', 'PATCH'] as const
}

export function getPatchWirelessDevicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWirelessDevicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['wireless-devices'][':Id']['$patch']>) {
      return parseResponse(client['wireless-devices'][':Id'].$patch(args, options))
    },
  })
}

export function injectPatchWirelessDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-devices'][':Id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWirelessDevicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWirelessDeviceImportTaskIdQueryKey(
  args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless_device_import_task', '/wireless_device_import_task/:Id', keyArgs] as const
}

export function getWirelessDeviceImportTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDeviceImportTaskIdQueryKey>
  >({
    queryKey: getWirelessDeviceImportTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wireless_device_import_task[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessDeviceImportTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDeviceImportTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessDeviceImportTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteWirelessDeviceImportTaskIdMutationKey() {
  return ['wireless_device_import_task', '/wireless_device_import_task/:Id', 'DELETE'] as const
}

export function getDeleteWirelessDeviceImportTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessDeviceImportTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$delete']>,
    ) {
      return parseResponse(client.wireless_device_import_task[':Id'].$delete(args, options))
    },
  })
}

export function injectDeleteWirelessDeviceImportTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessDeviceImportTaskIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchWirelessDeviceImportTaskIdMutationKey() {
  return ['wireless_device_import_task', '/wireless_device_import_task/:Id', 'PATCH'] as const
}

export function getPatchWirelessDeviceImportTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWirelessDeviceImportTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$patch']>,
    ) {
      return parseResponse(client.wireless_device_import_task[':Id'].$patch(args, options))
    },
  })
}

export function injectPatchWirelessDeviceImportTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWirelessDeviceImportTaskIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWirelessGatewaysIdMutationKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id', 'DELETE'] as const
}

export function getDeleteWirelessGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessGatewaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['$delete']>,
    ) {
      return parseResponse(client['wireless-gateways'][':Id'].$delete(args, options))
    },
  })
}

export function injectDeleteWirelessGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-gateways'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessGatewaysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchWirelessGatewaysIdMutationKey() {
  return ['wireless-gateways', '/wireless-gateways/:Id', 'PATCH'] as const
}

export function getPatchWirelessGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWirelessGatewaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['$patch']>,
    ) {
      return parseResponse(client['wireless-gateways'][':Id'].$patch(args, options))
    },
  })
}

export function injectPatchWirelessGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['wireless-gateways'][':Id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWirelessGatewaysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWirelessGatewayTaskDefinitionsIdQueryKey(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions/:Id',
    keyArgs,
  ] as const
}

export function getWirelessGatewayTaskDefinitionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewayTaskDefinitionsIdQueryKey>
  >({
    queryKey: getWirelessGatewayTaskDefinitionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-gateway-task-definitions'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessGatewayTaskDefinitionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessGatewayTaskDefinitionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessGatewayTaskDefinitionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteWirelessGatewayTaskDefinitionsIdMutationKey() {
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions/:Id',
    'DELETE',
  ] as const
}

export function getDeleteWirelessGatewayTaskDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessGatewayTaskDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['wireless-gateway-task-definitions'][':Id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteWirelessGatewayTaskDefinitionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWirelessGatewayTaskDefinitionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchWirelessDevicesIdentifierDeregisterMutationKey() {
  return ['wireless-devices', '/wireless-devices/:Identifier/deregister', 'PATCH'] as const
}

export function getPatchWirelessDevicesIdentifierDeregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['wireless-devices'][':Identifier']['deregister']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWirelessDevicesIdentifierDeregisterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['wireless-devices'][':Identifier']['deregister']['$patch']
      >,
    ) {
      return parseResponse(
        client['wireless-devices'][':Identifier'].deregister.$patch(args, options),
      )
    },
  })
}

export function injectPatchWirelessDevicesIdentifierDeregister<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['wireless-devices'][':Identifier']['deregister']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['wireless-devices'][':Identifier']['deregister']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWirelessDevicesIdentifierDeregisterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey(
  args: InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['partner-accounts', '/partner-accounts/:PartnerAccountId#partnerType', keyArgs] as const
}

export function getPartnerAccountsPartnerAccountIdPartnerTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey>
  >({
    queryKey: getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['partner-accounts'][':PartnerAccountId#partnerType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPartnerAccountsPartnerAccountIdPartnerType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPartnerAccountsPartnerAccountIdPartnerTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeletePartnerAccountsPartnerAccountIdPartnerTypeMutationKey() {
  return ['partner-accounts', '/partner-accounts/:PartnerAccountId#partnerType', 'DELETE'] as const
}

export function getDeletePartnerAccountsPartnerAccountIdPartnerTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePartnerAccountsPartnerAccountIdPartnerTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$delete']
      >,
    ) {
      return parseResponse(
        client['partner-accounts'][':PartnerAccountId#partnerType'].$delete(args, options),
      )
    },
  })
}

export function injectDeletePartnerAccountsPartnerAccountIdPartnerType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePartnerAccountsPartnerAccountIdPartnerTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPartnerAccountsPartnerAccountIdPartnerTypeMutationKey() {
  return ['partner-accounts', '/partner-accounts/:PartnerAccountId#partnerType', 'PATCH'] as const
}

export function getPatchPartnerAccountsPartnerAccountIdPartnerTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchPartnerAccountsPartnerAccountIdPartnerTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$patch']
      >,
    ) {
      return parseResponse(
        client['partner-accounts'][':PartnerAccountId#partnerType'].$patch(args, options),
      )
    },
  })
}

export function injectPatchPartnerAccountsPartnerAccountIdPartnerType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPartnerAccountsPartnerAccountIdPartnerTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFuotaTasksIdMulticastGroupsMulticastGroupIdMutationKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id/multicast-groups/:MulticastGroupId', 'DELETE'] as const
}

export function getDeleteFuotaTasksIdMulticastGroupsMulticastGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFuotaTasksIdMulticastGroupsMulticastGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteFuotaTasksIdMulticastGroupsMulticastGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFuotaTasksIdMulticastGroupsMulticastGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFuotaTasksIdWirelessDevicesWirelessDeviceIdMutationKey() {
  return ['fuota-tasks', '/fuota-tasks/:Id/wireless-devices/:WirelessDeviceId', 'DELETE'] as const
}

export function getDeleteFuotaTasksIdWirelessDevicesWirelessDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFuotaTasksIdWirelessDevicesWirelessDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteFuotaTasksIdWirelessDevicesWirelessDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFuotaTasksIdWirelessDevicesWirelessDeviceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdMutationKey() {
  return [
    'multicast-groups',
    '/multicast-groups/:Id/wireless-devices/:WirelessDeviceId',
    'DELETE',
  ] as const
}

export function getDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEventConfigurationsResourceTypesQueryKey(
  args: InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event-configurations-resource-types',
    '/event-configurations-resource-types',
    keyArgs,
  ] as const
}

export function getEventConfigurationsResourceTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventConfigurationsResourceTypesQueryKey>
  >({
    queryKey: getEventConfigurationsResourceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['event-configurations-resource-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEventConfigurationsResourceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventConfigurationsResourceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEventConfigurationsResourceTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchEventConfigurationsResourceTypesMutationKey() {
  return [
    'event-configurations-resource-types',
    '/event-configurations-resource-types',
    'PATCH',
  ] as const
}

export function getPatchEventConfigurationsResourceTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['event-configurations-resource-types']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEventConfigurationsResourceTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['event-configurations-resource-types']['$patch']>,
    ) {
      return parseResponse(client['event-configurations-resource-types'].$patch(args, options))
    },
  })
}

export function injectPatchEventConfigurationsResourceTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['event-configurations-resource-types']['$patch']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['event-configurations-resource-types']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEventConfigurationsResourceTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLogLevelsQueryKey(
  args: InferRequestType<(typeof client)['log-levels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['log-levels', '/log-levels', keyArgs] as const
}

export function getLogLevelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['log-levels']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogLevelsQueryKey>
  >({
    queryKey: getLogLevelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['log-levels'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogLevels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['log-levels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogLevelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogLevelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostLogLevelsMutationKey() {
  return ['log-levels', '/log-levels', 'POST'] as const
}

export function getPostLogLevelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['log-levels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLogLevelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['log-levels']['$post']>) {
      return parseResponse(client['log-levels'].$post(args, options))
    },
  })
}

export function injectPostLogLevels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['log-levels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLogLevelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteLogLevelsMutationKey() {
  return ['log-levels', '/log-levels', 'DELETE'] as const
}

export function getDeleteLogLevelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['log-levels']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLogLevelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['log-levels']['$delete']>) {
      return parseResponse(client['log-levels'].$delete(args, options))
    },
  })
}

export function injectDeleteLogLevels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['log-levels']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLogLevelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPositionsResourceIdentifierResourceTypeQueryKey(
  args: InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['positions', '/positions/:ResourceIdentifier#resourceType', keyArgs] as const
}

export function getPositionsResourceIdentifierResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPositionsResourceIdentifierResourceTypeQueryKey>
  >({
    queryKey: getPositionsResourceIdentifierResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.positions[':ResourceIdentifier#resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPositionsResourceIdentifierResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.positions)[':ResourceIdentifier#resourceType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPositionsResourceIdentifierResourceTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPositionsResourceIdentifierResourceTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchPositionsResourceIdentifierResourceTypeMutationKey() {
  return ['positions', '/positions/:ResourceIdentifier#resourceType', 'PATCH'] as const
}

export function getPatchPositionsResourceIdentifierResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPositionsResourceIdentifierResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.positions)[':ResourceIdentifier#resourceType']['$patch']
      >,
    ) {
      return parseResponse(
        client.positions[':ResourceIdentifier#resourceType'].$patch(args, options),
      )
    },
  })
}

export function injectPatchPositionsResourceIdentifierResourceType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.positions)[':ResourceIdentifier#resourceType']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPositionsResourceIdentifierResourceTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPositionConfigurationsResourceIdentifierResourceTypeQueryKey(
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

export function getPositionConfigurationsResourceIdentifierResourceTypeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPositionConfigurationsResourceIdentifierResourceTypeQueryKey>
  >({
    queryKey: getPositionConfigurationsResourceIdentifierResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['position-configurations'][':ResourceIdentifier#resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPositionConfigurationsResourceIdentifierResourceType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPositionConfigurationsResourceIdentifierResourceTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPositionConfigurationsResourceIdentifierResourceTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutPositionConfigurationsResourceIdentifierResourceTypeMutationKey() {
  return [
    'position-configurations',
    '/position-configurations/:ResourceIdentifier#resourceType',
    'PUT',
  ] as const
}

export function getPutPositionConfigurationsResourceIdentifierResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPositionConfigurationsResourceIdentifierResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$put']
      >,
    ) {
      return parseResponse(
        client['position-configurations'][':ResourceIdentifier#resourceType'].$put(args, options),
      )
    },
  })
}

export function injectPutPositionConfigurationsResourceIdentifierResourceType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutPositionConfigurationsResourceIdentifierResourceTypeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPositionEstimateMutationKey() {
  return ['position-estimate', '/position-estimate', 'POST'] as const
}

export function getPostPositionEstimateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['position-estimate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['position-estimate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPositionEstimateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['position-estimate']['$post']>) {
      return parseResponse(client['position-estimate'].$post(args, options))
    },
  })
}

export function injectPostPositionEstimate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['position-estimate']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['position-estimate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPositionEstimateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEventConfigurationsIdentifierIdentifierTypeQueryKey(
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

export function getEventConfigurationsIdentifierIdentifierTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['event-configurations'][':Identifier#identifierType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getEventConfigurationsIdentifierIdentifierTypeQueryKey>
  >({
    queryKey: getEventConfigurationsIdentifierIdentifierTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['event-configurations'][':Identifier#identifierType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEventConfigurationsIdentifierIdentifierType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['event-configurations'][':Identifier#identifierType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getEventConfigurationsIdentifierIdentifierTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEventConfigurationsIdentifierIdentifierTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchEventConfigurationsIdentifierIdentifierTypeMutationKey() {
  return [
    'event-configurations',
    '/event-configurations/:Identifier#identifierType',
    'PATCH',
  ] as const
}

export function getPatchEventConfigurationsIdentifierIdentifierTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['event-configurations'][':Identifier#identifierType']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchEventConfigurationsIdentifierIdentifierTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['event-configurations'][':Identifier#identifierType']['$patch']
      >,
    ) {
      return parseResponse(
        client['event-configurations'][':Identifier#identifierType'].$patch(args, options),
      )
    },
  })
}

export function injectPatchEventConfigurationsIdentifierIdentifierType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['event-configurations'][':Identifier#identifierType']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEventConfigurationsIdentifierIdentifierTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLogLevelsResourceIdentifierResourceTypeQueryKey(
  args: InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['log-levels', '/log-levels/:ResourceIdentifier#resourceType', keyArgs] as const
}

export function getLogLevelsResourceIdentifierResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogLevelsResourceIdentifierResourceTypeQueryKey>
  >({
    queryKey: getLogLevelsResourceIdentifierResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['log-levels'][':ResourceIdentifier#resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLogLevelsResourceIdentifierResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogLevelsResourceIdentifierResourceTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLogLevelsResourceIdentifierResourceTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutLogLevelsResourceIdentifierResourceTypeMutationKey() {
  return ['log-levels', '/log-levels/:ResourceIdentifier#resourceType', 'PUT'] as const
}

export function getPutLogLevelsResourceIdentifierResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLogLevelsResourceIdentifierResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']
      >,
    ) {
      return parseResponse(
        client['log-levels'][':ResourceIdentifier#resourceType'].$put(args, options),
      )
    },
  })
}

export function injectPutLogLevelsResourceIdentifierResourceType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLogLevelsResourceIdentifierResourceTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteLogLevelsResourceIdentifierResourceTypeMutationKey() {
  return ['log-levels', '/log-levels/:ResourceIdentifier#resourceType', 'DELETE'] as const
}

export function getDeleteLogLevelsResourceIdentifierResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLogLevelsResourceIdentifierResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$delete']
      >,
    ) {
      return parseResponse(
        client['log-levels'][':ResourceIdentifier#resourceType'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteLogLevelsResourceIdentifierResourceType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLogLevelsResourceIdentifierResourceTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResourcePositionsResourceIdentifierResourceTypeQueryKey(
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

export function getResourcePositionsResourceIdentifierResourceTypeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getResourcePositionsResourceIdentifierResourceTypeQueryKey>
  >({
    queryKey: getResourcePositionsResourceIdentifierResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['resource-positions'][':ResourceIdentifier#resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcePositionsResourceIdentifierResourceType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getResourcePositionsResourceIdentifierResourceTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcePositionsResourceIdentifierResourceTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchResourcePositionsResourceIdentifierResourceTypeMutationKey() {
  return [
    'resource-positions',
    '/resource-positions/:ResourceIdentifier#resourceType',
    'PATCH',
  ] as const
}

export function getPatchResourcePositionsResourceIdentifierResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchResourcePositionsResourceIdentifierResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$patch']
      >,
    ) {
      return parseResponse(
        client['resource-positions'][':ResourceIdentifier#resourceType'].$patch(args, options),
      )
    },
  })
}

export function injectPatchResourcePositionsResourceIdentifierResourceType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchResourcePositionsResourceIdentifierResourceTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getServiceEndpointQueryKey(
  args: InferRequestType<(typeof client)['service-endpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service-endpoint', '/service-endpoint', keyArgs] as const
}

export function getServiceEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['service-endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceEndpointQueryKey>
  >({
    queryKey: getServiceEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['service-endpoint'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServiceEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['service-endpoint']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServiceEndpointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWirelessDevicesIdentifierIdentifierTypeQueryKey(
  args: InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-devices', '/wireless-devices/:Identifier#identifierType', keyArgs] as const
}

export function getWirelessDevicesIdentifierIdentifierTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDevicesIdentifierIdentifierTypeQueryKey>
  >({
    queryKey: getWirelessDevicesIdentifierIdentifierTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-devices'][':Identifier#identifierType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessDevicesIdentifierIdentifierType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['wireless-devices'][':Identifier#identifierType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['wireless-devices'][':Identifier#identifierType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDevicesIdentifierIdentifierTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessDevicesIdentifierIdentifierTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWirelessDevicesIdStatisticsQueryKey(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-devices', '/wireless-devices/:Id/statistics', keyArgs] as const
}

export function getWirelessDevicesIdStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDevicesIdStatisticsQueryKey>
  >({
    queryKey: getWirelessDevicesIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-devices'][':Id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessDevicesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDevicesIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessDevicesIdStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWirelessGatewaysIdentifierIdentifierTypeQueryKey(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Identifier#identifierType', keyArgs] as const
}

export function getWirelessGatewaysIdentifierIdentifierTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdentifierIdentifierTypeQueryKey>
  >({
    queryKey: getWirelessGatewaysIdentifierIdentifierTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-gateways'][':Identifier#identifierType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessGatewaysIdentifierIdentifierType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessGatewaysIdentifierIdentifierTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessGatewaysIdentifierIdentifierTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWirelessGatewaysIdFirmwareInformationQueryKey(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Id/firmware-information', keyArgs] as const
}

export function getWirelessGatewaysIdFirmwareInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdFirmwareInformationQueryKey>
  >({
    queryKey: getWirelessGatewaysIdFirmwareInformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-gateways'][':Id']['firmware-information'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessGatewaysIdFirmwareInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getWirelessGatewaysIdFirmwareInformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessGatewaysIdFirmwareInformationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWirelessGatewaysIdStatisticsQueryKey(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-gateways', '/wireless-gateways/:Id/statistics', keyArgs] as const
}

export function getWirelessGatewaysIdStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdStatisticsQueryKey>
  >({
    queryKey: getWirelessGatewaysIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-gateways'][':Id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessGatewaysIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessGatewaysIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessGatewaysIdStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWirelessDeviceImportTaskId2QueryKey(
  args: InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless_device_import_task#id', '/wireless_device_import_task#id', keyArgs] as const
}

export function getWirelessDeviceImportTaskId2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDeviceImportTaskId2QueryKey>
  >({
    queryKey: getWirelessDeviceImportTaskId2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless_device_import_task#id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessDeviceImportTaskId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDeviceImportTaskId2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessDeviceImportTaskId2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEventConfigurationsResourceTypeQueryKey(
  args: InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event-configurations#resourceType',
    '/event-configurations#resourceType',
    keyArgs,
  ] as const
}

export function getEventConfigurationsResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventConfigurationsResourceTypeQueryKey>
  >({
    queryKey: getEventConfigurationsResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['event-configurations#resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEventConfigurationsResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventConfigurationsResourceTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEventConfigurationsResourceTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFuotaTasksIdMulticastGroupsQueryKey(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fuota-tasks', '/fuota-tasks/:Id/multicast-groups', keyArgs] as const
}

export function getFuotaTasksIdMulticastGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuotaTasksIdMulticastGroupsQueryKey>
  >({
    queryKey: getFuotaTasksIdMulticastGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['fuota-tasks'][':Id']['multicast-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFuotaTasksIdMulticastGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFuotaTasksIdMulticastGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFuotaTasksIdMulticastGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPositionConfigurationsQueryKey(
  args: InferRequestType<(typeof client)['position-configurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['position-configurations', '/position-configurations', keyArgs] as const
}

export function getPositionConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['position-configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPositionConfigurationsQueryKey>
  >({
    queryKey: getPositionConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['position-configurations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPositionConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['position-configurations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPositionConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPositionConfigurationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWirelessDevicesIdDataQueryKey(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless-devices', '/wireless-devices/:Id/data', keyArgs] as const
}

export function getWirelessDevicesIdDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDevicesIdDataQueryKey>
  >({
    queryKey: getWirelessDevicesIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wireless-devices'][':Id'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessDevicesIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDevicesIdDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessDevicesIdDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostWirelessDevicesIdDataMutationKey() {
  return ['wireless-devices', '/wireless-devices/:Id/data', 'POST'] as const
}

export function getPostWirelessDevicesIdDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessDevicesIdDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$post']>,
    ) {
      return parseResponse(client['wireless-devices'][':Id'].data.$post(args, options))
    },
  })
}

export function injectPostWirelessDevicesIdData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWirelessDevicesIdDataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tags#resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags#resourceArn', '/tags#resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['tags#resourceArn']['$post']>) {
      return parseResponse(client['tags#resourceArn'].$post(args, options))
    },
  })
}

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWirelessDeviceImportTasksQueryKey(
  args: InferRequestType<typeof client.wireless_device_import_tasks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['wireless_device_import_tasks', '/wireless_device_import_tasks', keyArgs] as const
}

export function getWirelessDeviceImportTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wireless_device_import_tasks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDeviceImportTasksQueryKey>
  >({
    queryKey: getWirelessDeviceImportTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wireless_device_import_tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWirelessDeviceImportTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wireless_device_import_tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDeviceImportTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWirelessDeviceImportTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostMulticastGroupsIdDataMutationKey() {
  return ['multicast-groups', '/multicast-groups/:Id/data', 'POST'] as const
}

export function getPostMulticastGroupsIdDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['data']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMulticastGroupsIdDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multicast-groups'][':Id']['data']['$post']>,
    ) {
      return parseResponse(client['multicast-groups'][':Id'].data.$post(args, options))
    },
  })
}

export function injectPostMulticastGroupsIdData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['data']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['multicast-groups'][':Id']['data']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMulticastGroupsIdDataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMulticastGroupsIdBulkMutationKey() {
  return ['multicast-groups', '/multicast-groups/:Id/bulk', 'POST'] as const
}

export function getPostMulticastGroupsIdBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMulticastGroupsIdBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']>,
    ) {
      return parseResponse(client['multicast-groups'][':Id'].bulk.$post(args, options))
    },
  })
}

export function injectPostMulticastGroupsIdBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMulticastGroupsIdBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchMulticastGroupsIdBulkMutationKey() {
  return ['multicast-groups', '/multicast-groups/:Id/bulk', 'PATCH'] as const
}

export function getPatchMulticastGroupsIdBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMulticastGroupsIdBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']>,
    ) {
      return parseResponse(client['multicast-groups'][':Id'].bulk.$patch(args, options))
    },
  })
}

export function injectPatchMulticastGroupsIdBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMulticastGroupsIdBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWirelessSingleDeviceImportTaskMutationKey() {
  return [
    'wireless_single_device_import_task',
    '/wireless_single_device_import_task',
    'POST',
  ] as const
}

export function getPostWirelessSingleDeviceImportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wireless_single_device_import_task.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.wireless_single_device_import_task.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessSingleDeviceImportTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.wireless_single_device_import_task.$post>,
    ) {
      return parseResponse(client.wireless_single_device_import_task.$post(args, options))
    },
  })
}

export function injectPostWirelessSingleDeviceImportTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wireless_single_device_import_task.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.wireless_single_device_import_task.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWirelessSingleDeviceImportTaskMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWirelessDeviceImportTaskMutationKey() {
  return ['wireless_device_import_task', '/wireless_device_import_task', 'POST'] as const
}

export function getPostWirelessDeviceImportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_task.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wireless_device_import_task.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessDeviceImportTaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wireless_device_import_task.$post>) {
      return parseResponse(client.wireless_device_import_task.$post(args, options))
    },
  })
}

export function injectPostWirelessDeviceImportTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wireless_device_import_task.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.wireless_device_import_task.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWirelessDeviceImportTaskMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWirelessDevicesIdTestMutationKey() {
  return ['wireless-devices', '/wireless-devices/:Id/test', 'POST'] as const
}

export function getPostWirelessDevicesIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['wireless-devices'][':Id']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessDevicesIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['wireless-devices'][':Id']['test']['$post']>,
    ) {
      return parseResponse(client['wireless-devices'][':Id'].test.$post(args, options))
    },
  })
}

export function injectPostWirelessDevicesIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['wireless-devices'][':Id']['test']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWirelessDevicesIdTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags#resourceArn&tagKeys', '/tags#resourceArn&tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
    ) {
      return parseResponse(client['tags#resourceArn&tagKeys'].$delete(args, options))
    },
  })
}

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
