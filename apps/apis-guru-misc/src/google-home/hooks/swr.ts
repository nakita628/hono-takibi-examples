import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNOTICEHtmlGzKey() {
  return ['NOTICE.html.gz'] as const
}

export function getAssistantKey() {
  return ['assistant'] as const
}

export function getBluetoothKey() {
  return ['bluetooth'] as const
}

export function getConfiguredNetworksKey() {
  return ['configured_networks'] as const
}

export function getConnectWifiKey() {
  return ['connect_wifi'] as const
}

export function getEurekaInfoKey() {
  return ['eureka_info'] as const
}

export function getForgetWifiKey() {
  return ['forget_wifi'] as const
}

export function getGetAppDeviceIdKey() {
  return ['get_app_device_id'] as const
}

export function getIconPngKey() {
  return ['icon.png'] as const
}

export function getOfferKey() {
  return ['offer'] as const
}

export function getRebootKey() {
  return ['reboot'] as const
}

export function getScanResultsKey() {
  return ['scan_results'] as const
}

export function getScanWifiKey() {
  return ['scan_wifi'] as const
}

export function getSetEurekaInfoKey() {
  return ['set_eureka_info'] as const
}

export function getSupportedLocalesKey() {
  return ['supported_locales'] as const
}

export function getSupportedTimezonesKey() {
  return ['supported_timezones'] as const
}

export function getTestInternetDownloadSpeedKey() {
  return ['test_internet_download_speed'] as const
}

export function getUserEqKey() {
  return ['user_eq'] as const
}

export function getGetNOTICEHtmlGzKey() {
  return ['NOTICE.html.gz', '/NOTICE.html.gz'] as const
}

export function useGetNOTICEHtmlGz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['NOTICE.html.gz']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNOTICEHtmlGzKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['NOTICE.html.gz']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['NOTICE.html.gz'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNOTICEHtmlGz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['NOTICE.html.gz']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNOTICEHtmlGzKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['NOTICE.html.gz']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['NOTICE.html.gz'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssistantA11yModeKey() {
  return ['assistant', '/assistant/a11y_mode', 'POST'] as const
}

export function usePostAssistantA11yMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.a11y_mode.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.assistant.a11y_mode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantA11yModeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assistant.a11y_mode.$post> }) =>
        parseResponse(client.assistant.a11y_mode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssistantAlarmsKey() {
  return ['assistant', '/assistant/alarms'] as const
}

export function useGetAssistantAlarms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssistantAlarmsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistant.alarms.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssistantAlarms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssistantAlarmsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistant.alarms.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssistantAlarmsDeleteKey() {
  return ['assistant', '/assistant/alarms/delete', 'POST'] as const
}

export function usePostAssistantAlarmsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assistant.alarms.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantAlarmsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assistant.alarms.delete.$post> },
      ) => parseResponse(client.assistant.alarms.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssistantAlarmsVolumeKey() {
  return ['assistant', '/assistant/alarms/volume', 'POST'] as const
}

export function usePostAssistantAlarmsVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.volume.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assistant.alarms.volume.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantAlarmsVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assistant.alarms.volume.$post> },
      ) => parseResponse(client.assistant.alarms.volume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssistantCheckReadyStatusKey() {
  return ['assistant', '/assistant/check_ready_status', 'POST'] as const
}

export function usePostAssistantCheckReadyStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assistant.check_ready_status.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assistant.check_ready_status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantCheckReadyStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assistant.check_ready_status.$post> },
      ) => parseResponse(client.assistant.check_ready_status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssistantNotificationsKey() {
  return ['assistant', '/assistant/notifications', 'POST'] as const
}

export function usePostAssistantNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assistant.notifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assistant.notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assistant.notifications.$post> },
      ) => parseResponse(client.assistant.notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssistantSetNightModeParamsKey() {
  return ['assistant', '/assistant/set_night_mode_params', 'POST'] as const
}

export function usePostAssistantSetNightModeParams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assistant.set_night_mode_params.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assistant.set_night_mode_params.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantSetNightModeParamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assistant.set_night_mode_params.$post> },
      ) => parseResponse(client.assistant.set_night_mode_params.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBluetoothBondKey() {
  return ['bluetooth', '/bluetooth/bond', 'POST'] as const
}

export function usePostBluetoothBond<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.bond.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bluetooth.bond.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBluetoothBondKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bluetooth.bond.$post> }) =>
        parseResponse(client.bluetooth.bond.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBluetoothConnectKey() {
  return ['bluetooth', '/bluetooth/connect', 'POST'] as const
}

export function usePostBluetoothConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.connect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bluetooth.connect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBluetoothConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bluetooth.connect.$post> }) =>
        parseResponse(client.bluetooth.connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBluetoothDiscoveryKey() {
  return ['bluetooth', '/bluetooth/discovery', 'POST'] as const
}

export function usePostBluetoothDiscovery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.discovery.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bluetooth.discovery.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBluetoothDiscoveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bluetooth.discovery.$post> }) =>
        parseResponse(client.bluetooth.discovery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBluetoothGetBondedKey() {
  return ['bluetooth', '/bluetooth/get_bonded'] as const
}

export function useGetBluetoothGetBonded<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.get_bonded.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBluetoothGetBondedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.get_bonded.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bluetooth.get_bonded.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBluetoothGetBonded<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.get_bonded.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBluetoothGetBondedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.get_bonded.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bluetooth.get_bonded.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBluetoothScanKey() {
  return ['bluetooth', '/bluetooth/scan', 'POST'] as const
}

export function usePostBluetoothScan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bluetooth.scan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBluetoothScanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bluetooth.scan.$post> }) =>
        parseResponse(client.bluetooth.scan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBluetoothScanResultsKey() {
  return ['bluetooth', '/bluetooth/scan_results'] as const
}

export function useGetBluetoothScanResults<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan_results.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBluetoothScanResultsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan_results.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bluetooth.scan_results.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBluetoothScanResults<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan_results.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBluetoothScanResultsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan_results.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bluetooth.scan_results.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBluetoothStatusKey() {
  return ['bluetooth', '/bluetooth/status'] as const
}

export function useGetBluetoothStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBluetoothStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bluetooth.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBluetoothStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBluetoothStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bluetooth.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfiguredNetworksKey() {
  return ['configured_networks', '/configured_networks'] as const
}

export function useGetConfiguredNetworks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configured_networks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfiguredNetworksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configured_networks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configured_networks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfiguredNetworks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configured_networks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfiguredNetworksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configured_networks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configured_networks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConnectWifiKey() {
  return ['connect_wifi', '/connect_wifi', 'POST'] as const
}

export function usePostConnectWifi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect_wifi.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.connect_wifi.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectWifiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connect_wifi.$post> }) =>
        parseResponse(client.connect_wifi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEurekaInfoKey(args: InferRequestType<typeof client.eureka_info.$get>) {
  return ['eureka_info', '/eureka_info', args] as const
}

export function useGetEurekaInfo<TError = unknown>(
  args: InferRequestType<typeof client.eureka_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eureka_info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEurekaInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eureka_info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eureka_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEurekaInfo<TError = unknown>(
  args: InferRequestType<typeof client.eureka_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eureka_info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEurekaInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eureka_info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eureka_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostForgetWifiKey() {
  return ['forget_wifi', '/forget_wifi', 'POST'] as const
}

export function usePostForgetWifi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forget_wifi.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.forget_wifi.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForgetWifiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.forget_wifi.$post> }) =>
        parseResponse(client.forget_wifi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetAppDeviceIdKey() {
  return ['get_app_device_id', '/get_app_device_id', 'POST'] as const
}

export function usePostGetAppDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_app_device_id.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_app_device_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetAppDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.get_app_device_id.$post> }) =>
        parseResponse(client.get_app_device_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIconPngKey() {
  return ['icon.png', '/icon.png'] as const
}

export function useGetIconPng<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['icon.png']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIconPngKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['icon.png']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['icon.png'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIconPng<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['icon.png']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIconPngKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['icon.png']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['icon.png'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferKey() {
  return ['offer', '/offer'] as const
}

export function useGetOffer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOfferKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOfferKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRebootKey() {
  return ['reboot', '/reboot', 'POST'] as const
}

export function usePostReboot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reboot.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reboot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRebootKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reboot.$post> }) =>
        parseResponse(client.reboot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScanResultsKey() {
  return ['scan_results', '/scan_results'] as const
}

export function useGetScanResults<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_results.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScanResultsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_results.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scan_results.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScanResults<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_results.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScanResultsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_results.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scan_results.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScanWifiKey() {
  return ['scan_wifi', '/scan_wifi', 'POST'] as const
}

export function usePostScanWifi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_wifi.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScanWifiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.scan_wifi.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetEurekaInfoKey() {
  return ['set_eureka_info', '/set_eureka_info', 'POST'] as const
}

export function usePostSetEurekaInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.set_eureka_info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.set_eureka_info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetEurekaInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.set_eureka_info.$post> }) =>
        parseResponse(client.set_eureka_info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSupportedLocalesKey() {
  return ['supported_locales', '/supported_locales'] as const
}

export function useGetSupportedLocales<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_locales.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSupportedLocalesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_locales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supported_locales.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupportedLocales<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_locales.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSupportedLocalesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_locales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supported_locales.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSupportedTimezonesKey() {
  return ['supported_timezones', '/supported_timezones'] as const
}

export function useGetSupportedTimezones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_timezones.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSupportedTimezonesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.supported_timezones.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supported_timezones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupportedTimezones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_timezones.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSupportedTimezonesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.supported_timezones.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supported_timezones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTestInternetDownloadSpeedKey() {
  return ['test_internet_download_speed', '/test_internet_download_speed', 'POST'] as const
}

export function usePostTestInternetDownloadSpeed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.test_internet_download_speed.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.test_internet_download_speed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestInternetDownloadSpeedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.test_internet_download_speed.$post> },
      ) => parseResponse(client.test_internet_download_speed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserEqSetEqualizerKey() {
  return ['user_eq', '/user_eq/set_equalizer', 'POST'] as const
}

export function usePostUserEqSetEqualizer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_eq.set_equalizer.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_eq.set_equalizer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserEqSetEqualizerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_eq.set_equalizer.$post> },
      ) => parseResponse(client.user_eq.set_equalizer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
