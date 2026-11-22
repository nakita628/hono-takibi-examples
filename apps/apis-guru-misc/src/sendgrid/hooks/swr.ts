import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccessSettingsActivityKey(
  args: InferRequestType<typeof client.access_settings.activity.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['access_settings', '/access_settings/activity', keyArgs] as const
}

export function useGetAccessSettingsActivity<TError = unknown>(
  args: InferRequestType<typeof client.access_settings.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
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
        ? getGetAccessSettingsActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.access_settings.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessSettingsActivity<TError = unknown>(
  args: InferRequestType<typeof client.access_settings.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
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
        ? getGetAccessSettingsActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.access_settings.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccessSettingsWhitelistKey(
  args: InferRequestType<typeof client.access_settings.whitelist.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['access_settings', '/access_settings/whitelist', keyArgs] as const
}

export function useGetAccessSettingsWhitelist<TError = unknown>(
  args: InferRequestType<typeof client.access_settings.whitelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
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
        ? getGetAccessSettingsWhitelistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.access_settings.whitelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessSettingsWhitelist<TError = unknown>(
  args: InferRequestType<typeof client.access_settings.whitelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
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
        ? getGetAccessSettingsWhitelistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.access_settings.whitelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccessSettingsWhitelistKey() {
  return ['access_settings', '/access_settings/whitelist', 'POST'] as const
}

export function usePostAccessSettingsWhitelist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.access_settings.whitelist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessSettingsWhitelistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.access_settings.whitelist.$post> },
      ) => parseResponse(client.access_settings.whitelist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccessSettingsWhitelistKey() {
  return ['access_settings', '/access_settings/whitelist', 'DELETE'] as const
}

export function useDeleteAccessSettingsWhitelist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.access_settings.whitelist.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.access_settings.whitelist.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccessSettingsWhitelistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.access_settings.whitelist.$delete> },
      ) => parseResponse(client.access_settings.whitelist.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessSettingsWhitelistRuleIdKey(
  args: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['access_settings', '/access_settings/whitelist/:rule_id', keyArgs] as const
}

export function useGetAccessSettingsWhitelistRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
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
        ? getGetAccessSettingsWhitelistRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.access_settings.whitelist[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessSettingsWhitelistRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
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
        ? getGetAccessSettingsWhitelistRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.access_settings.whitelist[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccessSettingsWhitelistRuleIdKey() {
  return ['access_settings', '/access_settings/whitelist/:rule_id', 'DELETE'] as const
}

export function useDeleteAccessSettingsWhitelistRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccessSettingsWhitelistRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>
        },
      ) => parseResponse(client.access_settings.whitelist[':rule_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAlertsKey(args: InferRequestType<typeof client.alerts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['alerts', '/alerts', keyArgs] as const
}

export function useGetAlerts<TError = unknown>(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.alerts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAlerts<TError = unknown>(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.alerts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAlertsKey() {
  return ['alerts', '/alerts', 'POST'] as const
}

export function usePostAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.alerts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alerts.$post> }) =>
        parseResponse(client.alerts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAlertsAlertIdKey(
  args: InferRequestType<(typeof client.alerts)[':alert_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alerts', '/alerts/:alert_id', keyArgs] as const
}

export function useGetAlertsAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.alerts)[':alert_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAlertsAlertIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts[':alert_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.alerts)[':alert_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAlertsAlertIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts[':alert_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAlertsAlertIdKey() {
  return ['alerts', '/alerts/:alert_id', 'DELETE'] as const
}

export function useDeleteAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.alerts)[':alert_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAlertsAlertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.alerts)[':alert_id']['$delete']> },
      ) => parseResponse(client.alerts[':alert_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAlertsAlertIdKey() {
  return ['alerts', '/alerts/:alert_id', 'PATCH'] as const
}

export function usePatchAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.alerts)[':alert_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAlertsAlertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.alerts)[':alert_id']['$patch']> },
      ) => parseResponse(client.alerts[':alert_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysKey(args: InferRequestType<typeof client.api_keys.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api_keys', '/api_keys', keyArgs] as const
}

export function useGetApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApiKeysKey() {
  return ['api_keys', '/api_keys', 'POST'] as const
}

export function usePostApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api_keys.$post> }) =>
        parseResponse(client.api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysApiKeyIdKey(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api_keys', '/api_keys/:api_key_id', keyArgs] as const
}

export function useGetApiKeysApiKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
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
        ? getGetApiKeysApiKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':api_key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeysApiKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
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
        ? getGetApiKeysApiKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':api_key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiKeysApiKeyIdKey() {
  return ['api_keys', '/api_keys/:api_key_id', 'PUT'] as const
}

export function usePutApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':api_key_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiKeysApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':api_key_id']['$put']> },
      ) => parseResponse(client.api_keys[':api_key_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiKeysApiKeyIdKey() {
  return ['api_keys', '/api_keys/:api_key_id', 'DELETE'] as const
}

export function useDeleteApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':api_key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':api_key_id']['$delete']> },
      ) => parseResponse(client.api_keys[':api_key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiKeysApiKeyIdKey() {
  return ['api_keys', '/api_keys/:api_key_id', 'PATCH'] as const
}

export function usePatchApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':api_key_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':api_key_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiKeysApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':api_key_id']['$patch']> },
      ) => parseResponse(client.api_keys[':api_key_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAsmGroupsKey(args: InferRequestType<typeof client.asm.groups.$get>) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/groups', keyArgs] as const
}

export function useGetAsmGroups<TError = unknown>(
  args: InferRequestType<typeof client.asm.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAsmGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAsmGroups<TError = unknown>(
  args: InferRequestType<typeof client.asm.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAsmGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAsmGroupsKey() {
  return ['asm', '/asm/groups', 'POST'] as const
}

export function usePostAsmGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.asm.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAsmGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.asm.groups.$post> }) =>
        parseResponse(client.asm.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAsmGroupsGroupIdKey(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/groups/:group_id', keyArgs] as const
}

export function useGetAsmGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
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
        ? getGetAsmGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAsmGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
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
        ? getGetAsmGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAsmGroupsGroupIdKey() {
  return ['asm', '/asm/groups/:group_id', 'DELETE'] as const
}

export function useDeleteAsmGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.asm.groups)[':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAsmGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.asm.groups)[':group_id']['$delete']> },
      ) => parseResponse(client.asm.groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAsmGroupsGroupIdKey() {
  return ['asm', '/asm/groups/:group_id', 'PATCH'] as const
}

export function usePatchAsmGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.asm.groups)[':group_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAsmGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.asm.groups)[':group_id']['$patch']> },
      ) => parseResponse(client.asm.groups[':group_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAsmGroupsGroupIdSuppressionsKey(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/groups/:group_id/suppressions', keyArgs] as const
}

export function useGetAsmGroupsGroupIdSuppressions<TError = unknown>(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
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
        ? getGetAsmGroupsGroupIdSuppressionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.asm.groups[':group_id'].suppressions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAsmGroupsGroupIdSuppressions<TError = unknown>(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
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
        ? getGetAsmGroupsGroupIdSuppressionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.asm.groups[':group_id'].suppressions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAsmGroupsGroupIdSuppressionsKey() {
  return ['asm', '/asm/groups/:group_id/suppressions', 'POST'] as const
}

export function usePostAsmGroupsGroupIdSuppressions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAsmGroupsGroupIdSuppressionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>
        },
      ) => parseResponse(client.asm.groups[':group_id'].suppressions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAsmGroupsGroupIdSuppressionsSearchKey() {
  return ['asm', '/asm/groups/:group_id/suppressions/search', 'POST'] as const
}

export function usePostAsmGroupsGroupIdSuppressionsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAsmGroupsGroupIdSuppressionsSearchKey()
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
            (typeof client.asm.groups)[':group_id']['suppressions']['search']['$post']
          >
        },
      ) =>
        parseResponse(client.asm.groups[':group_id'].suppressions.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAsmGroupsGroupIdSuppressionsEmailKey() {
  return ['asm', '/asm/groups/:group_id/suppressions/:email', 'DELETE'] as const
}

export function useDeleteAsmGroupsGroupIdSuppressionsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions'][':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAsmGroupsGroupIdSuppressionsEmailKey()
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
            (typeof client.asm.groups)[':group_id']['suppressions'][':email']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.asm.groups[':group_id'].suppressions[':email'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAsmSuppressionsKey(
  args: InferRequestType<typeof client.asm.suppressions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/suppressions', keyArgs] as const
}

export function useGetAsmSuppressions<TError = unknown>(
  args: InferRequestType<typeof client.asm.suppressions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
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
        ? getGetAsmSuppressionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.suppressions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAsmSuppressions<TError = unknown>(
  args: InferRequestType<typeof client.asm.suppressions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
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
        ? getGetAsmSuppressionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.suppressions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAsmSuppressionsGlobalKey() {
  return ['asm', '/asm/suppressions/global', 'POST'] as const
}

export function usePostAsmSuppressionsGlobal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.asm.suppressions.global.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.asm.suppressions.global.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAsmSuppressionsGlobalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.asm.suppressions.global.$post> },
      ) => parseResponse(client.asm.suppressions.global.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAsmSuppressionsGlobalEmailKey(
  args: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/suppressions/global/:email', keyArgs] as const
}

export function useGetAsmSuppressionsGlobalEmail<TError = unknown>(
  args: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
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
        ? getGetAsmSuppressionsGlobalEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.suppressions.global[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAsmSuppressionsGlobalEmail<TError = unknown>(
  args: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
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
        ? getGetAsmSuppressionsGlobalEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.suppressions.global[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAsmSuppressionsGlobalEmailKey() {
  return ['asm', '/asm/suppressions/global/:email', 'DELETE'] as const
}

export function useDeleteAsmSuppressionsGlobalEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions.global)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.asm.suppressions.global)[':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAsmSuppressionsGlobalEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$delete']> },
      ) => parseResponse(client.asm.suppressions.global[':email'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAsmSuppressionsEmailKey(
  args: InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asm', '/asm/suppressions/:email', keyArgs] as const
}

export function useGetAsmSuppressionsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>
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
        ? getGetAsmSuppressionsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.suppressions[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAsmSuppressionsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>
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
        ? getGetAsmSuppressionsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asm.suppressions)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asm.suppressions[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrowsersStatsKey(args: InferRequestType<typeof client.browsers.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['browsers', '/browsers/stats', keyArgs] as const
}

export function useGetBrowsersStats<TError = unknown>(
  args: InferRequestType<typeof client.browsers.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrowsersStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browsers.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowsersStats<TError = unknown>(
  args: InferRequestType<typeof client.browsers.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrowsersStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browsers.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browsers.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCampaignsKey(args: InferRequestType<typeof client.campaigns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['campaigns', '/campaigns', keyArgs] as const
}

export function useGetCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCampaignsKey() {
  return ['campaigns', '/campaigns', 'POST'] as const
}

export function usePostCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.campaigns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.campaigns.$post> }) =>
        parseResponse(client.campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCampaignsCampaignIdKey(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['campaigns', '/campaigns/:campaign_id', keyArgs] as const
}

export function useGetCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>
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
        ? getGetCampaignsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns[':campaign_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>
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
        ? getGetCampaignsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns[':campaign_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCampaignsCampaignIdKey() {
  return ['campaigns', '/campaigns/:campaign_id', 'DELETE'] as const
}

export function useDeleteCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCampaignsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.campaigns)[':campaign_id']['$delete']> },
      ) => parseResponse(client.campaigns[':campaign_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCampaignsCampaignIdKey() {
  return ['campaigns', '/campaigns/:campaign_id', 'PATCH'] as const
}

export function usePatchCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCampaignsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.campaigns)[':campaign_id']['$patch']> },
      ) => parseResponse(client.campaigns[':campaign_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCampaignsCampaignIdSchedulesKey(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['campaigns', '/campaigns/:campaign_id/schedules', keyArgs] as const
}

export function useGetCampaignsCampaignIdSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
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
        ? getGetCampaignsCampaignIdSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.campaigns[':campaign_id'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaignsCampaignIdSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
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
        ? getGetCampaignsCampaignIdSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.campaigns[':campaign_id'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCampaignsCampaignIdSchedulesKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules', 'POST'] as const
}

export function usePostCampaignsCampaignIdSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCampaignsCampaignIdSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>
        },
      ) => parseResponse(client.campaigns[':campaign_id'].schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCampaignsCampaignIdSchedulesKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules', 'DELETE'] as const
}

export function useDeleteCampaignsCampaignIdSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCampaignsCampaignIdSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>
        },
      ) => parseResponse(client.campaigns[':campaign_id'].schedules.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCampaignsCampaignIdSchedulesKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules', 'PATCH'] as const
}

export function usePatchCampaignsCampaignIdSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCampaignsCampaignIdSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>
        },
      ) => parseResponse(client.campaigns[':campaign_id'].schedules.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCampaignsCampaignIdSchedulesNowKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules/now', 'POST'] as const
}

export function usePostCampaignsCampaignIdSchedulesNow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCampaignsCampaignIdSchedulesNowKey()
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
            (typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']
          >
        },
      ) => parseResponse(client.campaigns[':campaign_id'].schedules.now.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCampaignsCampaignIdSchedulesTestKey() {
  return ['campaigns', '/campaigns/:campaign_id/schedules/test', 'POST'] as const
}

export function usePostCampaignsCampaignIdSchedulesTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCampaignsCampaignIdSchedulesTestKey()
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
            (typeof client.campaigns)[':campaign_id']['schedules']['test']['$post']
          >
        },
      ) => parseResponse(client.campaigns[':campaign_id'].schedules.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoriesKey(args: InferRequestType<typeof client.categories.$get>) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories', keyArgs] as const
}

export function useGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesStatsKey(
  args: InferRequestType<typeof client.categories.stats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories/stats', keyArgs] as const
}

export function useGetCategoriesStats<TError = unknown>(
  args: InferRequestType<typeof client.categories.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
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
        ? getGetCategoriesStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesStats<TError = unknown>(
  args: InferRequestType<typeof client.categories.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
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
        ? getGetCategoriesStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesStatsSumsKey(
  args: InferRequestType<typeof client.categories.stats.sums.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories/stats/sums', keyArgs] as const
}

export function useGetCategoriesStatsSums<TError = unknown>(
  args: InferRequestType<typeof client.categories.stats.sums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
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
        ? getGetCategoriesStatsSumsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.stats.sums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesStatsSums<TError = unknown>(
  args: InferRequestType<typeof client.categories.stats.sums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
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
        ? getGetCategoriesStatsSumsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categories.stats.sums.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.stats.sums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClientsStatsKey(args: InferRequestType<typeof client.clients.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['clients', '/clients/stats', keyArgs] as const
}

export function useGetClientsStats<TError = unknown>(
  args: InferRequestType<typeof client.clients.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsStats<TError = unknown>(
  args: InferRequestType<typeof client.clients.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClientsClientTypeStatsKey(
  args: InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clients', '/clients/:client_type/stats', keyArgs] as const
}

export function useGetClientsClientTypeStats<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
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
        ? getGetClientsClientTypeStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':client_type'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsClientTypeStats<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
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
        ? getGetClientsClientTypeStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clients)[':client_type']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':client_type'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactdbCustomFieldsKey(
  args: InferRequestType<typeof client.contactdb.custom_fields.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/custom_fields', keyArgs] as const
}

export function useGetContactdbCustomFields<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.custom_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
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
        ? getGetContactdbCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbCustomFields<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.custom_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
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
        ? getGetContactdbCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactdbCustomFieldsKey() {
  return ['contactdb', '/contactdb/custom_fields', 'POST'] as const
}

export function usePostContactdbCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.custom_fields.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contactdb.custom_fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactdbCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contactdb.custom_fields.$post> },
      ) => parseResponse(client.contactdb.custom_fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbCustomFieldsCustomFieldIdKey(
  args: InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/custom_fields/:custom_field_id', keyArgs] as const
}

export function useGetContactdbCustomFieldsCustomFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>>
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
        ? getGetContactdbCustomFieldsCustomFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.custom_fields[':custom_field_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbCustomFieldsCustomFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>>
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
        ? getGetContactdbCustomFieldsCustomFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.custom_fields[':custom_field_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactdbCustomFieldsCustomFieldIdKey() {
  return ['contactdb', '/contactdb/custom_fields/:custom_field_id', 'DELETE'] as const
}

export function useDeleteContactdbCustomFieldsCustomFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactdbCustomFieldsCustomFieldIdKey()
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
            (typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.contactdb.custom_fields[':custom_field_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbListsKey(
  args: InferRequestType<typeof client.contactdb.lists.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/lists', keyArgs] as const
}

export function useGetContactdbLists<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactdbListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbLists<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactdbListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactdbListsKey() {
  return ['contactdb', '/contactdb/lists', 'POST'] as const
}

export function usePostContactdbLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contactdb.lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactdbListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contactdb.lists.$post> }) =>
        parseResponse(client.contactdb.lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactdbListsKey() {
  return ['contactdb', '/contactdb/lists', 'DELETE'] as const
}

export function useDeleteContactdbLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.lists.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.contactdb.lists.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactdbListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contactdb.lists.$delete> }) =>
        parseResponse(client.contactdb.lists.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbListsListIdKey(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/lists/:list_id', keyArgs] as const
}

export function useGetContactdbListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>
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
        ? getGetContactdbListsListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.lists[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>
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
        ? getGetContactdbListsListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.lists[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactdbListsListIdKey() {
  return ['contactdb', '/contactdb/lists/:list_id', 'DELETE'] as const
}

export function useDeleteContactdbListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactdbListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$delete']> },
      ) => parseResponse(client.contactdb.lists[':list_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchContactdbListsListIdKey() {
  return ['contactdb', '/contactdb/lists/:list_id', 'PATCH'] as const
}

export function usePatchContactdbListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchContactdbListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$patch']> },
      ) => parseResponse(client.contactdb.lists[':list_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbListsListIdRecipientsKey(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/lists/:list_id/recipients', keyArgs] as const
}

export function useGetContactdbListsListIdRecipients<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>>
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
        ? getGetContactdbListsListIdRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.lists[':list_id'].recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbListsListIdRecipients<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>>
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
        ? getGetContactdbListsListIdRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.lists[':list_id'].recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactdbListsListIdRecipientsKey() {
  return ['contactdb', '/contactdb/lists/:list_id/recipients', 'POST'] as const
}

export function usePostContactdbListsListIdRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactdbListsListIdRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>
        },
      ) => parseResponse(client.contactdb.lists[':list_id'].recipients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactdbListsListIdRecipientsRecipientIdKey() {
  return ['contactdb', '/contactdb/lists/:list_id/recipients/:recipient_id', 'POST'] as const
}

export function usePostContactdbListsListIdRecipientsRecipientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactdbListsListIdRecipientsRecipientIdKey()
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
            (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.contactdb.lists[':list_id'].recipients[':recipient_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactdbListsListIdRecipientsRecipientIdKey() {
  return ['contactdb', '/contactdb/lists/:list_id/recipients/:recipient_id', 'DELETE'] as const
}

export function useDeleteContactdbListsListIdRecipientsRecipientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactdbListsListIdRecipientsRecipientIdKey()
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
            (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.contactdb.lists[':list_id'].recipients[':recipient_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbRecipientsKey(
  args: InferRequestType<typeof client.contactdb.recipients.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients', keyArgs] as const
}

export function useGetContactdbRecipients<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.recipients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>
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
        ? getGetContactdbRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbRecipients<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.recipients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>
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
        ? getGetContactdbRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactdbRecipientsKey() {
  return ['contactdb', '/contactdb/recipients', 'POST'] as const
}

export function usePostContactdbRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contactdb.recipients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactdbRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contactdb.recipients.$post> },
      ) => parseResponse(client.contactdb.recipients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactdbRecipientsKey() {
  return ['contactdb', '/contactdb/recipients', 'DELETE'] as const
}

export function useDeleteContactdbRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contactdb.recipients.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactdbRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contactdb.recipients.$delete> },
      ) => parseResponse(client.contactdb.recipients.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchContactdbRecipientsKey() {
  return ['contactdb', '/contactdb/recipients', 'PATCH'] as const
}

export function usePatchContactdbRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contactdb.recipients.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchContactdbRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contactdb.recipients.$patch> },
      ) => parseResponse(client.contactdb.recipients.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbRecipientsBillableCountKey(
  args: InferRequestType<typeof client.contactdb.recipients.billable_count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/billable_count', keyArgs] as const
}

export function useGetContactdbRecipientsBillableCount<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.recipients.billable_count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
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
        ? getGetContactdbRecipientsBillableCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.recipients.billable_count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbRecipientsBillableCount<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.recipients.billable_count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
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
        ? getGetContactdbRecipientsBillableCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contactdb.recipients.billable_count.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.recipients.billable_count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactdbRecipientsCountKey(
  args: InferRequestType<typeof client.contactdb.recipients.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/count', keyArgs] as const
}

export function useGetContactdbRecipientsCount<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.recipients.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
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
        ? getGetContactdbRecipientsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.recipients.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbRecipientsCount<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.recipients.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
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
        ? getGetContactdbRecipientsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.recipients.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactdbRecipientsSearchKey(
  args: InferRequestType<typeof client.contactdb.recipients.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/search', keyArgs] as const
}

export function useGetContactdbRecipientsSearch<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.recipients.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
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
        ? getGetContactdbRecipientsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.recipients.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbRecipientsSearch<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.recipients.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
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
        ? getGetContactdbRecipientsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.recipients.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactdbRecipientsSearchKey() {
  return ['contactdb', '/contactdb/recipients/search', 'POST'] as const
}

export function usePostContactdbRecipientsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.recipients.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contactdb.recipients.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactdbRecipientsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contactdb.recipients.search.$post> },
      ) => parseResponse(client.contactdb.recipients.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbRecipientsRecipientIdKey(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/:recipient_id', keyArgs] as const
}

export function useGetContactdbRecipientsRecipientId<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
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
        ? getGetContactdbRecipientsRecipientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.recipients[':recipient_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbRecipientsRecipientId<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
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
        ? getGetContactdbRecipientsRecipientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.recipients[':recipient_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactdbRecipientsRecipientIdKey() {
  return ['contactdb', '/contactdb/recipients/:recipient_id', 'DELETE'] as const
}

export function useDeleteContactdbRecipientsRecipientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactdbRecipientsRecipientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>
        },
      ) => parseResponse(client.contactdb.recipients[':recipient_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbRecipientsRecipientIdListsKey(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/recipients/:recipient_id/lists', keyArgs] as const
}

export function useGetContactdbRecipientsRecipientIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
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
        ? getGetContactdbRecipientsRecipientIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.recipients[':recipient_id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbRecipientsRecipientIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
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
        ? getGetContactdbRecipientsRecipientIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contactdb.recipients[':recipient_id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactdbReservedFieldsKey(
  args: InferRequestType<typeof client.contactdb.reserved_fields.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/reserved_fields', keyArgs] as const
}

export function useGetContactdbReservedFields<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.reserved_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
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
        ? getGetContactdbReservedFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.reserved_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbReservedFields<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.reserved_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
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
        ? getGetContactdbReservedFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.reserved_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.reserved_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactdbSegmentsKey(
  args: InferRequestType<typeof client.contactdb.segments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/segments', keyArgs] as const
}

export function useGetContactdbSegments<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
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
        ? getGetContactdbSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbSegments<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
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
        ? getGetContactdbSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactdbSegmentsKey() {
  return ['contactdb', '/contactdb/segments', 'POST'] as const
}

export function usePostContactdbSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.segments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contactdb.segments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactdbSegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contactdb.segments.$post> }) =>
        parseResponse(client.contactdb.segments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbSegmentsSegmentIdKey(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/segments/:segment_id', keyArgs] as const
}

export function useGetContactdbSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
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
        ? getGetContactdbSegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.segments[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
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
        ? getGetContactdbSegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.segments[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactdbSegmentsSegmentIdKey() {
  return ['contactdb', '/contactdb/segments/:segment_id', 'DELETE'] as const
}

export function useDeleteContactdbSegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactdbSegmentsSegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$delete']> },
      ) => parseResponse(client.contactdb.segments[':segment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchContactdbSegmentsSegmentIdKey() {
  return ['contactdb', '/contactdb/segments/:segment_id', 'PATCH'] as const
}

export function usePatchContactdbSegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contactdb.segments)[':segment_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchContactdbSegmentsSegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$patch']> },
      ) => parseResponse(client.contactdb.segments[':segment_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactdbSegmentsSegmentIdRecipientsKey(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/segments/:segment_id/recipients', keyArgs] as const
}

export function useGetContactdbSegmentsSegmentIdRecipients<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>
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
        ? getGetContactdbSegmentsSegmentIdRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.contactdb.segments[':segment_id'].recipients.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbSegmentsSegmentIdRecipients<TError = unknown>(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>
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
        ? getGetContactdbSegmentsSegmentIdRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.contactdb.segments[':segment_id'].recipients.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContactdbStatusKey(
  args: InferRequestType<typeof client.contactdb.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contactdb', '/contactdb/status', keyArgs] as const
}

export function useGetContactdbStatus<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
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
        ? getGetContactdbStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactdbStatus<TError = unknown>(
  args: InferRequestType<typeof client.contactdb.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
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
        ? getGetContactdbStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contactdb.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contactdb.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDesignsKey(args: InferRequestType<typeof client.designs.$get>) {
  return ['designs', '/designs', args] as const
}

export function useGetDesigns<TError = unknown>(
  args: InferRequestType<typeof client.designs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDesignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.designs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDesigns<TError = unknown>(
  args: InferRequestType<typeof client.designs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDesignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.designs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDesignsKey() {
  return ['designs', '/designs', 'POST'] as const
}

export function usePostDesigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.designs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.designs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDesignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.designs.$post> }) =>
        parseResponse(client.designs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDesignsPreBuiltsKey(
  args: InferRequestType<(typeof client.designs)['pre-builts']['$get']>,
) {
  return ['designs', '/designs/pre-builts', args] as const
}

export function useGetDesignsPreBuilts<TError = unknown>(
  args: InferRequestType<(typeof client.designs)['pre-builts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
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
        ? getGetDesignsPreBuiltsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designs['pre-builts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDesignsPreBuilts<TError = unknown>(
  args: InferRequestType<(typeof client.designs)['pre-builts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
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
        ? getGetDesignsPreBuiltsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)['pre-builts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designs['pre-builts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDesignsPreBuiltsIdKey(
  args: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>,
) {
  return ['designs', '/designs/pre-builts/:id', args] as const
}

export function useGetDesignsPreBuiltsId<TError = unknown>(
  args: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
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
        ? getGetDesignsPreBuiltsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designs['pre-builts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDesignsPreBuiltsId<TError = unknown>(
  args: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
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
        ? getGetDesignsPreBuiltsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designs['pre-builts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDesignsPreBuiltsIdKey() {
  return ['designs', '/designs/pre-builts/:id', 'POST'] as const
}

export function usePostDesignsPreBuiltsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.designs)['pre-builts'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.designs)['pre-builts'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDesignsPreBuiltsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$post']> },
      ) => parseResponse(client.designs['pre-builts'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDesignsIdKey(args: InferRequestType<(typeof client.designs)[':id']['$get']>) {
  return ['designs', '/designs/:id', args] as const
}

export function useGetDesignsId<TError = unknown>(
  args: InferRequestType<(typeof client.designs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDesignsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDesignsId<TError = unknown>(
  args: InferRequestType<(typeof client.designs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDesignsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDesignsIdKey() {
  return ['designs', '/designs/:id', 'POST'] as const
}

export function usePostDesignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.designs)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDesignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.designs)[':id']['$post']> }) =>
        parseResponse(client.designs[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDesignsIdKey() {
  return ['designs', '/designs/:id', 'DELETE'] as const
}

export function useDeleteDesignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.designs)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDesignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.designs)[':id']['$delete']> },
      ) => parseResponse(client.designs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDesignsIdKey() {
  return ['designs', '/designs/:id', 'PATCH'] as const
}

export function usePatchDesignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.designs)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.designs)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDesignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.designs)[':id']['$patch']> },
      ) => parseResponse(client.designs[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesStatsKey(args: InferRequestType<typeof client.devices.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices/stats', keyArgs] as const
}

export function useGetDevicesStats<TError = unknown>(
  args: InferRequestType<typeof client.devices.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesStats<TError = unknown>(
  args: InferRequestType<typeof client.devices.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeoStatsKey(args: InferRequestType<typeof client.geo.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['geo', '/geo/stats', keyArgs] as const
}

export function useGetGeoStats<TError = unknown>(
  args: InferRequestType<typeof client.geo.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeoStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geo.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeoStats<TError = unknown>(
  args: InferRequestType<typeof client.geo.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeoStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geo.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geo.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpsKey(args: InferRequestType<typeof client.ips.$get>) {
  return ['ips', '/ips', args] as const
}

export function useGetIps<TError = unknown>(
  args: InferRequestType<typeof client.ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIps<TError = unknown>(
  args: InferRequestType<typeof client.ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostIpsKey() {
  return ['ips', '/ips', 'POST'] as const
}

export function usePostIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ips.$post> }) =>
        parseResponse(client.ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpsAssignedKey() {
  return ['ips', '/ips/assigned'] as const
}

export function useGetIpsAssigned<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsAssignedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.assigned.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsAssigned<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsAssignedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.assigned.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.assigned.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpsPoolsKey() {
  return ['ips', '/ips/pools'] as const
}

export function useGetIpsPools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsPoolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.pools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsPools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsPoolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.pools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpsPoolsKey() {
  return ['ips', '/ips/pools', 'POST'] as const
}

export function usePostIpsPools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.pools.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ips.pools.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsPoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ips.pools.$post> }) =>
        parseResponse(client.ips.pools.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpsPoolsPoolNameKey(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>,
) {
  return ['ips', '/ips/pools/:pool_name', args] as const
}

export function useGetIpsPoolsPoolName<TError = unknown>(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
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
        ? getGetIpsPoolsPoolNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.pools[':pool_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsPoolsPoolName<TError = unknown>(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
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
        ? getGetIpsPoolsPoolNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.pools[':pool_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpsPoolsPoolNameKey() {
  return ['ips', '/ips/pools/:pool_name', 'PUT'] as const
}

export function usePutIpsPoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips.pools)[':pool_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpsPoolsPoolNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips.pools)[':pool_name']['$put']> },
      ) => parseResponse(client.ips.pools[':pool_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpsPoolsPoolNameKey() {
  return ['ips', '/ips/pools/:pool_name', 'DELETE'] as const
}

export function useDeleteIpsPoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ips.pools)[':pool_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpsPoolsPoolNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips.pools)[':pool_name']['$delete']> },
      ) => parseResponse(client.ips.pools[':pool_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsPoolsPoolNameIpsKey() {
  return ['ips', '/ips/pools/:pool_name/ips', 'POST'] as const
}

export function usePostIpsPoolsPoolNameIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['ips']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips.pools)[':pool_name']['ips']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsPoolsPoolNameIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips.pools)[':pool_name']['ips']['$post']> },
      ) => parseResponse(client.ips.pools[':pool_name'].ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpsPoolsPoolNameIpsIpKey() {
  return ['ips', '/ips/pools/:pool_name/ips/:ip', 'DELETE'] as const
}

export function useDeleteIpsPoolsPoolNameIpsIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpsPoolsPoolNameIpsIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>
        },
      ) => parseResponse(client.ips.pools[':pool_name'].ips[':ip'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpsRemainingKey() {
  return ['ips', '/ips/remaining'] as const
}

export function useGetIpsRemaining<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsRemainingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.remaining.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsRemaining<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsRemainingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.remaining.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.remaining.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpsWarmupKey() {
  return ['ips', '/ips/warmup'] as const
}

export function useGetIpsWarmup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsWarmupKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.warmup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsWarmup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsWarmupKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.warmup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpsWarmupKey() {
  return ['ips', '/ips/warmup', 'POST'] as const
}

export function usePostIpsWarmup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.warmup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ips.warmup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsWarmupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ips.warmup.$post> }) =>
        parseResponse(client.ips.warmup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpsWarmupIpAddressKey(
  args: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>,
) {
  return ['ips', '/ips/warmup/:ip_address', args] as const
}

export function useGetIpsWarmupIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>
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
        ? getGetIpsWarmupIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.warmup[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsWarmupIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>
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
        ? getGetIpsWarmupIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips.warmup[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIpsWarmupIpAddressKey() {
  return ['ips', '/ips/warmup/:ip_address', 'DELETE'] as const
}

export function useDeleteIpsWarmupIpAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ips.warmup)[':ip_address']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ips.warmup)[':ip_address']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpsWarmupIpAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$delete']> },
      ) => parseResponse(client.ips.warmup[':ip_address'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpsIpAddressKey(
  args: InferRequestType<(typeof client.ips)[':ip_address']['$get']>,
) {
  return ['ips', '/ips/:ip_address', args] as const
}

export function useGetIpsIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.ips)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIpsIpAddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.ips)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIpsIpAddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':ip_address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMailBatchKey() {
  return ['mail', '/mail/batch', 'POST'] as const
}

export function usePostMailBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail.batch.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mail.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMailBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mail.batch.$post> }) =>
        parseResponse(client.mail.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailBatchBatchIdKey(
  args: InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail', '/mail/batch/:batch_id', keyArgs] as const
}

export function useGetMailBatchBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
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
        ? getGetMailBatchBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail.batch[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailBatchBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
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
        ? getGetMailBatchBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mail.batch)[':batch_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail.batch[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMailSendKey() {
  return ['mail', '/mail/send', 'POST'] as const
}

export function usePostMailSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mail.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMailSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mail.send.$post> }) =>
        parseResponse(client.mail.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailSettingsKey(args: InferRequestType<typeof client.mail_settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings', keyArgs] as const
}

export function useGetMailSettings<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMailSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailSettings<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMailSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMailSettingsAddressWhitelistKey(
  args: InferRequestType<typeof client.mail_settings.address_whitelist.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/address_whitelist', keyArgs] as const
}

export function useGetMailSettingsAddressWhitelist<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.address_whitelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>
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
        ? getGetMailSettingsAddressWhitelistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.address_whitelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailSettingsAddressWhitelist<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.address_whitelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>
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
        ? getGetMailSettingsAddressWhitelistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.address_whitelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMailSettingsAddressWhitelistKey() {
  return ['mail_settings', '/mail_settings/address_whitelist', 'PATCH'] as const
}

export function usePatchMailSettingsAddressWhitelist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mail_settings.address_whitelist.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mail_settings.address_whitelist.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMailSettingsAddressWhitelistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mail_settings.address_whitelist.$patch> },
      ) => parseResponse(client.mail_settings.address_whitelist.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailSettingsBouncePurgeKey(
  args: InferRequestType<typeof client.mail_settings.bounce_purge.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/bounce_purge', keyArgs] as const
}

export function useGetMailSettingsBouncePurge<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.bounce_purge.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
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
        ? getGetMailSettingsBouncePurgeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.bounce_purge.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailSettingsBouncePurge<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.bounce_purge.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
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
        ? getGetMailSettingsBouncePurgeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.bounce_purge.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMailSettingsBouncePurgeKey() {
  return ['mail_settings', '/mail_settings/bounce_purge', 'PATCH'] as const
}

export function usePatchMailSettingsBouncePurge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.bounce_purge.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mail_settings.bounce_purge.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMailSettingsBouncePurgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mail_settings.bounce_purge.$patch> },
      ) => parseResponse(client.mail_settings.bounce_purge.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailSettingsFooterKey(
  args: InferRequestType<typeof client.mail_settings.footer.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/footer', keyArgs] as const
}

export function useGetMailSettingsFooter<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.footer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>
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
        ? getGetMailSettingsFooterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.footer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailSettingsFooter<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.footer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>
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
        ? getGetMailSettingsFooterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.footer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMailSettingsFooterKey() {
  return ['mail_settings', '/mail_settings/footer', 'PATCH'] as const
}

export function usePatchMailSettingsFooter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.footer.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mail_settings.footer.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMailSettingsFooterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mail_settings.footer.$patch> },
      ) => parseResponse(client.mail_settings.footer.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailSettingsForwardBounceKey(
  args: InferRequestType<typeof client.mail_settings.forward_bounce.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/forward_bounce', keyArgs] as const
}

export function useGetMailSettingsForwardBounce<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.forward_bounce.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
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
        ? getGetMailSettingsForwardBounceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.forward_bounce.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailSettingsForwardBounce<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.forward_bounce.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
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
        ? getGetMailSettingsForwardBounceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.forward_bounce.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMailSettingsForwardBounceKey() {
  return ['mail_settings', '/mail_settings/forward_bounce', 'PATCH'] as const
}

export function usePatchMailSettingsForwardBounce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_bounce.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mail_settings.forward_bounce.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMailSettingsForwardBounceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mail_settings.forward_bounce.$patch> },
      ) => parseResponse(client.mail_settings.forward_bounce.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailSettingsForwardSpamKey(
  args: InferRequestType<typeof client.mail_settings.forward_spam.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/forward_spam', keyArgs] as const
}

export function useGetMailSettingsForwardSpam<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.forward_spam.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
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
        ? getGetMailSettingsForwardSpamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.forward_spam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailSettingsForwardSpam<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.forward_spam.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
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
        ? getGetMailSettingsForwardSpamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.forward_spam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMailSettingsForwardSpamKey() {
  return ['mail_settings', '/mail_settings/forward_spam', 'PATCH'] as const
}

export function usePatchMailSettingsForwardSpam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.forward_spam.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mail_settings.forward_spam.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMailSettingsForwardSpamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mail_settings.forward_spam.$patch> },
      ) => parseResponse(client.mail_settings.forward_spam.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailSettingsTemplateKey(
  args: InferRequestType<typeof client.mail_settings.template.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mail_settings', '/mail_settings/template', keyArgs] as const
}

export function useGetMailSettingsTemplate<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.template.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
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
        ? getGetMailSettingsTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailSettingsTemplate<TError = unknown>(
  args: InferRequestType<typeof client.mail_settings.template.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
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
        ? getGetMailSettingsTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mail_settings.template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMailSettingsTemplateKey() {
  return ['mail_settings', '/mail_settings/template', 'PATCH'] as const
}

export function usePatchMailSettingsTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mail_settings.template.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mail_settings.template.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMailSettingsTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mail_settings.template.$patch> },
      ) => parseResponse(client.mail_settings.template.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailboxProvidersStatsKey(
  args: InferRequestType<typeof client.mailbox_providers.stats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mailbox_providers', '/mailbox_providers/stats', keyArgs] as const
}

export function useGetMailboxProvidersStats<TError = unknown>(
  args: InferRequestType<typeof client.mailbox_providers.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
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
        ? getGetMailboxProvidersStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mailbox_providers.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailboxProvidersStats<TError = unknown>(
  args: InferRequestType<typeof client.mailbox_providers.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
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
        ? getGetMailboxProvidersStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mailbox_providers.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mailbox_providers.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingContactsKey() {
  return ['marketing', '/marketing/contacts'] as const
}

export function useGetMarketingContacts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketingContactsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingContacts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketingContactsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMarketingContactsKey() {
  return ['marketing', '/marketing/contacts', 'PUT'] as const
}

export function usePutMarketingContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.contacts.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMarketingContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.marketing.contacts.$put> }) =>
        parseResponse(client.marketing.contacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingContactsKey() {
  return ['marketing', '/marketing/contacts', 'DELETE'] as const
}

export function useDeleteMarketingContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.contacts.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.contacts.$delete> },
      ) => parseResponse(client.marketing.contacts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingContactsBatchKey() {
  return ['marketing', '/marketing/contacts/batch', 'POST'] as const
}

export function usePostMarketingContactsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.contacts.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingContactsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.contacts.batch.$post> },
      ) => parseResponse(client.marketing.contacts.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingContactsCountKey() {
  return ['marketing', '/marketing/contacts/count'] as const
}

export function useGetMarketingContactsCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
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
        ? getGetMarketingContactsCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingContactsCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
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
        ? getGetMarketingContactsCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingContactsExportsKey() {
  return ['marketing', '/marketing/contacts/exports'] as const
}

export function useGetMarketingContactsExports<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
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
        ? getGetMarketingContactsExportsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.exports.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingContactsExports<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
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
        ? getGetMarketingContactsExportsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.exports.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingContactsExportsKey() {
  return ['marketing', '/marketing/contacts/exports', 'POST'] as const
}

export function usePostMarketingContactsExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.exports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.contacts.exports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingContactsExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.contacts.exports.$post> },
      ) => parseResponse(client.marketing.contacts.exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingContactsExportsIdKey(
  args: InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>,
) {
  return ['marketing', '/marketing/contacts/exports/:id', args] as const
}

export function useGetMarketingContactsExportsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
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
        ? getGetMarketingContactsExportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.exports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingContactsExportsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
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
        ? getGetMarketingContactsExportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts.exports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.exports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMarketingContactsImportsKey() {
  return ['marketing', '/marketing/contacts/imports', 'PUT'] as const
}

export function usePutMarketingContactsImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.imports.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.contacts.imports.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMarketingContactsImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.contacts.imports.$put> },
      ) => parseResponse(client.marketing.contacts.imports.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingContactsImportsIdKey(
  args: InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>,
) {
  return ['marketing', '/marketing/contacts/imports/:id', args] as const
}

export function useGetMarketingContactsImportsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
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
        ? getGetMarketingContactsImportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.imports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingContactsImportsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
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
        ? getGetMarketingContactsImportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts.imports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts.imports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingContactsSearchKey() {
  return ['marketing', '/marketing/contacts/search', 'POST'] as const
}

export function usePostMarketingContactsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.contacts.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.contacts.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingContactsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.contacts.search.$post> },
      ) => parseResponse(client.marketing.contacts.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingContactsSearchEmailsKey() {
  return ['marketing', '/marketing/contacts/search/emails', 'POST'] as const
}

export function usePostMarketingContactsSearchEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.marketing.contacts.search.emails.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.contacts.search.emails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingContactsSearchEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.contacts.search.emails.$post> },
      ) => parseResponse(client.marketing.contacts.search.emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingContactsIdKey(
  args: InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>,
) {
  return ['marketing', '/marketing/contacts/:id', args] as const
}

export function useGetMarketingContactsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>
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
        ? getGetMarketingContactsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingContactsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>
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
        ? getGetMarketingContactsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.contacts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.contacts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingFieldDefinitionsKey() {
  return ['marketing', '/marketing/field_definitions'] as const
}

export function useGetMarketingFieldDefinitions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
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
        ? getGetMarketingFieldDefinitionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.field_definitions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingFieldDefinitions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
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
        ? getGetMarketingFieldDefinitionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.field_definitions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingFieldDefinitionsKey() {
  return ['marketing', '/marketing/field_definitions', 'POST'] as const
}

export function usePostMarketingFieldDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.field_definitions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.field_definitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingFieldDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.field_definitions.$post> },
      ) => parseResponse(client.marketing.field_definitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingFieldDefinitionsCustomFieldIdKey() {
  return ['marketing', '/marketing/field_definitions/:custom_field_id', 'DELETE'] as const
}

export function useDeleteMarketingFieldDefinitionsCustomFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.marketing.field_definitions)[':custom_field_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingFieldDefinitionsCustomFieldIdKey()
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
            (typeof client.marketing.field_definitions)[':custom_field_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing.field_definitions[':custom_field_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingFieldDefinitionsCustomFieldIdKey() {
  return ['marketing', '/marketing/field_definitions/:custom_field_id', 'PATCH'] as const
}

export function usePatchMarketingFieldDefinitionsCustomFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.marketing.field_definitions)[':custom_field_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingFieldDefinitionsCustomFieldIdKey()
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
            (typeof client.marketing.field_definitions)[':custom_field_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.marketing.field_definitions[':custom_field_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingListsKey(
  args: InferRequestType<typeof client.marketing.lists.$get>,
) {
  return ['marketing', '/marketing/lists', args] as const
}

export function useGetMarketingLists<TError = unknown>(
  args: InferRequestType<typeof client.marketing.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketingListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingLists<TError = unknown>(
  args: InferRequestType<typeof client.marketing.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketingListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingListsKey() {
  return ['marketing', '/marketing/lists', 'POST'] as const
}

export function usePostMarketingLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.lists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.marketing.lists.$post> }) =>
        parseResponse(client.marketing.lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingListsIdKey(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['$get']>,
) {
  return ['marketing', '/marketing/lists/:id', args] as const
}

export function useGetMarketingListsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
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
        ? getGetMarketingListsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingListsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
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
        ? getGetMarketingListsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMarketingListsIdKey() {
  return ['marketing', '/marketing/lists/:id', 'DELETE'] as const
}

export function useDeleteMarketingListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.lists)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.marketing.lists)[':id']['$delete']> },
      ) => parseResponse(client.marketing.lists[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingListsIdKey() {
  return ['marketing', '/marketing/lists/:id', 'PATCH'] as const
}

export function usePatchMarketingListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.lists)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.lists)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.marketing.lists)[':id']['$patch']> },
      ) => parseResponse(client.marketing.lists[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingListsIdContactsKey() {
  return ['marketing', '/marketing/lists/:id/contacts', 'DELETE'] as const
}

export function useDeleteMarketingListsIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingListsIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['$delete']> },
      ) => parseResponse(client.marketing.lists[':id'].contacts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingListsIdContactsCountKey(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>,
) {
  return ['marketing', '/marketing/lists/:id/contacts/count', args] as const
}

export function useGetMarketingListsIdContactsCount<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>>
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
        ? getGetMarketingListsIdContactsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.lists[':id'].contacts.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingListsIdContactsCount<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>>
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
        ? getGetMarketingListsIdContactsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.lists[':id'].contacts.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingSegmentsKey(
  args: InferRequestType<typeof client.marketing.segments.$get>,
) {
  return ['marketing', '/marketing/segments', args] as const
}

export function useGetMarketingSegments<TError = unknown>(
  args: InferRequestType<typeof client.marketing.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
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
        ? getGetMarketingSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingSegments<TError = unknown>(
  args: InferRequestType<typeof client.marketing.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
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
        ? getGetMarketingSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingSegmentsKey() {
  return ['marketing', '/marketing/segments', 'POST'] as const
}

export function usePostMarketingSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.segments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingSegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.marketing.segments.$post> }) =>
        parseResponse(client.marketing.segments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingSegments20Key(
  args: InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>,
) {
  return ['marketing', '/marketing/segments/2.0', args] as const
}

export function useGetMarketingSegments20<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>
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
        ? getGetMarketingSegments20Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.segments['2.0'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingSegments20<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>
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
        ? getGetMarketingSegments20Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.segments['2.0'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingSegments20Key() {
  return ['marketing', '/marketing/segments/2.0', 'POST'] as const
}

export function usePostMarketingSegments20<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)['2.0']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.segments)['2.0']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingSegments20Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.marketing.segments)['2.0']['$post']> },
      ) => parseResponse(client.marketing.segments['2.0'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingSegments20SegmentIdKey(
  args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>,
) {
  return ['marketing', '/marketing/segments/2.0/:segment_id', args] as const
}

export function useGetMarketingSegments20SegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>>
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
        ? getGetMarketingSegments20SegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.segments['2.0'][':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingSegments20SegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>>
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
        ? getGetMarketingSegments20SegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.segments['2.0'][':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMarketingSegments20SegmentIdKey() {
  return ['marketing', '/marketing/segments/2.0/:segment_id', 'DELETE'] as const
}

export function useDeleteMarketingSegments20SegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingSegments20SegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>
        },
      ) =>
        parseResponse(client.marketing.segments['2.0'][':segment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingSegments20SegmentIdKey() {
  return ['marketing', '/marketing/segments/2.0/:segment_id', 'PATCH'] as const
}

export function usePatchMarketingSegments20SegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingSegments20SegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>
        },
      ) =>
        parseResponse(client.marketing.segments['2.0'][':segment_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingSegmentsDeleteKey() {
  return ['marketing', '/marketing/segments/delete', 'POST'] as const
}

export function usePostMarketingSegmentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.segments.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.segments.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingSegmentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.segments.delete.$post> },
      ) => parseResponse(client.marketing.segments.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingSegmentsSegmentIdKey(
  args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>,
) {
  return ['marketing', '/marketing/segments/:segment_id', args] as const
}

export function useGetMarketingSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
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
        ? getGetMarketingSegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.segments[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
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
        ? getGetMarketingSegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.segments[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMarketingSegmentsSegmentIdKey() {
  return ['marketing', '/marketing/segments/:segment_id', 'DELETE'] as const
}

export function useDeleteMarketingSegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.segments)[':segment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingSegmentsSegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$delete']> },
      ) => parseResponse(client.marketing.segments[':segment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingSegmentsSegmentIdKey() {
  return ['marketing', '/marketing/segments/:segment_id', 'PATCH'] as const
}

export function usePatchMarketingSegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.segments)[':segment_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.segments)[':segment_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingSegmentsSegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$patch']> },
      ) => parseResponse(client.marketing.segments[':segment_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingSendersKey() {
  return ['marketing', '/marketing/senders', 'POST'] as const
}

export function usePostMarketingSenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketing.senders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.senders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingSendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.marketing.senders.$post> }) =>
        parseResponse(client.marketing.senders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingSinglesendsKey(
  args: InferRequestType<typeof client.marketing.singlesends.$get>,
) {
  return ['marketing', '/marketing/singlesends', args] as const
}

export function useGetMarketingSinglesends<TError = unknown>(
  args: InferRequestType<typeof client.marketing.singlesends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
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
        ? getGetMarketingSinglesendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.singlesends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingSinglesends<TError = unknown>(
  args: InferRequestType<typeof client.marketing.singlesends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
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
        ? getGetMarketingSinglesendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.singlesends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingSinglesendsKey() {
  return ['marketing', '/marketing/singlesends', 'POST'] as const
}

export function usePostMarketingSinglesends<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.singlesends.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingSinglesendsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.singlesends.$post> },
      ) => parseResponse(client.marketing.singlesends.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingSinglesendsKey() {
  return ['marketing', '/marketing/singlesends', 'DELETE'] as const
}

export function useDeleteMarketingSinglesends<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.marketing.singlesends.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingSinglesendsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.singlesends.$delete> },
      ) => parseResponse(client.marketing.singlesends.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingSinglesendsCategoriesKey() {
  return ['marketing', '/marketing/singlesends/categories'] as const
}

export function useGetMarketingSinglesendsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>
        >
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
        ? getGetMarketingSinglesendsCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.singlesends.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingSinglesendsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>
        >
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
        ? getGetMarketingSinglesendsCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.singlesends.categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.singlesends.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingSinglesendsSearchKey() {
  return ['marketing', '/marketing/singlesends/search', 'POST'] as const
}

export function usePostMarketingSinglesendsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.singlesends.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.singlesends.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingSinglesendsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.singlesends.search.$post> },
      ) => parseResponse(client.marketing.singlesends.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingSinglesendsIdKey(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>,
) {
  return ['marketing', '/marketing/singlesends/:id', args] as const
}

export function useGetMarketingSinglesendsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
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
        ? getGetMarketingSinglesendsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.singlesends[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingSinglesendsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
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
        ? getGetMarketingSinglesendsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.singlesends[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingSinglesendsIdKey() {
  return ['marketing', '/marketing/singlesends/:id', 'POST'] as const
}

export function usePostMarketingSinglesendsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingSinglesendsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.marketing.singlesends)[':id']['$post']> },
      ) => parseResponse(client.marketing.singlesends[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingSinglesendsIdKey() {
  return ['marketing', '/marketing/singlesends/:id', 'DELETE'] as const
}

export function useDeleteMarketingSinglesendsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingSinglesendsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.marketing.singlesends)[':id']['$delete']> },
      ) => parseResponse(client.marketing.singlesends[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingSinglesendsIdKey() {
  return ['marketing', '/marketing/singlesends/:id', 'PATCH'] as const
}

export function usePatchMarketingSinglesendsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingSinglesendsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.marketing.singlesends)[':id']['$patch']> },
      ) => parseResponse(client.marketing.singlesends[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMarketingSinglesendsIdScheduleKey() {
  return ['marketing', '/marketing/singlesends/:id/schedule', 'PUT'] as const
}

export function usePutMarketingSinglesendsIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMarketingSinglesendsIdScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>
        },
      ) => parseResponse(client.marketing.singlesends[':id'].schedule.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingSinglesendsIdScheduleKey() {
  return ['marketing', '/marketing/singlesends/:id/schedule', 'DELETE'] as const
}

export function useDeleteMarketingSinglesendsIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingSinglesendsIdScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>
        },
      ) => parseResponse(client.marketing.singlesends[':id'].schedule.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingStatsAutomationsKey(
  args: InferRequestType<typeof client.marketing.stats.automations.$get>,
) {
  return ['marketing', '/marketing/stats/automations', args] as const
}

export function useGetMarketingStatsAutomations<TError = unknown>(
  args: InferRequestType<typeof client.marketing.stats.automations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
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
        ? getGetMarketingStatsAutomationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.stats.automations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingStatsAutomations<TError = unknown>(
  args: InferRequestType<typeof client.marketing.stats.automations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
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
        ? getGetMarketingStatsAutomationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.automations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.stats.automations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingStatsAutomationsExportKey(
  args: InferRequestType<typeof client.marketing.stats.automations.export.$get>,
) {
  return ['marketing', '/marketing/stats/automations/export', args] as const
}

export function useGetMarketingStatsAutomationsExport<TError = unknown>(
  args: InferRequestType<typeof client.marketing.stats.automations.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
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
        ? getGetMarketingStatsAutomationsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.automations.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingStatsAutomationsExport<TError = unknown>(
  args: InferRequestType<typeof client.marketing.stats.automations.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
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
        ? getGetMarketingStatsAutomationsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.stats.automations.export.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.automations.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingStatsAutomationsIdKey(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>,
) {
  return ['marketing', '/marketing/stats/automations/:id', args] as const
}

export function useGetMarketingStatsAutomationsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
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
        ? getGetMarketingStatsAutomationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.automations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingStatsAutomationsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
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
        ? getGetMarketingStatsAutomationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.automations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingStatsAutomationsIdLinksKey(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>,
) {
  return ['marketing', '/marketing/stats/automations/:id/links', args] as const
}

export function useGetMarketingStatsAutomationsIdLinks<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>>
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
        ? getGetMarketingStatsAutomationsIdLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.automations[':id'].links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingStatsAutomationsIdLinks<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>>
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
        ? getGetMarketingStatsAutomationsIdLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.automations[':id'].links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingStatsSinglesendsKey(
  args: InferRequestType<typeof client.marketing.stats.singlesends.$get>,
) {
  return ['marketing', '/marketing/stats/singlesends', args] as const
}

export function useGetMarketingStatsSinglesends<TError = unknown>(
  args: InferRequestType<typeof client.marketing.stats.singlesends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
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
        ? getGetMarketingStatsSinglesendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.stats.singlesends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingStatsSinglesends<TError = unknown>(
  args: InferRequestType<typeof client.marketing.stats.singlesends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
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
        ? getGetMarketingStatsSinglesendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.marketing.stats.singlesends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.stats.singlesends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingStatsSinglesendsExportKey(
  args: InferRequestType<typeof client.marketing.stats.singlesends.export.$get>,
) {
  return ['marketing', '/marketing/stats/singlesends/export', args] as const
}

export function useGetMarketingStatsSinglesendsExport<TError = unknown>(
  args: InferRequestType<typeof client.marketing.stats.singlesends.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
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
        ? getGetMarketingStatsSinglesendsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.singlesends.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingStatsSinglesendsExport<TError = unknown>(
  args: InferRequestType<typeof client.marketing.stats.singlesends.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
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
        ? getGetMarketingStatsSinglesendsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.marketing.stats.singlesends.export.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.singlesends.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingStatsSinglesendsIdKey(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>,
) {
  return ['marketing', '/marketing/stats/singlesends/:id', args] as const
}

export function useGetMarketingStatsSinglesendsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
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
        ? getGetMarketingStatsSinglesendsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.singlesends[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingStatsSinglesendsId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
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
        ? getGetMarketingStatsSinglesendsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.singlesends[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingStatsSinglesendsIdLinksKey(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>,
) {
  return ['marketing', '/marketing/stats/singlesends/:id/links', args] as const
}

export function useGetMarketingStatsSinglesendsIdLinks<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>>
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
        ? getGetMarketingStatsSinglesendsIdLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.singlesends[':id'].links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingStatsSinglesendsIdLinks<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>>
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
        ? getGetMarketingStatsSinglesendsIdLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.stats.singlesends[':id'].links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingTestSendEmailKey() {
  return ['marketing', '/marketing/test/send_email', 'POST'] as const
}

export function usePostMarketingTestSendEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketing.test.send_email.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.marketing.test.send_email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingTestSendEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.marketing.test.send_email.$post> },
      ) => parseResponse(client.marketing.test.send_email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesKey(args: InferRequestType<typeof client.messages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages', keyArgs] as const
}

export function useGetMessages<TError = unknown>(
  args: InferRequestType<typeof client.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.messages.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMessages<TError = unknown>(
  args: InferRequestType<typeof client.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.messages.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMessagesDownloadKey() {
  return ['messages', '/messages/download', 'POST'] as const
}

export function usePostMessagesDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.download.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.download.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesDownloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.download.$post> }) =>
        parseResponse(client.messages.download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesDownloadDownloadUuidKey(
  args: InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/download/:download_uuid', keyArgs] as const
}

export function useGetMessagesDownloadDownloadUuid<TError = unknown>(
  args: InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
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
        ? getGetMessagesDownloadDownloadUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messages.download[':download_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesDownloadDownloadUuid<TError = unknown>(
  args: InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
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
        ? getGetMessagesDownloadDownloadUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages.download)[':download_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messages.download[':download_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagesMsgIdKey(
  args: InferRequestType<(typeof client.messages)[':msg_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/:msg_id', keyArgs] as const
}

export function useGetMessagesMsgId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':msg_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMessagesMsgIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':msg_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesMsgId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':msg_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMessagesMsgIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':msg_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':msg_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPartnerSettingsKey(
  args: InferRequestType<typeof client.partner_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['partner_settings', '/partner_settings', keyArgs] as const
}

export function useGetPartnerSettings<TError = unknown>(
  args: InferRequestType<typeof client.partner_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
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
        ? getGetPartnerSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.partner_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPartnerSettings<TError = unknown>(
  args: InferRequestType<typeof client.partner_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
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
        ? getGetPartnerSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.partner_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPartnerSettingsNewRelicKey(
  args: InferRequestType<typeof client.partner_settings.new_relic.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['partner_settings', '/partner_settings/new_relic', keyArgs] as const
}

export function useGetPartnerSettingsNewRelic<TError = unknown>(
  args: InferRequestType<typeof client.partner_settings.new_relic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
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
        ? getGetPartnerSettingsNewRelicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.partner_settings.new_relic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPartnerSettingsNewRelic<TError = unknown>(
  args: InferRequestType<typeof client.partner_settings.new_relic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
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
        ? getGetPartnerSettingsNewRelicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.partner_settings.new_relic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPartnerSettingsNewRelicKey() {
  return ['partner_settings', '/partner_settings/new_relic', 'PATCH'] as const
}

export function usePatchPartnerSettingsNewRelic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner_settings.new_relic.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.partner_settings.new_relic.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPartnerSettingsNewRelicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.partner_settings.new_relic.$patch> },
      ) => parseResponse(client.partner_settings.new_relic.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScopesKey(args: InferRequestType<typeof client.scopes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['scopes', '/scopes', keyArgs] as const
}

export function useGetScopes<TError = unknown>(
  args: InferRequestType<typeof client.scopes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScopesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.scopes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetScopes<TError = unknown>(
  args: InferRequestType<typeof client.scopes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScopesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.scopes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetScopesRequestsKey(
  args: InferRequestType<typeof client.scopes.requests.$get>,
) {
  return ['scopes', '/scopes/requests', args] as const
}

export function useGetScopesRequests<TError = unknown>(
  args: InferRequestType<typeof client.scopes.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScopesRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scopes.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScopesRequests<TError = unknown>(
  args: InferRequestType<typeof client.scopes.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScopesRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scopes.requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scopes.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteScopesRequestsRequestIdKey() {
  return ['scopes', '/scopes/requests/:request_id', 'DELETE'] as const
}

export function useDeleteScopesRequestsRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scopes.requests)[':request_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scopes.requests)[':request_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScopesRequestsRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.scopes.requests)[':request_id']['$delete']> },
      ) => parseResponse(client.scopes.requests[':request_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchScopesRequestsRequestIdApproveKey() {
  return ['scopes', '/scopes/requests/:request_id/approve', 'PATCH'] as const
}

export function usePatchScopesRequestsRequestIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchScopesRequestsRequestIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>
        },
      ) => parseResponse(client.scopes.requests[':request_id'].approve.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSendersKey(args: InferRequestType<typeof client.senders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['senders', '/senders', keyArgs] as const
}

export function useGetSenders<TError = unknown>(
  args: InferRequestType<typeof client.senders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSendersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.senders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSenders<TError = unknown>(
  args: InferRequestType<typeof client.senders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSendersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.senders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSendersKey() {
  return ['senders', '/senders', 'POST'] as const
}

export function usePostSenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.senders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.senders.$post> }) =>
        parseResponse(client.senders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSendersSenderIdKey(
  args: InferRequestType<(typeof client.senders)[':sender_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['senders', '/senders/:sender_id', keyArgs] as const
}

export function useGetSendersSenderId<TError = unknown>(
  args: InferRequestType<(typeof client.senders)[':sender_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
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
        ? getGetSendersSenderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders[':sender_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSendersSenderId<TError = unknown>(
  args: InferRequestType<(typeof client.senders)[':sender_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
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
        ? getGetSendersSenderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders[':sender_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSendersSenderIdKey() {
  return ['senders', '/senders/:sender_id', 'DELETE'] as const
}

export function useDeleteSendersSenderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders)[':sender_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.senders)[':sender_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSendersSenderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)[':sender_id']['$delete']> },
      ) => parseResponse(client.senders[':sender_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSendersSenderIdKey() {
  return ['senders', '/senders/:sender_id', 'PATCH'] as const
}

export function usePatchSendersSenderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':sender_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.senders)[':sender_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSendersSenderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)[':sender_id']['$patch']> },
      ) => parseResponse(client.senders[':sender_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersSenderIdResendVerificationKey() {
  return ['senders', '/senders/:sender_id/resend_verification', 'POST'] as const
}

export function usePostSendersSenderIdResendVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.senders)[':sender_id']['resend_verification']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersSenderIdResendVerificationKey()
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
            (typeof client.senders)[':sender_id']['resend_verification']['$post']
          >
        },
      ) =>
        parseResponse(client.senders[':sender_id'].resend_verification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSsoCertificatesKey() {
  return ['sso', '/sso/certificates', 'POST'] as const
}

export function usePostSsoCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.certificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sso.certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsoCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sso.certificates.$post> }) =>
        parseResponse(client.sso.certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSsoCertificatesCertIdKey(
  args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>,
) {
  return ['sso', '/sso/certificates/:cert_id', args] as const
}

export function useGetSsoCertificatesCertId<TError = unknown>(
  args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
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
        ? getGetSsoCertificatesCertIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.certificates[':cert_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoCertificatesCertId<TError = unknown>(
  args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
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
        ? getGetSsoCertificatesCertIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.certificates[':cert_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSsoCertificatesCertIdKey() {
  return ['sso', '/sso/certificates/:cert_id', 'DELETE'] as const
}

export function useDeleteSsoCertificatesCertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sso.certificates)[':cert_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSsoCertificatesCertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$delete']> },
      ) => parseResponse(client.sso.certificates[':cert_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSsoCertificatesCertIdKey() {
  return ['sso', '/sso/certificates/:cert_id', 'PATCH'] as const
}

export function usePatchSsoCertificatesCertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sso.certificates)[':cert_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sso.certificates)[':cert_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSsoCertificatesCertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$patch']> },
      ) => parseResponse(client.sso.certificates[':cert_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSsoIntegrationsKey(
  args: InferRequestType<typeof client.sso.integrations.$get>,
) {
  return ['sso', '/sso/integrations', args] as const
}

export function useGetSsoIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.sso.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
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
        ? getGetSsoIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.sso.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
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
        ? getGetSsoIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSsoIntegrationsKey() {
  return ['sso', '/sso/integrations', 'POST'] as const
}

export function usePostSsoIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.integrations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sso.integrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsoIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sso.integrations.$post> }) =>
        parseResponse(client.sso.integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSsoIntegrationsIdKey(
  args: InferRequestType<(typeof client.sso.integrations)[':id']['$get']>,
) {
  return ['sso', '/sso/integrations/:id', args] as const
}

export function useGetSsoIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.sso.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
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
        ? getGetSsoIntegrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.sso.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
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
        ? getGetSsoIntegrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSsoIntegrationsIdKey() {
  return ['sso', '/sso/integrations/:id', 'DELETE'] as const
}

export function useDeleteSsoIntegrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sso.integrations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSsoIntegrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sso.integrations)[':id']['$delete']> },
      ) => parseResponse(client.sso.integrations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSsoIntegrationsIdKey() {
  return ['sso', '/sso/integrations/:id', 'PATCH'] as const
}

export function usePatchSsoIntegrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sso.integrations)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sso.integrations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSsoIntegrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sso.integrations)[':id']['$patch']> },
      ) => parseResponse(client.sso.integrations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSsoIntegrationsIntegrationIdCertificatesKey(
  args: InferRequestType<
    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
  >,
) {
  return ['sso', '/sso/integrations/:integration_id/certificates', args] as const
}

export function useGetSsoIntegrationsIntegrationIdCertificates<TError = unknown>(
  args: InferRequestType<
    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSsoIntegrationsIntegrationIdCertificatesKey(args)
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
                (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
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
          client.sso.integrations[':integration_id'].certificates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoIntegrationsIntegrationIdCertificates<TError = unknown>(
  args: InferRequestType<
    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSsoIntegrationsIntegrationIdCertificatesKey(args)
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
                (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
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
          client.sso.integrations[':integration_id'].certificates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSsoTeammatesKey() {
  return ['sso', '/sso/teammates', 'POST'] as const
}

export function usePostSsoTeammates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.teammates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sso.teammates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsoTeammatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sso.teammates.$post> }) =>
        parseResponse(client.sso.teammates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSsoTeammatesUsernameKey() {
  return ['sso', '/sso/teammates/:username', 'PATCH'] as const
}

export function usePatchSsoTeammatesUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sso.teammates)[':username']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sso.teammates)[':username']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSsoTeammatesUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sso.teammates)[':username']['$patch']> },
      ) => parseResponse(client.sso.teammates[':username'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatsKey(args: InferRequestType<typeof client.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats', keyArgs] as const
}

export function useGetStats<TError = unknown>(
  args: InferRequestType<typeof client.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stats.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStats<TError = unknown>(
  args: InferRequestType<typeof client.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stats.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSubusersKey(args: InferRequestType<typeof client.subusers.$get>) {
  return ['subusers', '/subusers', args] as const
}

export function useGetSubusers<TError = unknown>(
  args: InferRequestType<typeof client.subusers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubusersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.subusers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSubusers<TError = unknown>(
  args: InferRequestType<typeof client.subusers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubusersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.subusers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSubusersKey() {
  return ['subusers', '/subusers', 'POST'] as const
}

export function usePostSubusers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.subusers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubusersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subusers.$post> }) =>
        parseResponse(client.subusers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubusersReputationsKey(
  args: InferRequestType<typeof client.subusers.reputations.$get>,
) {
  return ['subusers', '/subusers/reputations', args] as const
}

export function useGetSubusersReputations<TError = unknown>(
  args: InferRequestType<typeof client.subusers.reputations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>
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
        ? getGetSubusersReputationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers.reputations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubusersReputations<TError = unknown>(
  args: InferRequestType<typeof client.subusers.reputations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>
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
        ? getGetSubusersReputationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.reputations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers.reputations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubusersStatsKey(args: InferRequestType<typeof client.subusers.stats.$get>) {
  return ['subusers', '/subusers/stats', args] as const
}

export function useGetSubusersStats<TError = unknown>(
  args: InferRequestType<typeof client.subusers.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubusersStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubusersStats<TError = unknown>(
  args: InferRequestType<typeof client.subusers.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubusersStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubusersStatsMonthlyKey(
  args: InferRequestType<typeof client.subusers.stats.monthly.$get>,
) {
  return ['subusers', '/subusers/stats/monthly', args] as const
}

export function useGetSubusersStatsMonthly<TError = unknown>(
  args: InferRequestType<typeof client.subusers.stats.monthly.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
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
        ? getGetSubusersStatsMonthlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers.stats.monthly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubusersStatsMonthly<TError = unknown>(
  args: InferRequestType<typeof client.subusers.stats.monthly.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
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
        ? getGetSubusersStatsMonthlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.monthly.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers.stats.monthly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubusersStatsSumsKey(
  args: InferRequestType<typeof client.subusers.stats.sums.$get>,
) {
  return ['subusers', '/subusers/stats/sums', args] as const
}

export function useGetSubusersStatsSums<TError = unknown>(
  args: InferRequestType<typeof client.subusers.stats.sums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>
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
        ? getGetSubusersStatsSumsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers.stats.sums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubusersStatsSums<TError = unknown>(
  args: InferRequestType<typeof client.subusers.stats.sums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>
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
        ? getGetSubusersStatsSumsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subusers.stats.sums.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers.stats.sums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSubusersSubuserNameKey() {
  return ['subusers', '/subusers/:subuser_name', 'DELETE'] as const
}

export function useDeleteSubusersSubuserName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.subusers)[':subuser_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubusersSubuserNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.subusers)[':subuser_name']['$delete']> },
      ) => parseResponse(client.subusers[':subuser_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSubusersSubuserNameKey() {
  return ['subusers', '/subusers/:subuser_name', 'PATCH'] as const
}

export function usePatchSubusersSubuserName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.subusers)[':subuser_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubusersSubuserNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.subusers)[':subuser_name']['$patch']> },
      ) => parseResponse(client.subusers[':subuser_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSubusersSubuserNameIpsKey() {
  return ['subusers', '/subusers/:subuser_name/ips', 'PUT'] as const
}

export function usePutSubusersSubuserNameIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['ips']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subusers)[':subuser_name']['ips']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubusersSubuserNameIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subusers)[':subuser_name']['ips']['$put']> },
      ) => parseResponse(client.subusers[':subuser_name'].ips.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubusersSubuserNameMonitorKey(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>,
) {
  return ['subusers', '/subusers/:subuser_name/monitor', args] as const
}

export function useGetSubusersSubuserNameMonitor<TError = unknown>(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
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
        ? getGetSubusersSubuserNameMonitorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers[':subuser_name'].monitor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubusersSubuserNameMonitor<TError = unknown>(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
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
        ? getGetSubusersSubuserNameMonitorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subusers[':subuser_name'].monitor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSubusersSubuserNameMonitorKey() {
  return ['subusers', '/subusers/:subuser_name/monitor', 'PUT'] as const
}

export function usePutSubusersSubuserNameMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubusersSubuserNameMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$put']> },
      ) => parseResponse(client.subusers[':subuser_name'].monitor.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubusersSubuserNameMonitorKey() {
  return ['subusers', '/subusers/:subuser_name/monitor', 'POST'] as const
}

export function usePostSubusersSubuserNameMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubusersSubuserNameMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$post']> },
      ) => parseResponse(client.subusers[':subuser_name'].monitor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubusersSubuserNameMonitorKey() {
  return ['subusers', '/subusers/:subuser_name/monitor', 'DELETE'] as const
}

export function useDeleteSubusersSubuserNameMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubusersSubuserNameMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>
        },
      ) => parseResponse(client.subusers[':subuser_name'].monitor.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubusersSubuserNameStatsMonthlyKey(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>,
) {
  return ['subusers', '/subusers/:subuser_name/stats/monthly', args] as const
}

export function useGetSubusersSubuserNameStatsMonthly<TError = unknown>(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
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
        ? getGetSubusersSubuserNameStatsMonthlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subusers[':subuser_name'].stats.monthly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubusersSubuserNameStatsMonthly<TError = unknown>(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
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
        ? getGetSubusersSubuserNameStatsMonthlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subusers[':subuser_name'].stats.monthly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSuppressionBlocksKey(
  args: InferRequestType<typeof client.suppression.blocks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/blocks', keyArgs] as const
}

export function useGetSuppressionBlocks<TError = unknown>(
  args: InferRequestType<typeof client.suppression.blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
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
        ? getGetSuppressionBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionBlocks<TError = unknown>(
  args: InferRequestType<typeof client.suppression.blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
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
        ? getGetSuppressionBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionBlocksKey() {
  return ['suppression', '/suppression/blocks', 'DELETE'] as const
}

export function useDeleteSuppressionBlocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.blocks.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.suppression.blocks.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionBlocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suppression.blocks.$delete> },
      ) => parseResponse(client.suppression.blocks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionBlocksEmailKey(
  args: InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/blocks/:email', keyArgs] as const
}

export function useGetSuppressionBlocksEmail<TError = unknown>(
  args: InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
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
        ? getGetSuppressionBlocksEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.blocks[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionBlocksEmail<TError = unknown>(
  args: InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
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
        ? getGetSuppressionBlocksEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.blocks[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionBlocksEmailKey() {
  return ['suppression', '/suppression/blocks/:email', 'DELETE'] as const
}

export function useDeleteSuppressionBlocksEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.blocks)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.suppression.blocks)[':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionBlocksEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.suppression.blocks)[':email']['$delete']> },
      ) => parseResponse(client.suppression.blocks[':email'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionBouncesKey(
  args: InferRequestType<typeof client.suppression.bounces.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/bounces', keyArgs] as const
}

export function useGetSuppressionBounces<TError = unknown>(
  args: InferRequestType<typeof client.suppression.bounces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>
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
        ? getGetSuppressionBouncesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.bounces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionBounces<TError = unknown>(
  args: InferRequestType<typeof client.suppression.bounces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>
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
        ? getGetSuppressionBouncesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.bounces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionBouncesKey() {
  return ['suppression', '/suppression/bounces', 'DELETE'] as const
}

export function useDeleteSuppressionBounces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.bounces.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.suppression.bounces.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionBouncesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suppression.bounces.$delete> },
      ) => parseResponse(client.suppression.bounces.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionBouncesEmailKey(
  args: InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/bounces/:email', keyArgs] as const
}

export function useGetSuppressionBouncesEmail<TError = unknown>(
  args: InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
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
        ? getGetSuppressionBouncesEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.bounces[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionBouncesEmail<TError = unknown>(
  args: InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
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
        ? getGetSuppressionBouncesEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.bounces[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionBouncesEmailKey() {
  return ['suppression', '/suppression/bounces/:email', 'DELETE'] as const
}

export function useDeleteSuppressionBouncesEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.bounces)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.suppression.bounces)[':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionBouncesEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.suppression.bounces)[':email']['$delete']> },
      ) => parseResponse(client.suppression.bounces[':email'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionInvalidEmailsKey(
  args: InferRequestType<typeof client.suppression.invalid_emails.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/invalid_emails', keyArgs] as const
}

export function useGetSuppressionInvalidEmails<TError = unknown>(
  args: InferRequestType<typeof client.suppression.invalid_emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
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
        ? getGetSuppressionInvalidEmailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.invalid_emails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionInvalidEmails<TError = unknown>(
  args: InferRequestType<typeof client.suppression.invalid_emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
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
        ? getGetSuppressionInvalidEmailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.invalid_emails.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.invalid_emails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionInvalidEmailsKey() {
  return ['suppression', '/suppression/invalid_emails', 'DELETE'] as const
}

export function useDeleteSuppressionInvalidEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.suppression.invalid_emails.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.suppression.invalid_emails.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionInvalidEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suppression.invalid_emails.$delete> },
      ) => parseResponse(client.suppression.invalid_emails.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionInvalidEmailsEmailKey(
  args: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/invalid_emails/:email', keyArgs] as const
}

export function useGetSuppressionInvalidEmailsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
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
        ? getGetSuppressionInvalidEmailsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.suppression.invalid_emails[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionInvalidEmailsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
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
        ? getGetSuppressionInvalidEmailsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.suppression.invalid_emails[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionInvalidEmailsEmailKey() {
  return ['suppression', '/suppression/invalid_emails/:email', 'DELETE'] as const
}

export function useDeleteSuppressionInvalidEmailsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.invalid_emails)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionInvalidEmailsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$delete']>
        },
      ) => parseResponse(client.suppression.invalid_emails[':email'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionSpamReportsKey(
  args: InferRequestType<typeof client.suppression.spam_reports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/spam_reports', keyArgs] as const
}

export function useGetSuppressionSpamReports<TError = unknown>(
  args: InferRequestType<typeof client.suppression.spam_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
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
        ? getGetSuppressionSpamReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.spam_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionSpamReports<TError = unknown>(
  args: InferRequestType<typeof client.suppression.spam_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
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
        ? getGetSuppressionSpamReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.spam_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionSpamReportsKey() {
  return ['suppression', '/suppression/spam_reports', 'DELETE'] as const
}

export function useDeleteSuppressionSpamReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.spam_reports.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.suppression.spam_reports.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionSpamReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suppression.spam_reports.$delete> },
      ) => parseResponse(client.suppression.spam_reports.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionSpamReportsEmailKey(
  args: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/spam_reports/:email', keyArgs] as const
}

export function useGetSuppressionSpamReportsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
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
        ? getGetSuppressionSpamReportsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.suppression.spam_reports[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionSpamReportsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
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
        ? getGetSuppressionSpamReportsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.suppression.spam_reports[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionSpamReportsEmailKey() {
  return ['suppression', '/suppression/spam_reports/:email', 'DELETE'] as const
}

export function useDeleteSuppressionSpamReportsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppression.spam_reports)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.suppression.spam_reports)[':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionSpamReportsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$delete']> },
      ) => parseResponse(client.suppression.spam_reports[':email'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionUnsubscribesKey(
  args: InferRequestType<typeof client.suppression.unsubscribes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suppression', '/suppression/unsubscribes', keyArgs] as const
}

export function useGetSuppressionUnsubscribes<TError = unknown>(
  args: InferRequestType<typeof client.suppression.unsubscribes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
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
        ? getGetSuppressionUnsubscribesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.unsubscribes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionUnsubscribes<TError = unknown>(
  args: InferRequestType<typeof client.suppression.unsubscribes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
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
        ? getGetSuppressionUnsubscribesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppression.unsubscribes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppression.unsubscribes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeammatesKey(args: InferRequestType<typeof client.teammates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['teammates', '/teammates', keyArgs] as const
}

export function useGetTeammates<TError = unknown>(
  args: InferRequestType<typeof client.teammates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeammatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teammates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeammates<TError = unknown>(
  args: InferRequestType<typeof client.teammates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeammatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teammates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeammatesKey() {
  return ['teammates', '/teammates', 'POST'] as const
}

export function usePostTeammates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teammates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeammatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teammates.$post> }) =>
        parseResponse(client.teammates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeammatesPendingKey(
  args: InferRequestType<typeof client.teammates.pending.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['teammates', '/teammates/pending', keyArgs] as const
}

export function useGetTeammatesPending<TError = unknown>(
  args: InferRequestType<typeof client.teammates.pending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
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
        ? getGetTeammatesPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teammates.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeammatesPending<TError = unknown>(
  args: InferRequestType<typeof client.teammates.pending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
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
        ? getGetTeammatesPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teammates.pending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teammates.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTeammatesPendingTokenKey() {
  return ['teammates', '/teammates/pending/:token', 'DELETE'] as const
}

export function useDeleteTeammatesPendingToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teammates.pending)[':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teammates.pending)[':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeammatesPendingTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teammates.pending)[':token']['$delete']> },
      ) => parseResponse(client.teammates.pending[':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeammatesPendingTokenResendKey() {
  return ['teammates', '/teammates/pending/:token/resend', 'POST'] as const
}

export function usePostTeammatesPendingTokenResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teammates.pending)[':token']['resend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teammates.pending)[':token']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeammatesPendingTokenResendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.teammates.pending)[':token']['resend']['$post']>
        },
      ) => parseResponse(client.teammates.pending[':token'].resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeammatesUsernameKey(
  args: InferRequestType<(typeof client.teammates)[':username']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teammates', '/teammates/:username', keyArgs] as const
}

export function useGetTeammatesUsername<TError = unknown>(
  args: InferRequestType<(typeof client.teammates)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
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
        ? getGetTeammatesUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teammates[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeammatesUsername<TError = unknown>(
  args: InferRequestType<(typeof client.teammates)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
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
        ? getGetTeammatesUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teammates[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTeammatesUsernameKey() {
  return ['teammates', '/teammates/:username', 'DELETE'] as const
}

export function useDeleteTeammatesUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teammates)[':username']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teammates)[':username']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeammatesUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teammates)[':username']['$delete']> },
      ) => parseResponse(client.teammates[':username'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTeammatesUsernameKey() {
  return ['teammates', '/teammates/:username', 'PATCH'] as const
}

export function usePatchTeammatesUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teammates)[':username']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teammates)[':username']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTeammatesUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teammates)[':username']['$patch']> },
      ) => parseResponse(client.teammates[':username'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.templates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates', keyArgs] as const
}

export function useGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function usePostTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.$post> }) =>
        parseResponse(client.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/:template_id', keyArgs] as const
}

export function useGetTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
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
        ? getGetTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
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
        ? getGetTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesTemplateIdKey() {
  return ['templates', '/templates/:template_id', 'POST'] as const
}

export function usePostTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':template_id']['$post']> },
      ) => parseResponse(client.templates[':template_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTemplatesTemplateIdKey() {
  return ['templates', '/templates/:template_id', 'DELETE'] as const
}

export function useDeleteTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':template_id']['$delete']> },
      ) => parseResponse(client.templates[':template_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTemplatesTemplateIdKey() {
  return ['templates', '/templates/:template_id', 'PATCH'] as const
}

export function usePatchTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':template_id']['$patch']> },
      ) => parseResponse(client.templates[':template_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTemplateIdVersionsKey() {
  return ['templates', '/templates/:template_id/versions', 'POST'] as const
}

export function usePostTemplatesTemplateIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.templates)[':template_id']['versions']['$post']>
        },
      ) => parseResponse(client.templates[':template_id'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateIdVersionsVersionIdKey(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/:template_id/versions/:version_id', keyArgs] as const
}

export function useGetTemplatesTemplateIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTemplatesTemplateIdVersionsVersionIdKey(args)
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
                (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
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
          client.templates[':template_id'].versions[':version_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTemplatesTemplateIdVersionsVersionIdKey(args)
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
                (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
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
          client.templates[':template_id'].versions[':version_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteTemplatesTemplateIdVersionsVersionIdKey() {
  return ['templates', '/templates/:template_id/versions/:version_id', 'DELETE'] as const
}

export function useDeleteTemplatesTemplateIdVersionsVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.templates)[':template_id']['versions'][':version_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesTemplateIdVersionsVersionIdKey()
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
            (typeof client.templates)[':template_id']['versions'][':version_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.templates[':template_id'].versions[':version_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTemplatesTemplateIdVersionsVersionIdKey() {
  return ['templates', '/templates/:template_id/versions/:version_id', 'PATCH'] as const
}

export function usePatchTemplatesTemplateIdVersionsVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['versions'][':version_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTemplatesTemplateIdVersionsVersionIdKey()
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
            (typeof client.templates)[':template_id']['versions'][':version_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.templates[':template_id'].versions[':version_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTemplateIdVersionsVersionIdActivateKey() {
  return ['templates', '/templates/:template_id/versions/:version_id/activate', 'POST'] as const
}

export function usePostTemplatesTemplateIdVersionsVersionIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.templates)[':template_id']['versions'][':version_id']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateIdVersionsVersionIdActivateKey()
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
            (typeof client.templates)[':template_id']['versions'][':version_id']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.templates[':template_id'].versions[':version_id'].activate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTrackingSettingsKey(
  args: InferRequestType<typeof client.tracking_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings', keyArgs] as const
}

export function useGetTrackingSettings<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
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
        ? getGetTrackingSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingSettings<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
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
        ? getGetTrackingSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrackingSettingsClickKey(
  args: InferRequestType<typeof client.tracking_settings.click.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings/click', keyArgs] as const
}

export function useGetTrackingSettingsClick<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.click.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
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
        ? getGetTrackingSettingsClickKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_settings.click.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingSettingsClick<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.click.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
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
        ? getGetTrackingSettingsClickKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_settings.click.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTrackingSettingsClickKey() {
  return ['tracking_settings', '/tracking_settings/click', 'PATCH'] as const
}

export function usePatchTrackingSettingsClick<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.click.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tracking_settings.click.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTrackingSettingsClickKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tracking_settings.click.$patch> },
      ) => parseResponse(client.tracking_settings.click.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrackingSettingsGoogleAnalyticsKey(
  args: InferRequestType<typeof client.tracking_settings.google_analytics.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings/google_analytics', keyArgs] as const
}

export function useGetTrackingSettingsGoogleAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.google_analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
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
        ? getGetTrackingSettingsGoogleAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tracking_settings.google_analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingSettingsGoogleAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.google_analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
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
        ? getGetTrackingSettingsGoogleAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tracking_settings.google_analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTrackingSettingsGoogleAnalyticsKey() {
  return ['tracking_settings', '/tracking_settings/google_analytics', 'PATCH'] as const
}

export function usePatchTrackingSettingsGoogleAnalytics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.tracking_settings.google_analytics.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tracking_settings.google_analytics.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTrackingSettingsGoogleAnalyticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tracking_settings.google_analytics.$patch> },
      ) => parseResponse(client.tracking_settings.google_analytics.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrackingSettingsOpenKey(
  args: InferRequestType<typeof client.tracking_settings.open.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings/open', keyArgs] as const
}

export function useGetTrackingSettingsOpen<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.open.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
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
        ? getGetTrackingSettingsOpenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_settings.open.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingSettingsOpen<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.open.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
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
        ? getGetTrackingSettingsOpenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_settings.open.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTrackingSettingsOpenKey() {
  return ['tracking_settings', '/tracking_settings/open', 'PATCH'] as const
}

export function usePatchTrackingSettingsOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking_settings.open.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tracking_settings.open.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTrackingSettingsOpenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tracking_settings.open.$patch> },
      ) => parseResponse(client.tracking_settings.open.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrackingSettingsSubscriptionKey(
  args: InferRequestType<typeof client.tracking_settings.subscription.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking_settings', '/tracking_settings/subscription', keyArgs] as const
}

export function useGetTrackingSettingsSubscription<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.subscription.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>
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
        ? getGetTrackingSettingsSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_settings.subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingSettingsSubscription<TError = unknown>(
  args: InferRequestType<typeof client.tracking_settings.subscription.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>
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
        ? getGetTrackingSettingsSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.tracking_settings.subscription.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_settings.subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTrackingSettingsSubscriptionKey() {
  return ['tracking_settings', '/tracking_settings/subscription', 'PATCH'] as const
}

export function usePatchTrackingSettingsSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.tracking_settings.subscription.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tracking_settings.subscription.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTrackingSettingsSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tracking_settings.subscription.$patch> },
      ) => parseResponse(client.tracking_settings.subscription.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserAccountKey(args: InferRequestType<typeof client.user.account.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/account', keyArgs] as const
}

export function useGetUserAccount<TError = unknown>(
  args: InferRequestType<typeof client.user.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccount<TError = unknown>(
  args: InferRequestType<typeof client.user.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserCreditsKey(args: InferRequestType<typeof client.user.credits.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/credits', keyArgs] as const
}

export function useGetUserCredits<TError = unknown>(
  args: InferRequestType<typeof client.user.credits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserCreditsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserCredits<TError = unknown>(
  args: InferRequestType<typeof client.user.credits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserCreditsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserEmailKey(args: InferRequestType<typeof client.user.email.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/email', keyArgs] as const
}

export function useGetUserEmail<TError = unknown>(
  args: InferRequestType<typeof client.user.email.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserEmailKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserEmail<TError = unknown>(
  args: InferRequestType<typeof client.user.email.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserEmailKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserEmailKey() {
  return ['user', '/user/email', 'PUT'] as const
}

export function usePutUserEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.email.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.email.$put> }) =>
        parseResponse(client.user.email.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUserPasswordKey() {
  return ['user', '/user/password', 'PUT'] as const
}

export function usePutUserPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.password.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.password.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.password.$put> }) =>
        parseResponse(client.user.password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserProfileKey(args: InferRequestType<typeof client.user.profile.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/profile', keyArgs] as const
}

export function useGetUserProfile<TError = unknown>(
  args: InferRequestType<typeof client.user.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserProfile<TError = unknown>(
  args: InferRequestType<typeof client.user.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUserProfileKey() {
  return ['user', '/user/profile', 'PATCH'] as const
}

export function usePatchUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.profile.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.profile.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.profile.$patch> }) =>
        parseResponse(client.user.profile.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserScheduledSendsKey(
  args: InferRequestType<typeof client.user.scheduled_sends.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/scheduled_sends', keyArgs] as const
}

export function useGetUserScheduledSends<TError = unknown>(
  args: InferRequestType<typeof client.user.scheduled_sends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>
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
        ? getGetUserScheduledSendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.scheduled_sends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserScheduledSends<TError = unknown>(
  args: InferRequestType<typeof client.user.scheduled_sends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>
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
        ? getGetUserScheduledSendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.scheduled_sends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserScheduledSendsKey() {
  return ['user', '/user/scheduled_sends', 'POST'] as const
}

export function usePostUserScheduledSends<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.scheduled_sends.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.scheduled_sends.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserScheduledSendsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.scheduled_sends.$post> },
      ) => parseResponse(client.user.scheduled_sends.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserScheduledSendsBatchIdKey(
  args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/scheduled_sends/:batch_id', keyArgs] as const
}

export function useGetUserScheduledSendsBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
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
        ? getGetUserScheduledSendsBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.scheduled_sends[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserScheduledSendsBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
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
        ? getGetUserScheduledSendsBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.scheduled_sends[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserScheduledSendsBatchIdKey() {
  return ['user', '/user/scheduled_sends/:batch_id', 'DELETE'] as const
}

export function useDeleteUserScheduledSendsBatchId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserScheduledSendsBatchIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']> },
      ) => parseResponse(client.user.scheduled_sends[':batch_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserScheduledSendsBatchIdKey() {
  return ['user', '/user/scheduled_sends/:batch_id', 'PATCH'] as const
}

export function usePatchUserScheduledSendsBatchId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserScheduledSendsBatchIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']> },
      ) => parseResponse(client.user.scheduled_sends[':batch_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserSettingsEnforcedTlsKey(
  args: InferRequestType<typeof client.user.settings.enforced_tls.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/settings/enforced_tls', keyArgs] as const
}

export function useGetUserSettingsEnforcedTls<TError = unknown>(
  args: InferRequestType<typeof client.user.settings.enforced_tls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
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
        ? getGetUserSettingsEnforcedTlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.settings.enforced_tls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserSettingsEnforcedTls<TError = unknown>(
  args: InferRequestType<typeof client.user.settings.enforced_tls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
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
        ? getGetUserSettingsEnforcedTlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.settings.enforced_tls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUserSettingsEnforcedTlsKey() {
  return ['user', '/user/settings/enforced_tls', 'PATCH'] as const
}

export function usePatchUserSettingsEnforcedTls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.settings.enforced_tls.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.settings.enforced_tls.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserSettingsEnforcedTlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.settings.enforced_tls.$patch> },
      ) => parseResponse(client.user.settings.enforced_tls.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUsernameKey(args: InferRequestType<typeof client.user.username.$get>) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/username', keyArgs] as const
}

export function useGetUserUsername<TError = unknown>(
  args: InferRequestType<typeof client.user.username.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserUsernameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.username.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUsername<TError = unknown>(
  args: InferRequestType<typeof client.user.username.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserUsernameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.username.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserUsernameKey() {
  return ['user', '/user/username', 'PUT'] as const
}

export function usePutUserUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.username.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.username.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.username.$put> }) =>
        parseResponse(client.user.username.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserWebhooksEventSettingsKey(
  args: InferRequestType<typeof client.user.webhooks.event.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/event/settings', keyArgs] as const
}

export function useGetUserWebhooksEventSettings<TError = unknown>(
  args: InferRequestType<typeof client.user.webhooks.event.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
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
        ? getGetUserWebhooksEventSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.webhooks.event.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserWebhooksEventSettings<TError = unknown>(
  args: InferRequestType<typeof client.user.webhooks.event.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
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
        ? getGetUserWebhooksEventSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.webhooks.event.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUserWebhooksEventSettingsKey() {
  return ['user', '/user/webhooks/event/settings', 'PATCH'] as const
}

export function usePatchUserWebhooksEventSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.settings.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.webhooks.event.settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserWebhooksEventSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.webhooks.event.settings.$patch> },
      ) => parseResponse(client.user.webhooks.event.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserWebhooksEventSettingsSignedKey(
  args: InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/event/settings/signed', keyArgs] as const
}

export function useGetUserWebhooksEventSettingsSigned<TError = unknown>(
  args: InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
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
        ? getGetUserWebhooksEventSettingsSignedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.webhooks.event.settings.signed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserWebhooksEventSettingsSigned<TError = unknown>(
  args: InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
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
        ? getGetUserWebhooksEventSettingsSignedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.webhooks.event.settings.signed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUserWebhooksEventSettingsSignedKey() {
  return ['user', '/user/webhooks/event/settings/signed', 'PATCH'] as const
}

export function usePatchUserWebhooksEventSettingsSigned<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user.webhooks.event.settings.signed.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.webhooks.event.settings.signed.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserWebhooksEventSettingsSignedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.user.webhooks.event.settings.signed.$patch> },
      ) => parseResponse(client.user.webhooks.event.settings.signed.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserWebhooksEventTestKey() {
  return ['user', '/user/webhooks/event/test', 'POST'] as const
}

export function usePostUserWebhooksEventTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.event.test.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.user.webhooks.event.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserWebhooksEventTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.webhooks.event.test.$post> },
      ) => parseResponse(client.user.webhooks.event.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserWebhooksParseSettingsKey(
  args: InferRequestType<typeof client.user.webhooks.parse.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/parse/settings', keyArgs] as const
}

export function useGetUserWebhooksParseSettings<TError = unknown>(
  args: InferRequestType<typeof client.user.webhooks.parse.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
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
        ? getGetUserWebhooksParseSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.webhooks.parse.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserWebhooksParseSettings<TError = unknown>(
  args: InferRequestType<typeof client.user.webhooks.parse.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
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
        ? getGetUserWebhooksParseSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.webhooks.parse.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserWebhooksParseSettingsKey() {
  return ['user', '/user/webhooks/parse/settings', 'POST'] as const
}

export function usePostUserWebhooksParseSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.settings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.webhooks.parse.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserWebhooksParseSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.webhooks.parse.settings.$post> },
      ) => parseResponse(client.user.webhooks.parse.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserWebhooksParseSettingsHostnameKey(
  args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/parse/settings/:hostname', keyArgs] as const
}

export function useGetUserWebhooksParseSettingsHostname<TError = unknown>(
  args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>>
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
        ? getGetUserWebhooksParseSettingsHostnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.webhooks.parse.settings[':hostname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserWebhooksParseSettingsHostname<TError = unknown>(
  args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>>
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
        ? getGetUserWebhooksParseSettingsHostnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.webhooks.parse.settings[':hostname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserWebhooksParseSettingsHostnameKey() {
  return ['user', '/user/webhooks/parse/settings/:hostname', 'DELETE'] as const
}

export function useDeleteUserWebhooksParseSettingsHostname<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserWebhooksParseSettingsHostnameKey()
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
            (typeof client.user.webhooks.parse.settings)[':hostname']['$delete']
          >
        },
      ) =>
        parseResponse(client.user.webhooks.parse.settings[':hostname'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserWebhooksParseSettingsHostnameKey() {
  return ['user', '/user/webhooks/parse/settings/:hostname', 'PATCH'] as const
}

export function usePatchUserWebhooksParseSettingsHostname<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserWebhooksParseSettingsHostnameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>
        },
      ) =>
        parseResponse(client.user.webhooks.parse.settings[':hostname'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserWebhooksParseStatsKey(
  args: InferRequestType<typeof client.user.webhooks.parse.stats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/webhooks/parse/stats', keyArgs] as const
}

export function useGetUserWebhooksParseStats<TError = unknown>(
  args: InferRequestType<typeof client.user.webhooks.parse.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
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
        ? getGetUserWebhooksParseStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.webhooks.parse.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserWebhooksParseStats<TError = unknown>(
  args: InferRequestType<typeof client.user.webhooks.parse.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
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
        ? getGetUserWebhooksParseStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.webhooks.parse.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.webhooks.parse.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostValidationsEmailKey() {
  return ['validations', '/validations/email', 'POST'] as const
}

export function usePostValidationsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validations.email.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.validations.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidationsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.validations.email.$post> }) =>
        parseResponse(client.validations.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVerifiedSendersKey(
  args: InferRequestType<typeof client.verified_senders.$get>,
) {
  return ['verified_senders', '/verified_senders', args] as const
}

export function useGetVerifiedSenders<TError = unknown>(
  args: InferRequestType<typeof client.verified_senders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
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
        ? getGetVerifiedSendersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verified_senders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerifiedSenders<TError = unknown>(
  args: InferRequestType<typeof client.verified_senders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
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
        ? getGetVerifiedSendersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verified_senders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVerifiedSendersKey() {
  return ['verified_senders', '/verified_senders', 'POST'] as const
}

export function usePostVerifiedSenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.verified_senders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerifiedSendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.verified_senders.$post> }) =>
        parseResponse(client.verified_senders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVerifiedSendersDomainsKey() {
  return ['verified_senders', '/verified_senders/domains'] as const
}

export function useGetVerifiedSendersDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
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
        ? getGetVerifiedSendersDomainsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verified_senders.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerifiedSendersDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
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
        ? getGetVerifiedSendersDomainsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.verified_senders.domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verified_senders.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVerifiedSendersResendIdKey() {
  return ['verified_senders', '/verified_senders/resend/:id', 'POST'] as const
}

export function usePostVerifiedSendersResendId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verified_senders.resend)[':id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.verified_senders.resend)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerifiedSendersResendIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.verified_senders.resend)[':id']['$post']> },
      ) => parseResponse(client.verified_senders.resend[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVerifiedSendersStepsCompletedKey() {
  return ['verified_senders', '/verified_senders/steps_completed'] as const
}

export function useGetVerifiedSendersStepsCompleted<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>
        >
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
        ? getGetVerifiedSendersStepsCompletedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.verified_senders.steps_completed.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerifiedSendersStepsCompleted<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>
        >
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
        ? getGetVerifiedSendersStepsCompletedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.verified_senders.steps_completed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.verified_senders.steps_completed.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVerifiedSendersVerifyTokenKey(
  args: InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>,
) {
  return ['verified_senders', '/verified_senders/verify/:token', args] as const
}

export function useGetVerifiedSendersVerifyToken<TError = unknown>(
  args: InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
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
        ? getGetVerifiedSendersVerifyTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verified_senders.verify[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerifiedSendersVerifyToken<TError = unknown>(
  args: InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
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
        ? getGetVerifiedSendersVerifyTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verified_senders.verify)[':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verified_senders.verify[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVerifiedSendersIdKey() {
  return ['verified_senders', '/verified_senders/:id', 'DELETE'] as const
}

export function useDeleteVerifiedSendersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verified_senders)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.verified_senders)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVerifiedSendersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.verified_senders)[':id']['$delete']> },
      ) => parseResponse(client.verified_senders[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVerifiedSendersIdKey() {
  return ['verified_senders', '/verified_senders/:id', 'PATCH'] as const
}

export function usePatchVerifiedSendersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.verified_senders)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.verified_senders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVerifiedSendersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.verified_senders)[':id']['$patch']> },
      ) => parseResponse(client.verified_senders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhitelabelDnsEmailKey() {
  return ['whitelabel', '/whitelabel/dns/email', 'POST'] as const
}

export function usePostWhitelabelDnsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.dns.email.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.whitelabel.dns.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelDnsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.whitelabel.dns.email.$post> },
      ) => parseResponse(client.whitelabel.dns.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhitelabelDomainsKey(
  args: InferRequestType<typeof client.whitelabel.domains.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/domains', keyArgs] as const
}

export function useGetWhitelabelDomains<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
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
        ? getGetWhitelabelDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelDomains<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
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
        ? getGetWhitelabelDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhitelabelDomainsKey() {
  return ['whitelabel', '/whitelabel/domains', 'POST'] as const
}

export function usePostWhitelabelDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.whitelabel.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whitelabel.domains.$post> }) =>
        parseResponse(client.whitelabel.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhitelabelDomainsDefaultKey(
  args: InferRequestType<typeof client.whitelabel.domains.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/domains/default', keyArgs] as const
}

export function useGetWhitelabelDomainsDefault<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.domains.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
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
        ? getGetWhitelabelDomainsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.domains.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelDomainsDefault<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.domains.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
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
        ? getGetWhitelabelDomainsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.domains.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWhitelabelDomainsSubuserKey(
  args: InferRequestType<typeof client.whitelabel.domains.subuser.$get>,
) {
  return ['whitelabel', '/whitelabel/domains/subuser', args] as const
}

export function useGetWhitelabelDomainsSubuser<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.domains.subuser.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
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
        ? getGetWhitelabelDomainsSubuserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.domains.subuser.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelDomainsSubuser<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.domains.subuser.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
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
        ? getGetWhitelabelDomainsSubuserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.domains.subuser.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWhitelabelDomainsSubuserKey() {
  return ['whitelabel', '/whitelabel/domains/subuser', 'DELETE'] as const
}

export function useDeleteWhitelabelDomainsSubuser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.whitelabel.domains.subuser.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.whitelabel.domains.subuser.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhitelabelDomainsSubuserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.whitelabel.domains.subuser.$delete> },
      ) => parseResponse(client.whitelabel.domains.subuser.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhitelabelDomainsDomainIdKey(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/domains/:domain_id', keyArgs] as const
}

export function useGetWhitelabelDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
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
        ? getGetWhitelabelDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.domains[':domain_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
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
        ? getGetWhitelabelDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.domains[':domain_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWhitelabelDomainsDomainIdKey() {
  return ['whitelabel', '/whitelabel/domains/:domain_id', 'DELETE'] as const
}

export function useDeleteWhitelabelDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhitelabelDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$delete']> },
      ) => parseResponse(client.whitelabel.domains[':domain_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWhitelabelDomainsDomainIdKey() {
  return ['whitelabel', '/whitelabel/domains/:domain_id', 'PATCH'] as const
}

export function usePatchWhitelabelDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWhitelabelDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$patch']> },
      ) => parseResponse(client.whitelabel.domains[':domain_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhitelabelDomainsDomainIdSubuserKey() {
  return ['whitelabel', '/whitelabel/domains/:domain_id/subuser', 'POST'] as const
}

export function usePostWhitelabelDomainsDomainIdSubuser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelDomainsDomainIdSubuserKey()
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
            (typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']
          >
        },
      ) => parseResponse(client.whitelabel.domains[':domain_id'].subuser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhitelabelDomainsIdIpsKey() {
  return ['whitelabel', '/whitelabel/domains/:id/ips', 'POST'] as const
}

export function usePostWhitelabelDomainsIdIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':id']['ips']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.domains)[':id']['ips']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelDomainsIdIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whitelabel.domains)[':id']['ips']['$post']> },
      ) => parseResponse(client.whitelabel.domains[':id'].ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWhitelabelDomainsIdIpsIpKey() {
  return ['whitelabel', '/whitelabel/domains/:id/ips/:ip', 'DELETE'] as const
}

export function useDeleteWhitelabelDomainsIdIpsIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhitelabelDomainsIdIpsIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>
        },
      ) => parseResponse(client.whitelabel.domains[':id'].ips[':ip'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhitelabelDomainsIdValidateKey() {
  return ['whitelabel', '/whitelabel/domains/:id/validate', 'POST'] as const
}

export function usePostWhitelabelDomainsIdValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelDomainsIdValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>
        },
      ) => parseResponse(client.whitelabel.domains[':id'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhitelabelIpsKey(args: InferRequestType<typeof client.whitelabel.ips.$get>) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/ips', keyArgs] as const
}

export function useGetWhitelabelIps<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWhitelabelIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelIps<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWhitelabelIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhitelabelIpsKey() {
  return ['whitelabel', '/whitelabel/ips', 'POST'] as const
}

export function usePostWhitelabelIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.ips.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.whitelabel.ips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whitelabel.ips.$post> }) =>
        parseResponse(client.whitelabel.ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhitelabelIpsIdKey(
  args: InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/ips/:id', keyArgs] as const
}

export function useGetWhitelabelIpsId<TError = unknown>(
  args: InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
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
        ? getGetWhitelabelIpsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.ips[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelIpsId<TError = unknown>(
  args: InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
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
        ? getGetWhitelabelIpsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.ips[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWhitelabelIpsIdKey() {
  return ['whitelabel', '/whitelabel/ips/:id', 'DELETE'] as const
}

export function useDeleteWhitelabelIpsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.ips)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhitelabelIpsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.whitelabel.ips)[':id']['$delete']> },
      ) => parseResponse(client.whitelabel.ips[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhitelabelIpsIdValidateKey() {
  return ['whitelabel', '/whitelabel/ips/:id/validate', 'POST'] as const
}

export function usePostWhitelabelIpsIdValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.ips)[':id']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.ips)[':id']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelIpsIdValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whitelabel.ips)[':id']['validate']['$post']> },
      ) => parseResponse(client.whitelabel.ips[':id'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhitelabelLinksKey(
  args: InferRequestType<typeof client.whitelabel.links.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/links', keyArgs] as const
}

export function useGetWhitelabelLinks<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
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
        ? getGetWhitelabelLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelLinks<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
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
        ? getGetWhitelabelLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhitelabelLinksKey() {
  return ['whitelabel', '/whitelabel/links', 'POST'] as const
}

export function usePostWhitelabelLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.whitelabel.links.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whitelabel.links.$post> }) =>
        parseResponse(client.whitelabel.links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhitelabelLinksDefaultKey(
  args: InferRequestType<typeof client.whitelabel.links.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/links/default', keyArgs] as const
}

export function useGetWhitelabelLinksDefault<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.links.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
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
        ? getGetWhitelabelLinksDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.links.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelLinksDefault<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.links.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
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
        ? getGetWhitelabelLinksDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.links.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWhitelabelLinksSubuserKey(
  args: InferRequestType<typeof client.whitelabel.links.subuser.$get>,
) {
  return ['whitelabel', '/whitelabel/links/subuser', args] as const
}

export function useGetWhitelabelLinksSubuser<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.links.subuser.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
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
        ? getGetWhitelabelLinksSubuserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.links.subuser.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelLinksSubuser<TError = unknown>(
  args: InferRequestType<typeof client.whitelabel.links.subuser.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
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
        ? getGetWhitelabelLinksSubuserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.links.subuser.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWhitelabelLinksSubuserKey() {
  return ['whitelabel', '/whitelabel/links/subuser', 'DELETE'] as const
}

export function useDeleteWhitelabelLinksSubuser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whitelabel.links.subuser.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.whitelabel.links.subuser.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhitelabelLinksSubuserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.whitelabel.links.subuser.$delete> },
      ) => parseResponse(client.whitelabel.links.subuser.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhitelabelLinksIdKey(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['whitelabel', '/whitelabel/links/:id', keyArgs] as const
}

export function useGetWhitelabelLinksId<TError = unknown>(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
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
        ? getGetWhitelabelLinksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.links[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhitelabelLinksId<TError = unknown>(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
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
        ? getGetWhitelabelLinksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whitelabel.links[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWhitelabelLinksIdKey() {
  return ['whitelabel', '/whitelabel/links/:id', 'DELETE'] as const
}

export function useDeleteWhitelabelLinksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.links)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhitelabelLinksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.whitelabel.links)[':id']['$delete']> },
      ) => parseResponse(client.whitelabel.links[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWhitelabelLinksIdKey() {
  return ['whitelabel', '/whitelabel/links/:id', 'PATCH'] as const
}

export function usePatchWhitelabelLinksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.links)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWhitelabelLinksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.whitelabel.links)[':id']['$patch']> },
      ) => parseResponse(client.whitelabel.links[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhitelabelLinksIdValidateKey() {
  return ['whitelabel', '/whitelabel/links/:id/validate', 'POST'] as const
}

export function usePostWhitelabelLinksIdValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.links)[':id']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.links)[':id']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelLinksIdValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whitelabel.links)[':id']['validate']['$post']> },
      ) => parseResponse(client.whitelabel.links[':id'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhitelabelLinksLinkIdSubuserKey() {
  return ['whitelabel', '/whitelabel/links/:link_id/subuser', 'POST'] as const
}

export function usePostWhitelabelLinksLinkIdSubuser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhitelabelLinksLinkIdSubuserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>
        },
      ) => parseResponse(client.whitelabel.links[':link_id'].subuser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
