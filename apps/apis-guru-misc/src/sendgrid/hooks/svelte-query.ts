import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<typeof client.access_settings.activity.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['access_settings', '/access_settings/activity', keyArgs] as const
}

export function getAccessSettingsActivityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.access_settings.activity.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessSettingsActivityQueryKey>
  >({
    queryKey: getAccessSettingsActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.access_settings.activity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccessSettingsActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.access_settings.activity.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessSettingsActivityQueryKey>
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
      ...getAccessSettingsActivityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccessSettingsWhitelistQueryKey(
  args: InferRequestType<typeof client.access_settings.whitelist.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['access_settings', '/access_settings/whitelist', keyArgs] as const
}

export function getAccessSettingsWhitelistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.access_settings.whitelist.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessSettingsWhitelistQueryKey>
  >({
    queryKey: getAccessSettingsWhitelistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.access_settings.whitelist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccessSettingsWhitelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.access_settings.whitelist.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessSettingsWhitelistQueryKey>
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
      ...getAccessSettingsWhitelistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAccessSettingsWhitelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.access_settings.whitelist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccessSettingsWhitelistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAccessSettingsWhitelist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccessSettingsWhitelistMutationOptions<
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

export function getAccessSettingsWhitelistRuleIdQueryKey(
  args: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['access_settings', '/access_settings/whitelist/:rule_id', keyArgs] as const
}

export function getAccessSettingsWhitelistRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccessSettingsWhitelistRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.access_settings.whitelist[':rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccessSettingsWhitelistRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccessSettingsWhitelistRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccessSettingsWhitelistRuleId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccessSettingsWhitelistRuleIdMutationOptions<
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

export function getAlertsQueryKey(args: InferRequestType<typeof client.alerts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['alerts', '/alerts', keyArgs] as const
}

export function getAlertsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsQueryKey>
  >({
    queryKey: getAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.alerts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$post>>>>>,
        TError,
        InferRequestType<typeof client.alerts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlertsAlertIdQueryKey(
  args: InferRequestType<(typeof client.alerts)[':alert_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alerts', '/alerts/:alert_id', keyArgs] as const
}

export function getAlertsAlertIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts)[':alert_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdQueryKey>
  >({
    queryKey: getAlertsAlertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts[':alert_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts)[':alert_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsAlertIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsAlertIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAlertsAlertIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.alerts)[':alert_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAlertsAlertIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeysQueryKey(args: InferRequestType<typeof client.api_keys.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api_keys', '/api_keys', keyArgs] as const
}

export function getApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >({
    queryKey: getApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api_keys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api_keys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeysApiKeyIdQueryKey(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api_keys', '/api_keys/:api_key_id', keyArgs] as const
}

export function getApiKeysApiKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysApiKeyIdQueryKey>
  >({
    queryKey: getApiKeysApiKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys[':api_key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiKeysApiKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeysApiKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeysApiKeyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAsmGroupsQueryKey(args: InferRequestType<typeof client.asm.groups.$get>) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/groups', keyArgs] as const
}

export function getAsmGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.asm.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAsmGroupsQueryKey>
  >({
    queryKey: getAsmGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asm.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAsmGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.asm.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAsmGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAsmGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAsmGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.asm.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAsmGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAsmGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/groups/:group_id', keyArgs] as const
}

export function getAsmGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAsmGroupsGroupIdQueryKey>
  >({
    queryKey: getAsmGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asm.groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAsmGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAsmGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAsmGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAsmGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAsmGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAsmGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAsmGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAsmGroupsGroupIdSuppressionsQueryKey(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/groups/:group_id/suppressions', keyArgs] as const
}

export function getAsmGroupsGroupIdSuppressionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAsmGroupsGroupIdSuppressionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asm.groups[':group_id'].suppressions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAsmGroupsGroupIdSuppressions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAsmGroupsGroupIdSuppressionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAsmGroupsGroupIdSuppressions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAsmGroupsGroupIdSuppressionsMutationOptions<
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

export function createPostAsmGroupsGroupIdSuppressionsSearch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAsmGroupsGroupIdSuppressionsSearchMutationOptions<
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

export function createDeleteAsmGroupsGroupIdSuppressionsEmail<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAsmGroupsGroupIdSuppressionsEmailMutationOptions<
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

export function getAsmSuppressionsQueryKey(
  args: InferRequestType<typeof client.asm.suppressions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/suppressions', keyArgs] as const
}

export function getAsmSuppressionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.asm.suppressions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAsmSuppressionsQueryKey>
  >({
    queryKey: getAsmSuppressionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asm.suppressions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAsmSuppressions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.asm.suppressions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAsmSuppressionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAsmSuppressionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAsmSuppressionsGlobal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.global.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.asm.suppressions.global.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAsmSuppressionsGlobalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAsmSuppressionsGlobalEmailQueryKey(
  args: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/suppressions/global/:email', keyArgs] as const
}

export function getAsmSuppressionsGlobalEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAsmSuppressionsGlobalEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asm.suppressions.global[':email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAsmSuppressionsGlobalEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAsmSuppressionsGlobalEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAsmSuppressionsGlobalEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAsmSuppressionsGlobalEmailMutationOptions<
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

export function getAsmSuppressionsEmailQueryKey(
  args: InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/suppressions/:email', keyArgs] as const
}

export function getAsmSuppressionsEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAsmSuppressionsEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asm.suppressions[':email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAsmSuppressionsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAsmSuppressionsEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBrowsersStatsQueryKey(
  args: InferRequestType<typeof client.browsers.stats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['browsers', '/browsers/stats', keyArgs] as const
}

export function getBrowsersStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.browsers.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrowsersStatsQueryKey>
  >({
    queryKey: getBrowsersStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browsers.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBrowsersStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.browsers.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBrowsersStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrowsersStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCampaignsQueryKey(args: InferRequestType<typeof client.campaigns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['campaigns', '/campaigns', keyArgs] as const
}

export function getCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.campaigns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampaignsQueryKey>
  >({
    queryKey: getCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.campaigns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCampaignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.campaigns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCampaignsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCampaignsCampaignIdQueryKey(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['campaigns', '/campaigns/:campaign_id', keyArgs] as const
}

export function getCampaignsCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsCampaignIdQueryKey>
  >({
    queryKey: getCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns[':campaign_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsCampaignIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCampaignsCampaignIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCampaignsCampaignIdSchedulesQueryKey(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['campaigns', '/campaigns/:campaign_id/schedules', keyArgs] as const
}

export function getCampaignsCampaignIdSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCampaignsCampaignIdSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns[':campaign_id'].schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCampaignsCampaignIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCampaignsCampaignIdSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCampaignsCampaignIdSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCampaignsCampaignIdSchedulesMutationOptions<
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

export function createDeleteCampaignsCampaignIdSchedules<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCampaignsCampaignIdSchedulesMutationOptions<
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

export function createPatchCampaignsCampaignIdSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCampaignsCampaignIdSchedulesMutationOptions<
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

export function createPostCampaignsCampaignIdSchedulesNow<
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
                ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCampaignsCampaignIdSchedulesNowMutationOptions<
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

export function createPostCampaignsCampaignIdSchedulesTest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCampaignsCampaignIdSchedulesTestMutationOptions<
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

export function getCategoriesQueryKey(args: InferRequestType<typeof client.categories.$get>) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories', keyArgs] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesStatsQueryKey(
  args: InferRequestType<typeof client.categories.stats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories/stats', keyArgs] as const
}

export function getCategoriesStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.categories.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesStatsQueryKey>
  >({
    queryKey: getCategoriesStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoriesStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.categories.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesStatsSumsQueryKey(
  args: InferRequestType<typeof client.categories.stats.sums.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories/stats/sums', keyArgs] as const
}

export function getCategoriesStatsSumsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.categories.stats.sums.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesStatsSumsQueryKey>
  >({
    queryKey: getCategoriesStatsSumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.stats.sums.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoriesStatsSums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.categories.stats.sums.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesStatsSumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesStatsSumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getClientsStatsQueryKey(args: InferRequestType<typeof client.clients.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['clients', '/clients/stats', keyArgs] as const
}

export function getClientsStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clients.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientsStatsQueryKey>
  >({
    queryKey: getClientsStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClientsStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clients.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getClientsStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClientsStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getClientsClientTypeStatsQueryKey(
  args: InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clients', '/clients/:client_type/stats', keyArgs] as const
}

export function getClientsClientTypeStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getClientsClientTypeStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients[':client_type'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClientsClientTypeStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getClientsClientTypeStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContactdbCustomFieldsQueryKey(
  args: InferRequestType<typeof client.contactdb.custom_fields.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/custom_fields', keyArgs] as const
}

export function getContactdbCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contactdb.custom_fields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbCustomFieldsQueryKey>
  >({
    queryKey: getContactdbCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.custom_fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.custom_fields.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactdbCustomFieldsQueryKey>
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
      ...getContactdbCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostContactdbCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contactdb.custom_fields.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactdbCustomFieldsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getContactdbCustomFieldsCustomFieldIdQueryKey(
  args: InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/custom_fields/:custom_field_id', keyArgs] as const
}

export function getContactdbCustomFieldsCustomFieldIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactdbCustomFieldsCustomFieldIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.custom_fields[':custom_field_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbCustomFieldsCustomFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getContactdbCustomFieldsCustomFieldIdQueryKey>
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
      ...getContactdbCustomFieldsCustomFieldIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteContactdbCustomFieldsCustomFieldId<
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
                ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactdbCustomFieldsCustomFieldIdMutationOptions<
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

export function getContactdbListsQueryKey(
  args: InferRequestType<typeof client.contactdb.lists.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/lists', keyArgs] as const
}

export function getContactdbListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contactdb.lists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbListsQueryKey>
  >({
    queryKey: getContactdbListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.lists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContactdbLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.lists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactdbListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactdbListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostContactdbLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contactdb.lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactdbListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteContactdbLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactdbListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getContactdbListsListIdQueryKey(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/lists/:list_id', keyArgs] as const
}

export function getContactdbListsListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactdbListsListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.lists[':list_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbListsListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getContactdbListsListIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteContactdbListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactdbListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchContactdbListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchContactdbListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getContactdbListsListIdRecipientsQueryKey(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/lists/:list_id/recipients', keyArgs] as const
}

export function getContactdbListsListIdRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactdbListsListIdRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.lists[':list_id'].recipients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbListsListIdRecipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getContactdbListsListIdRecipientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostContactdbListsListIdRecipients<
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
                ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactdbListsListIdRecipientsMutationOptions<
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

export function createPostContactdbListsListIdRecipientsRecipientId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactdbListsListIdRecipientsRecipientIdMutationOptions<
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

export function createDeleteContactdbListsListIdRecipientsRecipientId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactdbListsListIdRecipientsRecipientIdMutationOptions<
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

export function getContactdbRecipientsQueryKey(
  args: InferRequestType<typeof client.contactdb.recipients.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients', keyArgs] as const
}

export function getContactdbRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contactdb.recipients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsQueryKey>
  >({
    queryKey: getContactdbRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.recipients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContactdbRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.recipients.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactdbRecipientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactdbRecipientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostContactdbRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contactdb.recipients.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactdbRecipientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteContactdbRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contactdb.recipients.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactdbRecipientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchContactdbRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contactdb.recipients.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchContactdbRecipientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getContactdbRecipientsBillableCountQueryKey(
  args: InferRequestType<typeof client.contactdb.recipients.billable_count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/billable_count', keyArgs] as const
}

export function getContactdbRecipientsBillableCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contactdb.recipients.billable_count.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactdbRecipientsBillableCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.recipients.billable_count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbRecipientsBillableCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.recipients.billable_count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getContactdbRecipientsBillableCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContactdbRecipientsCountQueryKey(
  args: InferRequestType<typeof client.contactdb.recipients.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/count', keyArgs] as const
}

export function getContactdbRecipientsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contactdb.recipients.count.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsCountQueryKey>
  >({
    queryKey: getContactdbRecipientsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.recipients.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbRecipientsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.recipients.count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactdbRecipientsCountQueryKey>
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
      ...getContactdbRecipientsCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContactdbRecipientsSearchQueryKey(
  args: InferRequestType<typeof client.contactdb.recipients.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/search', keyArgs] as const
}

export function getContactdbRecipientsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contactdb.recipients.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbRecipientsSearchQueryKey>
  >({
    queryKey: getContactdbRecipientsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.recipients.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbRecipientsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.recipients.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactdbRecipientsSearchQueryKey>
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
      ...getContactdbRecipientsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostContactdbRecipientsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactdbRecipientsSearchMutationOptions<
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

export function getContactdbRecipientsRecipientIdQueryKey(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/:recipient_id', keyArgs] as const
}

export function getContactdbRecipientsRecipientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactdbRecipientsRecipientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.recipients[':recipient_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbRecipientsRecipientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getContactdbRecipientsRecipientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteContactdbRecipientsRecipientId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactdbRecipientsRecipientIdMutationOptions<
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

export function getContactdbRecipientsRecipientIdListsQueryKey(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/:recipient_id/lists', keyArgs] as const
}

export function getContactdbRecipientsRecipientIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactdbRecipientsRecipientIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.recipients[':recipient_id'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbRecipientsRecipientIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getContactdbRecipientsRecipientIdListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContactdbReservedFieldsQueryKey(
  args: InferRequestType<typeof client.contactdb.reserved_fields.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/reserved_fields', keyArgs] as const
}

export function getContactdbReservedFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contactdb.reserved_fields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbReservedFieldsQueryKey>
  >({
    queryKey: getContactdbReservedFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.reserved_fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbReservedFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.reserved_fields.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactdbReservedFieldsQueryKey>
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
      ...getContactdbReservedFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContactdbSegmentsQueryKey(
  args: InferRequestType<typeof client.contactdb.segments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/segments', keyArgs] as const
}

export function getContactdbSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contactdb.segments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbSegmentsQueryKey>
  >({
    queryKey: getContactdbSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.segments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContactdbSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.segments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactdbSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactdbSegmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostContactdbSegments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contactdb.segments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactdbSegmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getContactdbSegmentsSegmentIdQueryKey(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/segments/:segment_id', keyArgs] as const
}

export function getContactdbSegmentsSegmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactdbSegmentsSegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.segments[':segment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getContactdbSegmentsSegmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteContactdbSegmentsSegmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactdbSegmentsSegmentIdMutationOptions<
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

export function createPatchContactdbSegmentsSegmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchContactdbSegmentsSegmentIdMutationOptions<
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

export function getContactdbSegmentsSegmentIdRecipientsQueryKey(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/segments/:segment_id/recipients', keyArgs] as const
}

export function getContactdbSegmentsSegmentIdRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactdbSegmentsSegmentIdRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.segments[':segment_id'].recipients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactdbSegmentsSegmentIdRecipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.contactdb.segments)[':segment_id']['recipients']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getContactdbSegmentsSegmentIdRecipientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContactdbStatusQueryKey(
  args: InferRequestType<typeof client.contactdb.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/status', keyArgs] as const
}

export function getContactdbStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contactdb.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactdbStatusQueryKey>
  >({
    queryKey: getContactdbStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contactdb.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContactdbStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contactdb.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactdbStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactdbStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDesignsQueryKey(args: InferRequestType<typeof client.designs.$get>) {
  return ['designs', '/designs', args] as const
}

export function getDesignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.designs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDesignsQueryKey>
  >({
    queryKey: getDesignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.designs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDesigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.designs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDesignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDesignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDesigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$post>>>>>,
        TError,
        InferRequestType<typeof client.designs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDesignsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDesignsPreBuiltsQueryKey(
  args: InferRequestType<(typeof client.designs)['pre-builts']['$get']>,
) {
  return ['designs', '/designs/pre-builts', args] as const
}

export function getDesignsPreBuiltsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.designs)['pre-builts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDesignsPreBuiltsQueryKey>
  >({
    queryKey: getDesignsPreBuiltsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.designs['pre-builts'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDesignsPreBuilts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.designs)['pre-builts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDesignsPreBuiltsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDesignsPreBuiltsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDesignsPreBuiltsIdQueryKey(
  args: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>,
) {
  return ['designs', '/designs/pre-builts/:id', args] as const
}

export function getDesignsPreBuiltsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDesignsPreBuiltsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.designs['pre-builts'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDesignsPreBuiltsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDesignsPreBuiltsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDesignsPreBuiltsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDesignsPreBuiltsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDesignsIdQueryKey(
  args: InferRequestType<(typeof client.designs)[':id']['$get']>,
) {
  return ['designs', '/designs/:id', args] as const
}

export function getDesignsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.designs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDesignsIdQueryKey>
  >({
    queryKey: getDesignsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.designs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDesignsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.designs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDesignsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDesignsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDesignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.designs)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDesignsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDesignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDesignsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDesignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.designs)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDesignsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDevicesStatsQueryKey(args: InferRequestType<typeof client.devices.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices/stats', keyArgs] as const
}

export function getDevicesStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.devices.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesStatsQueryKey>
  >({
    queryKey: getDevicesStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevicesStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.devices.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGeoStatsQueryKey(args: InferRequestType<typeof client.geo.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['geo', '/geo/stats', keyArgs] as const
}

export function getGeoStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.geo.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGeoStatsQueryKey>
  >({
    queryKey: getGeoStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geo.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGeoStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.geo.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGeoStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGeoStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpsQueryKey(args: InferRequestType<typeof client.ips.$get>) {
  return ['ips', '/ips', args] as const
}

export function getIpsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsQueryKey>
  >({
    queryKey: getIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
        TError,
        InferRequestType<typeof client.ips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpsAssignedQueryKey() {
  return ['ips', '/ips/assigned'] as const
}

export function getIpsAssignedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsAssignedQueryKey>
  >({
    queryKey: getIpsAssignedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.assigned.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpsAssigned<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpsAssignedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsAssignedQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getIpsPoolsQueryKey() {
  return ['ips', '/ips/pools'] as const
}

export function getIpsPoolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsPoolsQueryKey>
  >({
    queryKey: getIpsPoolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.pools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpsPools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpsPoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsPoolsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostIpsPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ips.pools.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpsPoolsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpsPoolsPoolNameQueryKey(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>,
) {
  return ['ips', '/ips/pools/:pool_name', args] as const
}

export function getIpsPoolsPoolNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsPoolsPoolNameQueryKey>
  >({
    queryKey: getIpsPoolsPoolNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.pools[':pool_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIpsPoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpsPoolsPoolNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsPoolsPoolNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutIpsPoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpsPoolsPoolNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteIpsPoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpsPoolsPoolNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIpsPoolsPoolNameIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpsPoolsPoolNameIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteIpsPoolsPoolNameIpsIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpsPoolsPoolNameIpsIpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpsRemainingQueryKey() {
  return ['ips', '/ips/remaining'] as const
}

export function getIpsRemainingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpsRemainingQueryKey>
  >({
    queryKey: getIpsRemainingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.remaining.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpsRemaining<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpsRemainingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsRemainingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getIpsWarmupQueryKey() {
  return ['ips', '/ips/warmup'] as const
}

export function getIpsWarmupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsWarmupQueryKey>
  >({
    queryKey: getIpsWarmupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.warmup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpsWarmup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpsWarmupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsWarmupQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostIpsWarmup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ips.warmup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpsWarmupMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpsWarmupIpAddressQueryKey(
  args: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>,
) {
  return ['ips', '/ips/warmup/:ip_address', args] as const
}

export function getIpsWarmupIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsWarmupIpAddressQueryKey>
  >({
    queryKey: getIpsWarmupIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.warmup[':ip_address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIpsWarmupIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpsWarmupIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsWarmupIpAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteIpsWarmupIpAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpsWarmupIpAddressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpsIpAddressQueryKey(
  args: InferRequestType<(typeof client.ips)[':ip_address']['$get']>,
) {
  return ['ips', '/ips/:ip_address', args] as const
}

export function getIpsIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ips)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIpAddressQueryKey>
  >({
    queryKey: getIpsIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips[':ip_address'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpsIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ips)[':ip_address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpsIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsIpAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMailBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mail.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMailBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMailBatchBatchIdQueryKey(
  args: InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail', '/mail/batch/:batch_id', keyArgs] as const
}

export function getMailBatchBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailBatchBatchIdQueryKey>
  >({
    queryKey: getMailBatchBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mail.batch[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMailBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailBatchBatchIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMailBatchBatchIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMailSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mail.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMailSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMailSettingsQueryKey(args: InferRequestType<typeof client.mail_settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings', keyArgs] as const
}

export function getMailSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mail_settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsQueryKey>
  >({
    queryKey: getMailSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mail_settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMailSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mail_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMailSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMailSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMailSettingsAddressWhitelistQueryKey(
  args: InferRequestType<typeof client.mail_settings.address_whitelist.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/address_whitelist', keyArgs] as const
}

export function getMailSettingsAddressWhitelistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mail_settings.address_whitelist.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMailSettingsAddressWhitelistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mail_settings.address_whitelist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMailSettingsAddressWhitelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mail_settings.address_whitelist.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMailSettingsAddressWhitelistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchMailSettingsAddressWhitelist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMailSettingsAddressWhitelistMutationOptions<
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

export function getMailSettingsBouncePurgeQueryKey(
  args: InferRequestType<typeof client.mail_settings.bounce_purge.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/bounce_purge', keyArgs] as const
}

export function getMailSettingsBouncePurgeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mail_settings.bounce_purge.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsBouncePurgeQueryKey>
  >({
    queryKey: getMailSettingsBouncePurgeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mail_settings.bounce_purge.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMailSettingsBouncePurge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mail_settings.bounce_purge.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailSettingsBouncePurgeQueryKey>
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
      ...getMailSettingsBouncePurgeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchMailSettingsBouncePurge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMailSettingsBouncePurgeMutationOptions<
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

export function getMailSettingsFooterQueryKey(
  args: InferRequestType<typeof client.mail_settings.footer.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/footer', keyArgs] as const
}

export function getMailSettingsFooterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mail_settings.footer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsFooterQueryKey>
  >({
    queryKey: getMailSettingsFooterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mail_settings.footer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMailSettingsFooter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mail_settings.footer.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailSettingsFooterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMailSettingsFooterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchMailSettingsFooter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mail_settings.footer.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMailSettingsFooterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMailSettingsForwardBounceQueryKey(
  args: InferRequestType<typeof client.mail_settings.forward_bounce.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/forward_bounce', keyArgs] as const
}

export function getMailSettingsForwardBounceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mail_settings.forward_bounce.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsForwardBounceQueryKey>
  >({
    queryKey: getMailSettingsForwardBounceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mail_settings.forward_bounce.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMailSettingsForwardBounce<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mail_settings.forward_bounce.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailSettingsForwardBounceQueryKey>
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
      ...getMailSettingsForwardBounceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchMailSettingsForwardBounce<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMailSettingsForwardBounceMutationOptions<
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

export function getMailSettingsForwardSpamQueryKey(
  args: InferRequestType<typeof client.mail_settings.forward_spam.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/forward_spam', keyArgs] as const
}

export function getMailSettingsForwardSpamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mail_settings.forward_spam.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsForwardSpamQueryKey>
  >({
    queryKey: getMailSettingsForwardSpamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mail_settings.forward_spam.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMailSettingsForwardSpam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mail_settings.forward_spam.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailSettingsForwardSpamQueryKey>
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
      ...getMailSettingsForwardSpamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchMailSettingsForwardSpam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMailSettingsForwardSpamMutationOptions<
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

export function getMailSettingsTemplateQueryKey(
  args: InferRequestType<typeof client.mail_settings.template.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/template', keyArgs] as const
}

export function getMailSettingsTemplateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mail_settings.template.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailSettingsTemplateQueryKey>
  >({
    queryKey: getMailSettingsTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mail_settings.template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMailSettingsTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mail_settings.template.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailSettingsTemplateQueryKey>
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
      ...getMailSettingsTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchMailSettingsTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mail_settings.template.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMailSettingsTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMailboxProvidersStatsQueryKey(
  args: InferRequestType<typeof client.mailbox_providers.stats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mailbox_providers', '/mailbox_providers/stats', keyArgs] as const
}

export function getMailboxProvidersStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mailbox_providers.stats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailboxProvidersStatsQueryKey>
  >({
    queryKey: getMailboxProvidersStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mailbox_providers.stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMailboxProvidersStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mailbox_providers.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailboxProvidersStatsQueryKey>
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
      ...getMailboxProvidersStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingContactsQueryKey() {
  return ['marketing', '/marketing/contacts'] as const
}

export function getMarketingContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsQueryKey>
  >({
    queryKey: getMarketingContactsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.contacts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingContactsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutMarketingContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.contacts.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMarketingContactsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMarketingContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.contacts.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingContactsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMarketingContactsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.contacts.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingContactsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingContactsCountQueryKey() {
  return ['marketing', '/marketing/contacts/count'] as const
}

export function getMarketingContactsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsCountQueryKey>
  >({
    queryKey: getMarketingContactsCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.contacts.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingContactsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingContactsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingContactsCountQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMarketingContactsExportsQueryKey() {
  return ['marketing', '/marketing/contacts/exports'] as const
}

export function getMarketingContactsExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsExportsQueryKey>
  >({
    queryKey: getMarketingContactsExportsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.contacts.exports.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingContactsExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingContactsExportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingContactsExportsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostMarketingContactsExports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingContactsExportsMutationOptions<
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

export function getMarketingContactsExportsIdQueryKey(
  args: InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>,
) {
  return ['marketing', '/marketing/contacts/exports/:id', args] as const
}

export function getMarketingContactsExportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingContactsExportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.contacts.exports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingContactsExportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingContactsExportsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutMarketingContactsImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.imports.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.contacts.imports.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMarketingContactsImportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingContactsImportsIdQueryKey(
  args: InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>,
) {
  return ['marketing', '/marketing/contacts/imports/:id', args] as const
}

export function getMarketingContactsImportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingContactsImportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.contacts.imports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingContactsImportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingContactsImportsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMarketingContactsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.contacts.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingContactsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMarketingContactsSearchEmails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingContactsSearchEmailsMutationOptions<
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

export function getMarketingContactsIdQueryKey(
  args: InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>,
) {
  return ['marketing', '/marketing/contacts/:id', args] as const
}

export function getMarketingContactsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingContactsIdQueryKey>
  >({
    queryKey: getMarketingContactsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.contacts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingContactsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingContactsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingContactsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMarketingFieldDefinitionsQueryKey() {
  return ['marketing', '/marketing/field_definitions'] as const
}

export function getMarketingFieldDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingFieldDefinitionsQueryKey>
  >({
    queryKey: getMarketingFieldDefinitionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.field_definitions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingFieldDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingFieldDefinitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingFieldDefinitionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostMarketingFieldDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingFieldDefinitionsMutationOptions<
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

export function createDeleteMarketingFieldDefinitionsCustomFieldId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingFieldDefinitionsCustomFieldIdMutationOptions<
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

export function createPatchMarketingFieldDefinitionsCustomFieldId<
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
                  (typeof client.marketing.field_definitions)[':custom_field_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.marketing.field_definitions)[':custom_field_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMarketingFieldDefinitionsCustomFieldIdMutationOptions<
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

export function getMarketingListsQueryKey(
  args: InferRequestType<typeof client.marketing.lists.$get>,
) {
  return ['marketing', '/marketing/lists', args] as const
}

export function getMarketingListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.marketing.lists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingListsQueryKey>
  >({
    queryKey: getMarketingListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.lists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMarketingLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.marketing.lists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMarketingLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.marketing.lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingListsIdQueryKey(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['$get']>,
) {
  return ['marketing', '/marketing/lists/:id', args] as const
}

export function getMarketingListsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingListsIdQueryKey>
  >({
    queryKey: getMarketingListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.lists[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.lists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingListsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteMarketingListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchMarketingListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMarketingListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMarketingListsIdContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingListsIdContactsMutationOptions<
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

export function getMarketingListsIdContactsCountQueryKey(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>,
) {
  return ['marketing', '/marketing/lists/:id/contacts/count', args] as const
}

export function getMarketingListsIdContactsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingListsIdContactsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.lists[':id'].contacts.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingListsIdContactsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMarketingListsIdContactsCountQueryKey>
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
      ...getMarketingListsIdContactsCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingSegmentsQueryKey(
  args: InferRequestType<typeof client.marketing.segments.$get>,
) {
  return ['marketing', '/marketing/segments', args] as const
}

export function getMarketingSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.marketing.segments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSegmentsQueryKey>
  >({
    queryKey: getMarketingSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.segments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMarketingSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.marketing.segments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingSegmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMarketingSegments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.segments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingSegmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingSegments20QueryKey(
  args: InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>,
) {
  return ['marketing', '/marketing/segments/2.0', args] as const
}

export function getMarketingSegments20QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSegments20QueryKey>
  >({
    queryKey: getMarketingSegments20QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.segments['2.0'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingSegments20<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingSegments20QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketingSegments20QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMarketingSegments20<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingSegments20MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingSegments20SegmentIdQueryKey(
  args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>,
) {
  return ['marketing', '/marketing/segments/2.0/:segment_id', args] as const
}

export function getMarketingSegments20SegmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingSegments20SegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.segments['2.0'][':segment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingSegments20SegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingSegments20SegmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteMarketingSegments20SegmentId<
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
                ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingSegments20SegmentIdMutationOptions<
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

export function createPatchMarketingSegments20SegmentId<
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
                ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMarketingSegments20SegmentIdMutationOptions<
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

export function createPostMarketingSegmentsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.segments.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingSegmentsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingSegmentsSegmentIdQueryKey(
  args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>,
) {
  return ['marketing', '/marketing/segments/:segment_id', args] as const
}

export function getMarketingSegmentsSegmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingSegmentsSegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.segments[':segment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingSegmentsSegmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteMarketingSegmentsSegmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingSegmentsSegmentIdMutationOptions<
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

export function createPatchMarketingSegmentsSegmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMarketingSegmentsSegmentIdMutationOptions<
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

export function createPostMarketingSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.senders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.senders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingSendersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingSinglesendsQueryKey(
  args: InferRequestType<typeof client.marketing.singlesends.$get>,
) {
  return ['marketing', '/marketing/singlesends', args] as const
}

export function getMarketingSinglesendsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.marketing.singlesends.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingSinglesendsQueryKey>
  >({
    queryKey: getMarketingSinglesendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.singlesends.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMarketingSinglesends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.marketing.singlesends.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingSinglesendsQueryKey>
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
      ...getMarketingSinglesendsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMarketingSinglesends<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.singlesends.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingSinglesendsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMarketingSinglesends<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.marketing.singlesends.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingSinglesendsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingSinglesendsCategoriesQueryKey() {
  return ['marketing', '/marketing/singlesends/categories'] as const
}

export function getMarketingSinglesendsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getMarketingSinglesendsCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.singlesends.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingSinglesendsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingSinglesendsCategoriesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMarketingSinglesendsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingSinglesendsSearchMutationOptions<
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

export function getMarketingSinglesendsIdQueryKey(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>,
) {
  return ['marketing', '/marketing/singlesends/:id', args] as const
}

export function getMarketingSinglesendsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingSinglesendsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.singlesends[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingSinglesendsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingSinglesendsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMarketingSinglesendsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingSinglesendsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMarketingSinglesendsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingSinglesendsIdMutationOptions<
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

export function createPatchMarketingSinglesendsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMarketingSinglesendsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutMarketingSinglesendsIdSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMarketingSinglesendsIdScheduleMutationOptions<
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

export function createDeleteMarketingSinglesendsIdSchedule<
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
                ReturnType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingSinglesendsIdScheduleMutationOptions<
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

export function getMarketingStatsAutomationsQueryKey(
  args: InferRequestType<typeof client.marketing.stats.automations.$get>,
) {
  return ['marketing', '/marketing/stats/automations', args] as const
}

export function getMarketingStatsAutomationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.marketing.stats.automations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsAutomationsQueryKey>
  >({
    queryKey: getMarketingStatsAutomationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.stats.automations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingStatsAutomations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.marketing.stats.automations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingStatsAutomationsQueryKey>
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
      ...getMarketingStatsAutomationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingStatsAutomationsExportQueryKey(
  args: InferRequestType<typeof client.marketing.stats.automations.export.$get>,
) {
  return ['marketing', '/marketing/stats/automations/export', args] as const
}

export function getMarketingStatsAutomationsExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.marketing.stats.automations.export.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingStatsAutomationsExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.stats.automations.export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingStatsAutomationsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.marketing.stats.automations.export.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingStatsAutomationsExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingStatsAutomationsIdQueryKey(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>,
) {
  return ['marketing', '/marketing/stats/automations/:id', args] as const
}

export function getMarketingStatsAutomationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingStatsAutomationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.stats.automations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingStatsAutomationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingStatsAutomationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingStatsAutomationsIdLinksQueryKey(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>,
) {
  return ['marketing', '/marketing/stats/automations/:id/links', args] as const
}

export function getMarketingStatsAutomationsIdLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingStatsAutomationsIdLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.stats.automations[':id'].links.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingStatsAutomationsIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMarketingStatsAutomationsIdLinksQueryKey>
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
      ...getMarketingStatsAutomationsIdLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingStatsSinglesendsQueryKey(
  args: InferRequestType<typeof client.marketing.stats.singlesends.$get>,
) {
  return ['marketing', '/marketing/stats/singlesends', args] as const
}

export function getMarketingStatsSinglesendsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.marketing.stats.singlesends.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingStatsSinglesendsQueryKey>
  >({
    queryKey: getMarketingStatsSinglesendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.stats.singlesends.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingStatsSinglesends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.marketing.stats.singlesends.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketingStatsSinglesendsQueryKey>
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
      ...getMarketingStatsSinglesendsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingStatsSinglesendsExportQueryKey(
  args: InferRequestType<typeof client.marketing.stats.singlesends.export.$get>,
) {
  return ['marketing', '/marketing/stats/singlesends/export', args] as const
}

export function getMarketingStatsSinglesendsExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.marketing.stats.singlesends.export.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingStatsSinglesendsExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.stats.singlesends.export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingStatsSinglesendsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.marketing.stats.singlesends.export.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingStatsSinglesendsExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingStatsSinglesendsIdQueryKey(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>,
) {
  return ['marketing', '/marketing/stats/singlesends/:id', args] as const
}

export function getMarketingStatsSinglesendsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingStatsSinglesendsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.stats.singlesends[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingStatsSinglesendsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingStatsSinglesendsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingStatsSinglesendsIdLinksQueryKey(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>,
) {
  return ['marketing', '/marketing/stats/singlesends/:id/links', args] as const
}

export function getMarketingStatsSinglesendsIdLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingStatsSinglesendsIdLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.stats.singlesends[':id'].links.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingStatsSinglesendsIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMarketingStatsSinglesendsIdLinksQueryKey>
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
      ...getMarketingStatsSinglesendsIdLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMarketingTestSendEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketing.test.send_email.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.marketing.test.send_email.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingTestSendEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessagesQueryKey(args: InferRequestType<typeof client.messages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages', keyArgs] as const
}

export function getMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.messages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMessagesQueryKey>
  >({
    queryKey: getMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.messages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMessagesDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.download.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messages.download.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagesDownloadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessagesDownloadDownloadUuidQueryKey(
  args: InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/download/:download_uuid', keyArgs] as const
}

export function getMessagesDownloadDownloadUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagesDownloadDownloadUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages.download[':download_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessagesDownloadDownloadUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMessagesDownloadDownloadUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMessagesMsgIdQueryKey(
  args: InferRequestType<(typeof client.messages)[':msg_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/:msg_id', keyArgs] as const
}

export function getMessagesMsgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':msg_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMsgIdQueryKey>
  >({
    queryKey: getMessagesMsgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':msg_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMessagesMsgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':msg_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesMsgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesMsgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPartnerSettingsQueryKey(
  args: InferRequestType<typeof client.partner_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['partner_settings', '/partner_settings', keyArgs] as const
}

export function getPartnerSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.partner_settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPartnerSettingsQueryKey>
  >({
    queryKey: getPartnerSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.partner_settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPartnerSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.partner_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPartnerSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPartnerSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPartnerSettingsNewRelicQueryKey(
  args: InferRequestType<typeof client.partner_settings.new_relic.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['partner_settings', '/partner_settings/new_relic', keyArgs] as const
}

export function getPartnerSettingsNewRelicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.partner_settings.new_relic.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartnerSettingsNewRelicQueryKey>
  >({
    queryKey: getPartnerSettingsNewRelicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.partner_settings.new_relic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPartnerSettingsNewRelic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.partner_settings.new_relic.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPartnerSettingsNewRelicQueryKey>
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
      ...getPartnerSettingsNewRelicQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchPartnerSettingsNewRelic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPartnerSettingsNewRelicMutationOptions<
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

export function getScopesQueryKey(args: InferRequestType<typeof client.scopes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['scopes', '/scopes', keyArgs] as const
}

export function getScopesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scopes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScopesQueryKey>
  >({
    queryKey: getScopesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scopes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScopes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scopes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getScopesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScopesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getScopesRequestsQueryKey(
  args: InferRequestType<typeof client.scopes.requests.$get>,
) {
  return ['scopes', '/scopes/requests', args] as const
}

export function getScopesRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scopes.requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScopesRequestsQueryKey>
  >({
    queryKey: getScopesRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scopes.requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScopesRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scopes.requests.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScopesRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScopesRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteScopesRequestsRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScopesRequestsRequestIdMutationOptions<
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

export function createPatchScopesRequestsRequestIdApprove<
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
                ReturnType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchScopesRequestsRequestIdApproveMutationOptions<
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

export function getSendersQueryKey(args: InferRequestType<typeof client.senders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['senders', '/senders', keyArgs] as const
}

export function getSendersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.senders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSendersQueryKey>
  >({
    queryKey: getSendersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.senders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.senders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSendersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSendersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$post>>>>>,
        TError,
        InferRequestType<typeof client.senders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSendersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSendersSenderIdQueryKey(
  args: InferRequestType<(typeof client.senders)[':sender_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['senders', '/senders/:sender_id', keyArgs] as const
}

export function getSendersSenderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.senders)[':sender_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSendersSenderIdQueryKey>
  >({
    queryKey: getSendersSenderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.senders[':sender_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSendersSenderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.senders)[':sender_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSendersSenderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSendersSenderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSendersSenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSendersSenderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchSendersSenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSendersSenderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSendersSenderIdResendVerification<
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
                  ReturnType<(typeof client.senders)[':sender_id']['resend_verification']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.senders)[':sender_id']['resend_verification']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSendersSenderIdResendVerificationMutationOptions<
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

export function createPostSsoCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sso.certificates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sso.certificates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSsoCertificatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSsoCertificatesCertIdQueryKey(
  args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>,
) {
  return ['sso', '/sso/certificates/:cert_id', args] as const
}

export function getSsoCertificatesCertIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSsoCertificatesCertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.certificates[':cert_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSsoCertificatesCertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSsoCertificatesCertIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSsoCertificatesCertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSsoCertificatesCertIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchSsoCertificatesCertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSsoCertificatesCertIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSsoIntegrationsQueryKey(
  args: InferRequestType<typeof client.sso.integrations.$get>,
) {
  return ['sso', '/sso/integrations', args] as const
}

export function getSsoIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sso.integrations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSsoIntegrationsQueryKey>
  >({
    queryKey: getSsoIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.integrations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSsoIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sso.integrations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSsoIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSsoIntegrationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSsoIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sso.integrations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSsoIntegrationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSsoIntegrationsIdQueryKey(
  args: InferRequestType<(typeof client.sso.integrations)[':id']['$get']>,
) {
  return ['sso', '/sso/integrations/:id', args] as const
}

export function getSsoIntegrationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sso.integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSsoIntegrationsIdQueryKey>
  >({
    queryKey: getSsoIntegrationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.integrations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSsoIntegrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sso.integrations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSsoIntegrationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSsoIntegrationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSsoIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSsoIntegrationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchSsoIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSsoIntegrationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSsoIntegrationsIntegrationIdCertificatesQueryKey(
  args: InferRequestType<
    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
  >,
) {
  return ['sso', '/sso/integrations/:integration_id/certificates', args] as const
}

export function getSsoIntegrationsIntegrationIdCertificatesQueryOptions<
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
  args: InferRequestType<
    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSsoIntegrationsIntegrationIdCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.integrations[':integration_id'].certificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSsoIntegrationsIntegrationIdCertificates<
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
  args: () => InferRequestType<
    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSsoIntegrationsIntegrationIdCertificatesQueryKey>
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
      ...getSsoIntegrationsIntegrationIdCertificatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostSsoTeammates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.teammates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sso.teammates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSsoTeammatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchSsoTeammatesUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSsoTeammatesUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatsQueryKey(args: InferRequestType<typeof client.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats', keyArgs] as const
}

export function getStatsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >({
    queryKey: getStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSubusersQueryKey(args: InferRequestType<typeof client.subusers.$get>) {
  return ['subusers', '/subusers', args] as const
}

export function getSubusersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subusers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubusersQueryKey>
  >({
    queryKey: getSubusersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subusers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubusers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subusers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSubusersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubusersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSubusers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subusers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubusersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubusersReputationsQueryKey(
  args: InferRequestType<typeof client.subusers.reputations.$get>,
) {
  return ['subusers', '/subusers/reputations', args] as const
}

export function getSubusersReputationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subusers.reputations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersReputationsQueryKey>
  >({
    queryKey: getSubusersReputationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subusers.reputations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubusersReputations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subusers.reputations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubusersReputationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubusersReputationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSubusersStatsQueryKey(
  args: InferRequestType<typeof client.subusers.stats.$get>,
) {
  return ['subusers', '/subusers/stats', args] as const
}

export function getSubusersStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subusers.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersStatsQueryKey>
  >({
    queryKey: getSubusersStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subusers.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubusersStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subusers.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubusersStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubusersStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSubusersStatsMonthlyQueryKey(
  args: InferRequestType<typeof client.subusers.stats.monthly.$get>,
) {
  return ['subusers', '/subusers/stats/monthly', args] as const
}

export function getSubusersStatsMonthlyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subusers.stats.monthly.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersStatsMonthlyQueryKey>
  >({
    queryKey: getSubusersStatsMonthlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subusers.stats.monthly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubusersStatsMonthly<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subusers.stats.monthly.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubusersStatsMonthlyQueryKey>
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
      ...getSubusersStatsMonthlyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSubusersStatsSumsQueryKey(
  args: InferRequestType<typeof client.subusers.stats.sums.$get>,
) {
  return ['subusers', '/subusers/stats/sums', args] as const
}

export function getSubusersStatsSumsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subusers.stats.sums.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubusersStatsSumsQueryKey>
  >({
    queryKey: getSubusersStatsSumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subusers.stats.sums.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubusersStatsSums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subusers.stats.sums.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubusersStatsSumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubusersStatsSumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSubusersSubuserName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSubusersSubuserNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchSubusersSubuserName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSubusersSubuserNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutSubusersSubuserNameIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubusersSubuserNameIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubusersSubuserNameMonitorQueryKey(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>,
) {
  return ['subusers', '/subusers/:subuser_name/monitor', args] as const
}

export function getSubusersSubuserNameMonitorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubusersSubuserNameMonitorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subusers[':subuser_name'].monitor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubusersSubuserNameMonitor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSubusersSubuserNameMonitorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSubusersSubuserNameMonitor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubusersSubuserNameMonitorMutationOptions<
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

export function createPostSubusersSubuserNameMonitor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubusersSubuserNameMonitorMutationOptions<
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

export function createDeleteSubusersSubuserNameMonitor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSubusersSubuserNameMonitorMutationOptions<
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

export function getSubusersSubuserNameStatsMonthlyQueryKey(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>,
) {
  return ['subusers', '/subusers/:subuser_name/stats/monthly', args] as const
}

export function getSubusersSubuserNameStatsMonthlyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubusersSubuserNameStatsMonthlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subusers[':subuser_name'].stats.monthly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubusersSubuserNameStatsMonthly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSubusersSubuserNameStatsMonthlyQueryKey>
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
      ...getSubusersSubuserNameStatsMonthlyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSuppressionBlocksQueryKey(
  args: InferRequestType<typeof client.suppression.blocks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/blocks', keyArgs] as const
}

export function getSuppressionBlocksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.suppression.blocks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionBlocksQueryKey>
  >({
    queryKey: getSuppressionBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.blocks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSuppressionBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suppression.blocks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuppressionBlocksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSuppressionBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuppressionBlocksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSuppressionBlocksEmailQueryKey(
  args: InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/blocks/:email', keyArgs] as const
}

export function getSuppressionBlocksEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSuppressionBlocksEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.blocks[':email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuppressionBlocksEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSuppressionBlocksEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSuppressionBlocksEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuppressionBlocksEmailMutationOptions<
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

export function getSuppressionBouncesQueryKey(
  args: InferRequestType<typeof client.suppression.bounces.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/bounces', keyArgs] as const
}

export function getSuppressionBouncesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.suppression.bounces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionBouncesQueryKey>
  >({
    queryKey: getSuppressionBouncesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.bounces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSuppressionBounces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suppression.bounces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionBouncesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuppressionBouncesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSuppressionBounces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuppressionBouncesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSuppressionBouncesEmailQueryKey(
  args: InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/bounces/:email', keyArgs] as const
}

export function getSuppressionBouncesEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSuppressionBouncesEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.bounces[':email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuppressionBouncesEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSuppressionBouncesEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSuppressionBouncesEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuppressionBouncesEmailMutationOptions<
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

export function getSuppressionInvalidEmailsQueryKey(
  args: InferRequestType<typeof client.suppression.invalid_emails.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/invalid_emails', keyArgs] as const
}

export function getSuppressionInvalidEmailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suppression.invalid_emails.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionInvalidEmailsQueryKey>
  >({
    queryKey: getSuppressionInvalidEmailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.invalid_emails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuppressionInvalidEmails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suppression.invalid_emails.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionInvalidEmailsQueryKey>
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
      ...getSuppressionInvalidEmailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSuppressionInvalidEmails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuppressionInvalidEmailsMutationOptions<
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

export function getSuppressionInvalidEmailsEmailQueryKey(
  args: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/invalid_emails/:email', keyArgs] as const
}

export function getSuppressionInvalidEmailsEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSuppressionInvalidEmailsEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.invalid_emails[':email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuppressionInvalidEmailsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSuppressionInvalidEmailsEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSuppressionInvalidEmailsEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuppressionInvalidEmailsEmailMutationOptions<
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

export function getSuppressionSpamReportsQueryKey(
  args: InferRequestType<typeof client.suppression.spam_reports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/spam_reports', keyArgs] as const
}

export function getSuppressionSpamReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suppression.spam_reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionSpamReportsQueryKey>
  >({
    queryKey: getSuppressionSpamReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.spam_reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuppressionSpamReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suppression.spam_reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionSpamReportsQueryKey>
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
      ...getSuppressionSpamReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSuppressionSpamReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuppressionSpamReportsMutationOptions<
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

export function getSuppressionSpamReportsEmailQueryKey(
  args: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/spam_reports/:email', keyArgs] as const
}

export function getSuppressionSpamReportsEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSuppressionSpamReportsEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.spam_reports[':email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuppressionSpamReportsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSuppressionSpamReportsEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSuppressionSpamReportsEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSuppressionSpamReportsEmailMutationOptions<
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

export function getSuppressionUnsubscribesQueryKey(
  args: InferRequestType<typeof client.suppression.unsubscribes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/unsubscribes', keyArgs] as const
}

export function getSuppressionUnsubscribesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suppression.unsubscribes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionUnsubscribesQueryKey>
  >({
    queryKey: getSuppressionUnsubscribesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppression.unsubscribes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuppressionUnsubscribes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suppression.unsubscribes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionUnsubscribesQueryKey>
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
      ...getSuppressionUnsubscribesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeammatesQueryKey(args: InferRequestType<typeof client.teammates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['teammates', '/teammates', keyArgs] as const
}

export function getTeammatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teammates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeammatesQueryKey>
  >({
    queryKey: getTeammatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teammates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeammates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teammates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeammatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeammatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTeammates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.teammates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeammatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeammatesPendingQueryKey(
  args: InferRequestType<typeof client.teammates.pending.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['teammates', '/teammates/pending', keyArgs] as const
}

export function getTeammatesPendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teammates.pending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeammatesPendingQueryKey>
  >({
    queryKey: getTeammatesPendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teammates.pending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeammatesPending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teammates.pending.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeammatesPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeammatesPendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteTeammatesPendingToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeammatesPendingTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTeammatesPendingTokenResend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeammatesPendingTokenResendMutationOptions<
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

export function getTeammatesUsernameQueryKey(
  args: InferRequestType<(typeof client.teammates)[':username']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teammates', '/teammates/:username', keyArgs] as const
}

export function getTeammatesUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teammates)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeammatesUsernameQueryKey>
  >({
    queryKey: getTeammatesUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teammates[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeammatesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teammates)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeammatesUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeammatesUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteTeammatesUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeammatesUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchTeammatesUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTeammatesUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTemplatesQueryKey(args: InferRequestType<typeof client.templates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates', keyArgs] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/:template_id', keyArgs] as const
}

export function getTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdQueryKey>
  >({
    queryKey: getTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTemplatesTemplateIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTemplateIdVersionsMutationOptions<
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

export function getTemplatesTemplateIdVersionsVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/:template_id/versions/:version_id', keyArgs] as const
}

export function getTemplatesTemplateIdVersionsVersionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesTemplateIdVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':template_id'].versions[':version_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplatesTemplateIdVersionsVersionId<
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
  args: () => InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTemplatesTemplateIdVersionsVersionIdQueryKey>
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
      ...getTemplatesTemplateIdVersionsVersionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteTemplatesTemplateIdVersionsVersionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTemplatesTemplateIdVersionsVersionIdMutationOptions<
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

export function createPatchTemplatesTemplateIdVersionsVersionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTemplatesTemplateIdVersionsVersionIdMutationOptions<
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

export function createPostTemplatesTemplateIdVersionsVersionIdActivate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTemplateIdVersionsVersionIdActivateMutationOptions<
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

export function getTrackingSettingsQueryKey(
  args: InferRequestType<typeof client.tracking_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings', keyArgs] as const
}

export function getTrackingSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tracking_settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsQueryKey>
  >({
    queryKey: getTrackingSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking_settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTrackingSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tracking_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrackingSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTrackingSettingsClickQueryKey(
  args: InferRequestType<typeof client.tracking_settings.click.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings/click', keyArgs] as const
}

export function getTrackingSettingsClickQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tracking_settings.click.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsClickQueryKey>
  >({
    queryKey: getTrackingSettingsClickQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking_settings.click.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrackingSettingsClick<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tracking_settings.click.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingSettingsClickQueryKey>
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
      ...getTrackingSettingsClickQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchTrackingSettingsClick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tracking_settings.click.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTrackingSettingsClickMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTrackingSettingsGoogleAnalyticsQueryKey(
  args: InferRequestType<typeof client.tracking_settings.google_analytics.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings/google_analytics', keyArgs] as const
}

export function getTrackingSettingsGoogleAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tracking_settings.google_analytics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTrackingSettingsGoogleAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking_settings.google_analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrackingSettingsGoogleAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tracking_settings.google_analytics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTrackingSettingsGoogleAnalyticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchTrackingSettingsGoogleAnalytics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTrackingSettingsGoogleAnalyticsMutationOptions<
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

export function getTrackingSettingsOpenQueryKey(
  args: InferRequestType<typeof client.tracking_settings.open.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings/open', keyArgs] as const
}

export function getTrackingSettingsOpenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tracking_settings.open.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsOpenQueryKey>
  >({
    queryKey: getTrackingSettingsOpenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking_settings.open.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrackingSettingsOpen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tracking_settings.open.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingSettingsOpenQueryKey>
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
      ...getTrackingSettingsOpenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchTrackingSettingsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tracking_settings.open.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTrackingSettingsOpenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTrackingSettingsSubscriptionQueryKey(
  args: InferRequestType<typeof client.tracking_settings.subscription.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings/subscription', keyArgs] as const
}

export function getTrackingSettingsSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tracking_settings.subscription.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSettingsSubscriptionQueryKey>
  >({
    queryKey: getTrackingSettingsSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking_settings.subscription.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrackingSettingsSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tracking_settings.subscription.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingSettingsSubscriptionQueryKey>
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
      ...getTrackingSettingsSubscriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchTrackingSettingsSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTrackingSettingsSubscriptionMutationOptions<
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

export function getUserAccountQueryKey(args: InferRequestType<typeof client.user.account.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/account', keyArgs] as const
}

export function getUserAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserAccountQueryKey>
  >({
    queryKey: getUserAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.account.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserCreditsQueryKey(args: InferRequestType<typeof client.user.credits.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/credits', keyArgs] as const
}

export function getUserCreditsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.credits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserCreditsQueryKey>
  >({
    queryKey: getUserCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.credits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.credits.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserCreditsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserEmailQueryKey(args: InferRequestType<typeof client.user.email.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/email', keyArgs] as const
}

export function getUserEmailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.email.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserEmailQueryKey>
  >({
    queryKey: getUserEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.email.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.email.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUserEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.user.email.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutUserPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.password.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.user.password.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserProfileQueryKey(args: InferRequestType<typeof client.user.profile.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/profile', keyArgs] as const
}

export function getUserProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserProfileQueryKey>
  >({
    queryKey: getUserProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.profile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchUserProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.user.profile.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserProfileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserScheduledSendsQueryKey(
  args: InferRequestType<typeof client.user.scheduled_sends.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/scheduled_sends', keyArgs] as const
}

export function getUserScheduledSendsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.scheduled_sends.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserScheduledSendsQueryKey>
  >({
    queryKey: getUserScheduledSendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.scheduled_sends.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserScheduledSends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.scheduled_sends.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserScheduledSendsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserScheduledSendsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUserScheduledSends<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.scheduled_sends.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserScheduledSendsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserScheduledSendsBatchIdQueryKey(
  args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/scheduled_sends/:batch_id', keyArgs] as const
}

export function getUserScheduledSendsBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserScheduledSendsBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.scheduled_sends[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserScheduledSendsBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUserScheduledSendsBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteUserScheduledSendsBatchId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserScheduledSendsBatchIdMutationOptions<
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

export function createPatchUserScheduledSendsBatchId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserScheduledSendsBatchIdMutationOptions<
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

export function getUserSettingsEnforcedTlsQueryKey(
  args: InferRequestType<typeof client.user.settings.enforced_tls.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/settings/enforced_tls', keyArgs] as const
}

export function getUserSettingsEnforcedTlsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.settings.enforced_tls.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserSettingsEnforcedTlsQueryKey>
  >({
    queryKey: getUserSettingsEnforcedTlsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.settings.enforced_tls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserSettingsEnforcedTls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.settings.enforced_tls.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserSettingsEnforcedTlsQueryKey>
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
      ...getUserSettingsEnforcedTlsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchUserSettingsEnforcedTls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserSettingsEnforcedTlsMutationOptions<
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

export function getUserUsernameQueryKey(args: InferRequestType<typeof client.user.username.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/username', keyArgs] as const
}

export function getUserUsernameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.username.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUsernameQueryKey>
  >({
    queryKey: getUserUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.username.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.username.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.user.username.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserWebhooksEventSettingsQueryKey(
  args: InferRequestType<typeof client.user.webhooks.event.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/event/settings', keyArgs] as const
}

export function getUserWebhooksEventSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.webhooks.event.settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWebhooksEventSettingsQueryKey>
  >({
    queryKey: getUserWebhooksEventSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.webhooks.event.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserWebhooksEventSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.webhooks.event.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserWebhooksEventSettingsQueryKey>
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
      ...getUserWebhooksEventSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchUserWebhooksEventSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserWebhooksEventSettingsMutationOptions<
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

export function getUserWebhooksEventSettingsSignedQueryKey(
  args: InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/event/settings/signed', keyArgs] as const
}

export function getUserWebhooksEventSettingsSignedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserWebhooksEventSettingsSignedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.webhooks.event.settings.signed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserWebhooksEventSettingsSigned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUserWebhooksEventSettingsSignedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchUserWebhooksEventSettingsSigned<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserWebhooksEventSettingsSignedMutationOptions<
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

export function createPostUserWebhooksEventTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserWebhooksEventTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserWebhooksParseSettingsQueryKey(
  args: InferRequestType<typeof client.user.webhooks.parse.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/parse/settings', keyArgs] as const
}

export function getUserWebhooksParseSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.webhooks.parse.settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWebhooksParseSettingsQueryKey>
  >({
    queryKey: getUserWebhooksParseSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.webhooks.parse.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserWebhooksParseSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.webhooks.parse.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserWebhooksParseSettingsQueryKey>
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
      ...getUserWebhooksParseSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUserWebhooksParseSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserWebhooksParseSettingsMutationOptions<
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

export function getUserWebhooksParseSettingsHostnameQueryKey(
  args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/parse/settings/:hostname', keyArgs] as const
}

export function getUserWebhooksParseSettingsHostnameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserWebhooksParseSettingsHostnameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.webhooks.parse.settings[':hostname'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserWebhooksParseSettingsHostname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUserWebhooksParseSettingsHostnameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteUserWebhooksParseSettingsHostname<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserWebhooksParseSettingsHostnameMutationOptions<
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

export function createPatchUserWebhooksParseSettingsHostname<
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
                ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserWebhooksParseSettingsHostnameMutationOptions<
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

export function getUserWebhooksParseStatsQueryKey(
  args: InferRequestType<typeof client.user.webhooks.parse.stats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/parse/stats', keyArgs] as const
}

export function getUserWebhooksParseStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.webhooks.parse.stats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWebhooksParseStatsQueryKey>
  >({
    queryKey: getUserWebhooksParseStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.webhooks.parse.stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserWebhooksParseStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.webhooks.parse.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserWebhooksParseStatsQueryKey>
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
      ...getUserWebhooksParseStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostValidationsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.validations.email.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.validations.email.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostValidationsEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVerifiedSendersQueryKey(
  args: InferRequestType<typeof client.verified_senders.$get>,
) {
  return ['verified_senders', '/verified_senders', args] as const
}

export function getVerifiedSendersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.verified_senders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVerifiedSendersQueryKey>
  >({
    queryKey: getVerifiedSendersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verified_senders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVerifiedSenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.verified_senders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVerifiedSendersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVerifiedSendersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostVerifiedSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.verified_senders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVerifiedSendersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVerifiedSendersDomainsQueryKey() {
  return ['verified_senders', '/verified_senders/domains'] as const
}

export function getVerifiedSendersDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerifiedSendersDomainsQueryKey>
  >({
    queryKey: getVerifiedSendersDomainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.verified_senders.domains.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVerifiedSendersDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerifiedSendersDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVerifiedSendersDomainsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostVerifiedSendersResendId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVerifiedSendersResendIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVerifiedSendersStepsCompletedQueryKey() {
  return ['verified_senders', '/verified_senders/steps_completed'] as const
}

export function getVerifiedSendersStepsCompletedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getVerifiedSendersStepsCompletedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.verified_senders.steps_completed.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVerifiedSendersStepsCompleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVerifiedSendersStepsCompletedQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVerifiedSendersVerifyTokenQueryKey(
  args: InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>,
) {
  return ['verified_senders', '/verified_senders/verify/:token', args] as const
}

export function getVerifiedSendersVerifyTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVerifiedSendersVerifyTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verified_senders.verify[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVerifiedSendersVerifyToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVerifiedSendersVerifyTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteVerifiedSendersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVerifiedSendersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchVerifiedSendersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVerifiedSendersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWhitelabelDnsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelDnsEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWhitelabelDomainsQueryKey(
  args: InferRequestType<typeof client.whitelabel.domains.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/domains', keyArgs] as const
}

export function getWhitelabelDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.whitelabel.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelDomainsQueryKey>
  >({
    queryKey: getWhitelabelDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWhitelabelDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whitelabel.domains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhitelabelDomainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWhitelabelDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.whitelabel.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWhitelabelDomainsDefaultQueryKey(
  args: InferRequestType<typeof client.whitelabel.domains.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/domains/default', keyArgs] as const
}

export function getWhitelabelDomainsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whitelabel.domains.default.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelDomainsDefaultQueryKey>
  >({
    queryKey: getWhitelabelDomainsDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.domains.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWhitelabelDomainsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whitelabel.domains.default.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelDomainsDefaultQueryKey>
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
      ...getWhitelabelDomainsDefaultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWhitelabelDomainsSubuserQueryKey(
  args: InferRequestType<typeof client.whitelabel.domains.subuser.$get>,
) {
  return ['whitelabel', '/whitelabel/domains/subuser', args] as const
}

export function getWhitelabelDomainsSubuserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whitelabel.domains.subuser.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelDomainsSubuserQueryKey>
  >({
    queryKey: getWhitelabelDomainsSubuserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.domains.subuser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWhitelabelDomainsSubuser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whitelabel.domains.subuser.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelDomainsSubuserQueryKey>
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
      ...getWhitelabelDomainsSubuserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteWhitelabelDomainsSubuser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWhitelabelDomainsSubuserMutationOptions<
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

export function getWhitelabelDomainsDomainIdQueryKey(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/domains/:domain_id', keyArgs] as const
}

export function getWhitelabelDomainsDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWhitelabelDomainsDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.domains[':domain_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWhitelabelDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWhitelabelDomainsDomainIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteWhitelabelDomainsDomainId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWhitelabelDomainsDomainIdMutationOptions<
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

export function createPatchWhitelabelDomainsDomainId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWhitelabelDomainsDomainIdMutationOptions<
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

export function createPostWhitelabelDomainsDomainIdSubuser<
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
                ReturnType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelDomainsDomainIdSubuserMutationOptions<
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

export function createPostWhitelabelDomainsIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelDomainsIdIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWhitelabelDomainsIdIpsIp<
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
                ReturnType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWhitelabelDomainsIdIpsIpMutationOptions<
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

export function createPostWhitelabelDomainsIdValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelDomainsIdValidateMutationOptions<
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

export function getWhitelabelIpsQueryKey(
  args: InferRequestType<typeof client.whitelabel.ips.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/ips', keyArgs] as const
}

export function getWhitelabelIpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.whitelabel.ips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelIpsQueryKey>
  >({
    queryKey: getWhitelabelIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWhitelabelIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whitelabel.ips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhitelabelIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWhitelabelIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.whitelabel.ips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWhitelabelIpsIdQueryKey(
  args: InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/ips/:id', keyArgs] as const
}

export function getWhitelabelIpsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelIpsIdQueryKey>
  >({
    queryKey: getWhitelabelIpsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.ips[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWhitelabelIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhitelabelIpsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteWhitelabelIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWhitelabelIpsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWhitelabelIpsIdValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelIpsIdValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWhitelabelLinksQueryKey(
  args: InferRequestType<typeof client.whitelabel.links.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/links', keyArgs] as const
}

export function getWhitelabelLinksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.whitelabel.links.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelLinksQueryKey>
  >({
    queryKey: getWhitelabelLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.links.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWhitelabelLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whitelabel.links.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhitelabelLinksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWhitelabelLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.whitelabel.links.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWhitelabelLinksDefaultQueryKey(
  args: InferRequestType<typeof client.whitelabel.links.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/links/default', keyArgs] as const
}

export function getWhitelabelLinksDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whitelabel.links.default.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelLinksDefaultQueryKey>
  >({
    queryKey: getWhitelabelLinksDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.links.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWhitelabelLinksDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whitelabel.links.default.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelLinksDefaultQueryKey>
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
      ...getWhitelabelLinksDefaultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWhitelabelLinksSubuserQueryKey(
  args: InferRequestType<typeof client.whitelabel.links.subuser.$get>,
) {
  return ['whitelabel', '/whitelabel/links/subuser', args] as const
}

export function getWhitelabelLinksSubuserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whitelabel.links.subuser.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelLinksSubuserQueryKey>
  >({
    queryKey: getWhitelabelLinksSubuserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.links.subuser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWhitelabelLinksSubuser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whitelabel.links.subuser.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelLinksSubuserQueryKey>
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
      ...getWhitelabelLinksSubuserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteWhitelabelLinksSubuser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWhitelabelLinksSubuserMutationOptions<
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

export function getWhitelabelLinksIdQueryKey(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/links/:id', keyArgs] as const
}

export function getWhitelabelLinksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhitelabelLinksIdQueryKey>
  >({
    queryKey: getWhitelabelLinksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whitelabel.links[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWhitelabelLinksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhitelabelLinksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhitelabelLinksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteWhitelabelLinksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWhitelabelLinksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchWhitelabelLinksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWhitelabelLinksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWhitelabelLinksIdValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelLinksIdValidateMutationOptions<
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

export function createPostWhitelabelLinksLinkIdSubuser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhitelabelLinksLinkIdSubuserMutationOptions<
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
