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

export function getAccessSettingsKey() {
  return ['access_settings'] as const
}

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getApiKeysKey() {
  return ['api_keys'] as const
}

export function getAsmKey() {
  return ['asm'] as const
}

export function getBrowsersKey() {
  return ['browsers'] as const
}

export function getCampaignsKey() {
  return ['campaigns'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getClientsKey() {
  return ['clients'] as const
}

export function getContactdbKey() {
  return ['contactdb'] as const
}

export function getDesignsKey() {
  return ['designs'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getGeoKey() {
  return ['geo'] as const
}

export function getIpsKey() {
  return ['ips'] as const
}

export function getMailKey() {
  return ['mail'] as const
}

export function getMailSettingsKey() {
  return ['mail_settings'] as const
}

export function getMailboxProvidersKey() {
  return ['mailbox_providers'] as const
}

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getPartnerSettingsKey() {
  return ['partner_settings'] as const
}

export function getScopesKey() {
  return ['scopes'] as const
}

export function getSendersKey() {
  return ['senders'] as const
}

export function getSsoKey() {
  return ['sso'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getSubusersKey() {
  return ['subusers'] as const
}

export function getSuppressionKey() {
  return ['suppression'] as const
}

export function getTeammatesKey() {
  return ['teammates'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getTrackingSettingsKey() {
  return ['tracking_settings'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getValidationsKey() {
  return ['validations'] as const
}

export function getVerifiedSendersKey() {
  return ['verified_senders'] as const
}

export function getWhitelabelKey() {
  return ['whitelabel'] as const
}

export function getAccessSettingsActivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.access_settings.activity.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['access_settings', '/access_settings/activity', keyArgs] as const
}

export function getAccessSettingsActivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.access_settings.activity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessSettingsActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.access_settings.activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessSettingsActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.access_settings.activity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
            >
          >,
          ReturnType<typeof getAccessSettingsActivityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessSettingsActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessSettingsActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.access_settings.activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccessSettingsWhitelistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.access_settings.whitelist.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['access_settings', '/access_settings/whitelist', keyArgs] as const
}

export function getAccessSettingsWhitelistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.access_settings.whitelist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessSettingsWhitelistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.access_settings.whitelist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessSettingsWhitelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.access_settings.whitelist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>
              >
            >
          >,
          ReturnType<typeof getAccessSettingsWhitelistQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessSettingsWhitelistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessSettingsWhitelistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.access_settings.whitelist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccessSettingsWhitelistMutationKey() {
  return ['access_settings', '/access_settings/whitelist', 'POST'] as const
}

export function getPostAccessSettingsWhitelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.access_settings.whitelist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessSettingsWhitelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.access_settings.whitelist.$post>) {
      return parseResponse(client.access_settings.whitelist.$post(args, options))
    },
  })
}

export function usePostAccessSettingsWhitelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.access_settings.whitelist.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.access_settings.whitelist.$post>,
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
  const mutationDefaults = getPostAccessSettingsWhitelistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccessSettingsWhitelistMutationKey() {
  return ['access_settings', '/access_settings/whitelist', 'DELETE'] as const
}

export function getDeleteAccessSettingsWhitelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.access_settings.whitelist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccessSettingsWhitelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.access_settings.whitelist.$delete>) {
      return parseResponse(client.access_settings.whitelist.$delete(args, options))
    },
  })
}

export function useDeleteAccessSettingsWhitelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.access_settings.whitelist.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.access_settings.whitelist.$delete>,
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
  const mutationDefaults = getDeleteAccessSettingsWhitelistMutationOptions<TError, TOnMutateResult>(
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

export function getAccessSettingsWhitelistRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['access_settings', '/access_settings/whitelist/:rule_id', keyArgs] as const
}

export function getAccessSettingsWhitelistRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessSettingsWhitelistRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.access_settings.whitelist[':rule_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessSettingsWhitelistRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccessSettingsWhitelistRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessSettingsWhitelistRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessSettingsWhitelistRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.access_settings.whitelist[':rule_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccessSettingsWhitelistRuleIdMutationKey() {
  return ['access_settings', '/access_settings/whitelist/:rule_id', 'DELETE'] as const
}

export function getDeleteAccessSettingsWhitelistRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccessSettingsWhitelistRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>,
    ) {
      return parseResponse(client.access_settings.whitelist[':rule_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccessSettingsWhitelistRuleId<
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
                    ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccessSettingsWhitelistRuleIdMutationOptions<
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

export function getAlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['alerts', '/alerts', keyArgs] as const
}

export function getAlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          ReturnType<typeof getAlertsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAlertsMutationKey() {
  return ['alerts', '/alerts', 'POST'] as const
}

export function getPostAlertsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$post>>>>>,
    TError,
    InferRequestType<typeof client.alerts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.$post>) {
      return parseResponse(client.alerts.$post(args, options))
    },
  })
}

export function usePostAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.alerts.$post>,
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
  const mutationDefaults = getPostAlertsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlertsAlertIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alert_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['alerts', '/alerts/:alert_id', keyArgs] as const
}

export function getAlertsAlertIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alert_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsAlertIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts[':alert_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alert_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
            >
          >,
          ReturnType<typeof getAlertsAlertIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsAlertIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts[':alert_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAlertsAlertIdMutationKey() {
  return ['alerts', '/alerts/:alert_id', 'DELETE'] as const
}

export function getDeleteAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.alerts)[':alert_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAlertsAlertIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.alerts)[':alert_id']['$delete']>) {
      return parseResponse(client.alerts[':alert_id'].$delete(args, options))
    },
  })
}

export function useDeleteAlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.alerts)[':alert_id']['$delete']>,
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
  const mutationDefaults = getDeleteAlertsAlertIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAlertsAlertIdMutationKey() {
  return ['alerts', '/alerts/:alert_id', 'PATCH'] as const
}

export function getPatchAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.alerts)[':alert_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAlertsAlertIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.alerts)[':alert_id']['$patch']>) {
      return parseResponse(client.alerts[':alert_id'].$patch(args, options))
    },
  })
}

export function usePatchAlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.alerts)[':alert_id']['$patch']>,
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
  const mutationDefaults = getPatchAlertsAlertIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_keys.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api_keys', '/api_keys', keyArgs] as const
}

export function getApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_keys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
          >,
          ReturnType<typeof getApiKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeysMutationKey() {
  return ['api_keys', '/api_keys', 'POST'] as const
}

export function getPostApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_keys.$post>) {
      return parseResponse(client.api_keys.$post(args, options))
    },
  })
}

export function usePostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api_keys.$post>,
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
  const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiKeysApiKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api_keys', '/api_keys/:api_key_id', keyArgs] as const
}

export function getApiKeysApiKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysApiKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_keys[':api_key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeysApiKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeysApiKeyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysApiKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysApiKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_keys[':api_key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiKeysApiKeyIdMutationKey() {
  return ['api_keys', '/api_keys/:api_key_id', 'PUT'] as const
}

export function getPutApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':api_key_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiKeysApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$put']>) {
      return parseResponse(client.api_keys[':api_key_id'].$put(args, options))
    },
  })
}

export function usePutApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':api_key_id']['$put']>,
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
  const mutationDefaults = getPutApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiKeysApiKeyIdMutationKey() {
  return ['api_keys', '/api_keys/:api_key_id', 'DELETE'] as const
}

export function getDeleteApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api_keys)[':api_key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$delete']>) {
      return parseResponse(client.api_keys[':api_key_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api_keys)[':api_key_id']['$delete']>,
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
  const mutationDefaults = getDeleteApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiKeysApiKeyIdMutationKey() {
  return ['api_keys', '/api_keys/:api_key_id', 'PATCH'] as const
}

export function getPatchApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':api_key_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiKeysApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$patch']>) {
      return parseResponse(client.api_keys[':api_key_id'].$patch(args, options))
    },
  })
}

export function usePatchApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':api_key_id']['$patch']>,
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
  const mutationDefaults = getPatchApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getAsmGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asm.groups.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asm', '/asm/groups', keyArgs] as const
}

export function getAsmGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asm.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAsmGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asm.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAsmGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asm.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>
          >,
          ReturnType<typeof getAsmGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAsmGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAsmGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asm.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAsmGroupsMutationKey() {
  return ['asm', '/asm/groups', 'POST'] as const
}

export function getPostAsmGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.asm.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAsmGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asm.groups.$post>) {
      return parseResponse(client.asm.groups.$post(args, options))
    },
  })
}

export function usePostAsmGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.asm.groups.$post>,
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
  const mutationDefaults = getPostAsmGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAsmGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asm', '/asm/groups/:group_id', keyArgs] as const
}

export function getAsmGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAsmGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asm.groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAsmGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAsmGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAsmGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAsmGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asm.groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAsmGroupsGroupIdMutationKey() {
  return ['asm', '/asm/groups/:group_id', 'DELETE'] as const
}

export function getDeleteAsmGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.asm.groups)[':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAsmGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.asm.groups)[':group_id']['$delete']>) {
      return parseResponse(client.asm.groups[':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteAsmGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.asm.groups)[':group_id']['$delete']>,
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
  const mutationDefaults = getDeleteAsmGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAsmGroupsGroupIdMutationKey() {
  return ['asm', '/asm/groups/:group_id', 'PATCH'] as const
}

export function getPatchAsmGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.asm.groups)[':group_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAsmGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.asm.groups)[':group_id']['$patch']>) {
      return parseResponse(client.asm.groups[':group_id'].$patch(args, options))
    },
  })
}

export function usePatchAsmGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.asm.groups)[':group_id']['$patch']>,
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
  const mutationDefaults = getPatchAsmGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getAsmGroupsGroupIdSuppressionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asm', '/asm/groups/:group_id/suppressions', keyArgs] as const
}

export function getAsmGroupsGroupIdSuppressionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAsmGroupsGroupIdSuppressionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asm.groups[':group_id'].suppressions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAsmGroupsGroupIdSuppressions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAsmGroupsGroupIdSuppressionsQueryKey>
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
          Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAsmGroupsGroupIdSuppressionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAsmGroupsGroupIdSuppressionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asm.groups[':group_id'].suppressions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAsmGroupsGroupIdSuppressionsMutationKey() {
  return ['asm', '/asm/groups/:group_id/suppressions', 'POST'] as const
}

export function getPostAsmGroupsGroupIdSuppressionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAsmGroupsGroupIdSuppressionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>,
    ) {
      return parseResponse(client.asm.groups[':group_id'].suppressions.$post(args, options))
    },
  })
}

export function usePostAsmGroupsGroupIdSuppressions<
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
                  ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>,
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
  const mutationDefaults = getPostAsmGroupsGroupIdSuppressionsMutationOptions<
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

export function getPostAsmGroupsGroupIdSuppressionsSearchMutationKey() {
  return ['asm', '/asm/groups/:group_id/suppressions/search', 'POST'] as const
}

export function getPostAsmGroupsGroupIdSuppressionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAsmGroupsGroupIdSuppressionsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.asm.groups)[':group_id']['suppressions']['search']['$post']
      >,
    ) {
      return parseResponse(client.asm.groups[':group_id'].suppressions.search.$post(args, options))
    },
  })
}

export function usePostAsmGroupsGroupIdSuppressionsSearch<
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
                    (typeof client.asm.groups)[':group_id']['suppressions']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.asm.groups)[':group_id']['suppressions']['search']['$post']
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
  const mutationDefaults = getPostAsmGroupsGroupIdSuppressionsSearchMutationOptions<
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

export function getDeleteAsmGroupsGroupIdSuppressionsEmailMutationKey() {
  return ['asm', '/asm/groups/:group_id/suppressions/:email', 'DELETE'] as const
}

export function getDeleteAsmGroupsGroupIdSuppressionsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.asm.groups)[':group_id']['suppressions'][':email']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions'][':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAsmGroupsGroupIdSuppressionsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.asm.groups)[':group_id']['suppressions'][':email']['$delete']
      >,
    ) {
      return parseResponse(
        client.asm.groups[':group_id'].suppressions[':email'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAsmGroupsGroupIdSuppressionsEmail<
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
                      (typeof client.asm.groups)[':group_id']['suppressions'][':email']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.asm.groups)[':group_id']['suppressions'][':email']['$delete']
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
  const mutationDefaults = getDeleteAsmGroupsGroupIdSuppressionsEmailMutationOptions<
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

export function getAsmSuppressionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asm.suppressions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asm', '/asm/suppressions', keyArgs] as const
}

export function getAsmSuppressionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asm.suppressions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAsmSuppressionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asm.suppressions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAsmSuppressions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asm.suppressions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>
            >
          >,
          ReturnType<typeof getAsmSuppressionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAsmSuppressionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAsmSuppressionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asm.suppressions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAsmSuppressionsGlobalMutationKey() {
  return ['asm', '/asm/suppressions/global', 'POST'] as const
}

export function getPostAsmSuppressionsGlobalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.global.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.asm.suppressions.global.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAsmSuppressionsGlobalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asm.suppressions.global.$post>) {
      return parseResponse(client.asm.suppressions.global.$post(args, options))
    },
  })
}

export function usePostAsmSuppressionsGlobal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.global.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.asm.suppressions.global.$post>,
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
  const mutationDefaults = getPostAsmSuppressionsGlobalMutationOptions<TError, TOnMutateResult>(
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

export function getAsmSuppressionsGlobalEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asm', '/asm/suppressions/global/:email', keyArgs] as const
}

export function getAsmSuppressionsGlobalEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAsmSuppressionsGlobalEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asm.suppressions.global[':email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAsmSuppressionsGlobalEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAsmSuppressionsGlobalEmailQueryKey>
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
          Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAsmSuppressionsGlobalEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAsmSuppressionsGlobalEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asm.suppressions.global[':email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAsmSuppressionsGlobalEmailMutationKey() {
  return ['asm', '/asm/suppressions/global/:email', 'DELETE'] as const
}

export function getDeleteAsmSuppressionsGlobalEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.asm.suppressions.global)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAsmSuppressionsGlobalEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$delete']>,
    ) {
      return parseResponse(client.asm.suppressions.global[':email'].$delete(args, options))
    },
  })
}

export function useDeleteAsmSuppressionsGlobalEmail<
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
                  Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.asm.suppressions.global)[':email']['$delete']>,
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
  const mutationDefaults = getDeleteAsmSuppressionsGlobalEmailMutationOptions<
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

export function getAsmSuppressionsEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asm', '/asm/suppressions/:email', keyArgs] as const
}

export function getAsmSuppressionsEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAsmSuppressionsEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asm.suppressions[':email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAsmSuppressionsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAsmSuppressionsEmailQueryKey>
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
          Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAsmSuppressionsEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAsmSuppressionsEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asm.suppressions[':email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrowsersStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browsers.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['browsers', '/browsers/stats', keyArgs] as const
}

export function getBrowsersStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browsers.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowsersStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browsers.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowsersStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browsers.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
          >,
          ReturnType<typeof getBrowsersStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrowsersStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowsersStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browsers.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCampaignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['campaigns', '/campaigns', keyArgs] as const
}

export function getCampaignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaigns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
          >,
          ReturnType<typeof getCampaignsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCampaignsMutationKey() {
  return ['campaigns', '/campaigns', 'POST'] as const
}

export function getPostCampaignsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>>,
    TError,
    InferRequestType<typeof client.campaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.campaigns.$post>) {
      return parseResponse(client.campaigns.$post(args, options))
    },
  })
}

export function usePostCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.campaigns.$post>,
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
  const mutationDefaults = getPostCampaignsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCampaignsCampaignIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['campaigns', '/campaigns/:campaign_id', keyArgs] as const
}

export function getCampaignsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaigns[':campaign_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCampaignsCampaignIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaigns[':campaign_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCampaignsCampaignIdMutationKey() {
  return ['campaigns', '/campaigns/:campaign_id', 'DELETE'] as const
}

export function getDeleteCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCampaignsCampaignIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$delete']>) {
      return parseResponse(client.campaigns[':campaign_id'].$delete(args, options))
    },
  })
}

export function useDeleteCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.campaigns)[':campaign_id']['$delete']>,
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
  const mutationDefaults = getDeleteCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCampaignsCampaignIdMutationKey() {
  return ['campaigns', '/campaigns/:campaign_id', 'PATCH'] as const
}

export function getPatchCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCampaignsCampaignIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$patch']>) {
      return parseResponse(client.campaigns[':campaign_id'].$patch(args, options))
    },
  })
}

export function usePatchCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':campaign_id']['$patch']>,
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
  const mutationDefaults = getPatchCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getCampaignsCampaignIdSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['campaigns', '/campaigns/:campaign_id/schedules', keyArgs] as const
}

export function getCampaignsCampaignIdSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignsCampaignIdSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaigns[':campaign_id'].schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCampaignsCampaignIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCampaignsCampaignIdSchedulesQueryKey>
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
          Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsCampaignIdSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignsCampaignIdSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaigns[':campaign_id'].schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCampaignsCampaignIdSchedulesMutationKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules', 'POST'] as const
}

export function getPostCampaignsCampaignIdSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsCampaignIdSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>,
    ) {
      return parseResponse(client.campaigns[':campaign_id'].schedules.$post(args, options))
    },
  })
}

export function usePostCampaignsCampaignIdSchedules<
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
                Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>,
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
  const mutationDefaults = getPostCampaignsCampaignIdSchedulesMutationOptions<
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

export function getDeleteCampaignsCampaignIdSchedulesMutationKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules', 'DELETE'] as const
}

export function getDeleteCampaignsCampaignIdSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCampaignsCampaignIdSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>,
    ) {
      return parseResponse(client.campaigns[':campaign_id'].schedules.$delete(args, options))
    },
  })
}

export function useDeleteCampaignsCampaignIdSchedules<
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
                    ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>,
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
  const mutationDefaults = getDeleteCampaignsCampaignIdSchedulesMutationOptions<
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

export function getPatchCampaignsCampaignIdSchedulesMutationKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules', 'PATCH'] as const
}

export function getPatchCampaignsCampaignIdSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCampaignsCampaignIdSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>,
    ) {
      return parseResponse(client.campaigns[':campaign_id'].schedules.$patch(args, options))
    },
  })
}

export function usePatchCampaignsCampaignIdSchedules<
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
                  ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>,
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
  const mutationDefaults = getPatchCampaignsCampaignIdSchedulesMutationOptions<
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

export function getPostCampaignsCampaignIdSchedulesNowMutationKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules/now', 'POST'] as const
}

export function getPostCampaignsCampaignIdSchedulesNowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsCampaignIdSchedulesNowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']
      >,
    ) {
      return parseResponse(client.campaigns[':campaign_id'].schedules.now.$post(args, options))
    },
  })
}

export function usePostCampaignsCampaignIdSchedulesNow<
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
                  ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']>,
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
  const mutationDefaults = getPostCampaignsCampaignIdSchedulesNowMutationOptions<
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

export function getPostCampaignsCampaignIdSchedulesTestMutationKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules/test', 'POST'] as const
}

export function getPostCampaignsCampaignIdSchedulesTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['test']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsCampaignIdSchedulesTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.campaigns)[':campaign_id']['schedules']['test']['$post']
      >,
    ) {
      return parseResponse(client.campaigns[':campaign_id'].schedules.test.$post(args, options))
    },
  })
}

export function usePostCampaignsCampaignIdSchedulesTest<
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
                      (typeof client.campaigns)[':campaign_id']['schedules']['test']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['test']['$post']>,
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
  const mutationDefaults = getPostCampaignsCampaignIdSchedulesTestMutationOptions<
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

export function getCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['categories', '/categories', keyArgs] as const
}

export function getCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['categories', '/categories/stats', keyArgs] as const
}

export function getCategoriesStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>
            >
          >,
          ReturnType<typeof getCategoriesStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesStatsSumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.stats.sums.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['categories', '/categories/stats/sums', keyArgs] as const
}

export function getCategoriesStatsSumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.stats.sums.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesStatsSumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.stats.sums.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesStatsSums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.stats.sums.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
            >
          >,
          ReturnType<typeof getCategoriesStatsSumsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesStatsSumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesStatsSumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.stats.sums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientsStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clients', '/clients/stats', keyArgs] as const
}

export function getClientsStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
          >,
          ReturnType<typeof getClientsStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientsStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientsClientTypeStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clients', '/clients/:client_type/stats', keyArgs] as const
}

export function getClientsClientTypeStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsClientTypeStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients[':client_type'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsClientTypeStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClientsClientTypeStatsQueryKey>
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
          Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsClientTypeStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsClientTypeStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients[':client_type'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactdbCustomFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.custom_fields.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/custom_fields', keyArgs] as const
}

export function getContactdbCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.custom_fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.custom_fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.custom_fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
            >
          >,
          ReturnType<typeof getContactdbCustomFieldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.custom_fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactdbCustomFieldsMutationKey() {
  return ['contactdb', '/contactdb/custom_fields', 'POST'] as const
}

export function getPostContactdbCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contactdb.custom_fields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactdbCustomFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contactdb.custom_fields.$post>) {
      return parseResponse(client.contactdb.custom_fields.$post(args, options))
    },
  })
}

export function usePostContactdbCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contactdb.custom_fields.$post>,
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
  const mutationDefaults = getPostContactdbCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getContactdbCustomFieldsCustomFieldIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/custom_fields/:custom_field_id', keyArgs] as const
}

export function getContactdbCustomFieldsCustomFieldIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbCustomFieldsCustomFieldIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.custom_fields[':custom_field_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbCustomFieldsCustomFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>
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
                  ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContactdbCustomFieldsCustomFieldIdQueryKey>
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
          Awaited<ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbCustomFieldsCustomFieldIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbCustomFieldsCustomFieldIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.custom_fields[':custom_field_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteContactdbCustomFieldsCustomFieldIdMutationKey() {
  return ['contactdb', '/contactdb/custom_fields/:custom_field_id', 'DELETE'] as const
}

export function getDeleteContactdbCustomFieldsCustomFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactdbCustomFieldsCustomFieldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.contactdb.custom_fields[':custom_field_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContactdbCustomFieldsCustomFieldId<
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
                  ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']>,
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
  const mutationDefaults = getDeleteContactdbCustomFieldsCustomFieldIdMutationOptions<
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

export function getContactdbListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.lists.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/lists', keyArgs] as const
}

export function getContactdbListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.lists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.lists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>
            >
          >,
          ReturnType<typeof getContactdbListsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactdbListsMutationKey() {
  return ['contactdb', '/contactdb/lists', 'POST'] as const
}

export function getPostContactdbListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contactdb.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactdbListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contactdb.lists.$post>) {
      return parseResponse(client.contactdb.lists.$post(args, options))
    },
  })
}

export function usePostContactdbLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contactdb.lists.$post>,
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
  const mutationDefaults = getPostContactdbListsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteContactdbListsMutationKey() {
  return ['contactdb', '/contactdb/lists', 'DELETE'] as const
}

export function getDeleteContactdbListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.contactdb.lists.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactdbListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contactdb.lists.$delete>) {
      return parseResponse(client.contactdb.lists.$delete(args, options))
    },
  })
}

export function useDeleteContactdbLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.contactdb.lists.$delete>,
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
  const mutationDefaults = getDeleteContactdbListsMutationOptions<TError, TOnMutateResult>(
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

export function getContactdbListsListIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/lists/:list_id', keyArgs] as const
}

export function getContactdbListsListIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbListsListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.lists[':list_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbListsListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactdbListsListIdQueryKey>
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
          Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbListsListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbListsListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.lists[':list_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteContactdbListsListIdMutationKey() {
  return ['contactdb', '/contactdb/lists/:list_id', 'DELETE'] as const
}

export function getDeleteContactdbListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactdbListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$delete']>,
    ) {
      return parseResponse(client.contactdb.lists[':list_id'].$delete(args, options))
    },
  })
}

export function useDeleteContactdbListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contactdb.lists)[':list_id']['$delete']>,
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
  const mutationDefaults = getDeleteContactdbListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchContactdbListsListIdMutationKey() {
  return ['contactdb', '/contactdb/lists/:list_id', 'PATCH'] as const
}

export function getPatchContactdbListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactdbListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$patch']>,
    ) {
      return parseResponse(client.contactdb.lists[':list_id'].$patch(args, options))
    },
  })
}

export function usePatchContactdbListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contactdb.lists)[':list_id']['$patch']>,
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
  const mutationDefaults = getPatchContactdbListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function getContactdbListsListIdRecipientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/lists/:list_id/recipients', keyArgs] as const
}

export function getContactdbListsListIdRecipientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbListsListIdRecipientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.lists[':list_id'].recipients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbListsListIdRecipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>
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
                  ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContactdbListsListIdRecipientsQueryKey>
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
          Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbListsListIdRecipientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbListsListIdRecipientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.lists[':list_id'].recipients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactdbListsListIdRecipientsMutationKey() {
  return ['contactdb', '/contactdb/lists/:list_id/recipients', 'POST'] as const
}

export function getPostContactdbListsListIdRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactdbListsListIdRecipientsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>,
    ) {
      return parseResponse(client.contactdb.lists[':list_id'].recipients.$post(args, options))
    },
  })
}

export function usePostContactdbListsListIdRecipients<
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
                  ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>,
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
  const mutationDefaults = getPostContactdbListsListIdRecipientsMutationOptions<
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

export function getPostContactdbListsListIdRecipientsRecipientIdMutationKey() {
  return ['contactdb', '/contactdb/lists/:list_id/recipients/:recipient_id', 'POST'] as const
}

export function getPostContactdbListsListIdRecipientsRecipientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContactdbListsListIdRecipientsRecipientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$post']
      >,
    ) {
      return parseResponse(
        client.contactdb.lists[':list_id'].recipients[':recipient_id'].$post(args, options),
      )
    },
  })
}

export function usePostContactdbListsListIdRecipientsRecipientId<
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
                    (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$post']
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
  const mutationDefaults = getPostContactdbListsListIdRecipientsRecipientIdMutationOptions<
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

export function getDeleteContactdbListsListIdRecipientsRecipientIdMutationKey() {
  return ['contactdb', '/contactdb/lists/:list_id/recipients/:recipient_id', 'DELETE'] as const
}

export function getDeleteContactdbListsListIdRecipientsRecipientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactdbListsListIdRecipientsRecipientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.contactdb.lists[':list_id'].recipients[':recipient_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContactdbListsListIdRecipientsRecipientId<
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
                      (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$delete']
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
  const mutationDefaults = getDeleteContactdbListsListIdRecipientsRecipientIdMutationOptions<
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

export function getContactdbRecipientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/recipients', keyArgs] as const
}

export function getContactdbRecipientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbRecipientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.recipients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>
            >
          >,
          ReturnType<typeof getContactdbRecipientsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbRecipientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.recipients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactdbRecipientsMutationKey() {
  return ['contactdb', '/contactdb/recipients', 'POST'] as const
}

export function getPostContactdbRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contactdb.recipients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactdbRecipientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contactdb.recipients.$post>) {
      return parseResponse(client.contactdb.recipients.$post(args, options))
    },
  })
}

export function usePostContactdbRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contactdb.recipients.$post>,
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
  const mutationDefaults = getPostContactdbRecipientsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteContactdbRecipientsMutationKey() {
  return ['contactdb', '/contactdb/recipients', 'DELETE'] as const
}

export function getDeleteContactdbRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contactdb.recipients.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactdbRecipientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contactdb.recipients.$delete>) {
      return parseResponse(client.contactdb.recipients.$delete(args, options))
    },
  })
}

export function useDeleteContactdbRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contactdb.recipients.$delete>,
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
  const mutationDefaults = getDeleteContactdbRecipientsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchContactdbRecipientsMutationKey() {
  return ['contactdb', '/contactdb/recipients', 'PATCH'] as const
}

export function getPatchContactdbRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contactdb.recipients.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactdbRecipientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contactdb.recipients.$patch>) {
      return parseResponse(client.contactdb.recipients.$patch(args, options))
    },
  })
}

export function usePatchContactdbRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contactdb.recipients.$patch>,
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
  const mutationDefaults = getPatchContactdbRecipientsMutationOptions<TError, TOnMutateResult>(
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

export function getContactdbRecipientsBillableCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.billable_count.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/recipients/billable_count', keyArgs] as const
}

export function getContactdbRecipientsBillableCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.billable_count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbRecipientsBillableCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.recipients.billable_count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbRecipientsBillableCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.billable_count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
              >
            >
          >,
          ReturnType<typeof getContactdbRecipientsBillableCountQueryKey>
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
          Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsBillableCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbRecipientsBillableCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.recipients.billable_count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactdbRecipientsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.count.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/recipients/count', keyArgs] as const
}

export function getContactdbRecipientsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbRecipientsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.recipients.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbRecipientsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>
              >
            >
          >,
          ReturnType<typeof getContactdbRecipientsCountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbRecipientsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.recipients.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactdbRecipientsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.search.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/recipients/search', keyArgs] as const
}

export function getContactdbRecipientsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbRecipientsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.recipients.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbRecipientsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.recipients.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>
              >
            >
          >,
          ReturnType<typeof getContactdbRecipientsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbRecipientsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.recipients.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactdbRecipientsSearchMutationKey() {
  return ['contactdb', '/contactdb/recipients/search', 'POST'] as const
}

export function getPostContactdbRecipientsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contactdb.recipients.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactdbRecipientsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contactdb.recipients.search.$post>) {
      return parseResponse(client.contactdb.recipients.search.$post(args, options))
    },
  })
}

export function usePostContactdbRecipientsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.recipients.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.contactdb.recipients.search.$post>,
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
  const mutationDefaults = getPostContactdbRecipientsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getContactdbRecipientsRecipientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/recipients/:recipient_id', keyArgs] as const
}

export function getContactdbRecipientsRecipientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbRecipientsRecipientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.recipients[':recipient_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbRecipientsRecipientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactdbRecipientsRecipientIdQueryKey>
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
          Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsRecipientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbRecipientsRecipientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.recipients[':recipient_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteContactdbRecipientsRecipientIdMutationKey() {
  return ['contactdb', '/contactdb/recipients/:recipient_id', 'DELETE'] as const
}

export function getDeleteContactdbRecipientsRecipientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactdbRecipientsRecipientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>,
    ) {
      return parseResponse(client.contactdb.recipients[':recipient_id'].$delete(args, options))
    },
  })
}

export function useDeleteContactdbRecipientsRecipientId<
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
                    ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>,
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
  const mutationDefaults = getDeleteContactdbRecipientsRecipientIdMutationOptions<
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

export function getContactdbRecipientsRecipientIdListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/recipients/:recipient_id/lists', keyArgs] as const
}

export function getContactdbRecipientsRecipientIdListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbRecipientsRecipientIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.recipients[':recipient_id'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbRecipientsRecipientIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
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
                  ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContactdbRecipientsRecipientIdListsQueryKey>
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
            ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsRecipientIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbRecipientsRecipientIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.recipients[':recipient_id'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactdbReservedFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.reserved_fields.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/reserved_fields', keyArgs] as const
}

export function getContactdbReservedFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.reserved_fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbReservedFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.reserved_fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbReservedFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.reserved_fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>
              >
            >
          >,
          ReturnType<typeof getContactdbReservedFieldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbReservedFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbReservedFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.reserved_fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactdbSegmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.segments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/segments', keyArgs] as const
}

export function getContactdbSegmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.segments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.segments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>
            >
          >,
          ReturnType<typeof getContactdbSegmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactdbSegmentsMutationKey() {
  return ['contactdb', '/contactdb/segments', 'POST'] as const
}

export function getPostContactdbSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contactdb.segments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactdbSegmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contactdb.segments.$post>) {
      return parseResponse(client.contactdb.segments.$post(args, options))
    },
  })
}

export function usePostContactdbSegments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contactdb.segments.$post>,
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
  const mutationDefaults = getPostContactdbSegmentsMutationOptions<TError, TOnMutateResult>(
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

export function getContactdbSegmentsSegmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/segments/:segment_id', keyArgs] as const
}

export function getContactdbSegmentsSegmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbSegmentsSegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.segments[':segment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactdbSegmentsSegmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbSegmentsSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbSegmentsSegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.segments[':segment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteContactdbSegmentsSegmentIdMutationKey() {
  return ['contactdb', '/contactdb/segments/:segment_id', 'DELETE'] as const
}

export function getDeleteContactdbSegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactdbSegmentsSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$delete']>,
    ) {
      return parseResponse(client.contactdb.segments[':segment_id'].$delete(args, options))
    },
  })
}

export function useDeleteContactdbSegmentsSegmentId<
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
                  Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$delete']>,
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
  const mutationDefaults = getDeleteContactdbSegmentsSegmentIdMutationOptions<
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

export function getPatchContactdbSegmentsSegmentIdMutationKey() {
  return ['contactdb', '/contactdb/segments/:segment_id', 'PATCH'] as const
}

export function getPatchContactdbSegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactdbSegmentsSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$patch']>,
    ) {
      return parseResponse(client.contactdb.segments[':segment_id'].$patch(args, options))
    },
  })
}

export function usePatchContactdbSegmentsSegmentId<
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
                Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$patch']>,
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
  const mutationDefaults = getPatchContactdbSegmentsSegmentIdMutationOptions<
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

export function getContactdbSegmentsSegmentIdRecipientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/segments/:segment_id/recipients', keyArgs] as const
}

export function getContactdbSegmentsSegmentIdRecipientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbSegmentsSegmentIdRecipientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.segments[':segment_id'].recipients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbSegmentsSegmentIdRecipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>
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
                    (typeof client.contactdb.segments)[':segment_id']['recipients']['$get']
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
                    (typeof client.contactdb.segments)[':segment_id']['recipients']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContactdbSegmentsSegmentIdRecipientsQueryKey>
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
            ReturnType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbSegmentsSegmentIdRecipientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbSegmentsSegmentIdRecipientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.segments[':segment_id'].recipients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactdbStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contactdb', '/contactdb/status', keyArgs] as const
}

export function getContactdbStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactdbStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contactdb.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactdbStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contactdb.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>
            >
          >,
          ReturnType<typeof getContactdbStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactdbStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contactdb.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDesignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.designs.$get>>,
) {
  return ['designs', '/designs', toValue(args)] as const
}

export function getDesignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.designs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDesignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.designs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDesigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.designs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>
          >,
          ReturnType<typeof getDesignsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDesignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDesignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.designs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDesignsMutationKey() {
  return ['designs', '/designs', 'POST'] as const
}

export function getPostDesignsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$post>>>>>,
    TError,
    InferRequestType<typeof client.designs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDesignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.designs.$post>) {
      return parseResponse(client.designs.$post(args, options))
    },
  })
}

export function usePostDesigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.designs.$post>,
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
  const mutationDefaults = getPostDesignsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDesignsPreBuiltsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)['pre-builts']['$get']>>,
) {
  return ['designs', '/designs/pre-builts', toValue(args)] as const
}

export function getDesignsPreBuiltsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)['pre-builts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDesignsPreBuiltsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.designs['pre-builts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDesignsPreBuilts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)['pre-builts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDesignsPreBuiltsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDesignsPreBuiltsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDesignsPreBuiltsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.designs['pre-builts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDesignsPreBuiltsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>>,
) {
  return ['designs', '/designs/pre-builts/:id', toValue(args)] as const
}

export function getDesignsPreBuiltsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDesignsPreBuiltsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.designs['pre-builts'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDesignsPreBuiltsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDesignsPreBuiltsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDesignsPreBuiltsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDesignsPreBuiltsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.designs['pre-builts'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDesignsPreBuiltsIdMutationKey() {
  return ['designs', '/designs/pre-builts/:id', 'POST'] as const
}

export function getPostDesignsPreBuiltsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.designs)['pre-builts'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDesignsPreBuiltsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$post']>,
    ) {
      return parseResponse(client.designs['pre-builts'][':id'].$post(args, options))
    },
  })
}

export function usePostDesignsPreBuiltsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.designs)['pre-builts'][':id']['$post']>,
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
  const mutationDefaults = getPostDesignsPreBuiltsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDesignsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)[':id']['$get']>>,
) {
  return ['designs', '/designs/:id', toValue(args)] as const
}

export function getDesignsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDesignsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.designs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDesignsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDesignsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDesignsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDesignsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.designs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDesignsIdMutationKey() {
  return ['designs', '/designs/:id', 'POST'] as const
}

export function getPostDesignsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.designs)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDesignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.designs)[':id']['$post']>) {
      return parseResponse(client.designs[':id'].$post(args, options))
    },
  })
}

export function usePostDesignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.designs)[':id']['$post']>,
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
  const mutationDefaults = getPostDesignsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDesignsIdMutationKey() {
  return ['designs', '/designs/:id', 'DELETE'] as const
}

export function getDeleteDesignsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.designs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDesignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.designs)[':id']['$delete']>) {
      return parseResponse(client.designs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDesignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.designs)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteDesignsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDesignsIdMutationKey() {
  return ['designs', '/designs/:id', 'PATCH'] as const
}

export function getPatchDesignsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.designs)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDesignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.designs)[':id']['$patch']>) {
      return parseResponse(client.designs[':id'].$patch(args, options))
    },
  })
}

export function usePatchDesignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.designs)[':id']['$patch']>,
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
  const mutationDefaults = getPatchDesignsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDevicesStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['devices', '/devices/stats', keyArgs] as const
}

export function getDevicesStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
          >,
          ReturnType<typeof getDevicesStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeoStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geo.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['geo', '/geo/stats', keyArgs] as const
}

export function getGeoStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geo.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeoStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geo.stats.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGeoStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geo.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>
          >,
          ReturnType<typeof getGeoStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGeoStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeoStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geo.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ips.$get>>) {
  return ['ips', '/ips', toValue(args)] as const
}

export function getIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
          ReturnType<typeof getIpsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpsMutationKey() {
  return ['ips', '/ips', 'POST'] as const
}

export function getPostIpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
    TError,
    InferRequestType<typeof client.ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.$post>) {
      return parseResponse(client.ips.$post(args, options))
    },
  })
}

export function usePostIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
          TError,
          InferRequestType<typeof client.ips.$post>,
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
  const mutationDefaults = getPostIpsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpsAssignedQueryKey() {
  return ['ips', '/ips/assigned'] as const
}

export function getIpsAssignedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpsAssignedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.assigned.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpsAssigned<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>
          >,
          ReturnType<typeof getIpsAssignedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsAssignedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpsAssignedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.assigned.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpsPoolsQueryKey() {
  return ['ips', '/ips/pools'] as const
}

export function getIpsPoolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpsPoolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.pools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpsPools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>
          >,
          ReturnType<typeof getIpsPoolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsPoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpsPoolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.pools.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpsPoolsMutationKey() {
  return ['ips', '/ips/pools', 'POST'] as const
}

export function getPostIpsPoolsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$post>>>>>,
    TError,
    InferRequestType<typeof client.ips.pools.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsPoolsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.pools.$post>) {
      return parseResponse(client.ips.pools.$post(args, options))
    },
  })
}

export function usePostIpsPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ips.pools.$post>,
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
  const mutationDefaults = getPostIpsPoolsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpsPoolsPoolNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>>,
) {
  return ['ips', '/ips/pools/:pool_name', toValue(args)] as const
}

export function getIpsPoolsPoolNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsPoolsPoolNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.pools[':pool_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpsPoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpsPoolsPoolNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsPoolsPoolNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsPoolsPoolNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.pools[':pool_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpsPoolsPoolNameMutationKey() {
  return ['ips', '/ips/pools/:pool_name', 'PUT'] as const
}

export function getPutIpsPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips.pools)[':pool_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpsPoolsPoolNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$put']>) {
      return parseResponse(client.ips.pools[':pool_name'].$put(args, options))
    },
  })
}

export function usePutIpsPoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ips.pools)[':pool_name']['$put']>,
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
  const mutationDefaults = getPutIpsPoolsPoolNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIpsPoolsPoolNameMutationKey() {
  return ['ips', '/ips/pools/:pool_name', 'DELETE'] as const
}

export function getDeleteIpsPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ips.pools)[':pool_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpsPoolsPoolNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$delete']>) {
      return parseResponse(client.ips.pools[':pool_name'].$delete(args, options))
    },
  })
}

export function useDeleteIpsPoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ips.pools)[':pool_name']['$delete']>,
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
  const mutationDefaults = getDeleteIpsPoolsPoolNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostIpsPoolsPoolNameIpsMutationKey() {
  return ['ips', '/ips/pools/:pool_name/ips', 'POST'] as const
}

export function getPostIpsPoolsPoolNameIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['ips']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ips.pools)[':pool_name']['ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsPoolsPoolNameIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ips.pools)[':pool_name']['ips']['$post']>,
    ) {
      return parseResponse(client.ips.pools[':pool_name'].ips.$post(args, options))
    },
  })
}

export function usePostIpsPoolsPoolNameIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['ips']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ips.pools)[':pool_name']['ips']['$post']>,
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
  const mutationDefaults = getPostIpsPoolsPoolNameIpsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIpsPoolsPoolNameIpsIpMutationKey() {
  return ['ips', '/ips/pools/:pool_name/ips/:ip', 'DELETE'] as const
}

export function getDeleteIpsPoolsPoolNameIpsIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpsPoolsPoolNameIpsIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>,
    ) {
      return parseResponse(client.ips.pools[':pool_name'].ips[':ip'].$delete(args, options))
    },
  })
}

export function useDeleteIpsPoolsPoolNameIpsIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>,
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
  const mutationDefaults = getDeleteIpsPoolsPoolNameIpsIpMutationOptions<TError, TOnMutateResult>(
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

export function getIpsRemainingQueryKey() {
  return ['ips', '/ips/remaining'] as const
}

export function getIpsRemainingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpsRemainingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.remaining.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpsRemaining<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
          >,
          ReturnType<typeof getIpsRemainingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpsRemainingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpsRemainingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.remaining.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpsWarmupQueryKey() {
  return ['ips', '/ips/warmup'] as const
}

export function getIpsWarmupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpsWarmupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.warmup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpsWarmup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>
          >,
          ReturnType<typeof getIpsWarmupQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsWarmupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpsWarmupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.warmup.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpsWarmupMutationKey() {
  return ['ips', '/ips/warmup', 'POST'] as const
}

export function getPostIpsWarmupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$post>>>>>,
    TError,
    InferRequestType<typeof client.ips.warmup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsWarmupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.warmup.$post>) {
      return parseResponse(client.ips.warmup.$post(args, options))
    },
  })
}

export function usePostIpsWarmup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ips.warmup.$post>,
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
  const mutationDefaults = getPostIpsWarmupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpsWarmupIpAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>>,
) {
  return ['ips', '/ips/warmup/:ip_address', toValue(args)] as const
}

export function getIpsWarmupIpAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsWarmupIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.warmup[':ip_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpsWarmupIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpsWarmupIpAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsWarmupIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsWarmupIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.warmup[':ip_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteIpsWarmupIpAddressMutationKey() {
  return ['ips', '/ips/warmup/:ip_address', 'DELETE'] as const
}

export function getDeleteIpsWarmupIpAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ips.warmup)[':ip_address']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpsWarmupIpAddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$delete']>) {
      return parseResponse(client.ips.warmup[':ip_address'].$delete(args, options))
    },
  })
}

export function useDeleteIpsWarmupIpAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ips.warmup)[':ip_address']['$delete']>,
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
  const mutationDefaults = getDeleteIpsWarmupIpAddressMutationOptions<TError, TOnMutateResult>(
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

export function getIpsIpAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':ip_address']['$get']>>,
) {
  return ['ips', '/ips/:ip_address', toValue(args)] as const
}

export function getIpsIpAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':ip_address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips[':ip_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpsIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':ip_address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
            >
          >,
          ReturnType<typeof getIpsIpAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips[':ip_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMailBatchMutationKey() {
  return ['mail', '/mail/batch', 'POST'] as const
}

export function getPostMailBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.mail.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMailBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mail.batch.$post>) {
      return parseResponse(client.mail.batch.$post(args, options))
    },
  })
}

export function usePostMailBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mail.batch.$post>,
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
  const mutationDefaults = getPostMailBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMailBatchBatchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mail', '/mail/batch/:batch_id', keyArgs] as const
}

export function getMailBatchBatchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailBatchBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mail.batch[':batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMailBatchBatchIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailBatchBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailBatchBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mail.batch[':batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMailSendMutationKey() {
  return ['mail', '/mail/send', 'POST'] as const
}

export function getPostMailSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.mail.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMailSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mail.send.$post>) {
      return parseResponse(client.mail.send.$post(args, options))
    },
  })
}

export function usePostMailSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mail.send.$post>,
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
  const mutationDefaults = getPostMailSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMailSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mail_settings', '/mail_settings', keyArgs] as const
}

export function getMailSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mail_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
          >,
          ReturnType<typeof getMailSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mail_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMailSettingsAddressWhitelistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.address_whitelist.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mail_settings', '/mail_settings/address_whitelist', keyArgs] as const
}

export function getMailSettingsAddressWhitelistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.address_whitelist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailSettingsAddressWhitelistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mail_settings.address_whitelist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailSettingsAddressWhitelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.address_whitelist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>
              >
            >
          >,
          ReturnType<typeof getMailSettingsAddressWhitelistQueryKey>
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
          Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsAddressWhitelistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailSettingsAddressWhitelistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mail_settings.address_whitelist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMailSettingsAddressWhitelistMutationKey() {
  return ['mail_settings', '/mail_settings/address_whitelist', 'PATCH'] as const
}

export function getPatchMailSettingsAddressWhitelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.mail_settings.address_whitelist.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchMailSettingsAddressWhitelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mail_settings.address_whitelist.$patch>) {
      return parseResponse(client.mail_settings.address_whitelist.$patch(args, options))
    },
  })
}

export function usePatchMailSettingsAddressWhitelist<
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
                Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.mail_settings.address_whitelist.$patch>,
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
  const mutationDefaults = getPatchMailSettingsAddressWhitelistMutationOptions<
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

export function getMailSettingsBouncePurgeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.bounce_purge.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mail_settings', '/mail_settings/bounce_purge', keyArgs] as const
}

export function getMailSettingsBouncePurgeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.bounce_purge.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailSettingsBouncePurgeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mail_settings.bounce_purge.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailSettingsBouncePurge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.bounce_purge.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>
              >
            >
          >,
          ReturnType<typeof getMailSettingsBouncePurgeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsBouncePurgeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailSettingsBouncePurgeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mail_settings.bounce_purge.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMailSettingsBouncePurgeMutationKey() {
  return ['mail_settings', '/mail_settings/bounce_purge', 'PATCH'] as const
}

export function getPatchMailSettingsBouncePurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mail_settings.bounce_purge.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchMailSettingsBouncePurgeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mail_settings.bounce_purge.$patch>) {
      return parseResponse(client.mail_settings.bounce_purge.$patch(args, options))
    },
  })
}

export function usePatchMailSettingsBouncePurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.mail_settings.bounce_purge.$patch>,
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
  const mutationDefaults = getPatchMailSettingsBouncePurgeMutationOptions<TError, TOnMutateResult>(
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

export function getMailSettingsFooterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.footer.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mail_settings', '/mail_settings/footer', keyArgs] as const
}

export function getMailSettingsFooterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.footer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailSettingsFooterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mail_settings.footer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailSettingsFooter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.footer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>
            >
          >,
          ReturnType<typeof getMailSettingsFooterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsFooterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailSettingsFooterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mail_settings.footer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMailSettingsFooterMutationKey() {
  return ['mail_settings', '/mail_settings/footer', 'PATCH'] as const
}

export function getPatchMailSettingsFooterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mail_settings.footer.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchMailSettingsFooterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mail_settings.footer.$patch>) {
      return parseResponse(client.mail_settings.footer.$patch(args, options))
    },
  })
}

export function usePatchMailSettingsFooter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.mail_settings.footer.$patch>,
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
  const mutationDefaults = getPatchMailSettingsFooterMutationOptions<TError, TOnMutateResult>(
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

export function getMailSettingsForwardBounceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.forward_bounce.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mail_settings', '/mail_settings/forward_bounce', keyArgs] as const
}

export function getMailSettingsForwardBounceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.forward_bounce.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailSettingsForwardBounceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mail_settings.forward_bounce.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailSettingsForwardBounce<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.forward_bounce.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>
              >
            >
          >,
          ReturnType<typeof getMailSettingsForwardBounceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsForwardBounceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailSettingsForwardBounceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mail_settings.forward_bounce.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMailSettingsForwardBounceMutationKey() {
  return ['mail_settings', '/mail_settings/forward_bounce', 'PATCH'] as const
}

export function getPatchMailSettingsForwardBounceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mail_settings.forward_bounce.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchMailSettingsForwardBounceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mail_settings.forward_bounce.$patch>) {
      return parseResponse(client.mail_settings.forward_bounce.$patch(args, options))
    },
  })
}

export function usePatchMailSettingsForwardBounce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.mail_settings.forward_bounce.$patch>,
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
  const mutationDefaults = getPatchMailSettingsForwardBounceMutationOptions<
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

export function getMailSettingsForwardSpamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.forward_spam.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mail_settings', '/mail_settings/forward_spam', keyArgs] as const
}

export function getMailSettingsForwardSpamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.forward_spam.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailSettingsForwardSpamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mail_settings.forward_spam.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailSettingsForwardSpam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.forward_spam.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>
              >
            >
          >,
          ReturnType<typeof getMailSettingsForwardSpamQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsForwardSpamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailSettingsForwardSpamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mail_settings.forward_spam.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMailSettingsForwardSpamMutationKey() {
  return ['mail_settings', '/mail_settings/forward_spam', 'PATCH'] as const
}

export function getPatchMailSettingsForwardSpamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mail_settings.forward_spam.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchMailSettingsForwardSpamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mail_settings.forward_spam.$patch>) {
      return parseResponse(client.mail_settings.forward_spam.$patch(args, options))
    },
  })
}

export function usePatchMailSettingsForwardSpam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mail_settings.forward_spam.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.mail_settings.forward_spam.$patch>,
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
  const mutationDefaults = getPatchMailSettingsForwardSpamMutationOptions<TError, TOnMutateResult>(
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

export function getMailSettingsTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.template.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mail_settings', '/mail_settings/template', keyArgs] as const
}

export function getMailSettingsTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.template.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailSettingsTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mail_settings.template.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailSettingsTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mail_settings.template.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
            >
          >,
          ReturnType<typeof getMailSettingsTemplateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailSettingsTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mail_settings.template.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMailSettingsTemplateMutationKey() {
  return ['mail_settings', '/mail_settings/template', 'PATCH'] as const
}

export function getPatchMailSettingsTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mail_settings.template.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchMailSettingsTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mail_settings.template.$patch>) {
      return parseResponse(client.mail_settings.template.$patch(args, options))
    },
  })
}

export function usePatchMailSettingsTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.mail_settings.template.$patch>,
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
  const mutationDefaults = getPatchMailSettingsTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getMailboxProvidersStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mailbox_providers.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mailbox_providers', '/mailbox_providers/stats', keyArgs] as const
}

export function getMailboxProvidersStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mailbox_providers.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailboxProvidersStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mailbox_providers.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailboxProvidersStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mailbox_providers.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
            >
          >,
          ReturnType<typeof getMailboxProvidersStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailboxProvidersStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailboxProvidersStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mailbox_providers.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingContactsQueryKey() {
  return ['marketing', '/marketing/contacts'] as const
}

export function getMarketingContactsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketingContactsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.contacts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>
            >
          >,
          ReturnType<typeof getMarketingContactsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketingContactsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.contacts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMarketingContactsMutationKey() {
  return ['marketing', '/marketing/contacts', 'PUT'] as const
}

export function getPutMarketingContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.marketing.contacts.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMarketingContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.contacts.$put>) {
      return parseResponse(client.marketing.contacts.$put(args, options))
    },
  })
}

export function usePutMarketingContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.contacts.$put>,
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
  const mutationDefaults = getPutMarketingContactsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMarketingContactsMutationKey() {
  return ['marketing', '/marketing/contacts', 'DELETE'] as const
}

export function getDeleteMarketingContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.contacts.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.contacts.$delete>) {
      return parseResponse(client.marketing.contacts.$delete(args, options))
    },
  })
}

export function useDeleteMarketingContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.contacts.$delete>,
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
  const mutationDefaults = getDeleteMarketingContactsMutationOptions<TError, TOnMutateResult>(
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

export function getPostMarketingContactsBatchMutationKey() {
  return ['marketing', '/marketing/contacts/batch', 'POST'] as const
}

export function getPostMarketingContactsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.contacts.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingContactsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.contacts.batch.$post>) {
      return parseResponse(client.marketing.contacts.batch.$post(args, options))
    },
  })
}

export function usePostMarketingContactsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.contacts.batch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.contacts.batch.$post>,
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
  const mutationDefaults = getPostMarketingContactsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getMarketingContactsCountQueryKey() {
  return ['marketing', '/marketing/contacts/count'] as const
}

export function getMarketingContactsCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketingContactsCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.contacts.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingContactsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
            >
          >,
          ReturnType<typeof getMarketingContactsCountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketingContactsCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.contacts.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingContactsExportsQueryKey() {
  return ['marketing', '/marketing/contacts/exports'] as const
}

export function getMarketingContactsExportsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketingContactsExportsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.contacts.exports.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingContactsExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketingContactsExportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsExportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketingContactsExportsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.contacts.exports.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingContactsExportsMutationKey() {
  return ['marketing', '/marketing/contacts/exports', 'POST'] as const
}

export function getPostMarketingContactsExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.contacts.exports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingContactsExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.contacts.exports.$post>) {
      return parseResponse(client.marketing.contacts.exports.$post(args, options))
    },
  })
}

export function usePostMarketingContactsExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.contacts.exports.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.contacts.exports.$post>,
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
  const mutationDefaults = getPostMarketingContactsExportsMutationOptions<TError, TOnMutateResult>(
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

export function getMarketingContactsExportsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>
  >,
) {
  return ['marketing', '/marketing/contacts/exports/:id', toValue(args)] as const
}

export function getMarketingContactsExportsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingContactsExportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.contacts.exports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingContactsExportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingContactsExportsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsExportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingContactsExportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.contacts.exports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMarketingContactsImportsMutationKey() {
  return ['marketing', '/marketing/contacts/imports', 'PUT'] as const
}

export function getPutMarketingContactsImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.imports.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.contacts.imports.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMarketingContactsImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.contacts.imports.$put>) {
      return parseResponse(client.marketing.contacts.imports.$put(args, options))
    },
  })
}

export function usePutMarketingContactsImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.contacts.imports.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.contacts.imports.$put>,
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
  const mutationDefaults = getPutMarketingContactsImportsMutationOptions<TError, TOnMutateResult>(
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

export function getMarketingContactsImportsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>
  >,
) {
  return ['marketing', '/marketing/contacts/imports/:id', toValue(args)] as const
}

export function getMarketingContactsImportsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingContactsImportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.contacts.imports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingContactsImportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingContactsImportsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsImportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingContactsImportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.contacts.imports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingContactsSearchMutationKey() {
  return ['marketing', '/marketing/contacts/search', 'POST'] as const
}

export function getPostMarketingContactsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.contacts.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingContactsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.contacts.search.$post>) {
      return parseResponse(client.marketing.contacts.search.$post(args, options))
    },
  })
}

export function usePostMarketingContactsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.contacts.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.contacts.search.$post>,
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
  const mutationDefaults = getPostMarketingContactsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostMarketingContactsSearchEmailsMutationKey() {
  return ['marketing', '/marketing/contacts/search/emails', 'POST'] as const
}

export function getPostMarketingContactsSearchEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.marketing.contacts.search.emails.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.contacts.search.emails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingContactsSearchEmailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.contacts.search.emails.$post>) {
      return parseResponse(client.marketing.contacts.search.emails.$post(args, options))
    },
  })
}

export function usePostMarketingContactsSearchEmails<
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
                Awaited<ReturnType<typeof client.marketing.contacts.search.emails.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.contacts.search.emails.$post>,
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
  const mutationDefaults = getPostMarketingContactsSearchEmailsMutationOptions<
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

export function getMarketingContactsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>>,
) {
  return ['marketing', '/marketing/contacts/:id', toValue(args)] as const
}

export function getMarketingContactsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingContactsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.contacts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingContactsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingContactsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingContactsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.contacts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingFieldDefinitionsQueryKey() {
  return ['marketing', '/marketing/field_definitions'] as const
}

export function getMarketingFieldDefinitionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketingFieldDefinitionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.field_definitions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingFieldDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketingFieldDefinitionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingFieldDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketingFieldDefinitionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.field_definitions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingFieldDefinitionsMutationKey() {
  return ['marketing', '/marketing/field_definitions', 'POST'] as const
}

export function getPostMarketingFieldDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.field_definitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingFieldDefinitionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.field_definitions.$post>) {
      return parseResponse(client.marketing.field_definitions.$post(args, options))
    },
  })
}

export function usePostMarketingFieldDefinitions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.field_definitions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.field_definitions.$post>,
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
  const mutationDefaults = getPostMarketingFieldDefinitionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMarketingFieldDefinitionsCustomFieldIdMutationKey() {
  return ['marketing', '/marketing/field_definitions/:custom_field_id', 'DELETE'] as const
}

export function getDeleteMarketingFieldDefinitionsCustomFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.field_definitions)[':custom_field_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.marketing.field_definitions)[':custom_field_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingFieldDefinitionsCustomFieldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.field_definitions)[':custom_field_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing.field_definitions[':custom_field_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMarketingFieldDefinitionsCustomFieldId<
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
                      (typeof client.marketing.field_definitions)[':custom_field_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.field_definitions)[':custom_field_id']['$delete']
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
  const mutationDefaults = getDeleteMarketingFieldDefinitionsCustomFieldIdMutationOptions<
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

export function getPatchMarketingFieldDefinitionsCustomFieldIdMutationKey() {
  return ['marketing', '/marketing/field_definitions/:custom_field_id', 'PATCH'] as const
}

export function getPatchMarketingFieldDefinitionsCustomFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.field_definitions)[':custom_field_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.field_definitions)[':custom_field_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingFieldDefinitionsCustomFieldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.field_definitions)[':custom_field_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.marketing.field_definitions[':custom_field_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchMarketingFieldDefinitionsCustomFieldId<
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
                    (typeof client.marketing.field_definitions)[':custom_field_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.field_definitions)[':custom_field_id']['$patch']
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
  const mutationDefaults = getPatchMarketingFieldDefinitionsCustomFieldIdMutationOptions<
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

export function getMarketingListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.lists.$get>>,
) {
  return ['marketing', '/marketing/lists', toValue(args)] as const
}

export function getMarketingListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.lists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.lists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>
            >
          >,
          ReturnType<typeof getMarketingListsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingListsMutationKey() {
  return ['marketing', '/marketing/lists', 'POST'] as const
}

export function getPostMarketingListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.marketing.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.lists.$post>) {
      return parseResponse(client.marketing.lists.$post(args, options))
    },
  })
}

export function usePostMarketingLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.lists.$post>,
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
  const mutationDefaults = getPostMarketingListsMutationOptions<TError, TOnMutateResult>(
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

export function getMarketingListsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.lists)[':id']['$get']>>,
) {
  return ['marketing', '/marketing/lists/:id', toValue(args)] as const
}

export function getMarketingListsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.lists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingListsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.lists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.lists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingListsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingListsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingListsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.lists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMarketingListsIdMutationKey() {
  return ['marketing', '/marketing/lists/:id', 'DELETE'] as const
}

export function getDeleteMarketingListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.marketing.lists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.marketing.lists)[':id']['$delete']>) {
      return parseResponse(client.marketing.lists[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMarketingListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.marketing.lists)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteMarketingListsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMarketingListsIdMutationKey() {
  return ['marketing', '/marketing/lists/:id', 'PATCH'] as const
}

export function getPatchMarketingListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.lists)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.marketing.lists)[':id']['$patch']>) {
      return parseResponse(client.marketing.lists[':id'].$patch(args, options))
    },
  })
}

export function usePatchMarketingListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.lists)[':id']['$patch']>,
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
  const mutationDefaults = getPatchMarketingListsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMarketingListsIdContactsMutationKey() {
  return ['marketing', '/marketing/lists/:id/contacts', 'DELETE'] as const
}

export function getDeleteMarketingListsIdContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingListsIdContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['$delete']>,
    ) {
      return parseResponse(client.marketing.lists[':id'].contacts.$delete(args, options))
    },
  })
}

export function useDeleteMarketingListsIdContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['$delete']>,
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
  const mutationDefaults = getDeleteMarketingListsIdContactsMutationOptions<
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

export function getMarketingListsIdContactsCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>
  >,
) {
  return ['marketing', '/marketing/lists/:id/contacts/count', toValue(args)] as const
}

export function getMarketingListsIdContactsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingListsIdContactsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.lists[':id'].contacts.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingListsIdContactsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>
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
                  ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMarketingListsIdContactsCountQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingListsIdContactsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingListsIdContactsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.lists[':id'].contacts.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingSegmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.segments.$get>>,
) {
  return ['marketing', '/marketing/segments', toValue(args)] as const
}

export function getMarketingSegmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.segments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.segments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>
            >
          >,
          ReturnType<typeof getMarketingSegmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingSegmentsMutationKey() {
  return ['marketing', '/marketing/segments', 'POST'] as const
}

export function getPostMarketingSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.marketing.segments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingSegmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.segments.$post>) {
      return parseResponse(client.marketing.segments.$post(args, options))
    },
  })
}

export function usePostMarketingSegments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.segments.$post>,
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
  const mutationDefaults = getPostMarketingSegmentsMutationOptions<TError, TOnMutateResult>(
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

export function getMarketingSegments20QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>>,
) {
  return ['marketing', '/marketing/segments/2.0', toValue(args)] as const
}

export function getMarketingSegments20QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingSegments20QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.segments['2.0'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingSegments20<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingSegments20QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSegments20QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingSegments20QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.segments['2.0'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingSegments20MutationKey() {
  return ['marketing', '/marketing/segments/2.0', 'POST'] as const
}

export function getPostMarketingSegments20MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.segments)['2.0']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingSegments20MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.marketing.segments)['2.0']['$post']>) {
      return parseResponse(client.marketing.segments['2.0'].$post(args, options))
    },
  })
}

export function usePostMarketingSegments20<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.segments)['2.0']['$post']>,
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
  const mutationDefaults = getPostMarketingSegments20MutationOptions<TError, TOnMutateResult>(
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

export function getMarketingSegments20SegmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>
  >,
) {
  return ['marketing', '/marketing/segments/2.0/:segment_id', toValue(args)] as const
}

export function getMarketingSegments20SegmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingSegments20SegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.segments['2.0'][':segment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingSegments20SegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>
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
                  ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMarketingSegments20SegmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSegments20SegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingSegments20SegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.segments['2.0'][':segment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMarketingSegments20SegmentIdMutationKey() {
  return ['marketing', '/marketing/segments/2.0/:segment_id', 'DELETE'] as const
}

export function getDeleteMarketingSegments20SegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingSegments20SegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>,
    ) {
      return parseResponse(client.marketing.segments['2.0'][':segment_id'].$delete(args, options))
    },
  })
}

export function useDeleteMarketingSegments20SegmentId<
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
                  ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>,
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
  const mutationDefaults = getDeleteMarketingSegments20SegmentIdMutationOptions<
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

export function getPatchMarketingSegments20SegmentIdMutationKey() {
  return ['marketing', '/marketing/segments/2.0/:segment_id', 'PATCH'] as const
}

export function getPatchMarketingSegments20SegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingSegments20SegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>,
    ) {
      return parseResponse(client.marketing.segments['2.0'][':segment_id'].$patch(args, options))
    },
  })
}

export function usePatchMarketingSegments20SegmentId<
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
                  ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>,
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
  const mutationDefaults = getPatchMarketingSegments20SegmentIdMutationOptions<
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

export function getPostMarketingSegmentsDeleteMutationKey() {
  return ['marketing', '/marketing/segments/delete', 'POST'] as const
}

export function getPostMarketingSegmentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.segments.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingSegmentsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.segments.delete.$post>) {
      return parseResponse(client.marketing.segments.delete.$post(args, options))
    },
  })
}

export function usePostMarketingSegmentsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.segments.delete.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.segments.delete.$post>,
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
  const mutationDefaults = getPostMarketingSegmentsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getMarketingSegmentsSegmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>
  >,
) {
  return ['marketing', '/marketing/segments/:segment_id', toValue(args)] as const
}

export function getMarketingSegmentsSegmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingSegmentsSegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.segments[':segment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingSegmentsSegmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSegmentsSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingSegmentsSegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.segments[':segment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMarketingSegmentsSegmentIdMutationKey() {
  return ['marketing', '/marketing/segments/:segment_id', 'DELETE'] as const
}

export function getDeleteMarketingSegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.segments)[':segment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingSegmentsSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$delete']>,
    ) {
      return parseResponse(client.marketing.segments[':segment_id'].$delete(args, options))
    },
  })
}

export function useDeleteMarketingSegmentsSegmentId<
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
                Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.segments)[':segment_id']['$delete']>,
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
  const mutationDefaults = getDeleteMarketingSegmentsSegmentIdMutationOptions<
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

export function getPatchMarketingSegmentsSegmentIdMutationKey() {
  return ['marketing', '/marketing/segments/:segment_id', 'PATCH'] as const
}

export function getPatchMarketingSegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.segments)[':segment_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingSegmentsSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$patch']>,
    ) {
      return parseResponse(client.marketing.segments[':segment_id'].$patch(args, options))
    },
  })
}

export function usePatchMarketingSegmentsSegmentId<
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
                Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.segments)[':segment_id']['$patch']>,
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
  const mutationDefaults = getPatchMarketingSegmentsSegmentIdMutationOptions<
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

export function getPostMarketingSendersMutationKey() {
  return ['marketing', '/marketing/senders', 'POST'] as const
}

export function getPostMarketingSendersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.senders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.marketing.senders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingSendersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.senders.$post>) {
      return parseResponse(client.marketing.senders.$post(args, options))
    },
  })
}

export function usePostMarketingSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.senders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.senders.$post>,
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
  const mutationDefaults = getPostMarketingSendersMutationOptions<TError, TOnMutateResult>(
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

export function getMarketingSinglesendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.singlesends.$get>>,
) {
  return ['marketing', '/marketing/singlesends', toValue(args)] as const
}

export function getMarketingSinglesendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.singlesends.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingSinglesendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.singlesends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingSinglesends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.singlesends.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
            >
          >,
          ReturnType<typeof getMarketingSinglesendsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSinglesendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingSinglesendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.singlesends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingSinglesendsMutationKey() {
  return ['marketing', '/marketing/singlesends', 'POST'] as const
}

export function getPostMarketingSinglesendsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.singlesends.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingSinglesendsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.singlesends.$post>) {
      return parseResponse(client.marketing.singlesends.$post(args, options))
    },
  })
}

export function usePostMarketingSinglesends<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.singlesends.$post>,
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
  const mutationDefaults = getPostMarketingSinglesendsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMarketingSinglesendsMutationKey() {
  return ['marketing', '/marketing/singlesends', 'DELETE'] as const
}

export function getDeleteMarketingSinglesendsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.marketing.singlesends.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingSinglesendsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.singlesends.$delete>) {
      return parseResponse(client.marketing.singlesends.$delete(args, options))
    },
  })
}

export function useDeleteMarketingSinglesends<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.marketing.singlesends.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.marketing.singlesends.$delete>,
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
  const mutationDefaults = getDeleteMarketingSinglesendsMutationOptions<TError, TOnMutateResult>(
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

export function getMarketingSinglesendsCategoriesQueryKey() {
  return ['marketing', '/marketing/singlesends/categories'] as const
}

export function getMarketingSinglesendsCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketingSinglesendsCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.singlesends.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingSinglesendsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketingSinglesendsCategoriesQueryKey>
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
          Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSinglesendsCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketingSinglesendsCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.singlesends.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingSinglesendsSearchMutationKey() {
  return ['marketing', '/marketing/singlesends/search', 'POST'] as const
}

export function getPostMarketingSinglesendsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.singlesends.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingSinglesendsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.singlesends.search.$post>) {
      return parseResponse(client.marketing.singlesends.search.$post(args, options))
    },
  })
}

export function usePostMarketingSinglesendsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.singlesends.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.singlesends.search.$post>,
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
  const mutationDefaults = getPostMarketingSinglesendsSearchMutationOptions<
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

export function getMarketingSinglesendsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>>,
) {
  return ['marketing', '/marketing/singlesends/:id', toValue(args)] as const
}

export function getMarketingSinglesendsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingSinglesendsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.singlesends[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingSinglesendsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingSinglesendsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSinglesendsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingSinglesendsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.singlesends[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingSinglesendsIdMutationKey() {
  return ['marketing', '/marketing/singlesends/:id', 'POST'] as const
}

export function getPostMarketingSinglesendsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingSinglesendsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$post']>,
    ) {
      return parseResponse(client.marketing.singlesends[':id'].$post(args, options))
    },
  })
}

export function usePostMarketingSinglesendsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.singlesends)[':id']['$post']>,
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
  const mutationDefaults = getPostMarketingSinglesendsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMarketingSinglesendsIdMutationKey() {
  return ['marketing', '/marketing/singlesends/:id', 'DELETE'] as const
}

export function getDeleteMarketingSinglesendsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingSinglesendsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$delete']>,
    ) {
      return parseResponse(client.marketing.singlesends[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMarketingSinglesendsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.marketing.singlesends)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteMarketingSinglesendsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMarketingSinglesendsIdMutationKey() {
  return ['marketing', '/marketing/singlesends/:id', 'PATCH'] as const
}

export function getPatchMarketingSinglesendsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingSinglesendsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$patch']>,
    ) {
      return parseResponse(client.marketing.singlesends[':id'].$patch(args, options))
    },
  })
}

export function usePatchMarketingSinglesendsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.singlesends)[':id']['$patch']>,
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
  const mutationDefaults = getPatchMarketingSinglesendsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutMarketingSinglesendsIdScheduleMutationKey() {
  return ['marketing', '/marketing/singlesends/:id/schedule', 'PUT'] as const
}

export function getPutMarketingSinglesendsIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMarketingSinglesendsIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>,
    ) {
      return parseResponse(client.marketing.singlesends[':id'].schedule.$put(args, options))
    },
  })
}

export function usePutMarketingSinglesendsIdSchedule<
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
                  ReturnType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>,
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
  const mutationDefaults = getPutMarketingSinglesendsIdScheduleMutationOptions<
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

export function getDeleteMarketingSinglesendsIdScheduleMutationKey() {
  return ['marketing', '/marketing/singlesends/:id/schedule', 'DELETE'] as const
}

export function getDeleteMarketingSinglesendsIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingSinglesendsIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>,
    ) {
      return parseResponse(client.marketing.singlesends[':id'].schedule.$delete(args, options))
    },
  })
}

export function useDeleteMarketingSinglesendsIdSchedule<
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
                  ReturnType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>,
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
  const mutationDefaults = getDeleteMarketingSinglesendsIdScheduleMutationOptions<
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

export function getMarketingStatsAutomationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.automations.$get>>,
) {
  return ['marketing', '/marketing/stats/automations', toValue(args)] as const
}

export function getMarketingStatsAutomationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.automations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingStatsAutomationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.stats.automations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingStatsAutomations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.automations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketingStatsAutomationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsAutomationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingStatsAutomationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.stats.automations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingStatsAutomationsExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.automations.export.$get>>,
) {
  return ['marketing', '/marketing/stats/automations/export', toValue(args)] as const
}

export function getMarketingStatsAutomationsExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.automations.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingStatsAutomationsExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.stats.automations.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingStatsAutomationsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.automations.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketingStatsAutomationsExportQueryKey>
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
          Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsAutomationsExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingStatsAutomationsExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.stats.automations.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingStatsAutomationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>
  >,
) {
  return ['marketing', '/marketing/stats/automations/:id', toValue(args)] as const
}

export function getMarketingStatsAutomationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingStatsAutomationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.stats.automations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingStatsAutomationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingStatsAutomationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsAutomationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingStatsAutomationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.stats.automations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingStatsAutomationsIdLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>
  >,
) {
  return ['marketing', '/marketing/stats/automations/:id/links', toValue(args)] as const
}

export function getMarketingStatsAutomationsIdLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingStatsAutomationsIdLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.stats.automations[':id'].links.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingStatsAutomationsIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>
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
                  ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMarketingStatsAutomationsIdLinksQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsAutomationsIdLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingStatsAutomationsIdLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.stats.automations[':id'].links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingStatsSinglesendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.singlesends.$get>>,
) {
  return ['marketing', '/marketing/stats/singlesends', toValue(args)] as const
}

export function getMarketingStatsSinglesendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.singlesends.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingStatsSinglesendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.stats.singlesends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingStatsSinglesends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.singlesends.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketingStatsSinglesendsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsSinglesendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingStatsSinglesendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.stats.singlesends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingStatsSinglesendsExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.singlesends.export.$get>>,
) {
  return ['marketing', '/marketing/stats/singlesends/export', toValue(args)] as const
}

export function getMarketingStatsSinglesendsExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.singlesends.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingStatsSinglesendsExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.stats.singlesends.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingStatsSinglesendsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketing.stats.singlesends.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketingStatsSinglesendsExportQueryKey>
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
          Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsSinglesendsExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingStatsSinglesendsExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.stats.singlesends.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingStatsSinglesendsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>
  >,
) {
  return ['marketing', '/marketing/stats/singlesends/:id', toValue(args)] as const
}

export function getMarketingStatsSinglesendsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingStatsSinglesendsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.stats.singlesends[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingStatsSinglesendsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingStatsSinglesendsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsSinglesendsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingStatsSinglesendsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.stats.singlesends[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingStatsSinglesendsIdLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>
  >,
) {
  return ['marketing', '/marketing/stats/singlesends/:id/links', toValue(args)] as const
}

export function getMarketingStatsSinglesendsIdLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingStatsSinglesendsIdLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.stats.singlesends[':id'].links.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingStatsSinglesendsIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>
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
                  ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMarketingStatsSinglesendsIdLinksQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsSinglesendsIdLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingStatsSinglesendsIdLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.stats.singlesends[':id'].links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingTestSendEmailMutationKey() {
  return ['marketing', '/marketing/test/send_email', 'POST'] as const
}

export function getPostMarketingTestSendEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.test.send_email.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.marketing.test.send_email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingTestSendEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.marketing.test.send_email.$post>) {
      return parseResponse(client.marketing.test.send_email.$post(args, options))
    },
  })
}

export function usePostMarketingTestSendEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketing.test.send_email.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.marketing.test.send_email.$post>,
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
  const mutationDefaults = getPostMarketingTestSendEmailMutationOptions<TError, TOnMutateResult>(
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

export function getMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['messages', '/messages', keyArgs] as const
}

export function getMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
          >,
          ReturnType<typeof getMessagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagesDownloadMutationKey() {
  return ['messages', '/messages/download', 'POST'] as const
}

export function getPostMessagesDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.download.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.download.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesDownloadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.download.$post>) {
      return parseResponse(client.messages.download.$post(args, options))
    },
  })
}

export function usePostMessagesDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.download.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messages.download.$post>,
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
  const mutationDefaults = getPostMessagesDownloadMutationOptions<TError, TOnMutateResult>(
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

export function getMessagesDownloadDownloadUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['messages', '/messages/download/:download_uuid', keyArgs] as const
}

export function getMessagesDownloadDownloadUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesDownloadDownloadUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages.download[':download_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesDownloadDownloadUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagesDownloadDownloadUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesDownloadDownloadUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesDownloadDownloadUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages.download[':download_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagesMsgIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':msg_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['messages', '/messages/:msg_id', keyArgs] as const
}

export function getMessagesMsgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':msg_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesMsgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':msg_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesMsgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':msg_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
            >
          >,
          ReturnType<typeof getMessagesMsgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMsgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesMsgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':msg_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPartnerSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partner_settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['partner_settings', '/partner_settings', keyArgs] as const
}

export function getPartnerSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partner_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPartnerSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.partner_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePartnerSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partner_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>
            >
          >,
          ReturnType<typeof getPartnerSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPartnerSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPartnerSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.partner_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPartnerSettingsNewRelicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partner_settings.new_relic.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['partner_settings', '/partner_settings/new_relic', keyArgs] as const
}

export function getPartnerSettingsNewRelicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partner_settings.new_relic.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPartnerSettingsNewRelicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.partner_settings.new_relic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePartnerSettingsNewRelic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partner_settings.new_relic.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>
              >
            >
          >,
          ReturnType<typeof getPartnerSettingsNewRelicQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartnerSettingsNewRelicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPartnerSettingsNewRelicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.partner_settings.new_relic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchPartnerSettingsNewRelicMutationKey() {
  return ['partner_settings', '/partner_settings/new_relic', 'PATCH'] as const
}

export function getPatchPartnerSettingsNewRelicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.partner_settings.new_relic.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchPartnerSettingsNewRelicMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.partner_settings.new_relic.$patch>) {
      return parseResponse(client.partner_settings.new_relic.$patch(args, options))
    },
  })
}

export function usePatchPartnerSettingsNewRelic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.partner_settings.new_relic.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.partner_settings.new_relic.$patch>,
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
  const mutationDefaults = getPatchPartnerSettingsNewRelicMutationOptions<TError, TOnMutateResult>(
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

export function getScopesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scopes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['scopes', '/scopes', keyArgs] as const
}

export function getScopesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scopes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScopesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scopes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useScopes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scopes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
          ReturnType<typeof getScopesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScopesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScopesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scopes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScopesRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scopes.requests.$get>>,
) {
  return ['scopes', '/scopes/requests', toValue(args)] as const
}

export function getScopesRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scopes.requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScopesRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scopes.requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScopesRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scopes.requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>
            >
          >,
          ReturnType<typeof getScopesRequestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScopesRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScopesRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scopes.requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteScopesRequestsRequestIdMutationKey() {
  return ['scopes', '/scopes/requests/:request_id', 'DELETE'] as const
}

export function getDeleteScopesRequestsRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scopes.requests)[':request_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scopes.requests)[':request_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScopesRequestsRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scopes.requests)[':request_id']['$delete']>,
    ) {
      return parseResponse(client.scopes.requests[':request_id'].$delete(args, options))
    },
  })
}

export function useDeleteScopesRequestsRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.scopes.requests)[':request_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.scopes.requests)[':request_id']['$delete']>,
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
  const mutationDefaults = getDeleteScopesRequestsRequestIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchScopesRequestsRequestIdApproveMutationKey() {
  return ['scopes', '/scopes/requests/:request_id/approve', 'PATCH'] as const
}

export function getPatchScopesRequestsRequestIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchScopesRequestsRequestIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>,
    ) {
      return parseResponse(client.scopes.requests[':request_id'].approve.$patch(args, options))
    },
  })
}

export function usePatchScopesRequestsRequestIdApprove<
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
                  ReturnType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>,
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
  const mutationDefaults = getPatchScopesRequestsRequestIdApproveMutationOptions<
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

export function getSendersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['senders', '/senders', keyArgs] as const
}

export function getSendersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSendersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.senders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
          >,
          ReturnType<typeof getSendersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSendersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSendersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.senders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSendersMutationKey() {
  return ['senders', '/senders', 'POST'] as const
}

export function getPostSendersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$post>>>>>,
    TError,
    InferRequestType<typeof client.senders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.senders.$post>) {
      return parseResponse(client.senders.$post(args, options))
    },
  })
}

export function usePostSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.senders.$post>,
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
  const mutationDefaults = getPostSendersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSendersSenderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders)[':sender_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['senders', '/senders/:sender_id', keyArgs] as const
}

export function getSendersSenderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders)[':sender_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSendersSenderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.senders[':sender_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSendersSenderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders)[':sender_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSendersSenderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSendersSenderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSendersSenderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.senders[':sender_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSendersSenderIdMutationKey() {
  return ['senders', '/senders/:sender_id', 'DELETE'] as const
}

export function getDeleteSendersSenderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders)[':sender_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.senders)[':sender_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSendersSenderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)[':sender_id']['$delete']>) {
      return parseResponse(client.senders[':sender_id'].$delete(args, options))
    },
  })
}

export function useDeleteSendersSenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.senders)[':sender_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.senders)[':sender_id']['$delete']>,
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
  const mutationDefaults = getDeleteSendersSenderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSendersSenderIdMutationKey() {
  return ['senders', '/senders/:sender_id', 'PATCH'] as const
}

export function getPatchSendersSenderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.senders)[':sender_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSendersSenderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)[':sender_id']['$patch']>) {
      return parseResponse(client.senders[':sender_id'].$patch(args, options))
    },
  })
}

export function usePatchSendersSenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.senders)[':sender_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.senders)[':sender_id']['$patch']>,
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
  const mutationDefaults = getPatchSendersSenderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSendersSenderIdResendVerificationMutationKey() {
  return ['senders', '/senders/:sender_id/resend_verification', 'POST'] as const
}

export function getPostSendersSenderIdResendVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.senders)[':sender_id']['resend_verification']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.senders)[':sender_id']['resend_verification']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersSenderIdResendVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.senders)[':sender_id']['resend_verification']['$post']>,
    ) {
      return parseResponse(client.senders[':sender_id'].resend_verification.$post(args, options))
    },
  })
}

export function usePostSendersSenderIdResendVerification<
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
                      (typeof client.senders)[':sender_id']['resend_verification']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.senders)[':sender_id']['resend_verification']['$post']>,
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
  const mutationDefaults = getPostSendersSenderIdResendVerificationMutationOptions<
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

export function getPostSsoCertificatesMutationKey() {
  return ['sso', '/sso/certificates', 'POST'] as const
}

export function getPostSsoCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sso.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoCertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sso.certificates.$post>) {
      return parseResponse(client.sso.certificates.$post(args, options))
    },
  })
}

export function usePostSsoCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sso.certificates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sso.certificates.$post>,
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
  const mutationDefaults = getPostSsoCertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getSsoCertificatesCertIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>>,
) {
  return ['sso', '/sso/certificates/:cert_id', toValue(args)] as const
}

export function getSsoCertificatesCertIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSsoCertificatesCertIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.certificates[':cert_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSsoCertificatesCertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSsoCertificatesCertIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSsoCertificatesCertIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSsoCertificatesCertIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.certificates[':cert_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSsoCertificatesCertIdMutationKey() {
  return ['sso', '/sso/certificates/:cert_id', 'DELETE'] as const
}

export function getDeleteSsoCertificatesCertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sso.certificates)[':cert_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSsoCertificatesCertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$delete']>,
    ) {
      return parseResponse(client.sso.certificates[':cert_id'].$delete(args, options))
    },
  })
}

export function useDeleteSsoCertificatesCertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sso.certificates)[':cert_id']['$delete']>,
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
  const mutationDefaults = getDeleteSsoCertificatesCertIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSsoCertificatesCertIdMutationKey() {
  return ['sso', '/sso/certificates/:cert_id', 'PATCH'] as const
}

export function getPatchSsoCertificatesCertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sso.certificates)[':cert_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSsoCertificatesCertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$patch']>,
    ) {
      return parseResponse(client.sso.certificates[':cert_id'].$patch(args, options))
    },
  })
}

export function usePatchSsoCertificatesCertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sso.certificates)[':cert_id']['$patch']>,
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
  const mutationDefaults = getPatchSsoCertificatesCertIdMutationOptions<TError, TOnMutateResult>(
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

export function getSsoIntegrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.integrations.$get>>,
) {
  return ['sso', '/sso/integrations', toValue(args)] as const
}

export function getSsoIntegrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.integrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSsoIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.integrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSsoIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.integrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>
            >
          >,
          ReturnType<typeof getSsoIntegrationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSsoIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSsoIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.integrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSsoIntegrationsMutationKey() {
  return ['sso', '/sso/integrations', 'POST'] as const
}

export function getPostSsoIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sso.integrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sso.integrations.$post>) {
      return parseResponse(client.sso.integrations.$post(args, options))
    },
  })
}

export function usePostSsoIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sso.integrations.$post>,
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
  const mutationDefaults = getPostSsoIntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getSsoIntegrationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.integrations)[':id']['$get']>>,
) {
  return ['sso', '/sso/integrations/:id', toValue(args)] as const
}

export function getSsoIntegrationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.integrations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSsoIntegrationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.integrations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSsoIntegrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.integrations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSsoIntegrationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSsoIntegrationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSsoIntegrationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.integrations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSsoIntegrationsIdMutationKey() {
  return ['sso', '/sso/integrations/:id', 'DELETE'] as const
}

export function getDeleteSsoIntegrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sso.integrations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSsoIntegrationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sso.integrations)[':id']['$delete']>) {
      return parseResponse(client.sso.integrations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSsoIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sso.integrations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSsoIntegrationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSsoIntegrationsIdMutationKey() {
  return ['sso', '/sso/integrations/:id', 'PATCH'] as const
}

export function getPatchSsoIntegrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sso.integrations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSsoIntegrationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sso.integrations)[':id']['$patch']>) {
      return parseResponse(client.sso.integrations[':id'].$patch(args, options))
    },
  })
}

export function usePatchSsoIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sso.integrations)[':id']['$patch']>,
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
  const mutationDefaults = getPatchSsoIntegrationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getSsoIntegrationsIntegrationIdCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sso.integrations)[':integration_id']['certificates']['$get']>
  >,
) {
  return ['sso', '/sso/integrations/:integration_id/certificates', toValue(args)] as const
}

export function getSsoIntegrationsIntegrationIdCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sso.integrations)[':integration_id']['certificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSsoIntegrationsIntegrationIdCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.integrations[':integration_id'].certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSsoIntegrationsIntegrationIdCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sso.integrations)[':integration_id']['certificates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sso.integrations)[':integration_id']['certificates']['$get']>
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
                    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
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
                    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSsoIntegrationsIntegrationIdCertificatesQueryKey>
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
            ReturnType<(typeof client.sso.integrations)[':integration_id']['certificates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSsoIntegrationsIntegrationIdCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSsoIntegrationsIntegrationIdCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.integrations[':integration_id'].certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSsoTeammatesMutationKey() {
  return ['sso', '/sso/teammates', 'POST'] as const
}

export function getPostSsoTeammatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.teammates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sso.teammates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoTeammatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sso.teammates.$post>) {
      return parseResponse(client.sso.teammates.$post(args, options))
    },
  })
}

export function usePostSsoTeammates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.teammates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sso.teammates.$post>,
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
  const mutationDefaults = getPostSsoTeammatesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSsoTeammatesUsernameMutationKey() {
  return ['sso', '/sso/teammates/:username', 'PATCH'] as const
}

export function getPatchSsoTeammatesUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sso.teammates)[':username']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sso.teammates)[':username']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSsoTeammatesUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sso.teammates)[':username']['$patch']>) {
      return parseResponse(client.sso.teammates[':username'].$patch(args, options))
    },
  })
}

export function usePatchSsoTeammatesUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.teammates)[':username']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sso.teammates)[':username']['$patch']>,
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
  const mutationDefaults = getPatchSsoTeammatesUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['stats', '/stats', keyArgs] as const
}

export function getStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          ReturnType<typeof getStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubusersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.$get>>,
) {
  return ['subusers', '/subusers', toValue(args)] as const
}

export function getSubusersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubusersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subusers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSubusers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>
          >,
          ReturnType<typeof getSubusersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubusersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubusersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subusers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSubusersMutationKey() {
  return ['subusers', '/subusers', 'POST'] as const
}

export function getPostSubusersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$post>>>>>,
    TError,
    InferRequestType<typeof client.subusers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubusersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subusers.$post>) {
      return parseResponse(client.subusers.$post(args, options))
    },
  })
}

export function usePostSubusers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subusers.$post>,
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
  const mutationDefaults = getPostSubusersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSubusersReputationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.reputations.$get>>,
) {
  return ['subusers', '/subusers/reputations', toValue(args)] as const
}

export function getSubusersReputationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.reputations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubusersReputationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subusers.reputations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubusersReputations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.reputations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>
            >
          >,
          ReturnType<typeof getSubusersReputationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersReputationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubusersReputationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subusers.reputations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubusersStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.$get>>,
) {
  return ['subusers', '/subusers/stats', toValue(args)] as const
}

export function getSubusersStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubusersStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subusers.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubusersStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
          >,
          ReturnType<typeof getSubusersStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubusersStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subusers.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubusersStatsMonthlyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.monthly.$get>>,
) {
  return ['subusers', '/subusers/stats/monthly', toValue(args)] as const
}

export function getSubusersStatsMonthlyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.monthly.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubusersStatsMonthlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subusers.stats.monthly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubusersStatsMonthly<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.monthly.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
            >
          >,
          ReturnType<typeof getSubusersStatsMonthlyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersStatsMonthlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubusersStatsMonthlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subusers.stats.monthly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubusersStatsSumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.sums.$get>>,
) {
  return ['subusers', '/subusers/stats/sums', toValue(args)] as const
}

export function getSubusersStatsSumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.sums.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubusersStatsSumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subusers.stats.sums.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubusersStatsSums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subusers.stats.sums.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>
            >
          >,
          ReturnType<typeof getSubusersStatsSumsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersStatsSumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubusersStatsSumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subusers.stats.sums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSubusersSubuserNameMutationKey() {
  return ['subusers', '/subusers/:subuser_name', 'DELETE'] as const
}

export function getDeleteSubusersSubuserNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.subusers)[':subuser_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubusersSubuserNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subusers)[':subuser_name']['$delete']>) {
      return parseResponse(client.subusers[':subuser_name'].$delete(args, options))
    },
  })
}

export function useDeleteSubusersSubuserName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.subusers)[':subuser_name']['$delete']>,
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
  const mutationDefaults = getDeleteSubusersSubuserNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSubusersSubuserNameMutationKey() {
  return ['subusers', '/subusers/:subuser_name', 'PATCH'] as const
}

export function getPatchSubusersSubuserNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.subusers)[':subuser_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubusersSubuserNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subusers)[':subuser_name']['$patch']>) {
      return parseResponse(client.subusers[':subuser_name'].$patch(args, options))
    },
  })
}

export function usePatchSubusersSubuserName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.subusers)[':subuser_name']['$patch']>,
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
  const mutationDefaults = getPatchSubusersSubuserNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutSubusersSubuserNameIpsMutationKey() {
  return ['subusers', '/subusers/:subuser_name/ips', 'PUT'] as const
}

export function getPutSubusersSubuserNameIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['ips']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subusers)[':subuser_name']['ips']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubusersSubuserNameIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subusers)[':subuser_name']['ips']['$put']>,
    ) {
      return parseResponse(client.subusers[':subuser_name'].ips.$put(args, options))
    },
  })
}

export function usePutSubusersSubuserNameIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['ips']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subusers)[':subuser_name']['ips']['$put']>,
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
  const mutationDefaults = getPutSubusersSubuserNameIpsMutationOptions<TError, TOnMutateResult>(
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

export function getSubusersSubuserNameMonitorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>
  >,
) {
  return ['subusers', '/subusers/:subuser_name/monitor', toValue(args)] as const
}

export function getSubusersSubuserNameMonitorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubusersSubuserNameMonitorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subusers[':subuser_name'].monitor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubusersSubuserNameMonitor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubusersSubuserNameMonitorQueryKey>
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
          Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersSubuserNameMonitorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubusersSubuserNameMonitorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subusers[':subuser_name'].monitor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubusersSubuserNameMonitorMutationKey() {
  return ['subusers', '/subusers/:subuser_name/monitor', 'PUT'] as const
}

export function getPutSubusersSubuserNameMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubusersSubuserNameMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$put']>,
    ) {
      return parseResponse(client.subusers[':subuser_name'].monitor.$put(args, options))
    },
  })
}

export function usePutSubusersSubuserNameMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$put']>,
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
  const mutationDefaults = getPutSubusersSubuserNameMonitorMutationOptions<TError, TOnMutateResult>(
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

export function getPostSubusersSubuserNameMonitorMutationKey() {
  return ['subusers', '/subusers/:subuser_name/monitor', 'POST'] as const
}

export function getPostSubusersSubuserNameMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubusersSubuserNameMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$post']>,
    ) {
      return parseResponse(client.subusers[':subuser_name'].monitor.$post(args, options))
    },
  })
}

export function usePostSubusersSubuserNameMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$post']>,
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
  const mutationDefaults = getPostSubusersSubuserNameMonitorMutationOptions<
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

export function getDeleteSubusersSubuserNameMonitorMutationKey() {
  return ['subusers', '/subusers/:subuser_name/monitor', 'DELETE'] as const
}

export function getDeleteSubusersSubuserNameMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubusersSubuserNameMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>,
    ) {
      return parseResponse(client.subusers[':subuser_name'].monitor.$delete(args, options))
    },
  })
}

export function useDeleteSubusersSubuserNameMonitor<
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
                    ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>,
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
  const mutationDefaults = getDeleteSubusersSubuserNameMonitorMutationOptions<
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

export function getSubusersSubuserNameStatsMonthlyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
  >,
) {
  return ['subusers', '/subusers/:subuser_name/stats/monthly', toValue(args)] as const
}

export function getSubusersSubuserNameStatsMonthlyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubusersSubuserNameStatsMonthlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subusers[':subuser_name'].stats.monthly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubusersSubuserNameStatsMonthly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
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
                  ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubusersSubuserNameStatsMonthlyQueryKey>
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
          Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersSubuserNameStatsMonthlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubusersSubuserNameStatsMonthlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subusers[':subuser_name'].stats.monthly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuppressionBlocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.blocks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/blocks', keyArgs] as const
}

export function getSuppressionBlocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.blocks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.blocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.blocks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>
            >
          >,
          ReturnType<typeof getSuppressionBlocksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSuppressionBlocksMutationKey() {
  return ['suppression', '/suppression/blocks', 'DELETE'] as const
}

export function getDeleteSuppressionBlocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.suppression.blocks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionBlocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suppression.blocks.$delete>) {
      return parseResponse(client.suppression.blocks.$delete(args, options))
    },
  })
}

export function useDeleteSuppressionBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.suppression.blocks.$delete>,
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
  const mutationDefaults = getDeleteSuppressionBlocksMutationOptions<TError, TOnMutateResult>(
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

export function getSuppressionBlocksEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/blocks/:email', keyArgs] as const
}

export function getSuppressionBlocksEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionBlocksEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.blocks[':email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionBlocksEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuppressionBlocksEmailQueryKey>
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
          Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionBlocksEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionBlocksEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.blocks[':email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSuppressionBlocksEmailMutationKey() {
  return ['suppression', '/suppression/blocks/:email', 'DELETE'] as const
}

export function getDeleteSuppressionBlocksEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.suppression.blocks)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionBlocksEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suppression.blocks)[':email']['$delete']>,
    ) {
      return parseResponse(client.suppression.blocks[':email'].$delete(args, options))
    },
  })
}

export function useDeleteSuppressionBlocksEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.suppression.blocks)[':email']['$delete']>,
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
  const mutationDefaults = getDeleteSuppressionBlocksEmailMutationOptions<TError, TOnMutateResult>(
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

export function getSuppressionBouncesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.bounces.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/bounces', keyArgs] as const
}

export function getSuppressionBouncesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.bounces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionBouncesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.bounces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionBounces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.bounces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>
            >
          >,
          ReturnType<typeof getSuppressionBouncesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionBouncesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionBouncesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.bounces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSuppressionBouncesMutationKey() {
  return ['suppression', '/suppression/bounces', 'DELETE'] as const
}

export function getDeleteSuppressionBouncesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.suppression.bounces.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionBouncesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suppression.bounces.$delete>) {
      return parseResponse(client.suppression.bounces.$delete(args, options))
    },
  })
}

export function useDeleteSuppressionBounces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.suppression.bounces.$delete>,
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
  const mutationDefaults = getDeleteSuppressionBouncesMutationOptions<TError, TOnMutateResult>(
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

export function getSuppressionBouncesEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/bounces/:email', keyArgs] as const
}

export function getSuppressionBouncesEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionBouncesEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.bounces[':email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionBouncesEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuppressionBouncesEmailQueryKey>
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
          Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionBouncesEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionBouncesEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.bounces[':email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSuppressionBouncesEmailMutationKey() {
  return ['suppression', '/suppression/bounces/:email', 'DELETE'] as const
}

export function getDeleteSuppressionBouncesEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.suppression.bounces)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionBouncesEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suppression.bounces)[':email']['$delete']>,
    ) {
      return parseResponse(client.suppression.bounces[':email'].$delete(args, options))
    },
  })
}

export function useDeleteSuppressionBouncesEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.suppression.bounces)[':email']['$delete']>,
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
  const mutationDefaults = getDeleteSuppressionBouncesEmailMutationOptions<TError, TOnMutateResult>(
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

export function getSuppressionInvalidEmailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.invalid_emails.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/invalid_emails', keyArgs] as const
}

export function getSuppressionInvalidEmailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.invalid_emails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionInvalidEmailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.invalid_emails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionInvalidEmails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.invalid_emails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>
              >
            >
          >,
          ReturnType<typeof getSuppressionInvalidEmailsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionInvalidEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionInvalidEmailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.invalid_emails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSuppressionInvalidEmailsMutationKey() {
  return ['suppression', '/suppression/invalid_emails', 'DELETE'] as const
}

export function getDeleteSuppressionInvalidEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.suppression.invalid_emails.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.suppression.invalid_emails.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionInvalidEmailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suppression.invalid_emails.$delete>) {
      return parseResponse(client.suppression.invalid_emails.$delete(args, options))
    },
  })
}

export function useDeleteSuppressionInvalidEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.suppression.invalid_emails.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.suppression.invalid_emails.$delete>,
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
  const mutationDefaults = getDeleteSuppressionInvalidEmailsMutationOptions<
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

export function getSuppressionInvalidEmailsEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/invalid_emails/:email', keyArgs] as const
}

export function getSuppressionInvalidEmailsEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionInvalidEmailsEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.invalid_emails[':email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionInvalidEmailsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuppressionInvalidEmailsEmailQueryKey>
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
          Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionInvalidEmailsEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionInvalidEmailsEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.invalid_emails[':email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSuppressionInvalidEmailsEmailMutationKey() {
  return ['suppression', '/suppression/invalid_emails/:email', 'DELETE'] as const
}

export function getDeleteSuppressionInvalidEmailsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionInvalidEmailsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$delete']>,
    ) {
      return parseResponse(client.suppression.invalid_emails[':email'].$delete(args, options))
    },
  })
}

export function useDeleteSuppressionInvalidEmailsEmail<
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
                    ReturnType<(typeof client.suppression.invalid_emails)[':email']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$delete']>,
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
  const mutationDefaults = getDeleteSuppressionInvalidEmailsEmailMutationOptions<
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

export function getSuppressionSpamReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.spam_reports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/spam_reports', keyArgs] as const
}

export function getSuppressionSpamReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.spam_reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionSpamReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.spam_reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionSpamReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.spam_reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
            >
          >,
          ReturnType<typeof getSuppressionSpamReportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionSpamReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionSpamReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.spam_reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSuppressionSpamReportsMutationKey() {
  return ['suppression', '/suppression/spam_reports', 'DELETE'] as const
}

export function getDeleteSuppressionSpamReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.suppression.spam_reports.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionSpamReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suppression.spam_reports.$delete>) {
      return parseResponse(client.suppression.spam_reports.$delete(args, options))
    },
  })
}

export function useDeleteSuppressionSpamReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.suppression.spam_reports.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.suppression.spam_reports.$delete>,
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
  const mutationDefaults = getDeleteSuppressionSpamReportsMutationOptions<TError, TOnMutateResult>(
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

export function getSuppressionSpamReportsEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/spam_reports/:email', keyArgs] as const
}

export function getSuppressionSpamReportsEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionSpamReportsEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.spam_reports[':email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionSpamReportsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuppressionSpamReportsEmailQueryKey>
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
          Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionSpamReportsEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionSpamReportsEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.spam_reports[':email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSuppressionSpamReportsEmailMutationKey() {
  return ['suppression', '/suppression/spam_reports/:email', 'DELETE'] as const
}

export function getDeleteSuppressionSpamReportsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.suppression.spam_reports)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionSpamReportsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$delete']>,
    ) {
      return parseResponse(client.suppression.spam_reports[':email'].$delete(args, options))
    },
  })
}

export function useDeleteSuppressionSpamReportsEmail<
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
                  Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.suppression.spam_reports)[':email']['$delete']>,
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
  const mutationDefaults = getDeleteSuppressionSpamReportsEmailMutationOptions<
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

export function getSuppressionUnsubscribesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.unsubscribes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suppression', '/suppression/unsubscribes', keyArgs] as const
}

export function getSuppressionUnsubscribesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.unsubscribes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionUnsubscribesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppression.unsubscribes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuppressionUnsubscribes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppression.unsubscribes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
            >
          >,
          ReturnType<typeof getSuppressionUnsubscribesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionUnsubscribesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionUnsubscribesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppression.unsubscribes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeammatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teammates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teammates', '/teammates', keyArgs] as const
}

export function getTeammatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teammates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeammatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teammates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeammates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teammates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>
          >,
          ReturnType<typeof getTeammatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeammatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeammatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teammates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeammatesMutationKey() {
  return ['teammates', '/teammates', 'POST'] as const
}

export function getPostTeammatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$post>>>>>,
    TError,
    InferRequestType<typeof client.teammates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeammatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teammates.$post>) {
      return parseResponse(client.teammates.$post(args, options))
    },
  })
}

export function usePostTeammates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.teammates.$post>,
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
  const mutationDefaults = getPostTeammatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeammatesPendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teammates.pending.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teammates', '/teammates/pending', keyArgs] as const
}

export function getTeammatesPendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teammates.pending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeammatesPendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teammates.pending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeammatesPending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teammates.pending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>
            >
          >,
          ReturnType<typeof getTeammatesPendingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeammatesPendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeammatesPendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teammates.pending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTeammatesPendingTokenMutationKey() {
  return ['teammates', '/teammates/pending/:token', 'DELETE'] as const
}

export function getDeleteTeammatesPendingTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teammates.pending)[':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teammates.pending)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeammatesPendingTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teammates.pending)[':token']['$delete']>,
    ) {
      return parseResponse(client.teammates.pending[':token'].$delete(args, options))
    },
  })
}

export function useDeleteTeammatesPendingToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.teammates.pending)[':token']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.teammates.pending)[':token']['$delete']>,
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
  const mutationDefaults = getDeleteTeammatesPendingTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostTeammatesPendingTokenResendMutationKey() {
  return ['teammates', '/teammates/pending/:token/resend', 'POST'] as const
}

export function getPostTeammatesPendingTokenResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teammates.pending)[':token']['resend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teammates.pending)[':token']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeammatesPendingTokenResendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teammates.pending)[':token']['resend']['$post']>,
    ) {
      return parseResponse(client.teammates.pending[':token'].resend.$post(args, options))
    },
  })
}

export function usePostTeammatesPendingTokenResend<
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
                Awaited<ReturnType<(typeof client.teammates.pending)[':token']['resend']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teammates.pending)[':token']['resend']['$post']>,
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
  const mutationDefaults = getPostTeammatesPendingTokenResendMutationOptions<
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

export function getTeammatesUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teammates)[':username']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teammates', '/teammates/:username', keyArgs] as const
}

export function getTeammatesUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teammates)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeammatesUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teammates[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeammatesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teammates)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeammatesUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeammatesUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeammatesUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teammates[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTeammatesUsernameMutationKey() {
  return ['teammates', '/teammates/:username', 'DELETE'] as const
}

export function getDeleteTeammatesUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teammates)[':username']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teammates)[':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeammatesUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teammates)[':username']['$delete']>) {
      return parseResponse(client.teammates[':username'].$delete(args, options))
    },
  })
}

export function useDeleteTeammatesUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.teammates)[':username']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.teammates)[':username']['$delete']>,
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
  const mutationDefaults = getDeleteTeammatesUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTeammatesUsernameMutationKey() {
  return ['teammates', '/teammates/:username', 'PATCH'] as const
}

export function getPatchTeammatesUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.teammates)[':username']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTeammatesUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teammates)[':username']['$patch']>) {
      return parseResponse(client.teammates[':username'].$patch(args, options))
    },
  })
}

export function usePatchTeammatesUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teammates)[':username']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teammates)[':username']['$patch']>,
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
  const mutationDefaults = getPatchTeammatesUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['templates', '/templates', keyArgs] as const
}

export function getTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          ReturnType<typeof getTemplatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesMutationKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function getPostTemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    InferRequestType<typeof client.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.$post>) {
      return parseResponse(client.templates.$post(args, options))
    },
  })
}

export function usePostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.templates.$post>,
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
  const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['templates', '/templates/:template_id', keyArgs] as const
}

export function getTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesTemplateIdMutationKey() {
  return ['templates', '/templates/:template_id', 'POST'] as const
}

export function getPostTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':template_id']['$post']>) {
      return parseResponse(client.templates[':template_id'].$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['$post']>,
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
  const mutationDefaults = getPostTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTemplatesTemplateIdMutationKey() {
  return ['templates', '/templates/:template_id', 'DELETE'] as const
}

export function getDeleteTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':template_id']['$delete']>) {
      return parseResponse(client.templates[':template_id'].$delete(args, options))
    },
  })
}

export function useDeleteTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.templates)[':template_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['$delete']>,
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
  const mutationDefaults = getDeleteTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTemplatesTemplateIdMutationKey() {
  return ['templates', '/templates/:template_id', 'PATCH'] as const
}

export function getPatchTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTemplatesTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':template_id']['$patch']>) {
      return parseResponse(client.templates[':template_id'].$patch(args, options))
    },
  })
}

export function usePatchTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['$patch']>,
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
  const mutationDefaults = getPatchTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesTemplateIdVersionsMutationKey() {
  return ['templates', '/templates/:template_id/versions', 'POST'] as const
}

export function getPostTemplatesTemplateIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':template_id']['versions']['$post']>,
    ) {
      return parseResponse(client.templates[':template_id'].versions.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateIdVersions<
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
                Awaited<ReturnType<(typeof client.templates)[':template_id']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['versions']['$post']>,
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
  const mutationDefaults = getPostTemplatesTemplateIdVersionsMutationOptions<
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

export function getTemplatesTemplateIdVersionsVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['versions'][':version_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['templates', '/templates/:template_id/versions/:version_id', keyArgs] as const
}

export function getTemplatesTemplateIdVersionsVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['versions'][':version_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateIdVersionsVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':template_id'].versions[':version_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.templates)[':template_id']['versions'][':version_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['versions'][':version_id']['$get']>
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
                    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
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
                    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateIdVersionsVersionIdQueryKey>
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
            ReturnType<(typeof client.templates)[':template_id']['versions'][':version_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdVersionsVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateIdVersionsVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':template_id'].versions[':version_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTemplatesTemplateIdVersionsVersionIdMutationKey() {
  return ['templates', '/templates/:template_id/versions/:version_id', 'DELETE'] as const
}

export function getDeleteTemplatesTemplateIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.templates)[':template_id']['versions'][':version_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.templates)[':template_id']['versions'][':version_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesTemplateIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':template_id']['versions'][':version_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.templates[':template_id'].versions[':version_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTemplatesTemplateIdVersionsVersionId<
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
                      (typeof client.templates)[':template_id']['versions'][':version_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.templates)[':template_id']['versions'][':version_id']['$delete']
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
  const mutationDefaults = getDeleteTemplatesTemplateIdVersionsVersionIdMutationOptions<
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

export function getPatchTemplatesTemplateIdVersionsVersionIdMutationKey() {
  return ['templates', '/templates/:template_id/versions/:version_id', 'PATCH'] as const
}

export function getPatchTemplatesTemplateIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.templates)[':template_id']['versions'][':version_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.templates)[':template_id']['versions'][':version_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTemplatesTemplateIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':template_id']['versions'][':version_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.templates[':template_id'].versions[':version_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchTemplatesTemplateIdVersionsVersionId<
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
                    (typeof client.templates)[':template_id']['versions'][':version_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.templates)[':template_id']['versions'][':version_id']['$patch']
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
  const mutationDefaults = getPatchTemplatesTemplateIdVersionsVersionIdMutationOptions<
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

export function getPostTemplatesTemplateIdVersionsVersionIdActivateMutationKey() {
  return ['templates', '/templates/:template_id/versions/:version_id/activate', 'POST'] as const
}

export function getPostTemplatesTemplateIdVersionsVersionIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.templates)[':template_id']['versions'][':version_id']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.templates)[':template_id']['versions'][':version_id']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdVersionsVersionIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':template_id']['versions'][':version_id']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.templates[':template_id'].versions[':version_id'].activate.$post(args, options),
      )
    },
  })
}

export function usePostTemplatesTemplateIdVersionsVersionIdActivate<
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
                    (typeof client.templates)[':template_id']['versions'][':version_id']['activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.templates)[':template_id']['versions'][':version_id']['activate']['$post']
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
  const mutationDefaults = getPostTemplatesTemplateIdVersionsVersionIdActivateMutationOptions<
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

export function getTrackingSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tracking_settings', '/tracking_settings', keyArgs] as const
}

export function getTrackingSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracking_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>
            >
          >,
          ReturnType<typeof getTrackingSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracking_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrackingSettingsClickQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.click.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tracking_settings', '/tracking_settings/click', keyArgs] as const
}

export function getTrackingSettingsClickQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.click.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingSettingsClickQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracking_settings.click.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingSettingsClick<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.click.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
            >
          >,
          ReturnType<typeof getTrackingSettingsClickQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsClickQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingSettingsClickQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracking_settings.click.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchTrackingSettingsClickMutationKey() {
  return ['tracking_settings', '/tracking_settings/click', 'PATCH'] as const
}

export function getPatchTrackingSettingsClickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tracking_settings.click.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchTrackingSettingsClickMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tracking_settings.click.$patch>) {
      return parseResponse(client.tracking_settings.click.$patch(args, options))
    },
  })
}

export function usePatchTrackingSettingsClick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tracking_settings.click.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.tracking_settings.click.$patch>,
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
  const mutationDefaults = getPatchTrackingSettingsClickMutationOptions<TError, TOnMutateResult>(
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

export function getTrackingSettingsGoogleAnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.google_analytics.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tracking_settings', '/tracking_settings/google_analytics', keyArgs] as const
}

export function getTrackingSettingsGoogleAnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.google_analytics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingSettingsGoogleAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracking_settings.google_analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingSettingsGoogleAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.google_analytics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
              >
            >
          >,
          ReturnType<typeof getTrackingSettingsGoogleAnalyticsQueryKey>
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
          Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsGoogleAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingSettingsGoogleAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracking_settings.google_analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchTrackingSettingsGoogleAnalyticsMutationKey() {
  return ['tracking_settings', '/tracking_settings/google_analytics', 'PATCH'] as const
}

export function getPatchTrackingSettingsGoogleAnalyticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.tracking_settings.google_analytics.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchTrackingSettingsGoogleAnalyticsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.tracking_settings.google_analytics.$patch>,
    ) {
      return parseResponse(client.tracking_settings.google_analytics.$patch(args, options))
    },
  })
}

export function usePatchTrackingSettingsGoogleAnalytics<
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
                Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.tracking_settings.google_analytics.$patch>,
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
  const mutationDefaults = getPatchTrackingSettingsGoogleAnalyticsMutationOptions<
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

export function getTrackingSettingsOpenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.open.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tracking_settings', '/tracking_settings/open', keyArgs] as const
}

export function getTrackingSettingsOpenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.open.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingSettingsOpenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracking_settings.open.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingSettingsOpen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.open.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
            >
          >,
          ReturnType<typeof getTrackingSettingsOpenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsOpenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingSettingsOpenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracking_settings.open.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchTrackingSettingsOpenMutationKey() {
  return ['tracking_settings', '/tracking_settings/open', 'PATCH'] as const
}

export function getPatchTrackingSettingsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tracking_settings.open.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchTrackingSettingsOpenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tracking_settings.open.$patch>) {
      return parseResponse(client.tracking_settings.open.$patch(args, options))
    },
  })
}

export function usePatchTrackingSettingsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tracking_settings.open.$patch>,
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
  const mutationDefaults = getPatchTrackingSettingsOpenMutationOptions<TError, TOnMutateResult>(
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

export function getTrackingSettingsSubscriptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.subscription.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tracking_settings', '/tracking_settings/subscription', keyArgs] as const
}

export function getTrackingSettingsSubscriptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.subscription.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingSettingsSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracking_settings.subscription.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingSettingsSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking_settings.subscription.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>
              >
            >
          >,
          ReturnType<typeof getTrackingSettingsSubscriptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingSettingsSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracking_settings.subscription.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchTrackingSettingsSubscriptionMutationKey() {
  return ['tracking_settings', '/tracking_settings/subscription', 'PATCH'] as const
}

export function getPatchTrackingSettingsSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.tracking_settings.subscription.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.tracking_settings.subscription.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchTrackingSettingsSubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tracking_settings.subscription.$patch>) {
      return parseResponse(client.tracking_settings.subscription.$patch(args, options))
    },
  })
}

export function usePatchTrackingSettingsSubscription<
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
                Awaited<ReturnType<typeof client.tracking_settings.subscription.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.tracking_settings.subscription.$patch>,
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
  const mutationDefaults = getPatchTrackingSettingsSubscriptionMutationOptions<
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

export function getUserAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.account.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/account', keyArgs] as const
}

export function getUserAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.account.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
          >,
          ReturnType<typeof getUserAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserCreditsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.credits.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/credits', keyArgs] as const
}

export function getUserCreditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.credits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.credits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.credits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
          >,
          ReturnType<typeof getUserCreditsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.email.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/email', keyArgs] as const
}

export function getUserEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.email.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.email.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.email.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>
          >,
          ReturnType<typeof getUserEmailQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.email.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserEmailMutationKey() {
  return ['user', '/user/email', 'PUT'] as const
}

export function getPutUserEmailMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$put>>>>>,
    TError,
    InferRequestType<typeof client.user.email.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.email.$put>) {
      return parseResponse(client.user.email.$put(args, options))
    },
  })
}

export function usePutUserEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.user.email.$put>,
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
  const mutationDefaults = getPutUserEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUserPasswordMutationKey() {
  return ['user', '/user/password', 'PUT'] as const
}

export function getPutUserPasswordMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.password.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.user.password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.password.$put>) {
      return parseResponse(client.user.password.$put(args, options))
    },
  })
}

export function usePutUserPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.password.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.user.password.$put>,
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
  const mutationDefaults = getPutUserPasswordMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.profile.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/profile', keyArgs] as const
}

export function getUserProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.profile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.profile.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.profile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
          >,
          ReturnType<typeof getUserProfileQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUserProfileMutationKey() {
  return ['user', '/user/profile', 'PATCH'] as const
}

export function getPatchUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.user.profile.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.profile.$patch>) {
      return parseResponse(client.user.profile.$patch(args, options))
    },
  })
}

export function usePatchUserProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.user.profile.$patch>,
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
  const mutationDefaults = getPatchUserProfileMutationOptions<TError, TOnMutateResult>(
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

export function getUserScheduledSendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.scheduled_sends.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/scheduled_sends', keyArgs] as const
}

export function getUserScheduledSendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.scheduled_sends.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserScheduledSendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.scheduled_sends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserScheduledSends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.scheduled_sends.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>
            >
          >,
          ReturnType<typeof getUserScheduledSendsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserScheduledSendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserScheduledSendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.scheduled_sends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserScheduledSendsMutationKey() {
  return ['user', '/user/scheduled_sends', 'POST'] as const
}

export function getPostUserScheduledSendsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.scheduled_sends.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserScheduledSendsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.scheduled_sends.$post>) {
      return parseResponse(client.user.scheduled_sends.$post(args, options))
    },
  })
}

export function usePostUserScheduledSends<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.scheduled_sends.$post>,
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
  const mutationDefaults = getPostUserScheduledSendsMutationOptions<TError, TOnMutateResult>(
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

export function getUserScheduledSendsBatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/scheduled_sends/:batch_id', keyArgs] as const
}

export function getUserScheduledSendsBatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserScheduledSendsBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.scheduled_sends[':batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserScheduledSendsBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserScheduledSendsBatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserScheduledSendsBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserScheduledSendsBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.scheduled_sends[':batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUserScheduledSendsBatchIdMutationKey() {
  return ['user', '/user/scheduled_sends/:batch_id', 'DELETE'] as const
}

export function getDeleteUserScheduledSendsBatchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserScheduledSendsBatchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']>,
    ) {
      return parseResponse(client.user.scheduled_sends[':batch_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserScheduledSendsBatchId<
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
                  Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserScheduledSendsBatchIdMutationOptions<
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

export function getPatchUserScheduledSendsBatchIdMutationKey() {
  return ['user', '/user/scheduled_sends/:batch_id', 'PATCH'] as const
}

export function getPatchUserScheduledSendsBatchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserScheduledSendsBatchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']>,
    ) {
      return parseResponse(client.user.scheduled_sends[':batch_id'].$patch(args, options))
    },
  })
}

export function usePatchUserScheduledSendsBatchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']>,
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
  const mutationDefaults = getPatchUserScheduledSendsBatchIdMutationOptions<
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

export function getUserSettingsEnforcedTlsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.settings.enforced_tls.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/settings/enforced_tls', keyArgs] as const
}

export function getUserSettingsEnforcedTlsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.settings.enforced_tls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserSettingsEnforcedTlsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.settings.enforced_tls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserSettingsEnforcedTls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.settings.enforced_tls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>
              >
            >
          >,
          ReturnType<typeof getUserSettingsEnforcedTlsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserSettingsEnforcedTlsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserSettingsEnforcedTlsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.settings.enforced_tls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUserSettingsEnforcedTlsMutationKey() {
  return ['user', '/user/settings/enforced_tls', 'PATCH'] as const
}

export function getPatchUserSettingsEnforcedTlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.settings.enforced_tls.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserSettingsEnforcedTlsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.settings.enforced_tls.$patch>) {
      return parseResponse(client.user.settings.enforced_tls.$patch(args, options))
    },
  })
}

export function usePatchUserSettingsEnforcedTls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.settings.enforced_tls.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.settings.enforced_tls.$patch>,
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
  const mutationDefaults = getPatchUserSettingsEnforcedTlsMutationOptions<TError, TOnMutateResult>(
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

export function getUserUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.username.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/username', keyArgs] as const
}

export function getUserUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.username.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.username.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.username.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
          >,
          ReturnType<typeof getUserUsernameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.username.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserUsernameMutationKey() {
  return ['user', '/user/username', 'PUT'] as const
}

export function getPutUserUsernameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.user.username.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserUsernameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.username.$put>) {
      return parseResponse(client.user.username.$put(args, options))
    },
  })
}

export function usePutUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.user.username.$put>,
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
  const mutationDefaults = getPutUserUsernameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserWebhooksEventSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.event.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/webhooks/event/settings', keyArgs] as const
}

export function getUserWebhooksEventSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.event.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWebhooksEventSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.webhooks.event.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWebhooksEventSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.event.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>
              >
            >
          >,
          ReturnType<typeof getUserWebhooksEventSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWebhooksEventSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWebhooksEventSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.webhooks.event.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUserWebhooksEventSettingsMutationKey() {
  return ['user', '/user/webhooks/event/settings', 'PATCH'] as const
}

export function getPatchUserWebhooksEventSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.webhooks.event.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserWebhooksEventSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.webhooks.event.settings.$patch>) {
      return parseResponse(client.user.webhooks.event.settings.$patch(args, options))
    },
  })
}

export function usePatchUserWebhooksEventSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.event.settings.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.webhooks.event.settings.$patch>,
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
  const mutationDefaults = getPatchUserWebhooksEventSettingsMutationOptions<
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

export function getUserWebhooksEventSettingsSignedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/webhooks/event/settings/signed', keyArgs] as const
}

export function getUserWebhooksEventSettingsSignedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWebhooksEventSettingsSignedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.webhooks.event.settings.signed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWebhooksEventSettingsSigned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
              >
            >
          >,
          ReturnType<typeof getUserWebhooksEventSettingsSignedQueryKey>
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
          Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWebhooksEventSettingsSignedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWebhooksEventSettingsSignedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.webhooks.event.settings.signed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUserWebhooksEventSettingsSignedMutationKey() {
  return ['user', '/user/webhooks/event/settings/signed', 'PATCH'] as const
}

export function getPatchUserWebhooksEventSettingsSignedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user.webhooks.event.settings.signed.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserWebhooksEventSettingsSignedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.user.webhooks.event.settings.signed.$patch>,
    ) {
      return parseResponse(client.user.webhooks.event.settings.signed.$patch(args, options))
    },
  })
}

export function usePatchUserWebhooksEventSettingsSigned<
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
                Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.webhooks.event.settings.signed.$patch>,
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
  const mutationDefaults = getPatchUserWebhooksEventSettingsSignedMutationOptions<
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

export function getPostUserWebhooksEventTestMutationKey() {
  return ['user', '/user/webhooks/event/test', 'POST'] as const
}

export function getPostUserWebhooksEventTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.test.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.user.webhooks.event.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserWebhooksEventTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.webhooks.event.test.$post>) {
      return parseResponse(client.user.webhooks.event.test.$post(args, options))
    },
  })
}

export function usePostUserWebhooksEventTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.user.webhooks.event.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.user.webhooks.event.test.$post>,
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
  const mutationDefaults = getPostUserWebhooksEventTestMutationOptions<TError, TOnMutateResult>(
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

export function getUserWebhooksParseSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.parse.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/webhooks/parse/settings', keyArgs] as const
}

export function getUserWebhooksParseSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.parse.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWebhooksParseSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.webhooks.parse.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWebhooksParseSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.parse.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>
              >
            >
          >,
          ReturnType<typeof getUserWebhooksParseSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWebhooksParseSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWebhooksParseSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.webhooks.parse.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserWebhooksParseSettingsMutationKey() {
  return ['user', '/user/webhooks/parse/settings', 'POST'] as const
}

export function getPostUserWebhooksParseSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.webhooks.parse.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserWebhooksParseSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.webhooks.parse.settings.$post>) {
      return parseResponse(client.user.webhooks.parse.settings.$post(args, options))
    },
  })
}

export function usePostUserWebhooksParseSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.webhooks.parse.settings.$post>,
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
  const mutationDefaults = getPostUserWebhooksParseSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getUserWebhooksParseSettingsHostnameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/webhooks/parse/settings/:hostname', keyArgs] as const
}

export function getUserWebhooksParseSettingsHostnameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWebhooksParseSettingsHostnameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.webhooks.parse.settings[':hostname'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWebhooksParseSettingsHostname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>
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
                  ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserWebhooksParseSettingsHostnameQueryKey>
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
          Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWebhooksParseSettingsHostnameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWebhooksParseSettingsHostnameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.webhooks.parse.settings[':hostname'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUserWebhooksParseSettingsHostnameMutationKey() {
  return ['user', '/user/webhooks/parse/settings/:hostname', 'DELETE'] as const
}

export function getDeleteUserWebhooksParseSettingsHostnameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserWebhooksParseSettingsHostnameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$delete']>,
    ) {
      return parseResponse(client.user.webhooks.parse.settings[':hostname'].$delete(args, options))
    },
  })
}

export function useDeleteUserWebhooksParseSettingsHostname<
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
                    ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$delete']>,
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
  const mutationDefaults = getDeleteUserWebhooksParseSettingsHostnameMutationOptions<
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

export function getPatchUserWebhooksParseSettingsHostnameMutationKey() {
  return ['user', '/user/webhooks/parse/settings/:hostname', 'PATCH'] as const
}

export function getPatchUserWebhooksParseSettingsHostnameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserWebhooksParseSettingsHostnameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>,
    ) {
      return parseResponse(client.user.webhooks.parse.settings[':hostname'].$patch(args, options))
    },
  })
}

export function usePatchUserWebhooksParseSettingsHostname<
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
                  ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>,
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
  const mutationDefaults = getPatchUserWebhooksParseSettingsHostnameMutationOptions<
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

export function getUserWebhooksParseStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.parse.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/webhooks/parse/stats', keyArgs] as const
}

export function getUserWebhooksParseStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.parse.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWebhooksParseStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.webhooks.parse.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWebhooksParseStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.webhooks.parse.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>
              >
            >
          >,
          ReturnType<typeof getUserWebhooksParseStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWebhooksParseStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWebhooksParseStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.webhooks.parse.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostValidationsEmailMutationKey() {
  return ['validations', '/validations/email', 'POST'] as const
}

export function getPostValidationsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validations.email.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.validations.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidationsEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.validations.email.$post>) {
      return parseResponse(client.validations.email.$post(args, options))
    },
  })
}

export function usePostValidationsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.validations.email.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.validations.email.$post>,
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
  const mutationDefaults = getPostValidationsEmailMutationOptions<TError, TOnMutateResult>(
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

export function getVerifiedSendersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verified_senders.$get>>,
) {
  return ['verified_senders', '/verified_senders', toValue(args)] as const
}

export function getVerifiedSendersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verified_senders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVerifiedSendersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.verified_senders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVerifiedSenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verified_senders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>
            >
          >,
          ReturnType<typeof getVerifiedSendersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVerifiedSendersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVerifiedSendersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.verified_senders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVerifiedSendersMutationKey() {
  return ['verified_senders', '/verified_senders', 'POST'] as const
}

export function getPostVerifiedSendersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.verified_senders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifiedSendersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verified_senders.$post>) {
      return parseResponse(client.verified_senders.$post(args, options))
    },
  })
}

export function usePostVerifiedSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.verified_senders.$post>,
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
  const mutationDefaults = getPostVerifiedSendersMutationOptions<TError, TOnMutateResult>(
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

export function getVerifiedSendersDomainsQueryKey() {
  return ['verified_senders', '/verified_senders/domains'] as const
}

export function getVerifiedSendersDomainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVerifiedSendersDomainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.verified_senders.domains.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVerifiedSendersDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
            >
          >,
          ReturnType<typeof getVerifiedSendersDomainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerifiedSendersDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVerifiedSendersDomainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.verified_senders.domains.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVerifiedSendersResendIdMutationKey() {
  return ['verified_senders', '/verified_senders/resend/:id', 'POST'] as const
}

export function getPostVerifiedSendersResendIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verified_senders.resend)[':id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.verified_senders.resend)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifiedSendersResendIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.verified_senders.resend)[':id']['$post']>,
    ) {
      return parseResponse(client.verified_senders.resend[':id'].$post(args, options))
    },
  })
}

export function usePostVerifiedSendersResendId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.verified_senders.resend)[':id']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.verified_senders.resend)[':id']['$post']>,
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
  const mutationDefaults = getPostVerifiedSendersResendIdMutationOptions<TError, TOnMutateResult>(
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

export function getVerifiedSendersStepsCompletedQueryKey() {
  return ['verified_senders', '/verified_senders/steps_completed'] as const
}

export function getVerifiedSendersStepsCompletedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVerifiedSendersStepsCompletedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.verified_senders.steps_completed.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVerifiedSendersStepsCompleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>
              >
            >
          >,
          ReturnType<typeof getVerifiedSendersStepsCompletedQueryKey>
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
          Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerifiedSendersStepsCompletedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVerifiedSendersStepsCompletedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.verified_senders.steps_completed.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVerifiedSendersVerifyTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>
  >,
) {
  return ['verified_senders', '/verified_senders/verify/:token', toValue(args)] as const
}

export function getVerifiedSendersVerifyTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVerifiedSendersVerifyTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.verified_senders.verify[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVerifiedSendersVerifyToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVerifiedSendersVerifyTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerifiedSendersVerifyTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVerifiedSendersVerifyTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.verified_senders.verify[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVerifiedSendersIdMutationKey() {
  return ['verified_senders', '/verified_senders/:id', 'DELETE'] as const
}

export function getDeleteVerifiedSendersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verified_senders)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.verified_senders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVerifiedSendersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.verified_senders)[':id']['$delete']>) {
      return parseResponse(client.verified_senders[':id'].$delete(args, options))
    },
  })
}

export function useDeleteVerifiedSendersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.verified_senders)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.verified_senders)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteVerifiedSendersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchVerifiedSendersIdMutationKey() {
  return ['verified_senders', '/verified_senders/:id', 'PATCH'] as const
}

export function getPatchVerifiedSendersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.verified_senders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.verified_senders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVerifiedSendersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.verified_senders)[':id']['$patch']>) {
      return parseResponse(client.verified_senders[':id'].$patch(args, options))
    },
  })
}

export function usePatchVerifiedSendersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.verified_senders)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.verified_senders)[':id']['$patch']>,
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
  const mutationDefaults = getPatchVerifiedSendersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWhitelabelDnsEmailMutationKey() {
  return ['whitelabel', '/whitelabel/dns/email', 'POST'] as const
}

export function getPostWhitelabelDnsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.dns.email.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.whitelabel.dns.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelDnsEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whitelabel.dns.email.$post>) {
      return parseResponse(client.whitelabel.dns.email.$post(args, options))
    },
  })
}

export function usePostWhitelabelDnsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.dns.email.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.whitelabel.dns.email.$post>,
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
  const mutationDefaults = getPostWhitelabelDnsEmailMutationOptions<TError, TOnMutateResult>(
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

export function getWhitelabelDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whitelabel', '/whitelabel/domains', keyArgs] as const
}

export function getWhitelabelDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>
            >
          >,
          ReturnType<typeof getWhitelabelDomainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWhitelabelDomainsMutationKey() {
  return ['whitelabel', '/whitelabel/domains', 'POST'] as const
}

export function getPostWhitelabelDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.whitelabel.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whitelabel.domains.$post>) {
      return parseResponse(client.whitelabel.domains.$post(args, options))
    },
  })
}

export function usePostWhitelabelDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.whitelabel.domains.$post>,
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
  const mutationDefaults = getPostWhitelabelDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getWhitelabelDomainsDefaultQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.default.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whitelabel', '/whitelabel/domains/default', keyArgs] as const
}

export function getWhitelabelDomainsDefaultQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.default.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelDomainsDefaultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.domains.default.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelDomainsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.default.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>
              >
            >
          >,
          ReturnType<typeof getWhitelabelDomainsDefaultQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelDomainsDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelDomainsDefaultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.domains.default.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWhitelabelDomainsSubuserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.subuser.$get>>,
) {
  return ['whitelabel', '/whitelabel/domains/subuser', toValue(args)] as const
}

export function getWhitelabelDomainsSubuserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.subuser.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelDomainsSubuserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.domains.subuser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelDomainsSubuser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.domains.subuser.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>
              >
            >
          >,
          ReturnType<typeof getWhitelabelDomainsSubuserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelDomainsSubuserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelDomainsSubuserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.domains.subuser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWhitelabelDomainsSubuserMutationKey() {
  return ['whitelabel', '/whitelabel/domains/subuser', 'DELETE'] as const
}

export function getDeleteWhitelabelDomainsSubuserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.whitelabel.domains.subuser.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhitelabelDomainsSubuserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whitelabel.domains.subuser.$delete>) {
      return parseResponse(client.whitelabel.domains.subuser.$delete(args, options))
    },
  })
}

export function useDeleteWhitelabelDomainsSubuser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.whitelabel.domains.subuser.$delete>,
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
  const mutationDefaults = getDeleteWhitelabelDomainsSubuserMutationOptions<
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

export function getWhitelabelDomainsDomainIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whitelabel', '/whitelabel/domains/:domain_id', keyArgs] as const
}

export function getWhitelabelDomainsDomainIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelDomainsDomainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.domains[':domain_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWhitelabelDomainsDomainIdQueryKey>
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
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelDomainsDomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelDomainsDomainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.domains[':domain_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWhitelabelDomainsDomainIdMutationKey() {
  return ['whitelabel', '/whitelabel/domains/:domain_id', 'DELETE'] as const
}

export function getDeleteWhitelabelDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhitelabelDomainsDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$delete']>,
    ) {
      return parseResponse(client.whitelabel.domains[':domain_id'].$delete(args, options))
    },
  })
}

export function useDeleteWhitelabelDomainsDomainId<
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
                  Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$delete']>,
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
  const mutationDefaults = getDeleteWhitelabelDomainsDomainIdMutationOptions<
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

export function getPatchWhitelabelDomainsDomainIdMutationKey() {
  return ['whitelabel', '/whitelabel/domains/:domain_id', 'PATCH'] as const
}

export function getPatchWhitelabelDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWhitelabelDomainsDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$patch']>,
    ) {
      return parseResponse(client.whitelabel.domains[':domain_id'].$patch(args, options))
    },
  })
}

export function usePatchWhitelabelDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$patch']>,
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
  const mutationDefaults = getPatchWhitelabelDomainsDomainIdMutationOptions<
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

export function getPostWhitelabelDomainsDomainIdSubuserMutationKey() {
  return ['whitelabel', '/whitelabel/domains/:domain_id/subuser', 'POST'] as const
}

export function getPostWhitelabelDomainsDomainIdSubuserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelDomainsDomainIdSubuserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>,
    ) {
      return parseResponse(client.whitelabel.domains[':domain_id'].subuser.$post(args, options))
    },
  })
}

export function usePostWhitelabelDomainsDomainIdSubuser<
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
                  ReturnType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>,
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
  const mutationDefaults = getPostWhitelabelDomainsDomainIdSubuserMutationOptions<
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

export function getPostWhitelabelDomainsIdIpsMutationKey() {
  return ['whitelabel', '/whitelabel/domains/:id/ips', 'POST'] as const
}

export function getPostWhitelabelDomainsIdIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':id']['ips']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.domains)[':id']['ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelDomainsIdIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.domains)[':id']['ips']['$post']>,
    ) {
      return parseResponse(client.whitelabel.domains[':id'].ips.$post(args, options))
    },
  })
}

export function usePostWhitelabelDomainsIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.domains)[':id']['ips']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.domains)[':id']['ips']['$post']>,
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
  const mutationDefaults = getPostWhitelabelDomainsIdIpsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWhitelabelDomainsIdIpsIpMutationKey() {
  return ['whitelabel', '/whitelabel/domains/:id/ips/:ip', 'DELETE'] as const
}

export function getDeleteWhitelabelDomainsIdIpsIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhitelabelDomainsIdIpsIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>,
    ) {
      return parseResponse(client.whitelabel.domains[':id'].ips[':ip'].$delete(args, options))
    },
  })
}

export function useDeleteWhitelabelDomainsIdIpsIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>,
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
  const mutationDefaults = getDeleteWhitelabelDomainsIdIpsIpMutationOptions<
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

export function getPostWhitelabelDomainsIdValidateMutationKey() {
  return ['whitelabel', '/whitelabel/domains/:id/validate', 'POST'] as const
}

export function getPostWhitelabelDomainsIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelDomainsIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>,
    ) {
      return parseResponse(client.whitelabel.domains[':id'].validate.$post(args, options))
    },
  })
}

export function usePostWhitelabelDomainsIdValidate<
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
                Awaited<ReturnType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>,
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
  const mutationDefaults = getPostWhitelabelDomainsIdValidateMutationOptions<
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

export function getWhitelabelIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.ips.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whitelabel', '/whitelabel/ips', keyArgs] as const
}

export function getWhitelabelIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.ips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.ips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
          >,
          ReturnType<typeof getWhitelabelIpsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWhitelabelIpsMutationKey() {
  return ['whitelabel', '/whitelabel/ips', 'POST'] as const
}

export function getPostWhitelabelIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.whitelabel.ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whitelabel.ips.$post>) {
      return parseResponse(client.whitelabel.ips.$post(args, options))
    },
  })
}

export function usePostWhitelabelIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.whitelabel.ips.$post>,
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
  const mutationDefaults = getPostWhitelabelIpsMutationOptions<TError, TOnMutateResult>(
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

export function getWhitelabelIpsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whitelabel', '/whitelabel/ips/:id', keyArgs] as const
}

export function getWhitelabelIpsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelIpsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.ips[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWhitelabelIpsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelIpsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelIpsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.ips[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWhitelabelIpsIdMutationKey() {
  return ['whitelabel', '/whitelabel/ips/:id', 'DELETE'] as const
}

export function getDeleteWhitelabelIpsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.whitelabel.ips)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhitelabelIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.whitelabel.ips)[':id']['$delete']>) {
      return parseResponse(client.whitelabel.ips[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWhitelabelIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.whitelabel.ips)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteWhitelabelIpsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWhitelabelIpsIdValidateMutationKey() {
  return ['whitelabel', '/whitelabel/ips/:id/validate', 'POST'] as const
}

export function getPostWhitelabelIpsIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.ips)[':id']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelIpsIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.ips)[':id']['validate']['$post']>,
    ) {
      return parseResponse(client.whitelabel.ips[':id'].validate.$post(args, options))
    },
  })
}

export function usePostWhitelabelIpsIdValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['validate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.ips)[':id']['validate']['$post']>,
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
  const mutationDefaults = getPostWhitelabelIpsIdValidateMutationOptions<TError, TOnMutateResult>(
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

export function getWhitelabelLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whitelabel', '/whitelabel/links', keyArgs] as const
}

export function getWhitelabelLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.links.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>
            >
          >,
          ReturnType<typeof getWhitelabelLinksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWhitelabelLinksMutationKey() {
  return ['whitelabel', '/whitelabel/links', 'POST'] as const
}

export function getPostWhitelabelLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.whitelabel.links.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whitelabel.links.$post>) {
      return parseResponse(client.whitelabel.links.$post(args, options))
    },
  })
}

export function usePostWhitelabelLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.whitelabel.links.$post>,
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
  const mutationDefaults = getPostWhitelabelLinksMutationOptions<TError, TOnMutateResult>(
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

export function getWhitelabelLinksDefaultQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.default.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whitelabel', '/whitelabel/links/default', keyArgs] as const
}

export function getWhitelabelLinksDefaultQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.default.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelLinksDefaultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.links.default.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelLinksDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.default.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
            >
          >,
          ReturnType<typeof getWhitelabelLinksDefaultQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelLinksDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelLinksDefaultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.links.default.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWhitelabelLinksSubuserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.subuser.$get>>,
) {
  return ['whitelabel', '/whitelabel/links/subuser', toValue(args)] as const
}

export function getWhitelabelLinksSubuserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.subuser.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelLinksSubuserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.links.subuser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelLinksSubuser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whitelabel.links.subuser.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
            >
          >,
          ReturnType<typeof getWhitelabelLinksSubuserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelLinksSubuserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelLinksSubuserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.links.subuser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWhitelabelLinksSubuserMutationKey() {
  return ['whitelabel', '/whitelabel/links/subuser', 'DELETE'] as const
}

export function getDeleteWhitelabelLinksSubuserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.whitelabel.links.subuser.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhitelabelLinksSubuserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whitelabel.links.subuser.$delete>) {
      return parseResponse(client.whitelabel.links.subuser.$delete(args, options))
    },
  })
}

export function useDeleteWhitelabelLinksSubuser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.whitelabel.links.subuser.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.whitelabel.links.subuser.$delete>,
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
  const mutationDefaults = getDeleteWhitelabelLinksSubuserMutationOptions<TError, TOnMutateResult>(
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

export function getWhitelabelLinksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whitelabel', '/whitelabel/links/:id', keyArgs] as const
}

export function getWhitelabelLinksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhitelabelLinksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whitelabel.links[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhitelabelLinksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWhitelabelLinksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelLinksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhitelabelLinksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whitelabel.links[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWhitelabelLinksIdMutationKey() {
  return ['whitelabel', '/whitelabel/links/:id', 'DELETE'] as const
}

export function getDeleteWhitelabelLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.whitelabel.links)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhitelabelLinksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.whitelabel.links)[':id']['$delete']>) {
      return parseResponse(client.whitelabel.links[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWhitelabelLinksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.whitelabel.links)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteWhitelabelLinksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWhitelabelLinksIdMutationKey() {
  return ['whitelabel', '/whitelabel/links/:id', 'PATCH'] as const
}

export function getPatchWhitelabelLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.links)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWhitelabelLinksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.whitelabel.links)[':id']['$patch']>) {
      return parseResponse(client.whitelabel.links[':id'].$patch(args, options))
    },
  })
}

export function usePatchWhitelabelLinksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.links)[':id']['$patch']>,
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
  const mutationDefaults = getPatchWhitelabelLinksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWhitelabelLinksIdValidateMutationKey() {
  return ['whitelabel', '/whitelabel/links/:id/validate', 'POST'] as const
}

export function getPostWhitelabelLinksIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.links)[':id']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelLinksIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.links)[':id']['validate']['$post']>,
    ) {
      return parseResponse(client.whitelabel.links[':id'].validate.$post(args, options))
    },
  })
}

export function usePostWhitelabelLinksIdValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['validate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.links)[':id']['validate']['$post']>,
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
  const mutationDefaults = getPostWhitelabelLinksIdValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPostWhitelabelLinksLinkIdSubuserMutationKey() {
  return ['whitelabel', '/whitelabel/links/:link_id/subuser', 'POST'] as const
}

export function getPostWhitelabelLinksLinkIdSubuserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWhitelabelLinksLinkIdSubuserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>,
    ) {
      return parseResponse(client.whitelabel.links[':link_id'].subuser.$post(args, options))
    },
  })
}

export function usePostWhitelabelLinksLinkIdSubuser<
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
                  ReturnType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>,
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
  const mutationDefaults = getPostWhitelabelLinksLinkIdSubuserMutationOptions<
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
