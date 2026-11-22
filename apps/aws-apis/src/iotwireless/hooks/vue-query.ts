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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['partner-accounts']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['partner-accounts', '/partner-accounts', keyArgs] as const
}

export function getPartnerAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['partner-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPartnerAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['partner-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePartnerAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['partner-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
            >
          >,
          ReturnType<typeof getPartnerAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartnerAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPartnerAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['partner-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPartnerAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['partner-accounts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['partner-accounts']['$post']>,
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
  const mutationDefaults = getPostPartnerAccountsMutationOptions<TError, TOnMutateResult>(
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

export function usePutFuotaTasksIdMulticastGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFuotaTasksIdMulticastGroupMutationOptions<TError, TOnMutateResult>(
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

export function usePutFuotaTasksIdWirelessDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFuotaTasksIdWirelessDeviceMutationOptions<TError, TOnMutateResult>(
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

export function usePutMulticastGroupsIdWirelessDevice<
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
                      (typeof client)['multicast-groups'][':Id']['wireless-device']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['multicast-groups'][':Id']['wireless-device']['$put']>,
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
  const mutationDefaults = getPutMulticastGroupsIdWirelessDeviceMutationOptions<
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

export function usePutWirelessDevicesIdThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWirelessDevicesIdThingMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteWirelessDevicesIdThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>,
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
  const mutationDefaults = getDeleteWirelessDevicesIdThingMutationOptions<TError, TOnMutateResult>(
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

export function getWirelessGatewaysIdCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-gateways', '/wireless-gateways/:Id/certificate', keyArgs] as const
}

export function getWirelessGatewaysIdCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessGatewaysIdCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-gateways'][':Id'].certificate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessGatewaysIdCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWirelessGatewaysIdCertificateQueryKey>
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
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessGatewaysIdCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-gateways'][':Id'].certificate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWirelessGatewaysIdCertificate<
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
                  ReturnType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>,
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
  const mutationDefaults = getPutWirelessGatewaysIdCertificateMutationOptions<
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

export function useDeleteWirelessGatewaysIdCertificate<
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
                      (typeof client)['wireless-gateways'][':Id']['certificate']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$delete']>,
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
  const mutationDefaults = getDeleteWirelessGatewaysIdCertificateMutationOptions<
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

export function usePutWirelessGatewaysIdThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWirelessGatewaysIdThingMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteWirelessGatewaysIdThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>,
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
  const mutationDefaults = getDeleteWirelessGatewaysIdThingMutationOptions<TError, TOnMutateResult>(
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

export function getMulticastGroupsIdSessionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['multicast-groups', '/multicast-groups/:Id/session', keyArgs] as const
}

export function getMulticastGroupsIdSessionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMulticastGroupsIdSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['multicast-groups'][':Id'].session.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMulticastGroupsIdSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMulticastGroupsIdSessionQueryKey>
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
          Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMulticastGroupsIdSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMulticastGroupsIdSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['multicast-groups'][':Id'].session.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMulticastGroupsIdSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMulticastGroupsIdSessionMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteMulticastGroupsIdSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMulticastGroupsIdSessionMutationOptions<
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

export function getDestinationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['destinations', '/destinations', keyArgs] as const
}

export function getDestinationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestinationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.destinations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDestinations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
          >,
          ReturnType<typeof getDestinationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDestinationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestinationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.destinations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.destinations.$post>,
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
  const mutationDefaults = getPostDestinationsMutationOptions<TError, TOnMutateResult>(
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

export function getDeviceProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['device-profiles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['device-profiles', '/device-profiles', keyArgs] as const
}

export function getDeviceProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['device-profiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['device-profiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['device-profiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
            >
          >,
          ReturnType<typeof getDeviceProfilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['device-profiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeviceProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['device-profiles']['$post']>,
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
  const mutationDefaults = getPostDeviceProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getFuotaTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fuota-tasks']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fuota-tasks', '/fuota-tasks', keyArgs] as const
}

export function getFuotaTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fuota-tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuotaTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['fuota-tasks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuotaTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fuota-tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>
            >
          >,
          ReturnType<typeof getFuotaTasksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuotaTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuotaTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['fuota-tasks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFuotaTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['fuota-tasks']['$post']>,
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
  const mutationDefaults = getPostFuotaTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMulticastGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['multicast-groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['multicast-groups', '/multicast-groups', keyArgs] as const
}

export function getMulticastGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['multicast-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMulticastGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['multicast-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMulticastGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['multicast-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getMulticastGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMulticastGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMulticastGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['multicast-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMulticastGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['multicast-groups']['$post']>,
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
  const mutationDefaults = getPostMulticastGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkAnalyzerConfigurationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['network-analyzer-configurations', '/network-analyzer-configurations', keyArgs] as const
}

export function getNetworkAnalyzerConfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkAnalyzerConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-analyzer-configurations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkAnalyzerConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkAnalyzerConfigurationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkAnalyzerConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkAnalyzerConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-analyzer-configurations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNetworkAnalyzerConfigurations<
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
                Awaited<ReturnType<(typeof client)['network-analyzer-configurations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-analyzer-configurations']['$post']>,
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
  const mutationDefaults = getPostNetworkAnalyzerConfigurationsMutationOptions<
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

export function getServiceProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-profiles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['service-profiles', '/service-profiles', keyArgs] as const
}

export function getServiceProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-profiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['service-profiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-profiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
            >
          >,
          ReturnType<typeof getServiceProfilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['service-profiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServiceProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['service-profiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['service-profiles']['$post']>,
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
  const mutationDefaults = getPostServiceProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getWirelessDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wireless-devices']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-devices', '/wireless-devices', keyArgs] as const
}

export function getWirelessDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wireless-devices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-devices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wireless-devices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
            >
          >,
          ReturnType<typeof getWirelessDevicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-devices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-devices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWirelessDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-devices']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['wireless-devices']['$post']>,
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
  const mutationDefaults = getPostWirelessDevicesMutationOptions<TError, TOnMutateResult>(
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

export function getWirelessGatewaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wireless-gateways']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-gateways', '/wireless-gateways', keyArgs] as const
}

export function getWirelessGatewaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wireless-gateways']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessGatewaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-gateways'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wireless-gateways']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWirelessGatewaysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['wireless-gateways']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessGatewaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-gateways'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWirelessGateways<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['wireless-gateways']['$post']>,
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
  const mutationDefaults = getPostWirelessGatewaysMutationOptions<TError, TOnMutateResult>(
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

export function getWirelessGatewaysIdTasksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-gateways', '/wireless-gateways/:Id/tasks', keyArgs] as const
}

export function getWirelessGatewaysIdTasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessGatewaysIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-gateways'][':Id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessGatewaysIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWirelessGatewaysIdTasksQueryKey>
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
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessGatewaysIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-gateways'][':Id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWirelessGatewaysIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWirelessGatewaysIdTasksMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteWirelessGatewaysIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>,
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
  const mutationDefaults = getDeleteWirelessGatewaysIdTasksMutationOptions<TError, TOnMutateResult>(
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

export function getWirelessGatewayTaskDefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions',
    keyArgs,
  ] as const
}

export function getWirelessGatewayTaskDefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessGatewayTaskDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-gateway-task-definitions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessGatewayTaskDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWirelessGatewayTaskDefinitionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewayTaskDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessGatewayTaskDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-gateway-task-definitions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWirelessGatewayTaskDefinitions<
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
                Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$post']>,
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
  const mutationDefaults = getPostWirelessGatewayTaskDefinitionsMutationOptions<
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

export function getDestinationsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':Name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['destinations', '/destinations/:Name', keyArgs] as const
}

export function getDestinationsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':Name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestinationsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.destinations[':Name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestinationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':Name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDestinationsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':Name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestinationsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestinationsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.destinations[':Name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDestinationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDestinationsNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchDestinationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDestinationsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeviceProfilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['device-profiles', '/device-profiles/:Id', keyArgs] as const
}

export function getDeviceProfilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['device-profiles'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeviceProfilesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['device-profiles'][':Id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['device-profiles'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDeviceProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeviceProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getFuotaTasksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fuota-tasks', '/fuota-tasks/:Id', keyArgs] as const
}

export function getFuotaTasksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuotaTasksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['fuota-tasks'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuotaTasksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFuotaTasksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuotaTasksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuotaTasksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['fuota-tasks'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutFuotaTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFuotaTasksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteFuotaTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFuotaTasksIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchFuotaTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFuotaTasksIdMutationOptions<TError, TOnMutateResult>(
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

export function getMulticastGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['multicast-groups', '/multicast-groups/:Id', keyArgs] as const
}

export function getMulticastGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMulticastGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['multicast-groups'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMulticastGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMulticastGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['multicast-groups'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMulticastGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMulticastGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['multicast-groups'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteMulticastGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMulticastGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchMulticastGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMulticastGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkAnalyzerConfigurationsConfigurationNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'network-analyzer-configurations',
    '/network-analyzer-configurations/:ConfigurationName',
    keyArgs,
  ] as const
}

export function getNetworkAnalyzerConfigurationsConfigurationNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkAnalyzerConfigurationsConfigurationNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-analyzer-configurations'][':ConfigurationName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkAnalyzerConfigurationsConfigurationName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
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
                    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
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
                    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworkAnalyzerConfigurationsConfigurationNameQueryKey>
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
              (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkAnalyzerConfigurationsConfigurationNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkAnalyzerConfigurationsConfigurationNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-analyzer-configurations'][':ConfigurationName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteNetworkAnalyzerConfigurationsConfigurationName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkAnalyzerConfigurationsConfigurationNameMutationOptions<
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

export function usePatchNetworkAnalyzerConfigurationsConfigurationName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNetworkAnalyzerConfigurationsConfigurationNameMutationOptions<
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

export function useDeleteWirelessDevicesIdDataMessageId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWirelessDevicesIdDataMessageIdMutationOptions<
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

export function getServiceProfilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['service-profiles', '/service-profiles/:Id', keyArgs] as const
}

export function getServiceProfilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['service-profiles'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceProfilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['service-profiles'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['service-profiles'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteServiceProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteServiceProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteWirelessDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWirelessDevicesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchWirelessDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWirelessDevicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getWirelessDeviceImportTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless_device_import_task', '/wireless_device_import_task/:Id', keyArgs] as const
}

export function getWirelessDeviceImportTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessDeviceImportTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wireless_device_import_task[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessDeviceImportTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWirelessDeviceImportTaskIdQueryKey>
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
          Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDeviceImportTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessDeviceImportTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wireless_device_import_task[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWirelessDeviceImportTaskId<
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
                  Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$delete']>,
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
  const mutationDefaults = getDeleteWirelessDeviceImportTaskIdMutationOptions<
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

export function usePatchWirelessDeviceImportTaskId<
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
                  Awaited<ReturnType<(typeof client.wireless_device_import_task)[':Id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$patch']>,
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
  const mutationDefaults = getPatchWirelessDeviceImportTaskIdMutationOptions<
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

export function useDeleteWirelessGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWirelessGatewaysIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchWirelessGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWirelessGatewaysIdMutationOptions<TError, TOnMutateResult>(
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

export function getWirelessGatewayTaskDefinitionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'wireless-gateway-task-definitions',
    '/wireless-gateway-task-definitions/:Id',
    keyArgs,
  ] as const
}

export function getWirelessGatewayTaskDefinitionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessGatewayTaskDefinitionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-gateway-task-definitions'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessGatewayTaskDefinitionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWirelessGatewayTaskDefinitionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewayTaskDefinitionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessGatewayTaskDefinitionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-gateway-task-definitions'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWirelessGatewayTaskDefinitionsId<
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
                      (typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']>,
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
  const mutationDefaults = getDeleteWirelessGatewayTaskDefinitionsIdMutationOptions<
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

export function usePatchWirelessDevicesIdentifierDeregister<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWirelessDevicesIdentifierDeregisterMutationOptions<
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

export function getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['partner-accounts', '/partner-accounts/:PartnerAccountId#partnerType', keyArgs] as const
}

export function getPartnerAccountsPartnerAccountIdPartnerTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['partner-accounts'][':PartnerAccountId#partnerType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePartnerAccountsPartnerAccountIdPartnerType<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']>
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
                    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
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
                    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey>
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
            ReturnType<(typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPartnerAccountsPartnerAccountIdPartnerTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['partner-accounts'][':PartnerAccountId#partnerType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePartnerAccountsPartnerAccountIdPartnerType<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePartnerAccountsPartnerAccountIdPartnerTypeMutationOptions<
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

export function usePatchPartnerAccountsPartnerAccountIdPartnerType<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPartnerAccountsPartnerAccountIdPartnerTypeMutationOptions<
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

export function useDeleteFuotaTasksIdMulticastGroupsMulticastGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFuotaTasksIdMulticastGroupsMulticastGroupIdMutationOptions<
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

export function useDeleteFuotaTasksIdWirelessDevicesWirelessDeviceId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFuotaTasksIdWirelessDevicesWirelessDeviceIdMutationOptions<
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

export function useDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdMutationOptions<
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

export function getEventConfigurationsResourceTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'event-configurations-resource-types',
    '/event-configurations-resource-types',
    keyArgs,
  ] as const
}

export function getEventConfigurationsResourceTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventConfigurationsResourceTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['event-configurations-resource-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventConfigurationsResourceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventConfigurationsResourceTypesQueryKey>
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
          Awaited<ReturnType<(typeof client)['event-configurations-resource-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventConfigurationsResourceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventConfigurationsResourceTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['event-configurations-resource-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchEventConfigurationsResourceTypes<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEventConfigurationsResourceTypesMutationOptions<
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

export function getLogLevelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['log-levels']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['log-levels', '/log-levels', keyArgs] as const
}

export function getLogLevelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['log-levels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogLevelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['log-levels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogLevels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['log-levels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>
            >
          >,
          ReturnType<typeof getLogLevelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogLevelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogLevelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['log-levels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLogLevels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['log-levels']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['log-levels']['$post']>,
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
  const mutationDefaults = getPostLogLevelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteLogLevels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLogLevelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPositionsResourceIdentifierResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['positions', '/positions/:ResourceIdentifier#resourceType', keyArgs] as const
}

export function getPositionsResourceIdentifierResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPositionsResourceIdentifierResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.positions[':ResourceIdentifier#resourceType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePositionsResourceIdentifierResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPositionsResourceIdentifierResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPositionsResourceIdentifierResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPositionsResourceIdentifierResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.positions[':ResourceIdentifier#resourceType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchPositionsResourceIdentifierResourceType<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPositionsResourceIdentifierResourceTypeMutationOptions<
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

export function getPositionConfigurationsResourceIdentifierResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'position-configurations',
    '/position-configurations/:ResourceIdentifier#resourceType',
    keyArgs,
  ] as const
}

export function getPositionConfigurationsResourceIdentifierResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPositionConfigurationsResourceIdentifierResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['position-configurations'][':ResourceIdentifier#resourceType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePositionConfigurationsResourceIdentifierResourceType<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
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
                    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
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
                    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPositionConfigurationsResourceIdentifierResourceTypeQueryKey>
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
              (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPositionConfigurationsResourceIdentifierResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPositionConfigurationsResourceIdentifierResourceTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['position-configurations'][':ResourceIdentifier#resourceType'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutPositionConfigurationsResourceIdentifierResourceType<
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
    getPutPositionConfigurationsResourceIdentifierResourceTypeMutationOptions<
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

export function usePostPositionEstimate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['position-estimate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['position-estimate']['$post']>,
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
  const mutationDefaults = getPostPositionEstimateMutationOptions<TError, TOnMutateResult>(
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

export function getEventConfigurationsIdentifierIdentifierTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations'][':Identifier#identifierType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'event-configurations',
    '/event-configurations/:Identifier#identifierType',
    keyArgs,
  ] as const
}

export function getEventConfigurationsIdentifierIdentifierTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations'][':Identifier#identifierType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventConfigurationsIdentifierIdentifierTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['event-configurations'][':Identifier#identifierType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventConfigurationsIdentifierIdentifierType<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations'][':Identifier#identifierType']['$get']>
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
                    (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
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
                    (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEventConfigurationsIdentifierIdentifierTypeQueryKey>
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
              (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventConfigurationsIdentifierIdentifierTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventConfigurationsIdentifierIdentifierTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['event-configurations'][':Identifier#identifierType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchEventConfigurationsIdentifierIdentifierType<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEventConfigurationsIdentifierIdentifierTypeMutationOptions<
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

export function getLogLevelsResourceIdentifierResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['log-levels', '/log-levels/:ResourceIdentifier#resourceType', keyArgs] as const
}

export function getLogLevelsResourceIdentifierResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogLevelsResourceIdentifierResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['log-levels'][':ResourceIdentifier#resourceType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogLevelsResourceIdentifierResourceType<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
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
                    (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']
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
                    (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLogLevelsResourceIdentifierResourceTypeQueryKey>
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
            ReturnType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogLevelsResourceIdentifierResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogLevelsResourceIdentifierResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['log-levels'][':ResourceIdentifier#resourceType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutLogLevelsResourceIdentifierResourceType<
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
                    (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']
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
  const mutationDefaults = getPutLogLevelsResourceIdentifierResourceTypeMutationOptions<
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

export function useDeleteLogLevelsResourceIdentifierResourceType<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLogLevelsResourceIdentifierResourceTypeMutationOptions<
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

export function getResourcePositionsResourceIdentifierResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'resource-positions',
    '/resource-positions/:ResourceIdentifier#resourceType',
    keyArgs,
  ] as const
}

export function getResourcePositionsResourceIdentifierResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcePositionsResourceIdentifierResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['resource-positions'][':ResourceIdentifier#resourceType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcePositionsResourceIdentifierResourceType<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
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
                    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
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
                    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getResourcePositionsResourceIdentifierResourceTypeQueryKey>
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
              (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcePositionsResourceIdentifierResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcePositionsResourceIdentifierResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['resource-positions'][':ResourceIdentifier#resourceType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchResourcePositionsResourceIdentifierResourceType<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchResourcePositionsResourceIdentifierResourceTypeMutationOptions<
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

export function getServiceEndpointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-endpoint']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['service-endpoint', '/service-endpoint', keyArgs] as const
}

export function getServiceEndpointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-endpoint']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['service-endpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['service-endpoint']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
            >
          >,
          ReturnType<typeof getServiceEndpointQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['service-endpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWirelessDevicesIdentifierIdentifierTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-devices', '/wireless-devices/:Identifier#identifierType', keyArgs] as const
}

export function getWirelessDevicesIdentifierIdentifierTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessDevicesIdentifierIdentifierTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-devices'][':Identifier#identifierType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessDevicesIdentifierIdentifierType<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
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
                    (typeof client)['wireless-devices'][':Identifier#identifierType']['$get']
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
                    (typeof client)['wireless-devices'][':Identifier#identifierType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWirelessDevicesIdentifierIdentifierTypeQueryKey>
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
            ReturnType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDevicesIdentifierIdentifierTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessDevicesIdentifierIdentifierTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-devices'][':Identifier#identifierType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWirelessDevicesIdStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-devices', '/wireless-devices/:Id/statistics', keyArgs] as const
}

export function getWirelessDevicesIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessDevicesIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-devices'][':Id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessDevicesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>
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
                  ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWirelessDevicesIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDevicesIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessDevicesIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-devices'][':Id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWirelessGatewaysIdentifierIdentifierTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-gateways', '/wireless-gateways/:Identifier#identifierType', keyArgs] as const
}

export function getWirelessGatewaysIdentifierIdentifierTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessGatewaysIdentifierIdentifierTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-gateways'][':Identifier#identifierType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessGatewaysIdentifierIdentifierType<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
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
                    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
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
                    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWirelessGatewaysIdentifierIdentifierTypeQueryKey>
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
            ReturnType<(typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdentifierIdentifierTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessGatewaysIdentifierIdentifierTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-gateways'][':Identifier#identifierType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWirelessGatewaysIdFirmwareInformationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-gateways', '/wireless-gateways/:Id/firmware-information', keyArgs] as const
}

export function getWirelessGatewaysIdFirmwareInformationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessGatewaysIdFirmwareInformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-gateways'][':Id']['firmware-information'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessGatewaysIdFirmwareInformation<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']>
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
                    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
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
                    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWirelessGatewaysIdFirmwareInformationQueryKey>
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
            ReturnType<(typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdFirmwareInformationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessGatewaysIdFirmwareInformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-gateways'][':Id']['firmware-information'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWirelessGatewaysIdStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-gateways', '/wireless-gateways/:Id/statistics', keyArgs] as const
}

export function getWirelessGatewaysIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessGatewaysIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-gateways'][':Id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessGatewaysIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>
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
                  ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWirelessGatewaysIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessGatewaysIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessGatewaysIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-gateways'][':Id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWirelessDeviceImportTaskId2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless_device_import_task#id', '/wireless_device_import_task#id', keyArgs] as const
}

export function getWirelessDeviceImportTaskId2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessDeviceImportTaskId2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless_device_import_task#id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessDeviceImportTaskId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWirelessDeviceImportTaskId2QueryKey>
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
          Awaited<ReturnType<(typeof client)['wireless_device_import_task#id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDeviceImportTaskId2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessDeviceImportTaskId2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless_device_import_task#id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventConfigurationsResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'event-configurations#resourceType',
    '/event-configurations#resourceType',
    keyArgs,
  ] as const
}

export function getEventConfigurationsResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventConfigurationsResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['event-configurations#resourceType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventConfigurationsResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventConfigurationsResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['event-configurations#resourceType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventConfigurationsResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventConfigurationsResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['event-configurations#resourceType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuotaTasksIdMulticastGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fuota-tasks', '/fuota-tasks/:Id/multicast-groups', keyArgs] as const
}

export function getFuotaTasksIdMulticastGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuotaTasksIdMulticastGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['fuota-tasks'][':Id']['multicast-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuotaTasksIdMulticastGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>
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
                  ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFuotaTasksIdMulticastGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuotaTasksIdMulticastGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuotaTasksIdMulticastGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['fuota-tasks'][':Id']['multicast-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPositionConfigurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['position-configurations']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['position-configurations', '/position-configurations', keyArgs] as const
}

export function getPositionConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['position-configurations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPositionConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['position-configurations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePositionConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['position-configurations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPositionConfigurationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['position-configurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPositionConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPositionConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['position-configurations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWirelessDevicesIdDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless-devices', '/wireless-devices/:Id/data', keyArgs] as const
}

export function getWirelessDevicesIdDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessDevicesIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wireless-devices'][':Id'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessDevicesIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWirelessDevicesIdDataQueryKey>
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
          Awaited<ReturnType<(typeof client)['wireless-devices'][':Id']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDevicesIdDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessDevicesIdDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wireless-devices'][':Id'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWirelessDevicesIdData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWirelessDevicesIdDataMutationOptions<TError, TOnMutateResult>(
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

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tags#resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tags#resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getWirelessDeviceImportTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wireless_device_import_tasks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wireless_device_import_tasks', '/wireless_device_import_tasks', keyArgs] as const
}

export function getWirelessDeviceImportTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wireless_device_import_tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWirelessDeviceImportTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wireless_device_import_tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWirelessDeviceImportTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wireless_device_import_tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>
              >
            >
          >,
          ReturnType<typeof getWirelessDeviceImportTasksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wireless_device_import_tasks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDeviceImportTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWirelessDeviceImportTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wireless_device_import_tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMulticastGroupsIdData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMulticastGroupsIdDataMutationOptions<TError, TOnMutateResult>(
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

export function usePostMulticastGroupsIdBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMulticastGroupsIdBulkMutationOptions<TError, TOnMutateResult>(
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

export function usePatchMulticastGroupsIdBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMulticastGroupsIdBulkMutationOptions<TError, TOnMutateResult>(
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

export function usePostWirelessSingleDeviceImportTask<
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
                Awaited<ReturnType<typeof client.wireless_single_device_import_task.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wireless_single_device_import_task.$post>,
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
  const mutationDefaults = getPostWirelessSingleDeviceImportTaskMutationOptions<
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

export function usePostWirelessDeviceImportTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWirelessDeviceImportTaskMutationOptions<TError, TOnMutateResult>(
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

export function usePostWirelessDevicesIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWirelessDevicesIdTestMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
