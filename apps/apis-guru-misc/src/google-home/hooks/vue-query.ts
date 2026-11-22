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

export function getNOTICEHtmlGzQueryKey() {
  return ['NOTICE.html.gz', '/NOTICE.html.gz'] as const
}

export function getNOTICEHtmlGzQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNOTICEHtmlGzQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['NOTICE.html.gz'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNOTICEHtmlGz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['NOTICE.html.gz']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['NOTICE.html.gz']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['NOTICE.html.gz']['$get']>>>
            >
          >,
          ReturnType<typeof getNOTICEHtmlGzQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['NOTICE.html.gz']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNOTICEHtmlGzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNOTICEHtmlGzQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['NOTICE.html.gz'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssistantA11yModeMutationKey() {
  return ['assistant', '/assistant/a11y_mode', 'POST'] as const
}

export function getPostAssistantA11yModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.a11y_mode.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.assistant.a11y_mode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantA11yModeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assistant.a11y_mode.$post>) {
      return parseResponse(client.assistant.a11y_mode.$post(args, options))
    },
  })
}

export function usePostAssistantA11yMode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assistant.a11y_mode.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assistant.a11y_mode.$post>,
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
  const mutationDefaults = getPostAssistantA11yModeMutationOptions<TError, TOnMutateResult>(
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

export function getAssistantAlarmsQueryKey() {
  return ['assistant', '/assistant/alarms'] as const
}

export function getAssistantAlarmsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAssistantAlarmsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assistant.alarms.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssistantAlarms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.$get>>>
            >
          >,
          ReturnType<typeof getAssistantAlarmsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssistantAlarmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAssistantAlarmsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.assistant.alarms.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssistantAlarmsDeleteMutationKey() {
  return ['assistant', '/assistant/alarms/delete', 'POST'] as const
}

export function getPostAssistantAlarmsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assistant.alarms.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantAlarmsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assistant.alarms.delete.$post>) {
      return parseResponse(client.assistant.alarms.delete.$post(args, options))
    },
  })
}

export function usePostAssistantAlarmsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assistant.alarms.delete.$post>,
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
  const mutationDefaults = getPostAssistantAlarmsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssistantAlarmsVolumeMutationKey() {
  return ['assistant', '/assistant/alarms/volume', 'POST'] as const
}

export function getPostAssistantAlarmsVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.volume.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assistant.alarms.volume.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantAlarmsVolumeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assistant.alarms.volume.$post>) {
      return parseResponse(client.assistant.alarms.volume.$post(args, options))
    },
  })
}

export function usePostAssistantAlarmsVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assistant.alarms.volume.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assistant.alarms.volume.$post>,
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
  const mutationDefaults = getPostAssistantAlarmsVolumeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssistantCheckReadyStatusMutationKey() {
  return ['assistant', '/assistant/check_ready_status', 'POST'] as const
}

export function getPostAssistantCheckReadyStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assistant.check_ready_status.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assistant.check_ready_status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantCheckReadyStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assistant.check_ready_status.$post>) {
      return parseResponse(client.assistant.check_ready_status.$post(args, options))
    },
  })
}

export function usePostAssistantCheckReadyStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.assistant.check_ready_status.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assistant.check_ready_status.$post>,
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
  const mutationDefaults = getPostAssistantCheckReadyStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssistantNotificationsMutationKey() {
  return ['assistant', '/assistant/notifications', 'POST'] as const
}

export function getPostAssistantNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assistant.notifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assistant.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assistant.notifications.$post>) {
      return parseResponse(client.assistant.notifications.$post(args, options))
    },
  })
}

export function usePostAssistantNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assistant.notifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assistant.notifications.$post>,
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
  const mutationDefaults = getPostAssistantNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssistantSetNightModeParamsMutationKey() {
  return ['assistant', '/assistant/set_night_mode_params', 'POST'] as const
}

export function getPostAssistantSetNightModeParamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assistant.set_night_mode_params.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assistant.set_night_mode_params.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantSetNightModeParamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assistant.set_night_mode_params.$post>) {
      return parseResponse(client.assistant.set_night_mode_params.$post(args, options))
    },
  })
}

export function usePostAssistantSetNightModeParams<
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
                Awaited<ReturnType<typeof client.assistant.set_night_mode_params.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assistant.set_night_mode_params.$post>,
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
  const mutationDefaults = getPostAssistantSetNightModeParamsMutationOptions<
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

export function getPostBluetoothBondMutationKey() {
  return ['bluetooth', '/bluetooth/bond', 'POST'] as const
}

export function getPostBluetoothBondMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.bond.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bluetooth.bond.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBluetoothBondMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bluetooth.bond.$post>) {
      return parseResponse(client.bluetooth.bond.$post(args, options))
    },
  })
}

export function usePostBluetoothBond<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.bond.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bluetooth.bond.$post>,
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
  const mutationDefaults = getPostBluetoothBondMutationOptions<TError, TOnMutateResult>(
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

export function getPostBluetoothConnectMutationKey() {
  return ['bluetooth', '/bluetooth/connect', 'POST'] as const
}

export function getPostBluetoothConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.connect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bluetooth.connect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBluetoothConnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bluetooth.connect.$post>) {
      return parseResponse(client.bluetooth.connect.$post(args, options))
    },
  })
}

export function usePostBluetoothConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.connect.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bluetooth.connect.$post>,
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
  const mutationDefaults = getPostBluetoothConnectMutationOptions<TError, TOnMutateResult>(
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

export function getPostBluetoothDiscoveryMutationKey() {
  return ['bluetooth', '/bluetooth/discovery', 'POST'] as const
}

export function getPostBluetoothDiscoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.discovery.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bluetooth.discovery.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBluetoothDiscoveryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bluetooth.discovery.$post>) {
      return parseResponse(client.bluetooth.discovery.$post(args, options))
    },
  })
}

export function usePostBluetoothDiscovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.discovery.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bluetooth.discovery.$post>,
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
  const mutationDefaults = getPostBluetoothDiscoveryMutationOptions<TError, TOnMutateResult>(
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

export function getBluetoothGetBondedQueryKey() {
  return ['bluetooth', '/bluetooth/get_bonded'] as const
}

export function getBluetoothGetBondedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBluetoothGetBondedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bluetooth.get_bonded.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBluetoothGetBonded<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.get_bonded.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.get_bonded.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.get_bonded.$get>>>
            >
          >,
          ReturnType<typeof getBluetoothGetBondedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.get_bonded.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBluetoothGetBondedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBluetoothGetBondedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.bluetooth.get_bonded.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBluetoothScanMutationKey() {
  return ['bluetooth', '/bluetooth/scan', 'POST'] as const
}

export function getPostBluetoothScanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bluetooth.scan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBluetoothScanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bluetooth.scan.$post>) {
      return parseResponse(client.bluetooth.scan.$post(args, options))
    },
  })
}

export function usePostBluetoothScan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bluetooth.scan.$post>,
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
  const mutationDefaults = getPostBluetoothScanMutationOptions<TError, TOnMutateResult>(
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

export function getBluetoothScanResultsQueryKey() {
  return ['bluetooth', '/bluetooth/scan_results'] as const
}

export function getBluetoothScanResultsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBluetoothScanResultsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bluetooth.scan_results.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBluetoothScanResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan_results.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan_results.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan_results.$get>>>
            >
          >,
          ReturnType<typeof getBluetoothScanResultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.scan_results.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBluetoothScanResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBluetoothScanResultsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.bluetooth.scan_results.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBluetoothStatusQueryKey() {
  return ['bluetooth', '/bluetooth/status'] as const
}

export function getBluetoothStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBluetoothStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bluetooth.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBluetoothStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.status.$get>>>
            >
          >,
          ReturnType<typeof getBluetoothStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bluetooth.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBluetoothStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBluetoothStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.bluetooth.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfiguredNetworksQueryKey() {
  return ['configured_networks', '/configured_networks'] as const
}

export function getConfiguredNetworksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfiguredNetworksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.configured_networks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfiguredNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configured_networks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.configured_networks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.configured_networks.$get>>>
            >
          >,
          ReturnType<typeof getConfiguredNetworksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configured_networks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfiguredNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfiguredNetworksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.configured_networks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConnectWifiMutationKey() {
  return ['connect_wifi', '/connect_wifi', 'POST'] as const
}

export function getPostConnectWifiMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect_wifi.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.connect_wifi.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectWifiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connect_wifi.$post>) {
      return parseResponse(client.connect_wifi.$post(args, options))
    },
  })
}

export function usePostConnectWifi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect_wifi.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.connect_wifi.$post>,
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
  const mutationDefaults = getPostConnectWifiMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEurekaInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eureka_info.$get>>,
) {
  return ['eureka_info', '/eureka_info', toValue(args)] as const
}

export function getEurekaInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eureka_info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEurekaInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eureka_info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEurekaInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eureka_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eureka_info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eureka_info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eureka_info.$get>>>>
          >,
          ReturnType<typeof getEurekaInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eureka_info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEurekaInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEurekaInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eureka_info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostForgetWifiMutationKey() {
  return ['forget_wifi', '/forget_wifi', 'POST'] as const
}

export function getPostForgetWifiMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forget_wifi.$post>>>>>,
    TError,
    InferRequestType<typeof client.forget_wifi.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostForgetWifiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.forget_wifi.$post>) {
      return parseResponse(client.forget_wifi.$post(args, options))
    },
  })
}

export function usePostForgetWifi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forget_wifi.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.forget_wifi.$post>,
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
  const mutationDefaults = getPostForgetWifiMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetAppDeviceIdMutationKey() {
  return ['get_app_device_id', '/get_app_device_id', 'POST'] as const
}

export function getPostGetAppDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_app_device_id.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.get_app_device_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetAppDeviceIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_app_device_id.$post>) {
      return parseResponse(client.get_app_device_id.$post(args, options))
    },
  })
}

export function usePostGetAppDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_app_device_id.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.get_app_device_id.$post>,
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
  const mutationDefaults = getPostGetAppDeviceIdMutationOptions<TError, TOnMutateResult>(
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

export function getIconPngQueryKey() {
  return ['icon.png', '/icon.png'] as const
}

export function getIconPngQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIconPngQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['icon.png'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIconPng<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['icon.png']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['icon.png']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['icon.png']['$get']>>>
            >
          >,
          ReturnType<typeof getIconPngQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['icon.png']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIconPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIconPngQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['icon.png'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferQueryKey() {
  return ['offer', '/offer'] as const
}

export function getOfferQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOfferQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOffer<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer.$get>>>>>,
          ReturnType<typeof getOfferQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOfferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOfferQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.offer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRebootMutationKey() {
  return ['reboot', '/reboot', 'POST'] as const
}

export function getPostRebootMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reboot.$post>>>>>,
    TError,
    InferRequestType<typeof client.reboot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRebootMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reboot.$post>) {
      return parseResponse(client.reboot.$post(args, options))
    },
  })
}

export function usePostReboot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reboot.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reboot.$post>,
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
  const mutationDefaults = getPostRebootMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScanResultsQueryKey() {
  return ['scan_results', '/scan_results'] as const
}

export function getScanResultsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getScanResultsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scan_results.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useScanResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_results.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_results.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_results.$get>>>>
          >,
          ReturnType<typeof getScanResultsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_results.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScanResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getScanResultsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.scan_results.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostScanWifiMutationKey() {
  return ['scan_wifi', '/scan_wifi', 'POST'] as const
}

export function getPostScanWifiMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_wifi.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostScanWifiMutationKey(),
    async mutationFn() {
      return parseResponse(client.scan_wifi.$post(undefined, options))
    },
  })
}

export function usePostScanWifi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scan_wifi.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostScanWifiMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetEurekaInfoMutationKey() {
  return ['set_eureka_info', '/set_eureka_info', 'POST'] as const
}

export function getPostSetEurekaInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.set_eureka_info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.set_eureka_info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetEurekaInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.set_eureka_info.$post>) {
      return parseResponse(client.set_eureka_info.$post(args, options))
    },
  })
}

export function usePostSetEurekaInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.set_eureka_info.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.set_eureka_info.$post>,
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
  const mutationDefaults = getPostSetEurekaInfoMutationOptions<TError, TOnMutateResult>(
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

export function getSupportedLocalesQueryKey() {
  return ['supported_locales', '/supported_locales'] as const
}

export function getSupportedLocalesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSupportedLocalesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.supported_locales.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupportedLocales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_locales.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.supported_locales.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.supported_locales.$get>>>
            >
          >,
          ReturnType<typeof getSupportedLocalesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_locales.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSupportedLocalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSupportedLocalesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.supported_locales.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSupportedTimezonesQueryKey() {
  return ['supported_timezones', '/supported_timezones'] as const
}

export function getSupportedTimezonesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSupportedTimezonesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.supported_timezones.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupportedTimezones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_timezones.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.supported_timezones.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.supported_timezones.$get>>>
            >
          >,
          ReturnType<typeof getSupportedTimezonesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_timezones.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSupportedTimezonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSupportedTimezonesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.supported_timezones.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTestInternetDownloadSpeedMutationKey() {
  return ['test_internet_download_speed', '/test_internet_download_speed', 'POST'] as const
}

export function getPostTestInternetDownloadSpeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.test_internet_download_speed.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.test_internet_download_speed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestInternetDownloadSpeedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test_internet_download_speed.$post>) {
      return parseResponse(client.test_internet_download_speed.$post(args, options))
    },
  })
}

export function usePostTestInternetDownloadSpeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.test_internet_download_speed.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.test_internet_download_speed.$post>,
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
  const mutationDefaults = getPostTestInternetDownloadSpeedMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserEqSetEqualizerMutationKey() {
  return ['user_eq', '/user_eq/set_equalizer', 'POST'] as const
}

export function getPostUserEqSetEqualizerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_eq.set_equalizer.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_eq.set_equalizer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserEqSetEqualizerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_eq.set_equalizer.$post>) {
      return parseResponse(client.user_eq.set_equalizer.$post(args, options))
    },
  })
}

export function usePostUserEqSetEqualizer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_eq.set_equalizer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user_eq.set_equalizer.$post>,
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
  const mutationDefaults = getPostUserEqSetEqualizerMutationOptions<TError, TOnMutateResult>(
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
