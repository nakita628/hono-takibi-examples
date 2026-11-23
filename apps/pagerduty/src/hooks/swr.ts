import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAbilitiesKey() {
  return ['abilities'] as const
}

export function getAddonsKey() {
  return ['addons'] as const
}

export function getAlertGroupingSettingsKey() {
  return ['alert_grouping_settings'] as const
}

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAuditKey() {
  return ['audit'] as const
}

export function getAutomationActionsKey() {
  return ['automation_actions'] as const
}

export function getBusinessServicesKey() {
  return ['business_services'] as const
}

export function getChangeEventsKey() {
  return ['change_events'] as const
}

export function getEnrichmentKey() {
  return ['enrichment'] as const
}

export function getEscalationPoliciesKey() {
  return ['escalation_policies'] as const
}

export function getEventOrchestrationsKey() {
  return ['event_orchestrations'] as const
}

export function getExtensionSchemasKey() {
  return ['extension_schemas'] as const
}

export function getExtensionsKey() {
  return ['extensions'] as const
}

export function getIncidentWorkflowsKey() {
  return ['incident_workflows'] as const
}

export function getIncidentsKey() {
  return ['incidents'] as const
}

export function getIpAllowListsKey() {
  return ['ip_allow_lists'] as const
}

export function getLicenseAllocationsKey() {
  return ['license_allocations'] as const
}

export function getLicensesKey() {
  return ['licenses'] as const
}

export function getLogEntriesKey() {
  return ['log_entries'] as const
}

export function getMaintenanceWindowsKey() {
  return ['maintenance_windows'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOauthDelegationsKey() {
  return ['oauth_delegations'] as const
}

export function getOncallsKey() {
  return ['oncalls'] as const
}

export function getPausedIncidentReportsKey() {
  return ['paused_incident_reports'] as const
}

export function getPrioritiesKey() {
  return ['priorities'] as const
}

export function getRecommendationsKey() {
  return ['recommendations'] as const
}

export function getRulesetsKey() {
  return ['rulesets'] as const
}

export function getSchedulesKey() {
  return ['schedules'] as const
}

export function getServiceDependenciesKey() {
  return ['service_dependencies'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getSessionConfigurationsKey() {
  return ['session_configurations'] as const
}

export function getSreAgentKey() {
  return ['sre_agent'] as const
}

export function getStandardsKey() {
  return ['standards'] as const
}

export function getStatusDashboardsKey() {
  return ['status_dashboards'] as const
}

export function getStatusPagesKey() {
  return ['status_pages'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getVendorsKey() {
  return ['vendors'] as const
}

export function getWebhookSubscriptionsKey() {
  return ['webhook_subscriptions'] as const
}

export function getWorkflowsKey() {
  return ['workflows'] as const
}

export function getEntityTypeKey() {
  return ['{entity_type}'] as const
}

export function getPostEntityTypeIdChangeTagsKey() {
  return [':entity_type', '/:entity_type/:id/change_tags', 'POST'] as const
}

export function usePostEntityTypeIdChangeTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':entity_type'][':id']['change_tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':entity_type'][':id']['change_tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEntityTypeIdChangeTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':entity_type'][':id']['change_tags']['$post']>
        },
      ) => parseResponse(client[':entity_type'][':id'].change_tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntityTypeIdTagsKey(
  args: InferRequestType<(typeof client)[':entity_type'][':id']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':entity_type', '/:entity_type/:id/tags', keyArgs] as const
}

export function useGetEntityTypeIdTags<TError = unknown>(
  args: InferRequestType<(typeof client)[':entity_type'][':id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':entity_type'][':id']['tags']['$get']>>
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
        ? getGetEntityTypeIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':entity_type'][':id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':entity_type'][':id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntityTypeIdTags<TError = unknown>(
  args: InferRequestType<(typeof client)[':entity_type'][':id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':entity_type'][':id']['tags']['$get']>>
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
        ? getGetEntityTypeIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':entity_type'][':id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':entity_type'][':id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbilitiesKey(args: InferRequestType<typeof client.abilities.$get>) {
  const { header: _, ...keyArgs } = args
  return ['abilities', '/abilities', keyArgs] as const
}

export function useGetAbilities<TError = unknown>(
  args: InferRequestType<typeof client.abilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.abilities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAbilitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.abilities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.abilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbilities<TError = unknown>(
  args: InferRequestType<typeof client.abilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.abilities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAbilitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.abilities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.abilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbilitiesIdKey(
  args: InferRequestType<(typeof client.abilities)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['abilities', '/abilities/:id', keyArgs] as const
}

export function useGetAbilitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.abilities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.abilities)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAbilitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.abilities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.abilities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbilitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.abilities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.abilities)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAbilitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.abilities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.abilities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddonsKey(args: InferRequestType<typeof client.addons.$get>) {
  const { header: _, ...keyArgs } = args
  return ['addons', '/addons', keyArgs] as const
}

export function useGetAddons<TError = unknown>(
  args: InferRequestType<typeof client.addons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.addons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAddons<TError = unknown>(
  args: InferRequestType<typeof client.addons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.addons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAddonsKey() {
  return ['addons', '/addons', 'POST'] as const
}

export function usePostAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.addons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.addons.$post> }) =>
        parseResponse(client.addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddonsIdKey(args: InferRequestType<(typeof client.addons)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['addons', '/addons/:id', keyArgs] as const
}

export function useGetAddonsId<TError = unknown>(
  args: InferRequestType<(typeof client.addons)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonsId<TError = unknown>(
  args: InferRequestType<(typeof client.addons)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAddonsIdKey() {
  return ['addons', '/addons/:id', 'PUT'] as const
}

export function usePutAddonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.addons)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAddonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.addons)[':id']['$put']> }) =>
        parseResponse(client.addons[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAddonsIdKey() {
  return ['addons', '/addons/:id', 'DELETE'] as const
}

export function useDeleteAddonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.addons)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAddonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.addons)[':id']['$delete']> },
      ) => parseResponse(client.addons[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAlertGroupingSettingsKey(
  args: InferRequestType<typeof client.alert_grouping_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['alert_grouping_settings', '/alert_grouping_settings', keyArgs] as const
}

export function useGetAlertGroupingSettings<TError = unknown>(
  args: InferRequestType<typeof client.alert_grouping_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alert_grouping_settings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertGroupingSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alert_grouping_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alert_grouping_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertGroupingSettings<TError = unknown>(
  args: InferRequestType<typeof client.alert_grouping_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alert_grouping_settings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertGroupingSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alert_grouping_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alert_grouping_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAlertGroupingSettingsKey() {
  return ['alert_grouping_settings', '/alert_grouping_settings', 'POST'] as const
}

export function usePostAlertGroupingSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alert_grouping_settings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.alert_grouping_settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlertGroupingSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.alert_grouping_settings.$post> },
      ) => parseResponse(client.alert_grouping_settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAlertGroupingSettingsIdKey(
  args: InferRequestType<(typeof client.alert_grouping_settings)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alert_grouping_settings', '/alert_grouping_settings/:id', keyArgs] as const
}

export function useGetAlertGroupingSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.alert_grouping_settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alert_grouping_settings)[':id']['$get']>>
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
        ? getGetAlertGroupingSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alert_grouping_settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alert_grouping_settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertGroupingSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.alert_grouping_settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alert_grouping_settings)[':id']['$get']>>
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
        ? getGetAlertGroupingSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alert_grouping_settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alert_grouping_settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAlertGroupingSettingsIdKey() {
  return ['alert_grouping_settings', '/alert_grouping_settings/:id', 'PUT'] as const
}

export function usePutAlertGroupingSettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.alert_grouping_settings)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.alert_grouping_settings)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAlertGroupingSettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.alert_grouping_settings)[':id']['$put']> },
      ) => parseResponse(client.alert_grouping_settings[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAlertGroupingSettingsIdKey() {
  return ['alert_grouping_settings', '/alert_grouping_settings/:id', 'DELETE'] as const
}

export function useDeleteAlertGroupingSettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alert_grouping_settings)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.alert_grouping_settings)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAlertGroupingSettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.alert_grouping_settings)[':id']['$delete']> },
      ) => parseResponse(client.alert_grouping_settings[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsIncidentsAllKey() {
  return ['analytics', '/analytics/metrics/incidents/all', 'POST'] as const
}

export function usePostAnalyticsMetricsIncidentsAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.incidents.all.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.incidents.all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsIncidentsAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analytics.metrics.incidents.all.$post> },
      ) => parseResponse(client.analytics.metrics.incidents.all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsIncidentsEscalationPoliciesKey() {
  return ['analytics', '/analytics/metrics/incidents/escalation_policies', 'POST'] as const
}

export function usePostAnalyticsMetricsIncidentsEscalationPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.incidents.escalation_policies.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.incidents.escalation_policies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsIncidentsEscalationPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.analytics.metrics.incidents.escalation_policies.$post>
        },
      ) =>
        parseResponse(
          client.analytics.metrics.incidents.escalation_policies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsIncidentsEscalationPoliciesAllKey() {
  return ['analytics', '/analytics/metrics/incidents/escalation_policies/all', 'POST'] as const
}

export function usePostAnalyticsMetricsIncidentsEscalationPoliciesAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.analytics.metrics.incidents.escalation_policies.all.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.incidents.escalation_policies.all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsIncidentsEscalationPoliciesAllKey()
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
            typeof client.analytics.metrics.incidents.escalation_policies.all.$post
          >
        },
      ) =>
        parseResponse(
          client.analytics.metrics.incidents.escalation_policies.all.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsIncidentsServicesKey() {
  return ['analytics', '/analytics/metrics/incidents/services', 'POST'] as const
}

export function usePostAnalyticsMetricsIncidentsServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.incidents.services.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.incidents.services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsIncidentsServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.analytics.metrics.incidents.services.$post> },
      ) => parseResponse(client.analytics.metrics.incidents.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsIncidentsServicesAllKey() {
  return ['analytics', '/analytics/metrics/incidents/services/all', 'POST'] as const
}

export function usePostAnalyticsMetricsIncidentsServicesAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.incidents.services.all.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.incidents.services.all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsIncidentsServicesAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.analytics.metrics.incidents.services.all.$post> },
      ) => parseResponse(client.analytics.metrics.incidents.services.all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsIncidentsTeamsKey() {
  return ['analytics', '/analytics/metrics/incidents/teams', 'POST'] as const
}

export function usePostAnalyticsMetricsIncidentsTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.incidents.teams.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.incidents.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsIncidentsTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analytics.metrics.incidents.teams.$post> },
      ) => parseResponse(client.analytics.metrics.incidents.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsIncidentsTeamsAllKey() {
  return ['analytics', '/analytics/metrics/incidents/teams/all', 'POST'] as const
}

export function usePostAnalyticsMetricsIncidentsTeamsAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.incidents.teams.all.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.incidents.teams.all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsIncidentsTeamsAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.analytics.metrics.incidents.teams.all.$post> },
      ) => parseResponse(client.analytics.metrics.incidents.teams.all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsPdAdvanceUsageFeaturesKey() {
  return ['analytics', '/analytics/metrics/pd_advance_usage/features', 'POST'] as const
}

export function usePostAnalyticsMetricsPdAdvanceUsageFeatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.pd_advance_usage.features.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.pd_advance_usage.features.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsPdAdvanceUsageFeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.analytics.metrics.pd_advance_usage.features.$post>
        },
      ) =>
        parseResponse(client.analytics.metrics.pd_advance_usage.features.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsRespondersAllKey() {
  return ['analytics', '/analytics/metrics/responders/all', 'POST'] as const
}

export function usePostAnalyticsMetricsRespondersAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.responders.all.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.responders.all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsRespondersAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analytics.metrics.responders.all.$post> },
      ) => parseResponse(client.analytics.metrics.responders.all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsRespondersTeamsKey() {
  return ['analytics', '/analytics/metrics/responders/teams', 'POST'] as const
}

export function usePostAnalyticsMetricsRespondersTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.analytics.metrics.responders.teams.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.responders.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsRespondersTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analytics.metrics.responders.teams.$post> },
      ) => parseResponse(client.analytics.metrics.responders.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsMetricsUsersAllKey() {
  return ['analytics', '/analytics/metrics/users/all', 'POST'] as const
}

export function usePostAnalyticsMetricsUsersAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.users.all.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.metrics.users.all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsMetricsUsersAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analytics.metrics.users.all.$post> },
      ) => parseResponse(client.analytics.metrics.users.all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsRawIncidentsKey() {
  return ['analytics', '/analytics/raw/incidents', 'POST'] as const
}

export function usePostAnalyticsRawIncidents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.raw.incidents.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.raw.incidents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsRawIncidentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analytics.raw.incidents.$post> },
      ) => parseResponse(client.analytics.raw.incidents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsRawIncidentsIdKey(
  args: InferRequestType<(typeof client.analytics.raw.incidents)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['analytics', '/analytics/raw/incidents/:id', keyArgs] as const
}

export function useGetAnalyticsRawIncidentsId<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.raw.incidents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.raw.incidents)[':id']['$get']>>
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
        ? getGetAnalyticsRawIncidentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.raw.incidents)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.raw.incidents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsRawIncidentsId<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.raw.incidents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.raw.incidents)[':id']['$get']>>
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
        ? getGetAnalyticsRawIncidentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.raw.incidents)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.raw.incidents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsRawIncidentsIdResponsesKey(
  args: InferRequestType<(typeof client.analytics.raw.incidents)[':id']['responses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['analytics', '/analytics/raw/incidents/:id/responses', keyArgs] as const
}

export function useGetAnalyticsRawIncidentsIdResponses<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.raw.incidents)[':id']['responses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.raw.incidents)[':id']['responses']['$get']>>
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
        ? getGetAnalyticsRawIncidentsIdResponsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.raw.incidents)[':id']['responses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.raw.incidents[':id'].responses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsRawIncidentsIdResponses<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.raw.incidents)[':id']['responses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.raw.incidents)[':id']['responses']['$get']>>
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
        ? getGetAnalyticsRawIncidentsIdResponsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.raw.incidents)[':id']['responses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.raw.incidents[':id'].responses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnalyticsRawRespondersResponderIdIncidentsKey() {
  return ['analytics', '/analytics/raw/responders/:responder_id/incidents', 'POST'] as const
}

export function usePostAnalyticsRawRespondersResponderIdIncidents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analytics.raw.responders)[':responder_id']['incidents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.analytics.raw.responders)[':responder_id']['incidents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsRawRespondersResponderIdIncidentsKey()
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
            (typeof client.analytics.raw.responders)[':responder_id']['incidents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.analytics.raw.responders[':responder_id'].incidents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsRawUsersKey() {
  return ['analytics', '/analytics/raw/users', 'POST'] as const
}

export function usePostAnalyticsRawUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.raw.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.raw.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsRawUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.analytics.raw.users.$post> }) =>
        parseResponse(client.analytics.raw.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditRecordsKey(args: InferRequestType<typeof client.audit.records.$get>) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/records', keyArgs] as const
}

export function useGetAuditRecords<TError = unknown>(
  args: InferRequestType<typeof client.audit.records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.records.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuditRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.records.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditRecords<TError = unknown>(
  args: InferRequestType<typeof client.audit.records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.records.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuditRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.records.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationActionsActionsKey(
  args: InferRequestType<typeof client.automation_actions.actions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/actions', keyArgs] as const
}

export function useGetAutomationActionsActions<TError = unknown>(
  args: InferRequestType<typeof client.automation_actions.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.actions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationActionsActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsActions<TError = unknown>(
  args: InferRequestType<typeof client.automation_actions.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.actions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationActionsActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationActionsActionsKey() {
  return ['automation_actions', '/automation_actions/actions', 'POST'] as const
}

export function usePostAutomationActionsActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.actions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.automation_actions.actions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActionsActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.automation_actions.actions.$post> },
      ) => parseResponse(client.automation_actions.actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsActionsIdKey(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/actions/:id', keyArgs] as const
}

export function useGetAutomationActionsActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['$get']>>
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
        ? getGetAutomationActionsActionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['$get']>>
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
        ? getGetAutomationActionsActionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationActionsActionsIdKey() {
  return ['automation_actions', '/automation_actions/actions/:id', 'PUT'] as const
}

export function usePutAutomationActionsActionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automation_actions.actions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationActionsActionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.automation_actions.actions)[':id']['$put']> },
      ) => parseResponse(client.automation_actions.actions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationActionsActionsIdKey() {
  return ['automation_actions', '/automation_actions/actions/:id', 'DELETE'] as const
}

export function useDeleteAutomationActionsActionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.automation_actions.actions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationActionsActionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.automation_actions.actions)[':id']['$delete']> },
      ) => parseResponse(client.automation_actions.actions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAutomationActionsActionsIdInvocationsKey() {
  return ['automation_actions', '/automation_actions/actions/:id/invocations', 'POST'] as const
}

export function usePostAutomationActionsActionsIdInvocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automation_actions.actions)[':id']['invocations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automation_actions.actions)[':id']['invocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActionsActionsIdInvocationsKey()
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
            (typeof client.automation_actions.actions)[':id']['invocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.automation_actions.actions[':id'].invocations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsActionsIdServicesKey(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['services']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/actions/:id/services', keyArgs] as const
}

export function useGetAutomationActionsActionsIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automation_actions.actions)[':id']['services']['$get']>
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
        ? getGetAutomationActionsActionsIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automation_actions.actions)[':id']['services']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation_actions.actions[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsActionsIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automation_actions.actions)[':id']['services']['$get']>
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
        ? getGetAutomationActionsActionsIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automation_actions.actions)[':id']['services']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation_actions.actions[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationActionsActionsIdServicesKey() {
  return ['automation_actions', '/automation_actions/actions/:id/services', 'POST'] as const
}

export function usePostAutomationActionsActionsIdServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automation_actions.actions)[':id']['services']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automation_actions.actions)[':id']['services']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActionsActionsIdServicesKey()
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
            (typeof client.automation_actions.actions)[':id']['services']['$post']
          >
        },
      ) =>
        parseResponse(client.automation_actions.actions[':id'].services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsActionsIdServicesServiceIdKey(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'automation_actions',
    '/automation_actions/actions/:id/services/:service_id',
    keyArgs,
  ] as const
}

export function useGetAutomationActionsActionsIdServicesServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$get']
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
        ? getGetAutomationActionsActionsIdServicesServiceIdKey(args)
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
                (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$get']
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
          client.automation_actions.actions[':id'].services[':service_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsActionsIdServicesServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$get']
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
        ? getGetAutomationActionsActionsIdServicesServiceIdKey(args)
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
                (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$get']
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
          client.automation_actions.actions[':id'].services[':service_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAutomationActionsActionsIdServicesServiceIdKey() {
  return [
    'automation_actions',
    '/automation_actions/actions/:id/services/:service_id',
    'DELETE',
  ] as const
}

export function useDeleteAutomationActionsActionsIdServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationActionsActionsIdServicesServiceIdKey()
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
            (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automation_actions.actions[':id'].services[':service_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsActionsIdTeamsKey(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['teams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/actions/:id/teams', keyArgs] as const
}

export function useGetAutomationActionsActionsIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['teams']['$get']>>
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
        ? getGetAutomationActionsActionsIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation_actions.actions[':id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsActionsIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['teams']['$get']>>
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
        ? getGetAutomationActionsActionsIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation_actions.actions[':id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationActionsActionsIdTeamsKey() {
  return ['automation_actions', '/automation_actions/actions/:id/teams', 'POST'] as const
}

export function usePostAutomationActionsActionsIdTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation_actions.actions)[':id']['teams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automation_actions.actions)[':id']['teams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActionsActionsIdTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automation_actions.actions)[':id']['teams']['$post']>
        },
      ) => parseResponse(client.automation_actions.actions[':id'].teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsActionsIdTeamsTeamIdKey(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/actions/:id/teams/:team_id', keyArgs] as const
}

export function useGetAutomationActionsActionsIdTeamsTeamId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$get']
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
        ? getGetAutomationActionsActionsIdTeamsTeamIdKey(args)
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
                (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$get']
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
          client.automation_actions.actions[':id'].teams[':team_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsActionsIdTeamsTeamId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$get']
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
        ? getGetAutomationActionsActionsIdTeamsTeamIdKey(args)
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
                (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$get']
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
          client.automation_actions.actions[':id'].teams[':team_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAutomationActionsActionsIdTeamsTeamIdKey() {
  return ['automation_actions', '/automation_actions/actions/:id/teams/:team_id', 'DELETE'] as const
}

export function useDeleteAutomationActionsActionsIdTeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationActionsActionsIdTeamsTeamIdKey()
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
            (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automation_actions.actions[':id'].teams[':team_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsInvocationsKey(
  args: InferRequestType<typeof client.automation_actions.invocations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/invocations', keyArgs] as const
}

export function useGetAutomationActionsInvocations<TError = unknown>(
  args: InferRequestType<typeof client.automation_actions.invocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.automation_actions.invocations.$get>>
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
        ? getGetAutomationActionsInvocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.automation_actions.invocations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.invocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsInvocations<TError = unknown>(
  args: InferRequestType<typeof client.automation_actions.invocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.automation_actions.invocations.$get>>
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
        ? getGetAutomationActionsInvocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.automation_actions.invocations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.invocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationActionsInvocationsIdKey(
  args: InferRequestType<(typeof client.automation_actions.invocations)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/invocations/:id', keyArgs] as const
}

export function useGetAutomationActionsInvocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.invocations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.invocations)[':id']['$get']>>
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
        ? getGetAutomationActionsInvocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.invocations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation_actions.invocations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsInvocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.invocations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.invocations)[':id']['$get']>>
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
        ? getGetAutomationActionsInvocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.invocations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation_actions.invocations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationActionsRunnersKey(
  args: InferRequestType<typeof client.automation_actions.runners.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/runners', keyArgs] as const
}

export function useGetAutomationActionsRunners<TError = unknown>(
  args: InferRequestType<typeof client.automation_actions.runners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.runners.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationActionsRunnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.runners.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.runners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsRunners<TError = unknown>(
  args: InferRequestType<typeof client.automation_actions.runners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.runners.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationActionsRunnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.runners.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.runners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationActionsRunnersKey() {
  return ['automation_actions', '/automation_actions/runners', 'POST'] as const
}

export function usePostAutomationActionsRunners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automation_actions.runners.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.automation_actions.runners.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActionsRunnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.automation_actions.runners.$post> },
      ) => parseResponse(client.automation_actions.runners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsRunnersIdKey(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/runners/:id', keyArgs] as const
}

export function useGetAutomationActionsRunnersId<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['$get']>>
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
        ? getGetAutomationActionsRunnersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.runners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsRunnersId<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['$get']>>
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
        ? getGetAutomationActionsRunnersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_actions.runners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationActionsRunnersIdKey() {
  return ['automation_actions', '/automation_actions/runners/:id', 'PUT'] as const
}

export function usePutAutomationActionsRunnersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automation_actions.runners)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationActionsRunnersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.automation_actions.runners)[':id']['$put']> },
      ) => parseResponse(client.automation_actions.runners[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationActionsRunnersIdKey() {
  return ['automation_actions', '/automation_actions/runners/:id', 'DELETE'] as const
}

export function useDeleteAutomationActionsRunnersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.automation_actions.runners)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationActionsRunnersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.automation_actions.runners)[':id']['$delete']> },
      ) => parseResponse(client.automation_actions.runners[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsRunnersIdTeamsKey(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['teams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/runners/:id/teams', keyArgs] as const
}

export function useGetAutomationActionsRunnersIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['teams']['$get']>>
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
        ? getGetAutomationActionsRunnersIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation_actions.runners[':id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsRunnersIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['teams']['$get']>>
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
        ? getGetAutomationActionsRunnersIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation_actions.runners[':id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationActionsRunnersIdTeamsKey() {
  return ['automation_actions', '/automation_actions/runners/:id/teams', 'POST'] as const
}

export function usePostAutomationActionsRunnersIdTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation_actions.runners)[':id']['teams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automation_actions.runners)[':id']['teams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActionsRunnersIdTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automation_actions.runners)[':id']['teams']['$post']>
        },
      ) => parseResponse(client.automation_actions.runners[':id'].teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActionsRunnersIdTeamsTeamIdKey(
  args: InferRequestType<
    (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['automation_actions', '/automation_actions/runners/:id/teams/:team_id', keyArgs] as const
}

export function useGetAutomationActionsRunnersIdTeamsTeamId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$get']
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
        ? getGetAutomationActionsRunnersIdTeamsTeamIdKey(args)
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
                (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$get']
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
          client.automation_actions.runners[':id'].teams[':team_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActionsRunnersIdTeamsTeamId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$get']
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
        ? getGetAutomationActionsRunnersIdTeamsTeamIdKey(args)
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
                (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$get']
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
          client.automation_actions.runners[':id'].teams[':team_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAutomationActionsRunnersIdTeamsTeamIdKey() {
  return ['automation_actions', '/automation_actions/runners/:id/teams/:team_id', 'DELETE'] as const
}

export function useDeleteAutomationActionsRunnersIdTeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationActionsRunnersIdTeamsTeamIdKey()
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
            (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automation_actions.runners[':id'].teams[':team_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessServicesKey(
  args: InferRequestType<typeof client.business_services.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_services', '/business_services', keyArgs] as const
}

export function useGetBusinessServices<TError = unknown>(
  args: InferRequestType<typeof client.business_services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessServices<TError = unknown>(
  args: InferRequestType<typeof client.business_services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessServicesKey() {
  return ['business_services', '/business_services', 'POST'] as const
}

export function usePostBusinessServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_services.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.business_services.$post> }) =>
        parseResponse(client.business_services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessServicesIdKey(
  args: InferRequestType<(typeof client.business_services)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_services', '/business_services/:id', keyArgs] as const
}

export function useGetBusinessServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.business_services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['$get']>>
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
        ? getGetBusinessServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.business_services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['$get']>>
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
        ? getGetBusinessServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBusinessServicesIdKey() {
  return ['business_services', '/business_services/:id', 'PUT'] as const
}

export function usePutBusinessServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.business_services)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_services)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBusinessServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.business_services)[':id']['$put']> },
      ) => parseResponse(client.business_services[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBusinessServicesIdKey() {
  return ['business_services', '/business_services/:id', 'DELETE'] as const
}

export function useDeleteBusinessServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.business_services)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.business_services)[':id']['$delete']> },
      ) => parseResponse(client.business_services[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessServicesIdAccountSubscriptionKey() {
  return ['business_services', '/business_services/:id/account_subscription', 'POST'] as const
}

export function usePostBusinessServicesIdAccountSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.business_services)[':id']['account_subscription']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_services)[':id']['account_subscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessServicesIdAccountSubscriptionKey()
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
            (typeof client.business_services)[':id']['account_subscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_services[':id'].account_subscription.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBusinessServicesIdAccountSubscriptionKey() {
  return ['business_services', '/business_services/:id/account_subscription', 'DELETE'] as const
}

export function useDeleteBusinessServicesIdAccountSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.business_services)[':id']['account_subscription']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.business_services)[':id']['account_subscription']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessServicesIdAccountSubscriptionKey()
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
            (typeof client.business_services)[':id']['account_subscription']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.business_services[':id'].account_subscription.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessServicesIdSubscribersKey(
  args: InferRequestType<(typeof client.business_services)[':id']['subscribers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_services', '/business_services/:id/subscribers', keyArgs] as const
}

export function useGetBusinessServicesIdSubscribers<TError = unknown>(
  args: InferRequestType<(typeof client.business_services)[':id']['subscribers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['subscribers']['$get']>>
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
        ? getGetBusinessServicesIdSubscribersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['subscribers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_services[':id'].subscribers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessServicesIdSubscribers<TError = unknown>(
  args: InferRequestType<(typeof client.business_services)[':id']['subscribers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['subscribers']['$get']>>
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
        ? getGetBusinessServicesIdSubscribersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_services)[':id']['subscribers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_services[':id'].subscribers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessServicesIdSubscribersKey() {
  return ['business_services', '/business_services/:id/subscribers', 'POST'] as const
}

export function usePostBusinessServicesIdSubscribers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.business_services)[':id']['subscribers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_services)[':id']['subscribers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessServicesIdSubscribersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.business_services)[':id']['subscribers']['$post']>
        },
      ) => parseResponse(client.business_services[':id'].subscribers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessServicesIdSupportingServicesImpactsKey(
  args: InferRequestType<
    (typeof client.business_services)[':id']['supporting_services']['impacts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'business_services',
    '/business_services/:id/supporting_services/impacts',
    keyArgs,
  ] as const
}

export function useGetBusinessServicesIdSupportingServicesImpacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.business_services)[':id']['supporting_services']['impacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.business_services)[':id']['supporting_services']['impacts']['$get']
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
        ? getGetBusinessServicesIdSupportingServicesImpactsKey(args)
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
                (typeof client.business_services)[':id']['supporting_services']['impacts']['$get']
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
          client.business_services[':id'].supporting_services.impacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessServicesIdSupportingServicesImpacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.business_services)[':id']['supporting_services']['impacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.business_services)[':id']['supporting_services']['impacts']['$get']
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
        ? getGetBusinessServicesIdSupportingServicesImpactsKey(args)
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
                (typeof client.business_services)[':id']['supporting_services']['impacts']['$get']
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
          client.business_services[':id'].supporting_services.impacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessServicesIdUnsubscribeKey() {
  return ['business_services', '/business_services/:id/unsubscribe', 'POST'] as const
}

export function usePostBusinessServicesIdUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.business_services)[':id']['unsubscribe']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_services)[':id']['unsubscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessServicesIdUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.business_services)[':id']['unsubscribe']['$post']>
        },
      ) => parseResponse(client.business_services[':id'].unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessServicesImpactorsKey(
  args: InferRequestType<typeof client.business_services.impactors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_services', '/business_services/impactors', keyArgs] as const
}

export function useGetBusinessServicesImpactors<TError = unknown>(
  args: InferRequestType<typeof client.business_services.impactors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_services.impactors.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessServicesImpactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_services.impactors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_services.impactors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessServicesImpactors<TError = unknown>(
  args: InferRequestType<typeof client.business_services.impactors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_services.impactors.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessServicesImpactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_services.impactors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_services.impactors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessServicesImpactsKey(
  args: InferRequestType<typeof client.business_services.impacts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_services', '/business_services/impacts', keyArgs] as const
}

export function useGetBusinessServicesImpacts<TError = unknown>(
  args: InferRequestType<typeof client.business_services.impacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_services.impacts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessServicesImpactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_services.impacts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_services.impacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessServicesImpacts<TError = unknown>(
  args: InferRequestType<typeof client.business_services.impacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_services.impacts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessServicesImpactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_services.impacts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_services.impacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessServicesPriorityThresholdsKey(
  args: InferRequestType<typeof client.business_services.priority_thresholds.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_services', '/business_services/priority_thresholds', keyArgs] as const
}

export function useGetBusinessServicesPriorityThresholds<TError = unknown>(
  args: InferRequestType<typeof client.business_services.priority_thresholds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.business_services.priority_thresholds.$get>>
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
        ? getGetBusinessServicesPriorityThresholdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.business_services.priority_thresholds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_services.priority_thresholds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessServicesPriorityThresholds<TError = unknown>(
  args: InferRequestType<typeof client.business_services.priority_thresholds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.business_services.priority_thresholds.$get>>
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
        ? getGetBusinessServicesPriorityThresholdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.business_services.priority_thresholds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_services.priority_thresholds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBusinessServicesPriorityThresholdsKey() {
  return ['business_services', '/business_services/priority_thresholds', 'PUT'] as const
}

export function usePutBusinessServicesPriorityThresholds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.business_services.priority_thresholds.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_services.priority_thresholds.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBusinessServicesPriorityThresholdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.business_services.priority_thresholds.$put> },
      ) => parseResponse(client.business_services.priority_thresholds.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBusinessServicesPriorityThresholdsKey() {
  return ['business_services', '/business_services/priority_thresholds', 'DELETE'] as const
}

export function useDeleteBusinessServicesPriorityThresholds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.business_services.priority_thresholds.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.business_services.priority_thresholds.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessServicesPriorityThresholdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.business_services.priority_thresholds.$delete> },
      ) => parseResponse(client.business_services.priority_thresholds.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChangeEventsKey(args: InferRequestType<typeof client.change_events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['change_events', '/change_events', keyArgs] as const
}

export function useGetChangeEvents<TError = unknown>(
  args: InferRequestType<typeof client.change_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.change_events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangeEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.change_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.change_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChangeEvents<TError = unknown>(
  args: InferRequestType<typeof client.change_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.change_events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangeEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.change_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.change_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChangeEventsKey() {
  return ['change_events', '/change_events', 'POST'] as const
}

export function usePostChangeEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.change_events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.change_events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChangeEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.change_events.$post> }) =>
        parseResponse(client.change_events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChangeEventsIdKey(
  args: InferRequestType<(typeof client.change_events)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['change_events', '/change_events/:id', keyArgs] as const
}

export function useGetChangeEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.change_events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.change_events)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangeEventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.change_events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.change_events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChangeEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.change_events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.change_events)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangeEventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.change_events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.change_events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChangeEventsIdKey() {
  return ['change_events', '/change_events/:id', 'PUT'] as const
}

export function usePutChangeEventsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.change_events)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.change_events)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChangeEventsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.change_events)[':id']['$put']> },
      ) => parseResponse(client.change_events[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentIntegrationsServicenowKey(
  args: InferRequestType<typeof client.enrichment.integrations.servicenow.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/integrations/servicenow', keyArgs] as const
}

export function useGetEnrichmentIntegrationsServicenow<TError = unknown>(
  args: InferRequestType<typeof client.enrichment.integrations.servicenow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.enrichment.integrations.servicenow.$get>>
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
        ? getGetEnrichmentIntegrationsServicenowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.enrichment.integrations.servicenow.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.integrations.servicenow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentIntegrationsServicenow<TError = unknown>(
  args: InferRequestType<typeof client.enrichment.integrations.servicenow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.enrichment.integrations.servicenow.$get>>
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
        ? getGetEnrichmentIntegrationsServicenowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.enrichment.integrations.servicenow.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.integrations.servicenow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnrichmentIntegrationsServicenowKey() {
  return ['enrichment', '/enrichment/integrations/servicenow', 'POST'] as const
}

export function usePostEnrichmentIntegrationsServicenow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.enrichment.integrations.servicenow.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enrichment.integrations.servicenow.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentIntegrationsServicenowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enrichment.integrations.servicenow.$post> },
      ) => parseResponse(client.enrichment.integrations.servicenow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentIntegrationsServicenowIntegrationIdKey(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/integrations/servicenow/:integration_id', keyArgs] as const
}

export function useGetEnrichmentIntegrationsServicenowIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['$get']
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
        ? getGetEnrichmentIntegrationsServicenowIntegrationIdKey(args)
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
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['$get']
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
          client.enrichment.integrations.servicenow[':integration_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentIntegrationsServicenowIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['$get']
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
        ? getGetEnrichmentIntegrationsServicenowIntegrationIdKey(args)
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
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['$get']
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
          client.enrichment.integrations.servicenow[':integration_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEnrichmentIntegrationsServicenowIntegrationIdKey() {
  return ['enrichment', '/enrichment/integrations/servicenow/:integration_id', 'DELETE'] as const
}

export function useDeleteEnrichmentIntegrationsServicenowIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.enrichment.integrations.servicenow)[':integration_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnrichmentIntegrationsServicenowIntegrationIdKey()
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
            (typeof client.enrichment.integrations.servicenow)[':integration_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.integrations.servicenow[':integration_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEnrichmentIntegrationsServicenowIntegrationIdTablesKey() {
  return [
    'enrichment',
    '/enrichment/integrations/servicenow/:integration_id/tables',
    'POST',
  ] as const
}

export function usePostEnrichmentIntegrationsServicenowIntegrationIdTables<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentIntegrationsServicenowIntegrationIdTablesKey()
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
            (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.integrations.servicenow[':integration_id'].tables.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdKey() {
  return [
    'enrichment',
    '/enrichment/integrations/servicenow/:integration_id/tables/:table_id',
    'PUT',
  ] as const
}

export function usePutEnrichmentIntegrationsServicenowIntegrationIdTablesTableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdKey()
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
            (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.integrations.servicenow[':integration_id'].tables[':table_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdKey() {
  return [
    'enrichment',
    '/enrichment/integrations/servicenow/:integration_id/tables/:table_id',
    'DELETE',
  ] as const
}

export function useDeleteEnrichmentIntegrationsServicenowIntegrationIdTablesTableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdKey()
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
            (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.integrations.servicenow[':integration_id'].tables[':table_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdEnableKey() {
  return [
    'enrichment',
    '/enrichment/integrations/servicenow/:integration_id/tables/:table_id/enable',
    'POST',
  ] as const
}

export function usePostEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdEnable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdEnableKey()
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
            (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.integrations.servicenow[':integration_id'].tables[
            ':table_id'
          ].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTestKey(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['test']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'enrichment',
    '/enrichment/integrations/servicenow/:integration_id/tables/:table_id/test',
    keyArgs,
  ] as const
}

export function useGetEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTest<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['test']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['test']['$get']
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
        ? getGetEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTestKey(args)
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
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['test']['$get']
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
          client.enrichment.integrations.servicenow[':integration_id'].tables[
            ':table_id'
          ].test.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTest<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['test']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['test']['$get']
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
        ? getGetEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTestKey(args)
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
                (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['test']['$get']
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
          client.enrichment.integrations.servicenow[':integration_id'].tables[
            ':table_id'
          ].test.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEnrichmentIntegrationsServicenowCredentialsKey() {
  return ['enrichment', '/enrichment/integrations/servicenow/credentials', 'POST'] as const
}

export function usePostEnrichmentIntegrationsServicenowCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.enrichment.integrations.servicenow.credentials.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enrichment.integrations.servicenow.credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentIntegrationsServicenowCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.enrichment.integrations.servicenow.credentials.$post>
        },
      ) =>
        parseResponse(
          client.enrichment.integrations.servicenow.credentials.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentIntegrationsServicenowCredentialsCredentialsIdKey(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'enrichment',
    '/enrichment/integrations/servicenow/credentials/:credentials_id',
    keyArgs,
  ] as const
}

export function useGetEnrichmentIntegrationsServicenowCredentialsCredentialsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$get']
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
        ? getGetEnrichmentIntegrationsServicenowCredentialsCredentialsIdKey(args)
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
                (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$get']
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
          client.enrichment.integrations.servicenow.credentials[':credentials_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentIntegrationsServicenowCredentialsCredentialsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$get']
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
        ? getGetEnrichmentIntegrationsServicenowCredentialsCredentialsIdKey(args)
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
                (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$get']
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
          client.enrichment.integrations.servicenow.credentials[':credentials_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEnrichmentIntegrationsServicenowCredentialsCredentialsIdKey() {
  return [
    'enrichment',
    '/enrichment/integrations/servicenow/credentials/:credentials_id',
    'PUT',
  ] as const
}

export function usePutEnrichmentIntegrationsServicenowCredentialsCredentialsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnrichmentIntegrationsServicenowCredentialsCredentialsIdKey()
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
            (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.integrations.servicenow.credentials[':credentials_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnrichmentIntegrationsServicenowCredentialsCredentialsIdKey() {
  return [
    'enrichment',
    '/enrichment/integrations/servicenow/credentials/:credentials_id',
    'DELETE',
  ] as const
}

export function useDeleteEnrichmentIntegrationsServicenowCredentialsCredentialsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnrichmentIntegrationsServicenowCredentialsCredentialsIdKey()
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
            (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.integrations.servicenow.credentials[':credentials_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEnrichmentQueryKey() {
  return ['enrichment', '/enrichment/query', 'POST'] as const
}

export function usePostEnrichmentQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.query.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.enrichment.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.enrichment.query.$post> }) =>
        parseResponse(client.enrichment.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentSchemasKey(
  args: InferRequestType<typeof client.enrichment.schemas.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/schemas', keyArgs] as const
}

export function useGetEnrichmentSchemas<TError = unknown>(
  args: InferRequestType<typeof client.enrichment.schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.schemas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnrichmentSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.schemas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enrichment.schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentSchemas<TError = unknown>(
  args: InferRequestType<typeof client.enrichment.schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.schemas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnrichmentSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.schemas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enrichment.schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnrichmentSchemasKey() {
  return ['enrichment', '/enrichment/schemas', 'POST'] as const
}

export function usePostEnrichmentSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.schemas.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.enrichment.schemas.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.enrichment.schemas.$post> }) =>
        parseResponse(client.enrichment.schemas.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentSchemasSchemaIdKey(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/schemas/:schema_id', keyArgs] as const
}

export function useGetEnrichmentSchemasSchemaId<TError = unknown>(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['$get']>>
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
        ? getGetEnrichmentSchemasSchemaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enrichment.schemas[':schema_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentSchemasSchemaId<TError = unknown>(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['$get']>>
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
        ? getGetEnrichmentSchemasSchemaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enrichment.schemas[':schema_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEnrichmentSchemasSchemaIdKey() {
  return ['enrichment', '/enrichment/schemas/:schema_id', 'PUT'] as const
}

export function usePutEnrichmentSchemasSchemaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnrichmentSchemasSchemaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$put']> },
      ) => parseResponse(client.enrichment.schemas[':schema_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnrichmentSchemasSchemaIdKey() {
  return ['enrichment', '/enrichment/schemas/:schema_id', 'DELETE'] as const
}

export function useDeleteEnrichmentSchemasSchemaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnrichmentSchemasSchemaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$delete']> },
      ) => parseResponse(client.enrichment.schemas[':schema_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentSchemasSchemaIdRecordsKey(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['records']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/schemas/:schema_id/records', keyArgs] as const
}

export function useGetEnrichmentSchemasSchemaIdRecords<TError = unknown>(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['records']['$get']>>
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
        ? getGetEnrichmentSchemasSchemaIdRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.schemas[':schema_id'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentSchemasSchemaIdRecords<TError = unknown>(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['records']['$get']>>
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
        ? getGetEnrichmentSchemasSchemaIdRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.schemas[':schema_id'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnrichmentSchemasSchemaIdRecordsKey() {
  return ['enrichment', '/enrichment/schemas/:schema_id/records', 'POST'] as const
}

export function usePostEnrichmentSchemasSchemaIdRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enrichment.schemas)[':schema_id']['records']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentSchemasSchemaIdRecordsKey()
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
            (typeof client.enrichment.schemas)[':schema_id']['records']['$post']
          >
        },
      ) => parseResponse(client.enrichment.schemas[':schema_id'].records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnrichmentSchemasSchemaIdRecordsRecordIdKey() {
  return ['enrichment', '/enrichment/schemas/:schema_id/records/:record_id', 'DELETE'] as const
}

export function useDeleteEnrichmentSchemasSchemaIdRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enrichment.schemas)[':schema_id']['records'][':record_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.enrichment.schemas)[':schema_id']['records'][':record_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnrichmentSchemasSchemaIdRecordsRecordIdKey()
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
            (typeof client.enrichment.schemas)[':schema_id']['records'][':record_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.schemas[':schema_id'].records[':record_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEscalationPoliciesKey(
  args: InferRequestType<typeof client.escalation_policies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['escalation_policies', '/escalation_policies', keyArgs] as const
}

export function useGetEscalationPolicies<TError = unknown>(
  args: InferRequestType<typeof client.escalation_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.escalation_policies.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEscalationPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.escalation_policies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.escalation_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEscalationPolicies<TError = unknown>(
  args: InferRequestType<typeof client.escalation_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.escalation_policies.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEscalationPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.escalation_policies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.escalation_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEscalationPoliciesKey() {
  return ['escalation_policies', '/escalation_policies', 'POST'] as const
}

export function usePostEscalationPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.escalation_policies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.escalation_policies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEscalationPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.escalation_policies.$post> }) =>
        parseResponse(client.escalation_policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEscalationPoliciesIdKey(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['escalation_policies', '/escalation_policies/:id', keyArgs] as const
}

export function useGetEscalationPoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.escalation_policies)[':id']['$get']>>
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
        ? getGetEscalationPoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.escalation_policies)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.escalation_policies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEscalationPoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.escalation_policies)[':id']['$get']>>
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
        ? getGetEscalationPoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.escalation_policies)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.escalation_policies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEscalationPoliciesIdKey() {
  return ['escalation_policies', '/escalation_policies/:id', 'PUT'] as const
}

export function usePutEscalationPoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.escalation_policies)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.escalation_policies)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEscalationPoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.escalation_policies)[':id']['$put']> },
      ) => parseResponse(client.escalation_policies[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEscalationPoliciesIdKey() {
  return ['escalation_policies', '/escalation_policies/:id', 'DELETE'] as const
}

export function useDeleteEscalationPoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.escalation_policies)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.escalation_policies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEscalationPoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.escalation_policies)[':id']['$delete']> },
      ) => parseResponse(client.escalation_policies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEscalationPoliciesIdAuditRecordsKey(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['audit']['records']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['escalation_policies', '/escalation_policies/:id/audit/records', keyArgs] as const
}

export function useGetEscalationPoliciesIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.escalation_policies)[':id']['audit']['records']['$get']>
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
        ? getGetEscalationPoliciesIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.escalation_policies)[':id']['audit']['records']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.escalation_policies[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEscalationPoliciesIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.escalation_policies)[':id']['audit']['records']['$get']>
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
        ? getGetEscalationPoliciesIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.escalation_policies)[':id']['audit']['records']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.escalation_policies[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventOrchestrationsKey(
  args: InferRequestType<typeof client.event_orchestrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations', keyArgs] as const
}

export function useGetEventOrchestrations<TError = unknown>(
  args: InferRequestType<typeof client.event_orchestrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.event_orchestrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventOrchestrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.event_orchestrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_orchestrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrations<TError = unknown>(
  args: InferRequestType<typeof client.event_orchestrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.event_orchestrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventOrchestrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.event_orchestrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_orchestrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventOrchestrationsKey() {
  return ['event_orchestrations', '/event_orchestrations', 'POST'] as const
}

export function usePostEventOrchestrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.event_orchestrations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.event_orchestrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventOrchestrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.event_orchestrations.$post> },
      ) => parseResponse(client.event_orchestrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdKey(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations/:id', keyArgs] as const
}

export function useGetEventOrchestrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['$get']>>
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
        ? getGetEventOrchestrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_orchestrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['$get']>>
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
        ? getGetEventOrchestrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_orchestrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsIdKey() {
  return ['event_orchestrations', '/event_orchestrations/:id', 'PUT'] as const
}

export function usePutEventOrchestrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.event_orchestrations)[':id']['$put']> },
      ) => parseResponse(client.event_orchestrations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventOrchestrationsIdKey() {
  return ['event_orchestrations', '/event_orchestrations/:id', 'DELETE'] as const
}

export function useDeleteEventOrchestrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventOrchestrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.event_orchestrations)[':id']['$delete']> },
      ) => parseResponse(client.event_orchestrations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdIntegrationsKey(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['integrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations/:id/integrations', keyArgs] as const
}

export function useGetEventOrchestrationsIdIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['integrations']['$get']>>
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
        ? getGetEventOrchestrationsIdIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['integrations']['$get']>>
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
        ? getGetEventOrchestrationsIdIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventOrchestrationsIdIntegrationsKey() {
  return ['event_orchestrations', '/event_orchestrations/:id/integrations', 'POST'] as const
}

export function usePostEventOrchestrationsIdIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['integrations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations)[':id']['integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventOrchestrationsIdIntegrationsKey()
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
            (typeof client.event_orchestrations)[':id']['integrations']['$post']
          >
        },
      ) => parseResponse(client.event_orchestrations[':id'].integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdIntegrationsIntegrationIdKey(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/integrations/:integration_id',
    keyArgs,
  ] as const
}

export function useGetEventOrchestrationsIdIntegrationsIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$get']
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
        ? getGetEventOrchestrationsIdIntegrationsIntegrationIdKey(args)
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
                (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$get']
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
          client.event_orchestrations[':id'].integrations[':integration_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdIntegrationsIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$get']
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
        ? getGetEventOrchestrationsIdIntegrationsIntegrationIdKey(args)
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
                (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$get']
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
          client.event_orchestrations[':id'].integrations[':integration_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsIdIntegrationsIntegrationIdKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/integrations/:integration_id',
    'PUT',
  ] as const
}

export function usePutEventOrchestrationsIdIntegrationsIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsIdIntegrationsIntegrationIdKey()
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
            (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations[':id'].integrations[':integration_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventOrchestrationsIdIntegrationsIntegrationIdKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/integrations/:integration_id',
    'DELETE',
  ] as const
}

export function useDeleteEventOrchestrationsIdIntegrationsIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventOrchestrationsIdIntegrationsIntegrationIdKey()
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
            (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations[':id'].integrations[':integration_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEventOrchestrationsIdIntegrationsMigrationKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/integrations/migration',
    'POST',
  ] as const
}

export function usePostEventOrchestrationsIdIntegrationsMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations)[':id']['integrations']['migration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations)[':id']['integrations']['migration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventOrchestrationsIdIntegrationsMigrationKey()
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
            (typeof client.event_orchestrations)[':id']['integrations']['migration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations[':id'].integrations.migration.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdGlobalKey(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['global']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations/:id/global', keyArgs] as const
}

export function useGetEventOrchestrationsIdGlobal<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['global']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['global']['$get']>>
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
        ? getGetEventOrchestrationsIdGlobalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['global']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].global.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdGlobal<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['global']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['global']['$get']>>
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
        ? getGetEventOrchestrationsIdGlobalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['global']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].global.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsIdGlobalKey() {
  return ['event_orchestrations', '/event_orchestrations/:id/global', 'PUT'] as const
}

export function usePutEventOrchestrationsIdGlobal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['global']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations)[':id']['global']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsIdGlobalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.event_orchestrations)[':id']['global']['$put']> },
      ) => parseResponse(client.event_orchestrations[':id'].global.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdRouterKey(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['router']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations/:id/router', keyArgs] as const
}

export function useGetEventOrchestrationsIdRouter<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['router']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['router']['$get']>>
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
        ? getGetEventOrchestrationsIdRouterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['router']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].router.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdRouter<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['router']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['router']['$get']>>
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
        ? getGetEventOrchestrationsIdRouterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['router']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].router.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsIdRouterKey() {
  return ['event_orchestrations', '/event_orchestrations/:id/router', 'PUT'] as const
}

export function usePutEventOrchestrationsIdRouter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['router']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations)[':id']['router']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsIdRouterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.event_orchestrations)[':id']['router']['$put']> },
      ) => parseResponse(client.event_orchestrations[':id'].router.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdUnroutedKey(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['unrouted']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations/:id/unrouted', keyArgs] as const
}

export function useGetEventOrchestrationsIdUnrouted<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['unrouted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['unrouted']['$get']>>
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
        ? getGetEventOrchestrationsIdUnroutedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['unrouted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].unrouted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdUnrouted<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['unrouted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['unrouted']['$get']>>
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
        ? getGetEventOrchestrationsIdUnroutedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['unrouted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].unrouted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsIdUnroutedKey() {
  return ['event_orchestrations', '/event_orchestrations/:id/unrouted', 'PUT'] as const
}

export function usePutEventOrchestrationsIdUnrouted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['unrouted']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations)[':id']['unrouted']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsIdUnroutedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.event_orchestrations)[':id']['unrouted']['$put']>
        },
      ) => parseResponse(client.event_orchestrations[':id'].unrouted.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsServicesServiceIdKey(
  args: InferRequestType<(typeof client.event_orchestrations.services)[':service_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations/services/:service_id', keyArgs] as const
}

export function useGetEventOrchestrationsServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations.services)[':service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_orchestrations.services)[':service_id']['$get']>
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
        ? getGetEventOrchestrationsServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_orchestrations.services)[':service_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.event_orchestrations.services[':service_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations.services)[':service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_orchestrations.services)[':service_id']['$get']>
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
        ? getGetEventOrchestrationsServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_orchestrations.services)[':service_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.event_orchestrations.services[':service_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsServicesServiceIdKey() {
  return ['event_orchestrations', '/event_orchestrations/services/:service_id', 'PUT'] as const
}

export function usePutEventOrchestrationsServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event_orchestrations.services)[':service_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations.services)[':service_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsServicesServiceIdKey()
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
            (typeof client.event_orchestrations.services)[':service_id']['$put']
          >
        },
      ) =>
        parseResponse(client.event_orchestrations.services[':service_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsServicesServiceIdActiveKey(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['active']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/active',
    keyArgs,
  ] as const
}

export function useGetEventOrchestrationsServicesServiceIdActive<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['active']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['active']['$get']
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
        ? getGetEventOrchestrationsServicesServiceIdActiveKey(args)
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
                (typeof client.event_orchestrations.services)[':service_id']['active']['$get']
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
          client.event_orchestrations.services[':service_id'].active.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsServicesServiceIdActive<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['active']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['active']['$get']
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
        ? getGetEventOrchestrationsServicesServiceIdActiveKey(args)
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
                (typeof client.event_orchestrations.services)[':service_id']['active']['$get']
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
          client.event_orchestrations.services[':service_id'].active.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsServicesServiceIdActiveKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/active',
    'PUT',
  ] as const
}

export function usePutEventOrchestrationsServicesServiceIdActive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations.services)[':service_id']['active']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations.services)[':service_id']['active']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsServicesServiceIdActiveKey()
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
            (typeof client.event_orchestrations.services)[':service_id']['active']['$put']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations.services[':service_id'].active.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdCacheVariablesKey(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['cache_variables']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations/:id/cache_variables', keyArgs] as const
}

export function useGetEventOrchestrationsIdCacheVariables<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['cache_variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_orchestrations)[':id']['cache_variables']['$get']>
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
        ? getGetEventOrchestrationsIdCacheVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_orchestrations)[':id']['cache_variables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].cache_variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdCacheVariables<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['cache_variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_orchestrations)[':id']['cache_variables']['$get']>
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
        ? getGetEventOrchestrationsIdCacheVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_orchestrations)[':id']['cache_variables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].cache_variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventOrchestrationsIdCacheVariablesKey() {
  return ['event_orchestrations', '/event_orchestrations/:id/cache_variables', 'POST'] as const
}

export function usePostEventOrchestrationsIdCacheVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.event_orchestrations)[':id']['cache_variables']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.event_orchestrations)[':id']['cache_variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventOrchestrationsIdCacheVariablesKey()
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
            (typeof client.event_orchestrations)[':id']['cache_variables']['$post']
          >
        },
      ) =>
        parseResponse(client.event_orchestrations[':id'].cache_variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdCacheVariablesCacheVariableIdKey(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/cache_variables/:cache_variable_id',
    keyArgs,
  ] as const
}

export function useGetEventOrchestrationsIdCacheVariablesCacheVariableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$get']
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
        ? getGetEventOrchestrationsIdCacheVariablesCacheVariableIdKey(args)
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
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$get']
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
          client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdCacheVariablesCacheVariableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$get']
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
        ? getGetEventOrchestrationsIdCacheVariablesCacheVariableIdKey(args)
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
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$get']
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
          client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsIdCacheVariablesCacheVariableIdKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/cache_variables/:cache_variable_id',
    'PUT',
  ] as const
}

export function usePutEventOrchestrationsIdCacheVariablesCacheVariableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsIdCacheVariablesCacheVariableIdKey()
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
            (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventOrchestrationsIdCacheVariablesCacheVariableIdKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/cache_variables/:cache_variable_id',
    'DELETE',
  ] as const
}

export function useDeleteEventOrchestrationsIdCacheVariablesCacheVariableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventOrchestrationsIdCacheVariablesCacheVariableIdKey()
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
            (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdCacheVariablesCacheVariableIdDataKey(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/cache_variables/:cache_variable_id/data',
    keyArgs,
  ] as const
}

export function useGetEventOrchestrationsIdCacheVariablesCacheVariableIdData<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$get']
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
        ? getGetEventOrchestrationsIdCacheVariablesCacheVariableIdDataKey(args)
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
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$get']
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
          client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdCacheVariablesCacheVariableIdData<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$get']
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
        ? getGetEventOrchestrationsIdCacheVariablesCacheVariableIdDataKey(args)
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
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$get']
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
          client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsIdCacheVariablesCacheVariableIdDataKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/cache_variables/:cache_variable_id/data',
    'PUT',
  ] as const
}

export function usePutEventOrchestrationsIdCacheVariablesCacheVariableIdData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsIdCacheVariablesCacheVariableIdDataKey()
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
            (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$put']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].data.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventOrchestrationsIdCacheVariablesCacheVariableIdDataKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/cache_variables/:cache_variable_id/data',
    'DELETE',
  ] as const
}

export function useDeleteEventOrchestrationsIdCacheVariablesCacheVariableIdData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventOrchestrationsIdCacheVariablesCacheVariableIdDataKey()
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
            (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].data.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsServicesServiceIdCacheVariablesKey(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/cache_variables',
    keyArgs,
  ] as const
}

export function useGetEventOrchestrationsServicesServiceIdCacheVariables<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$get']
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
        ? getGetEventOrchestrationsServicesServiceIdCacheVariablesKey(args)
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
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$get']
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
          client.event_orchestrations.services[':service_id'].cache_variables.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsServicesServiceIdCacheVariables<TError = unknown>(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$get']
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
        ? getGetEventOrchestrationsServicesServiceIdCacheVariablesKey(args)
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
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$get']
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
          client.event_orchestrations.services[':service_id'].cache_variables.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEventOrchestrationsServicesServiceIdCacheVariablesKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/cache_variables',
    'POST',
  ] as const
}

export function usePostEventOrchestrationsServicesServiceIdCacheVariables<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventOrchestrationsServicesServiceIdCacheVariablesKey()
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
            (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations.services[':service_id'].cache_variables.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdKey(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/cache_variables/:cache_variable_id',
    keyArgs,
  ] as const
}

export function useGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$get']
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
        ? getGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdKey(args)
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
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$get']
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
          client.event_orchestrations.services[':service_id'].cache_variables[
            ':cache_variable_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$get']
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
        ? getGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdKey(args)
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
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$get']
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
          client.event_orchestrations.services[':service_id'].cache_variables[
            ':cache_variable_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/cache_variables/:cache_variable_id',
    'PUT',
  ] as const
}

export function usePutEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdKey()
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
            (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations.services[':service_id'].cache_variables[
            ':cache_variable_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/cache_variables/:cache_variable_id',
    'DELETE',
  ] as const
}

export function useDeleteEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdKey()
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
            (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations.services[':service_id'].cache_variables[
            ':cache_variable_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdDataKey(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/cache_variables/:cache_variable_id/data',
    keyArgs,
  ] as const
}

export function useGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdData<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$get']
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
        ? getGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdDataKey(args)
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
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$get']
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
          client.event_orchestrations.services[':service_id'].cache_variables[
            ':cache_variable_id'
          ].data.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdData<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$get']
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
        ? getGetEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdDataKey(args)
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
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$get']
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
          client.event_orchestrations.services[':service_id'].cache_variables[
            ':cache_variable_id'
          ].data.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdDataKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/cache_variables/:cache_variable_id/data',
    'PUT',
  ] as const
}

export function usePutEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdDataKey()
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
            (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$put']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations.services[':service_id'].cache_variables[
            ':cache_variable_id'
          ].data.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdDataKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/services/:service_id/cache_variables/:cache_variable_id/data',
    'DELETE',
  ] as const
}

export function useDeleteEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdDataKey()
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
            (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations.services[':service_id'].cache_variables[
            ':cache_variable_id'
          ].data.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventOrchestrationsIdEnablementsKey(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['enablements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event_orchestrations', '/event_orchestrations/:id/enablements', keyArgs] as const
}

export function useGetEventOrchestrationsIdEnablements<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['enablements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['enablements']['$get']>>
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
        ? getGetEventOrchestrationsIdEnablementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['enablements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].enablements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventOrchestrationsIdEnablements<TError = unknown>(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['enablements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['enablements']['$get']>>
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
        ? getGetEventOrchestrationsIdEnablementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event_orchestrations)[':id']['enablements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event_orchestrations[':id'].enablements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEventOrchestrationsIdEnablementsFeatureNameKey() {
  return [
    'event_orchestrations',
    '/event_orchestrations/:id/enablements/:feature_name',
    'PUT',
  ] as const
}

export function usePutEventOrchestrationsIdEnablementsFeatureName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.event_orchestrations)[':id']['enablements'][':feature_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.event_orchestrations)[':id']['enablements'][':feature_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventOrchestrationsIdEnablementsFeatureNameKey()
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
            (typeof client.event_orchestrations)[':id']['enablements'][':feature_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.event_orchestrations[':id'].enablements[':feature_name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionSchemasKey(
  args: InferRequestType<typeof client.extension_schemas.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['extension_schemas', '/extension_schemas', keyArgs] as const
}

export function useGetExtensionSchemas<TError = unknown>(
  args: InferRequestType<typeof client.extension_schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extension_schemas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtensionSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extension_schemas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extension_schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionSchemas<TError = unknown>(
  args: InferRequestType<typeof client.extension_schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extension_schemas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtensionSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extension_schemas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extension_schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnrichmentEventEnrichmentsKey(
  args: InferRequestType<typeof client.enrichment.event_enrichments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/event_enrichments', keyArgs] as const
}

export function useGetEnrichmentEventEnrichments<TError = unknown>(
  args: InferRequestType<typeof client.enrichment.event_enrichments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.event_enrichments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnrichmentEventEnrichmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.event_enrichments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enrichment.event_enrichments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentEventEnrichments<TError = unknown>(
  args: InferRequestType<typeof client.enrichment.event_enrichments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.event_enrichments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnrichmentEventEnrichmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.event_enrichments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enrichment.event_enrichments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnrichmentEventEnrichmentsKey() {
  return ['enrichment', '/enrichment/event_enrichments', 'POST'] as const
}

export function usePostEnrichmentEventEnrichments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.event_enrichments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enrichment.event_enrichments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentEventEnrichmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enrichment.event_enrichments.$post> },
      ) => parseResponse(client.enrichment.event_enrichments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentEventEnrichmentsDefaultKey(
  args: InferRequestType<typeof client.enrichment.event_enrichments.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/event_enrichments/default', keyArgs] as const
}

export function useGetEnrichmentEventEnrichmentsDefault<TError = unknown>(
  args: InferRequestType<typeof client.enrichment.event_enrichments.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.enrichment.event_enrichments.default.$get>>
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
        ? getGetEnrichmentEventEnrichmentsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.enrichment.event_enrichments.default.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.event_enrichments.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentEventEnrichmentsDefault<TError = unknown>(
  args: InferRequestType<typeof client.enrichment.event_enrichments.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.enrichment.event_enrichments.default.$get>>
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
        ? getGetEnrichmentEventEnrichmentsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.enrichment.event_enrichments.default.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.event_enrichments.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEnrichmentEventEnrichmentsDefaultKey() {
  return ['enrichment', '/enrichment/event_enrichments/default', 'PUT'] as const
}

export function usePutEnrichmentEventEnrichmentsDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.enrichment.event_enrichments.default.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enrichment.event_enrichments.default.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnrichmentEventEnrichmentsDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enrichment.event_enrichments.default.$put> },
      ) => parseResponse(client.enrichment.event_enrichments.default.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentEventEnrichmentsIdKey(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/event_enrichments/:id', keyArgs] as const
}

export function useGetEnrichmentEventEnrichmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.event_enrichments)[':id']['$get']>>
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
        ? getGetEnrichmentEventEnrichmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.event_enrichments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.event_enrichments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentEventEnrichmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.event_enrichments)[':id']['$get']>>
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
        ? getGetEnrichmentEventEnrichmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.event_enrichments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.event_enrichments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEnrichmentEventEnrichmentsIdKey() {
  return ['enrichment', '/enrichment/event_enrichments/:id', 'PUT'] as const
}

export function usePutEnrichmentEventEnrichmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enrichment.event_enrichments)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnrichmentEventEnrichmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$put']> },
      ) => parseResponse(client.enrichment.event_enrichments[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnrichmentEventEnrichmentsIdKey() {
  return ['enrichment', '/enrichment/event_enrichments/:id', 'DELETE'] as const
}

export function useDeleteEnrichmentEventEnrichmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enrichment.event_enrichments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnrichmentEventEnrichmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$delete']>
        },
      ) => parseResponse(client.enrichment.event_enrichments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentEventEnrichmentsIdAssociationsKey(
  args: InferRequestType<
    (typeof client.enrichment.event_enrichments)[':id']['associations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/event_enrichments/:id/associations', keyArgs] as const
}

export function useGetEnrichmentEventEnrichmentsIdAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client.enrichment.event_enrichments)[':id']['associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.event_enrichments)[':id']['associations']['$get']
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
        ? getGetEnrichmentEventEnrichmentsIdAssociationsKey(args)
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
                (typeof client.enrichment.event_enrichments)[':id']['associations']['$get']
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
          client.enrichment.event_enrichments[':id'].associations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentEventEnrichmentsIdAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client.enrichment.event_enrichments)[':id']['associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enrichment.event_enrichments)[':id']['associations']['$get']
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
        ? getGetEnrichmentEventEnrichmentsIdAssociationsKey(args)
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
                (typeof client.enrichment.event_enrichments)[':id']['associations']['$get']
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
          client.enrichment.event_enrichments[':id'].associations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEnrichmentEventEnrichmentsIdAssociationsKey() {
  return ['enrichment', '/enrichment/event_enrichments/:id/associations', 'POST'] as const
}

export function usePostEnrichmentEventEnrichmentsIdAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.enrichment.event_enrichments)[':id']['associations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['associations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentEventEnrichmentsIdAssociationsKey()
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
            (typeof client.enrichment.event_enrichments)[':id']['associations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.event_enrichments[':id'].associations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnrichmentEventEnrichmentsIdAssociationsKey() {
  return ['enrichment', '/enrichment/event_enrichments/:id/associations', 'DELETE'] as const
}

export function useDeleteEnrichmentEventEnrichmentsIdAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enrichment.event_enrichments)[':id']['associations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['associations']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnrichmentEventEnrichmentsIdAssociationsKey()
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
            (typeof client.enrichment.event_enrichments)[':id']['associations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.enrichment.event_enrichments[':id'].associations.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnrichmentEventEnrichmentsIdRulesKey(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['enrichment', '/enrichment/event_enrichments/:id/rules', keyArgs] as const
}

export function useGetEnrichmentEventEnrichmentsIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$get']>
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
        ? getGetEnrichmentEventEnrichmentsIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.event_enrichments[':id'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnrichmentEventEnrichmentsIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$get']>
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
        ? getGetEnrichmentEventEnrichmentsIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enrichment.event_enrichments[':id'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEnrichmentEventEnrichmentsIdRulesKey() {
  return ['enrichment', '/enrichment/event_enrichments/:id/rules', 'PUT'] as const
}

export function usePutEnrichmentEventEnrichmentsIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnrichmentEventEnrichmentsIdRulesKey()
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
            (typeof client.enrichment.event_enrichments)[':id']['rules']['$put']
          >
        },
      ) => parseResponse(client.enrichment.event_enrichments[':id'].rules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionSchemasIdKey(
  args: InferRequestType<(typeof client.extension_schemas)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['extension_schemas', '/extension_schemas/:id', keyArgs] as const
}

export function useGetExtensionSchemasId<TError = unknown>(
  args: InferRequestType<(typeof client.extension_schemas)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extension_schemas)[':id']['$get']>>
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
        ? getGetExtensionSchemasIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extension_schemas)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extension_schemas[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionSchemasId<TError = unknown>(
  args: InferRequestType<(typeof client.extension_schemas)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extension_schemas)[':id']['$get']>>
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
        ? getGetExtensionSchemasIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extension_schemas)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extension_schemas[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtensionsKey(args: InferRequestType<typeof client.extensions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['extensions', '/extensions', keyArgs] as const
}

export function useGetExtensions<TError = unknown>(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensions<TError = unknown>(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtensionsKey() {
  return ['extensions', '/extensions', 'POST'] as const
}

export function usePostExtensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.extensions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.extensions.$post> }) =>
        parseResponse(client.extensions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionsIdKey(
  args: InferRequestType<(typeof client.extensions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['extensions', '/extensions/:id', keyArgs] as const
}

export function useGetExtensionsId<TError = unknown>(
  args: InferRequestType<(typeof client.extensions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extensions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extensions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionsId<TError = unknown>(
  args: InferRequestType<(typeof client.extensions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extensions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extensions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExtensionsIdKey() {
  return ['extensions', '/extensions/:id', 'PUT'] as const
}

export function usePutExtensionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.extensions)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extensions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExtensionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.extensions)[':id']['$put']> },
      ) => parseResponse(client.extensions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExtensionsIdKey() {
  return ['extensions', '/extensions/:id', 'DELETE'] as const
}

export function useDeleteExtensionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extensions)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.extensions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExtensionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.extensions)[':id']['$delete']> },
      ) => parseResponse(client.extensions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExtensionsIdEnableKey() {
  return ['extensions', '/extensions/:id/enable', 'POST'] as const
}

export function usePostExtensionsIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extensions)[':id']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extensions)[':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtensionsIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.extensions)[':id']['enable']['$post']> },
      ) => parseResponse(client.extensions[':id'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentWorkflowsKey(
  args: InferRequestType<typeof client.incident_workflows.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['incident_workflows', '/incident_workflows', keyArgs] as const
}

export function useGetIncidentWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.incident_workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.incident_workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentWorkflowsKey() {
  return ['incident_workflows', '/incident_workflows', 'POST'] as const
}

export function usePostIncidentWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.incident_workflows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.incident_workflows.$post> }) =>
        parseResponse(client.incident_workflows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentWorkflowsIdKey(
  args: InferRequestType<(typeof client.incident_workflows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incident_workflows', '/incident_workflows/:id', keyArgs] as const
}

export function useGetIncidentWorkflowsId<TError = unknown>(
  args: InferRequestType<(typeof client.incident_workflows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows)[':id']['$get']>>
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
        ? getGetIncidentWorkflowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentWorkflowsId<TError = unknown>(
  args: InferRequestType<(typeof client.incident_workflows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows)[':id']['$get']>>
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
        ? getGetIncidentWorkflowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentWorkflowsIdKey() {
  return ['incident_workflows', '/incident_workflows/:id', 'PUT'] as const
}

export function usePutIncidentWorkflowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.incident_workflows)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incident_workflows)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentWorkflowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incident_workflows)[':id']['$put']> },
      ) => parseResponse(client.incident_workflows[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIncidentWorkflowsIdKey() {
  return ['incident_workflows', '/incident_workflows/:id', 'DELETE'] as const
}

export function useDeleteIncidentWorkflowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incident_workflows)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incident_workflows)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIncidentWorkflowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incident_workflows)[':id']['$delete']> },
      ) => parseResponse(client.incident_workflows[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncidentWorkflowsIdInstancesKey() {
  return ['incident_workflows', '/incident_workflows/:id/instances', 'POST'] as const
}

export function usePostIncidentWorkflowsIdInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incident_workflows)[':id']['instances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incident_workflows)[':id']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentWorkflowsIdInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.incident_workflows)[':id']['instances']['$post']>
        },
      ) => parseResponse(client.incident_workflows[':id'].instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentWorkflowsActionsKey(
  args: InferRequestType<typeof client.incident_workflows.actions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['incident_workflows', '/incident_workflows/actions', keyArgs] as const
}

export function useGetIncidentWorkflowsActions<TError = unknown>(
  args: InferRequestType<typeof client.incident_workflows.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.actions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentWorkflowsActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentWorkflowsActions<TError = unknown>(
  args: InferRequestType<typeof client.incident_workflows.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.actions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentWorkflowsActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentWorkflowsActionsIdKey(
  args: InferRequestType<(typeof client.incident_workflows.actions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incident_workflows', '/incident_workflows/actions/:id', keyArgs] as const
}

export function useGetIncidentWorkflowsActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.incident_workflows.actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.actions)[':id']['$get']>>
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
        ? getGetIncidentWorkflowsActionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.actions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows.actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentWorkflowsActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.incident_workflows.actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.actions)[':id']['$get']>>
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
        ? getGetIncidentWorkflowsActionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.actions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows.actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentWorkflowsTriggersKey(
  args: InferRequestType<typeof client.incident_workflows.triggers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['incident_workflows', '/incident_workflows/triggers', keyArgs] as const
}

export function useGetIncidentWorkflowsTriggers<TError = unknown>(
  args: InferRequestType<typeof client.incident_workflows.triggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.triggers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentWorkflowsTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.triggers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows.triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentWorkflowsTriggers<TError = unknown>(
  args: InferRequestType<typeof client.incident_workflows.triggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.triggers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentWorkflowsTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.triggers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incident_workflows.triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentWorkflowsTriggersKey() {
  return ['incident_workflows', '/incident_workflows/triggers', 'POST'] as const
}

export function usePostIncidentWorkflowsTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.incident_workflows.triggers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.incident_workflows.triggers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentWorkflowsTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.incident_workflows.triggers.$post> },
      ) => parseResponse(client.incident_workflows.triggers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentWorkflowsTriggersIdKey(
  args: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incident_workflows', '/incident_workflows/triggers/:id', keyArgs] as const
}

export function useGetIncidentWorkflowsTriggersId<TError = unknown>(
  args: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.triggers)[':id']['$get']>>
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
        ? getGetIncidentWorkflowsTriggersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.triggers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incident_workflows.triggers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentWorkflowsTriggersId<TError = unknown>(
  args: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.triggers)[':id']['$get']>>
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
        ? getGetIncidentWorkflowsTriggersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.triggers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incident_workflows.triggers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentWorkflowsTriggersIdKey() {
  return ['incident_workflows', '/incident_workflows/triggers/:id', 'PUT'] as const
}

export function usePutIncidentWorkflowsTriggersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incident_workflows.triggers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentWorkflowsTriggersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$put']> },
      ) => parseResponse(client.incident_workflows.triggers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIncidentWorkflowsTriggersIdKey() {
  return ['incident_workflows', '/incident_workflows/triggers/:id', 'DELETE'] as const
}

export function useDeleteIncidentWorkflowsTriggersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incident_workflows.triggers)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIncidentWorkflowsTriggersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$delete']> },
      ) => parseResponse(client.incident_workflows.triggers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncidentWorkflowsTriggersIdServicesKey() {
  return ['incident_workflows', '/incident_workflows/triggers/:id/services', 'POST'] as const
}

export function usePostIncidentWorkflowsTriggersIdServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.incident_workflows.triggers)[':id']['services']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incident_workflows.triggers)[':id']['services']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentWorkflowsTriggersIdServicesKey()
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
            (typeof client.incident_workflows.triggers)[':id']['services']['$post']
          >
        },
      ) =>
        parseResponse(client.incident_workflows.triggers[':id'].services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIncidentWorkflowsTriggersTriggerIdServicesServiceIdKey() {
  return [
    'incident_workflows',
    '/incident_workflows/triggers/:trigger_id/services/:service_id',
    'DELETE',
  ] as const
}

export function useDeleteIncidentWorkflowsTriggersTriggerIdServicesServiceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.incident_workflows.triggers)[':trigger_id']['services'][':service_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.incident_workflows.triggers)[':trigger_id']['services'][':service_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIncidentWorkflowsTriggersTriggerIdServicesServiceIdKey()
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
            (typeof client.incident_workflows.triggers)[':trigger_id']['services'][':service_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.incident_workflows.triggers[':trigger_id'].services[':service_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsKey(args: InferRequestType<typeof client.incidents.$get>) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents', keyArgs] as const
}

export function useGetIncidents<TError = unknown>(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIncidentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidents<TError = unknown>(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIncidentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsKey() {
  return ['incidents', '/incidents', 'PUT'] as const
}

export function usePutIncidents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.incidents.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.incidents.$put> }) =>
        parseResponse(client.incidents.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncidentsKey() {
  return ['incidents', '/incidents', 'POST'] as const
}

export function usePostIncidents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.incidents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.incidents.$post> }) =>
        parseResponse(client.incidents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdKey(
  args: InferRequestType<(typeof client.incidents)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id', keyArgs] as const
}

export function useGetIncidentsId<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.incidents)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIncidentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.incidents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsId<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.incidents)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIncidentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.incidents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsIdKey() {
  return ['incidents', '/incidents/:id', 'PUT'] as const
}

export function usePutIncidentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.incidents)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incidents)[':id']['$put']> },
      ) => parseResponse(client.incidents[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdAlertsKey(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/alerts', keyArgs] as const
}

export function useGetIncidentsIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['alerts']['$get']>>
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
        ? getGetIncidentsIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['alerts']['$get']>>
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
        ? getGetIncidentsIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsIdAlertsKey() {
  return ['incidents', '/incidents/:id/alerts', 'PUT'] as const
}

export function usePutIncidentsIdAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['alerts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['alerts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incidents)[':id']['alerts']['$put']> },
      ) => parseResponse(client.incidents[':id'].alerts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdAlertsAlertIdKey(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/alerts/:alert_id', keyArgs] as const
}

export function useGetIncidentsIdAlertsAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$get']>>
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
        ? getGetIncidentsIdAlertsAlertIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].alerts[':alert_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdAlertsAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$get']>>
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
        ? getGetIncidentsIdAlertsAlertIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].alerts[':alert_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsIdAlertsAlertIdKey() {
  return ['incidents', '/incidents/:id/alerts/:alert_id', 'PUT'] as const
}

export function usePutIncidentsIdAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdAlertsAlertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$put']>
        },
      ) => parseResponse(client.incidents[':id'].alerts[':alert_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIncidentsIdBusinessServicesBusinessServiceIdImpactsKey() {
  return [
    'incidents',
    '/incidents/:id/business_services/:business_service_id/impacts',
    'PUT',
  ] as const
}

export function usePutIncidentsIdBusinessServicesBusinessServiceIdImpacts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.incidents)[':id']['business_services'][':business_service_id']['impacts']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.incidents)[':id']['business_services'][':business_service_id']['impacts']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdBusinessServicesBusinessServiceIdImpactsKey()
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
            (typeof client.incidents)[':id']['business_services'][':business_service_id']['impacts']['$put']
          >
        },
      ) =>
        parseResponse(
          client.incidents[':id'].business_services[':business_service_id'].impacts.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdBusinessServicesImpactsKey(
  args: InferRequestType<(typeof client.incidents)[':id']['business_services']['impacts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/business_services/impacts', keyArgs] as const
}

export function useGetIncidentsIdBusinessServicesImpacts<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['business_services']['impacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.incidents)[':id']['business_services']['impacts']['$get']>
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
        ? getGetIncidentsIdBusinessServicesImpactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.incidents)[':id']['business_services']['impacts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].business_services.impacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdBusinessServicesImpacts<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['business_services']['impacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.incidents)[':id']['business_services']['impacts']['$get']>
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
        ? getGetIncidentsIdBusinessServicesImpactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.incidents)[':id']['business_services']['impacts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].business_services.impacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentsIdCustomFieldsValuesKey(
  args: InferRequestType<(typeof client.incidents)[':id']['custom_fields']['values']['$get']>,
) {
  return ['incidents', '/incidents/:id/custom_fields/values', args] as const
}

export function useGetIncidentsIdCustomFieldsValues<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['custom_fields']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['custom_fields']['values']['$get']>>
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
        ? getGetIncidentsIdCustomFieldsValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['custom_fields']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].custom_fields.values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdCustomFieldsValues<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['custom_fields']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['custom_fields']['values']['$get']>>
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
        ? getGetIncidentsIdCustomFieldsValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['custom_fields']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].custom_fields.values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsIdCustomFieldsValuesKey() {
  return ['incidents', '/incidents/:id/custom_fields/values', 'PUT'] as const
}

export function usePutIncidentsIdCustomFieldsValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['custom_fields']['values']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['custom_fields']['values']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdCustomFieldsValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.incidents)[':id']['custom_fields']['values']['$put']>
        },
      ) => parseResponse(client.incidents[':id'].custom_fields.values.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdLogEntriesKey(
  args: InferRequestType<(typeof client.incidents)[':id']['log_entries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/log_entries', keyArgs] as const
}

export function useGetIncidentsIdLogEntries<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['log_entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['log_entries']['$get']>>
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
        ? getGetIncidentsIdLogEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['log_entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].log_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdLogEntries<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['log_entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['log_entries']['$get']>>
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
        ? getGetIncidentsIdLogEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['log_entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].log_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsIdMergeKey() {
  return ['incidents', '/incidents/:id/merge', 'PUT'] as const
}

export function usePutIncidentsIdMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.incidents)[':id']['merge']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['merge']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incidents)[':id']['merge']['$put']> },
      ) => parseResponse(client.incidents[':id'].merge.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdNotesKey(
  args: InferRequestType<(typeof client.incidents)[':id']['notes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/notes', keyArgs] as const
}

export function useGetIncidentsIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['notes']['$get']>>
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
        ? getGetIncidentsIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['notes']['$get']>>
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
        ? getGetIncidentsIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsIdNotesKey() {
  return ['incidents', '/incidents/:id/notes', 'POST'] as const
}

export function usePostIncidentsIdNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['notes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['notes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsIdNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incidents)[':id']['notes']['$post']> },
      ) => parseResponse(client.incidents[':id'].notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIncidentsIdNotesNoteIdKey() {
  return ['incidents', '/incidents/:id/notes/:note_id', 'PUT'] as const
}

export function usePutIncidentsIdNotesNoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['notes'][':note_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['notes'][':note_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdNotesNoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.incidents)[':id']['notes'][':note_id']['$put']> },
      ) => parseResponse(client.incidents[':id'].notes[':note_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIncidentsIdNotesNoteIdKey() {
  return ['incidents', '/incidents/:id/notes/:note_id', 'DELETE'] as const
}

export function useDeleteIncidentsIdNotesNoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['notes'][':note_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['notes'][':note_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIncidentsIdNotesNoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.incidents)[':id']['notes'][':note_id']['$delete']>
        },
      ) => parseResponse(client.incidents[':id'].notes[':note_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdOutlierIncidentKey(
  args: InferRequestType<(typeof client.incidents)[':id']['outlier_incident']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/outlier_incident', keyArgs] as const
}

export function useGetIncidentsIdOutlierIncident<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['outlier_incident']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['outlier_incident']['$get']>>
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
        ? getGetIncidentsIdOutlierIncidentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['outlier_incident']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].outlier_incident.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdOutlierIncident<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['outlier_incident']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['outlier_incident']['$get']>>
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
        ? getGetIncidentsIdOutlierIncidentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['outlier_incident']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].outlier_incident.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentsIdPastIncidentsKey(
  args: InferRequestType<(typeof client.incidents)[':id']['past_incidents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/past_incidents', keyArgs] as const
}

export function useGetIncidentsIdPastIncidents<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['past_incidents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['past_incidents']['$get']>>
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
        ? getGetIncidentsIdPastIncidentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['past_incidents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].past_incidents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdPastIncidents<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['past_incidents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['past_incidents']['$get']>>
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
        ? getGetIncidentsIdPastIncidentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['past_incidents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].past_incidents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentsIdRelatedChangeEventsKey(
  args: InferRequestType<(typeof client.incidents)[':id']['related_change_events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/related_change_events', keyArgs] as const
}

export function useGetIncidentsIdRelatedChangeEvents<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['related_change_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['related_change_events']['$get']>>
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
        ? getGetIncidentsIdRelatedChangeEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['related_change_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].related_change_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdRelatedChangeEvents<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['related_change_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['related_change_events']['$get']>>
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
        ? getGetIncidentsIdRelatedChangeEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['related_change_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].related_change_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentsIdRelatedIncidentsKey(
  args: InferRequestType<(typeof client.incidents)[':id']['related_incidents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/related_incidents', keyArgs] as const
}

export function useGetIncidentsIdRelatedIncidents<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['related_incidents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['related_incidents']['$get']>>
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
        ? getGetIncidentsIdRelatedIncidentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['related_incidents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].related_incidents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdRelatedIncidents<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['related_incidents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['related_incidents']['$get']>>
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
        ? getGetIncidentsIdRelatedIncidentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['related_incidents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].related_incidents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsIdResponderRequestsKey() {
  return ['incidents', '/incidents/:id/responder_requests', 'POST'] as const
}

export function usePostIncidentsIdResponderRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['responder_requests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['responder_requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsIdResponderRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.incidents)[':id']['responder_requests']['$post']>
        },
      ) => parseResponse(client.incidents[':id'].responder_requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIncidentsIdResponderRequestsCancelKey() {
  return ['incidents', '/incidents/:id/responder_requests/cancel', 'PUT'] as const
}

export function usePutIncidentsIdResponderRequestsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.incidents)[':id']['responder_requests']['cancel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['responder_requests']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdResponderRequestsCancelKey()
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
            (typeof client.incidents)[':id']['responder_requests']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(client.incidents[':id'].responder_requests.cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsReviewsKey(
  args: InferRequestType<typeof client.incidents.reviews.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/reviews', keyArgs] as const
}

export function useGetIncidentsReviews<TError = unknown>(
  args: InferRequestType<typeof client.incidents.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.reviews.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentsReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.reviews.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsReviews<TError = unknown>(
  args: InferRequestType<typeof client.incidents.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.reviews.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentsReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.reviews.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentsReviewsActionItemsKey(
  args: InferRequestType<typeof client.incidents.reviews.action_items.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/reviews/action_items', keyArgs] as const
}

export function useGetIncidentsReviewsActionItems<TError = unknown>(
  args: InferRequestType<typeof client.incidents.reviews.action_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.incidents.reviews.action_items.$get>>
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
        ? getGetIncidentsReviewsActionItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.incidents.reviews.action_items.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.reviews.action_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsReviewsActionItems<TError = unknown>(
  args: InferRequestType<typeof client.incidents.reviews.action_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.incidents.reviews.action_items.$get>>
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
        ? getGetIncidentsReviewsActionItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.incidents.reviews.action_items.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.reviews.action_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentsIdReviewKey(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/review', keyArgs] as const
}

export function useGetIncidentsIdReview<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['review']['$get']>>
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
        ? getGetIncidentsIdReviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['review']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].review.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdReview<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['review']['$get']>>
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
        ? getGetIncidentsIdReviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['review']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents[':id'].review.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsIdReviewKey() {
  return ['incidents', '/incidents/:id/review', 'PUT'] as const
}

export function usePutIncidentsIdReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['review']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['review']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsIdReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incidents)[':id']['review']['$put']> },
      ) => parseResponse(client.incidents[':id'].review.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncidentsIdReviewKey() {
  return ['incidents', '/incidents/:id/review', 'POST'] as const
}

export function usePostIncidentsIdReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['review']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['review']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsIdReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incidents)[':id']['review']['$post']> },
      ) => parseResponse(client.incidents[':id'].review.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdReviewActionItemsKey(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['action_items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/review/action_items', keyArgs] as const
}

export function useGetIncidentsIdReviewActionItems<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['action_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['review']['action_items']['$get']>>
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
        ? getGetIncidentsIdReviewActionItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['review']['action_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].review.action_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdReviewActionItems<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['action_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['review']['action_items']['$get']>>
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
        ? getGetIncidentsIdReviewActionItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['review']['action_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].review.action_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsIdReviewMarkersKey() {
  return ['incidents', '/incidents/:id/review/markers', 'POST'] as const
}

export function usePostIncidentsIdReviewMarkers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['review']['markers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['review']['markers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsIdReviewMarkersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.incidents)[':id']['review']['markers']['$post']>
        },
      ) => parseResponse(client.incidents[':id'].review.markers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdScribeTranscriptsKey(
  args: InferRequestType<(typeof client.incidents)[':id']['scribe_transcripts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/scribe_transcripts', keyArgs] as const
}

export function useGetIncidentsIdScribeTranscripts<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['scribe_transcripts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['scribe_transcripts']['$get']>>
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
        ? getGetIncidentsIdScribeTranscriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['scribe_transcripts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].scribe_transcripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdScribeTranscripts<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['scribe_transcripts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['scribe_transcripts']['$get']>>
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
        ? getGetIncidentsIdScribeTranscriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents)[':id']['scribe_transcripts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].scribe_transcripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsIdSnoozeKey() {
  return ['incidents', '/incidents/:id/snooze', 'POST'] as const
}

export function usePostIncidentsIdSnooze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['snooze']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['snooze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsIdSnoozeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.incidents)[':id']['snooze']['$post']> },
      ) => parseResponse(client.incidents[':id'].snooze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncidentsIdStatusUpdatesKey() {
  return ['incidents', '/incidents/:id/status_updates', 'POST'] as const
}

export function usePostIncidentsIdStatusUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents)[':id']['status_updates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['status_updates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsIdStatusUpdatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.incidents)[':id']['status_updates']['$post']> },
      ) => parseResponse(client.incidents[':id'].status_updates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsIdStatusUpdatesSubscribersKey(
  args: InferRequestType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/:id/status_updates/subscribers', keyArgs] as const
}

export function useGetIncidentsIdStatusUpdatesSubscribers<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$get']>
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
        ? getGetIncidentsIdStatusUpdatesSubscribersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].status_updates.subscribers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsIdStatusUpdatesSubscribers<TError = unknown>(
  args: InferRequestType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$get']>
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
        ? getGetIncidentsIdStatusUpdatesSubscribersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents[':id'].status_updates.subscribers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsIdStatusUpdatesSubscribersKey() {
  return ['incidents', '/incidents/:id/status_updates/subscribers', 'POST'] as const
}

export function usePostIncidentsIdStatusUpdatesSubscribers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsIdStatusUpdatesSubscribersKey()
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
            (typeof client.incidents)[':id']['status_updates']['subscribers']['$post']
          >
        },
      ) =>
        parseResponse(client.incidents[':id'].status_updates.subscribers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncidentsIdStatusUpdatesUnsubscribeKey() {
  return ['incidents', '/incidents/:id/status_updates/unsubscribe', 'POST'] as const
}

export function usePostIncidentsIdStatusUpdatesUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.incidents)[':id']['status_updates']['unsubscribe']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents)[':id']['status_updates']['unsubscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsIdStatusUpdatesUnsubscribeKey()
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
            (typeof client.incidents)[':id']['status_updates']['unsubscribe']['$post']
          >
        },
      ) =>
        parseResponse(client.incidents[':id'].status_updates.unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsTypesKey(
  args: InferRequestType<typeof client.incidents.types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/types', keyArgs] as const
}

export function useGetIncidentsTypes<TError = unknown>(
  args: InferRequestType<typeof client.incidents.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIncidentsTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsTypes<TError = unknown>(
  args: InferRequestType<typeof client.incidents.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIncidentsTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsTypesKey() {
  return ['incidents', '/incidents/types', 'POST'] as const
}

export function usePostIncidentsTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.types.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.incidents.types.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.incidents.types.$post> }) =>
        parseResponse(client.incidents.types.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsTypesTypeIdOrNameKey(
  args: InferRequestType<(typeof client.incidents.types)[':type_id_or_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/types/:type_id_or_name', keyArgs] as const
}

export function useGetIncidentsTypesTypeIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.incidents.types)[':type_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.types)[':type_id_or_name']['$get']>>
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
        ? getGetIncidentsTypesTypeIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.types)[':type_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents.types[':type_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsTypesTypeIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.incidents.types)[':type_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.types)[':type_id_or_name']['$get']>>
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
        ? getGetIncidentsTypesTypeIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.types)[':type_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents.types[':type_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsTypesTypeIdOrNameKey() {
  return ['incidents', '/incidents/types/:type_id_or_name', 'PUT'] as const
}

export function usePutIncidentsTypesTypeIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents.types)[':type_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents.types)[':type_id_or_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsTypesTypeIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.incidents.types)[':type_id_or_name']['$put']> },
      ) => parseResponse(client.incidents.types[':type_id_or_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsTypesTypeIdOrNameCustomFieldsKey(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['incidents', '/incidents/types/:type_id_or_name/custom_fields', keyArgs] as const
}

export function useGetIncidentsTypesTypeIdOrNameCustomFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$get']
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
        ? getGetIncidentsTypesTypeIdOrNameCustomFieldsKey(args)
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
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$get']
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
          client.incidents.types[':type_id_or_name'].custom_fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsTypesTypeIdOrNameCustomFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$get']
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
        ? getGetIncidentsTypesTypeIdOrNameCustomFieldsKey(args)
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
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$get']
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
          client.incidents.types[':type_id_or_name'].custom_fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsTypesTypeIdOrNameCustomFieldsKey() {
  return ['incidents', '/incidents/types/:type_id_or_name/custom_fields', 'POST'] as const
}

export function usePostIncidentsTypesTypeIdOrNameCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsTypesTypeIdOrNameCustomFieldsKey()
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
            (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$post']
          >
        },
      ) =>
        parseResponse(
          client.incidents.types[':type_id_or_name'].custom_fields.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdKey(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'incidents',
    '/incidents/types/:type_id_or_name/custom_fields/:field_id',
    keyArgs,
  ] as const
}

export function useGetIncidentsTypesTypeIdOrNameCustomFieldsFieldId<TError = unknown>(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$get']
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
        ? getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdKey(args)
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
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$get']
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
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsTypesTypeIdOrNameCustomFieldsFieldId<TError = unknown>(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$get']
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
        ? getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdKey(args)
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
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$get']
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
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsTypesTypeIdOrNameCustomFieldsFieldIdKey() {
  return ['incidents', '/incidents/types/:type_id_or_name/custom_fields/:field_id', 'PUT'] as const
}

export function usePutIncidentsTypesTypeIdOrNameCustomFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsTypesTypeIdOrNameCustomFieldsFieldIdKey()
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
            (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdKey() {
  return [
    'incidents',
    '/incidents/types/:type_id_or_name/custom_fields/:field_id',
    'DELETE',
  ] as const
}

export function useDeleteIncidentsTypesTypeIdOrNameCustomFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdKey()
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
            (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsKey(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'incidents',
    '/incidents/types/:type_id_or_name/custom_fields/:field_id/field_options',
    keyArgs,
  ] as const
}

export function useGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$get']
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
        ? getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsKey(args)
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
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$get']
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
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$get']
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
        ? getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsKey(args)
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
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$get']
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
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsKey() {
  return [
    'incidents',
    '/incidents/types/:type_id_or_name/custom_fields/:field_id/field_options',
    'POST',
  ] as const
}

export function usePostIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsKey()
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
            (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdKey(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'incidents',
    '/incidents/types/:type_id_or_name/custom_fields/:field_id/field_options/:field_option_id',
    keyArgs,
  ] as const
}

export function useGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$get']
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
        ? getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdKey(args)
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
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$get']
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
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options[
            ':field_option_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$get']
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
        ? getGetIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdKey(args)
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
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$get']
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
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options[
            ':field_option_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdKey() {
  return [
    'incidents',
    '/incidents/types/:type_id_or_name/custom_fields/:field_id/field_options/:field_option_id',
    'PUT',
  ] as const
}

export function usePutIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdKey()
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
            (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options[
            ':field_option_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdKey() {
  return [
    'incidents',
    '/incidents/types/:type_id_or_name/custom_fields/:field_id/field_options/:field_option_id',
    'DELETE',
  ] as const
}

export function useDeleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdKey()
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
            (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options[
            ':field_option_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsCustomFieldsKey(
  args: InferRequestType<typeof client.incidents.custom_fields.$get>,
) {
  return ['incidents', '/incidents/custom_fields', args] as const
}

export function useGetIncidentsCustomFields<TError = unknown>(
  args: InferRequestType<typeof client.incidents.custom_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incidents.custom_fields.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentsCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incidents.custom_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsCustomFields<TError = unknown>(
  args: InferRequestType<typeof client.incidents.custom_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incidents.custom_fields.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncidentsCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.incidents.custom_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsCustomFieldsKey() {
  return ['incidents', '/incidents/custom_fields', 'POST'] as const
}

export function usePostIncidentsCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.incidents.custom_fields.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.incidents.custom_fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.incidents.custom_fields.$post> },
      ) => parseResponse(client.incidents.custom_fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsCustomFieldsFieldIdKey(
  args: InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$get']>,
) {
  return ['incidents', '/incidents/custom_fields/:field_id', args] as const
}

export function useGetIncidentsCustomFieldsFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.custom_fields)[':field_id']['$get']>>
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
        ? getGetIncidentsCustomFieldsFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.custom_fields)[':field_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents.custom_fields[':field_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsCustomFieldsFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.custom_fields)[':field_id']['$get']>>
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
        ? getGetIncidentsCustomFieldsFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.custom_fields)[':field_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.incidents.custom_fields[':field_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIncidentsCustomFieldsFieldIdKey() {
  return ['incidents', '/incidents/custom_fields/:field_id', 'PUT'] as const
}

export function usePutIncidentsCustomFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.incidents.custom_fields)[':field_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsCustomFieldsFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$put']> },
      ) => parseResponse(client.incidents.custom_fields[':field_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIncidentsCustomFieldsFieldIdKey() {
  return ['incidents', '/incidents/custom_fields/:field_id', 'DELETE'] as const
}

export function useDeleteIncidentsCustomFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.incidents.custom_fields)[':field_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIncidentsCustomFieldsFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$delete']>
        },
      ) => parseResponse(client.incidents.custom_fields[':field_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIncidentsCustomFieldsFieldIdFieldOptionsKey(
  args: InferRequestType<
    (typeof client.incidents.custom_fields)[':field_id']['field_options']['$get']
  >,
) {
  return ['incidents', '/incidents/custom_fields/:field_id/field_options', args] as const
}

export function useGetIncidentsCustomFieldsFieldIdFieldOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.incidents.custom_fields)[':field_id']['field_options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.custom_fields)[':field_id']['field_options']['$get']
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
        ? getGetIncidentsCustomFieldsFieldIdFieldOptionsKey(args)
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
                (typeof client.incidents.custom_fields)[':field_id']['field_options']['$get']
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
          client.incidents.custom_fields[':field_id'].field_options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidentsCustomFieldsFieldIdFieldOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.incidents.custom_fields)[':field_id']['field_options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.custom_fields)[':field_id']['field_options']['$get']
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
        ? getGetIncidentsCustomFieldsFieldIdFieldOptionsKey(args)
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
                (typeof client.incidents.custom_fields)[':field_id']['field_options']['$get']
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
          client.incidents.custom_fields[':field_id'].field_options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIncidentsCustomFieldsFieldIdFieldOptionsKey() {
  return ['incidents', '/incidents/custom_fields/:field_id/field_options', 'POST'] as const
}

export function usePostIncidentsCustomFieldsFieldIdFieldOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.incidents.custom_fields)[':field_id']['field_options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['field_options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncidentsCustomFieldsFieldIdFieldOptionsKey()
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
            (typeof client.incidents.custom_fields)[':field_id']['field_options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.incidents.custom_fields[':field_id'].field_options.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdKey() {
  return [
    'incidents',
    '/incidents/custom_fields/:field_id/field_options/:field_option_id',
    'PUT',
  ] as const
}

export function usePutIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.incidents.custom_fields)[':field_id']['field_options'][':field_option_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.incidents.custom_fields)[':field_id']['field_options'][':field_option_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdKey()
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
            (typeof client.incidents.custom_fields)[':field_id']['field_options'][':field_option_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.incidents.custom_fields[':field_id'].field_options[':field_option_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdKey() {
  return [
    'incidents',
    '/incidents/custom_fields/:field_id/field_options/:field_option_id',
    'DELETE',
  ] as const
}

export function useDeleteIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.incidents.custom_fields)[':field_id']['field_options'][':field_option_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.incidents.custom_fields)[':field_id']['field_options'][':field_option_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdKey()
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
            (typeof client.incidents.custom_fields)[':field_id']['field_options'][':field_option_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.incidents.custom_fields[':field_id'].field_options[':field_option_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIpAllowListsKey(args: InferRequestType<typeof client.ip_allow_lists.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ip_allow_lists', '/ip_allow_lists', keyArgs] as const
}

export function useGetIpAllowLists<TError = unknown>(
  args: InferRequestType<typeof client.ip_allow_lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allow_lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpAllowListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allow_lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_allow_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpAllowLists<TError = unknown>(
  args: InferRequestType<typeof client.ip_allow_lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allow_lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpAllowListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allow_lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_allow_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpAllowListsKey() {
  return ['ip_allow_lists', '/ip_allow_lists', 'POST'] as const
}

export function usePostIpAllowLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allow_lists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ip_allow_lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpAllowListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ip_allow_lists.$post> }) =>
        parseResponse(client.ip_allow_lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpAllowListsIdKey(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ip_allow_lists', '/ip_allow_lists/:id', keyArgs] as const
}

export function useGetIpAllowListsId<TError = unknown>(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpAllowListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_allow_lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpAllowListsId<TError = unknown>(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpAllowListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_allow_lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpAllowListsIdKey() {
  return ['ip_allow_lists', '/ip_allow_lists/:id', 'PUT'] as const
}

export function usePutIpAllowListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ip_allow_lists)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpAllowListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ip_allow_lists)[':id']['$put']> },
      ) => parseResponse(client.ip_allow_lists[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpAllowListsIdKey() {
  return ['ip_allow_lists', '/ip_allow_lists/:id', 'DELETE'] as const
}

export function useDeleteIpAllowListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ip_allow_lists)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpAllowListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ip_allow_lists)[':id']['$delete']> },
      ) => parseResponse(client.ip_allow_lists[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpAllowListsIdAuditRecordsKey(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['audit']['records']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ip_allow_lists', '/ip_allow_lists/:id/audit/records', keyArgs] as const
}

export function useGetIpAllowListsIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['audit']['records']['$get']>>
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
        ? getGetIpAllowListsIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ip_allow_lists[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpAllowListsIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['audit']['records']['$get']>>
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
        ? getGetIpAllowListsIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_allow_lists)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ip_allow_lists[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicenseAllocationsKey(
  args: InferRequestType<typeof client.license_allocations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['license_allocations', '/license_allocations', keyArgs] as const
}

export function useGetLicenseAllocations<TError = unknown>(
  args: InferRequestType<typeof client.license_allocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.license_allocations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLicenseAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.license_allocations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license_allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicenseAllocations<TError = unknown>(
  args: InferRequestType<typeof client.license_allocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.license_allocations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLicenseAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.license_allocations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license_allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicensesKey(args: InferRequestType<typeof client.licenses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['licenses', '/licenses', keyArgs] as const
}

export function useGetLicenses<TError = unknown>(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.licenses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLicenses<TError = unknown>(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.licenses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLogEntriesKey(args: InferRequestType<typeof client.log_entries.$get>) {
  const { header: _, ...keyArgs } = args
  return ['log_entries', '/log_entries', keyArgs] as const
}

export function useGetLogEntries<TError = unknown>(
  args: InferRequestType<typeof client.log_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log_entries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogEntriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log_entries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.log_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogEntries<TError = unknown>(
  args: InferRequestType<typeof client.log_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log_entries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogEntriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log_entries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.log_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogEntriesIdKey(
  args: InferRequestType<(typeof client.log_entries)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['log_entries', '/log_entries/:id', keyArgs] as const
}

export function useGetLogEntriesId<TError = unknown>(
  args: InferRequestType<(typeof client.log_entries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.log_entries)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogEntriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.log_entries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.log_entries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogEntriesId<TError = unknown>(
  args: InferRequestType<(typeof client.log_entries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.log_entries)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogEntriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.log_entries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.log_entries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLogEntriesIdChannelKey() {
  return ['log_entries', '/log_entries/:id/channel', 'PUT'] as const
}

export function usePutLogEntriesIdChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.log_entries)[':id']['channel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.log_entries)[':id']['channel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLogEntriesIdChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.log_entries)[':id']['channel']['$put']> },
      ) => parseResponse(client.log_entries[':id'].channel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMaintenanceWindowsKey(
  args: InferRequestType<typeof client.maintenance_windows.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['maintenance_windows', '/maintenance_windows', keyArgs] as const
}

export function useGetMaintenanceWindows<TError = unknown>(
  args: InferRequestType<typeof client.maintenance_windows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.maintenance_windows.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMaintenanceWindowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.maintenance_windows.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maintenance_windows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMaintenanceWindows<TError = unknown>(
  args: InferRequestType<typeof client.maintenance_windows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.maintenance_windows.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMaintenanceWindowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.maintenance_windows.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maintenance_windows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMaintenanceWindowsKey() {
  return ['maintenance_windows', '/maintenance_windows', 'POST'] as const
}

export function usePostMaintenanceWindows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance_windows.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.maintenance_windows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMaintenanceWindowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.maintenance_windows.$post> }) =>
        parseResponse(client.maintenance_windows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMaintenanceWindowsIdKey(
  args: InferRequestType<(typeof client.maintenance_windows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['maintenance_windows', '/maintenance_windows/:id', keyArgs] as const
}

export function useGetMaintenanceWindowsId<TError = unknown>(
  args: InferRequestType<(typeof client.maintenance_windows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance_windows)[':id']['$get']>>
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
        ? getGetMaintenanceWindowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance_windows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maintenance_windows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMaintenanceWindowsId<TError = unknown>(
  args: InferRequestType<(typeof client.maintenance_windows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance_windows)[':id']['$get']>>
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
        ? getGetMaintenanceWindowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance_windows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maintenance_windows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMaintenanceWindowsIdKey() {
  return ['maintenance_windows', '/maintenance_windows/:id', 'PUT'] as const
}

export function usePutMaintenanceWindowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maintenance_windows)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.maintenance_windows)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMaintenanceWindowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.maintenance_windows)[':id']['$put']> },
      ) => parseResponse(client.maintenance_windows[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMaintenanceWindowsIdKey() {
  return ['maintenance_windows', '/maintenance_windows/:id', 'DELETE'] as const
}

export function useDeleteMaintenanceWindowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance_windows)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.maintenance_windows)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMaintenanceWindowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.maintenance_windows)[':id']['$delete']> },
      ) => parseResponse(client.maintenance_windows[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsKey(args: InferRequestType<typeof client.notifications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications', keyArgs] as const
}

export function useGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOauthDelegationsKey() {
  return ['oauth_delegations', '/oauth_delegations', 'DELETE'] as const
}

export function useDeleteOauthDelegations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_delegations.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth_delegations.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOauthDelegationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth_delegations.$delete> }) =>
        parseResponse(client.oauth_delegations.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthDelegationsRevocationRequestsStatusKey(
  args: InferRequestType<typeof client.oauth_delegations.revocation_requests.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['oauth_delegations', '/oauth_delegations/revocation_requests/status', keyArgs] as const
}

export function useGetOauthDelegationsRevocationRequestsStatus<TError = unknown>(
  args: InferRequestType<typeof client.oauth_delegations.revocation_requests.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.oauth_delegations.revocation_requests.status.$get>>
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
        ? getGetOauthDelegationsRevocationRequestsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.oauth_delegations.revocation_requests.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.oauth_delegations.revocation_requests.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthDelegationsRevocationRequestsStatus<TError = unknown>(
  args: InferRequestType<typeof client.oauth_delegations.revocation_requests.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.oauth_delegations.revocation_requests.status.$get>>
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
        ? getGetOauthDelegationsRevocationRequestsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.oauth_delegations.revocation_requests.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.oauth_delegations.revocation_requests.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOncallsKey(args: InferRequestType<typeof client.oncalls.$get>) {
  const { header: _, ...keyArgs } = args
  return ['oncalls', '/oncalls', keyArgs] as const
}

export function useGetOncalls<TError = unknown>(
  args: InferRequestType<typeof client.oncalls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oncalls.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOncallsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oncalls.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.oncalls.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOncalls<TError = unknown>(
  args: InferRequestType<typeof client.oncalls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oncalls.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOncallsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oncalls.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.oncalls.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPausedIncidentReportsAlertsKey(
  args: InferRequestType<typeof client.paused_incident_reports.alerts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['paused_incident_reports', '/paused_incident_reports/alerts', keyArgs] as const
}

export function useGetPausedIncidentReportsAlerts<TError = unknown>(
  args: InferRequestType<typeof client.paused_incident_reports.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.paused_incident_reports.alerts.$get>>
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
        ? getGetPausedIncidentReportsAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.paused_incident_reports.alerts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paused_incident_reports.alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPausedIncidentReportsAlerts<TError = unknown>(
  args: InferRequestType<typeof client.paused_incident_reports.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.paused_incident_reports.alerts.$get>>
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
        ? getGetPausedIncidentReportsAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.paused_incident_reports.alerts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paused_incident_reports.alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPausedIncidentReportsCountsKey(
  args: InferRequestType<typeof client.paused_incident_reports.counts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['paused_incident_reports', '/paused_incident_reports/counts', keyArgs] as const
}

export function useGetPausedIncidentReportsCounts<TError = unknown>(
  args: InferRequestType<typeof client.paused_incident_reports.counts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.paused_incident_reports.counts.$get>>
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
        ? getGetPausedIncidentReportsCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.paused_incident_reports.counts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paused_incident_reports.counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPausedIncidentReportsCounts<TError = unknown>(
  args: InferRequestType<typeof client.paused_incident_reports.counts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.paused_incident_reports.counts.$get>>
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
        ? getGetPausedIncidentReportsCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.paused_incident_reports.counts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paused_incident_reports.counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPrioritiesKey(args: InferRequestType<typeof client.priorities.$get>) {
  const { header: _, ...keyArgs } = args
  return ['priorities', '/priorities', keyArgs] as const
}

export function useGetPriorities<TError = unknown>(
  args: InferRequestType<typeof client.priorities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrioritiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.priorities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriorities<TError = unknown>(
  args: InferRequestType<typeof client.priorities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrioritiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.priorities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRulesetsKey(args: InferRequestType<typeof client.rulesets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rulesets', '/rulesets', keyArgs] as const
}

export function useGetRulesets<TError = unknown>(
  args: InferRequestType<typeof client.rulesets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rulesets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRulesets<TError = unknown>(
  args: InferRequestType<typeof client.rulesets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rulesets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRulesetsKey() {
  return ['rulesets', '/rulesets', 'POST'] as const
}

export function usePostRulesets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.rulesets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rulesets.$post> }) =>
        parseResponse(client.rulesets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesetsIdKey(
  args: InferRequestType<(typeof client.rulesets)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rulesets', '/rulesets/:id', keyArgs] as const
}

export function useGetRulesetsId<TError = unknown>(
  args: InferRequestType<(typeof client.rulesets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rulesets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesetsId<TError = unknown>(
  args: InferRequestType<(typeof client.rulesets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rulesets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRulesetsIdKey() {
  return ['rulesets', '/rulesets/:id', 'PUT'] as const
}

export function usePutRulesetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rulesets)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRulesetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.rulesets)[':id']['$put']> }) =>
        parseResponse(client.rulesets[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRulesetsIdKey() {
  return ['rulesets', '/rulesets/:id', 'DELETE'] as const
}

export function useDeleteRulesetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rulesets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRulesetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rulesets)[':id']['$delete']> },
      ) => parseResponse(client.rulesets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesetsIdRulesKey(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rulesets', '/rulesets/:id/rules', keyArgs] as const
}

export function useGetRulesetsIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules']['$get']>>
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
        ? getGetRulesetsIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rulesets[':id'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesetsIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules']['$get']>>
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
        ? getGetRulesetsIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rulesets[':id'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRulesetsIdRulesKey() {
  return ['rulesets', '/rulesets/:id/rules', 'POST'] as const
}

export function usePostRulesetsIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':id']['rules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rulesets)[':id']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesetsIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rulesets)[':id']['rules']['$post']> },
      ) => parseResponse(client.rulesets[':id'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesetsIdRulesRuleIdKey(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rulesets', '/rulesets/:id/rules/:rule_id', keyArgs] as const
}

export function useGetRulesetsIdRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$get']>>
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
        ? getGetRulesetsIdRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rulesets[':id'].rules[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesetsIdRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$get']>>
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
        ? getGetRulesetsIdRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rulesets[':id'].rules[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRulesetsIdRulesRuleIdKey() {
  return ['rulesets', '/rulesets/:id/rules/:rule_id', 'PUT'] as const
}

export function usePutRulesetsIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRulesetsIdRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$put']> },
      ) => parseResponse(client.rulesets[':id'].rules[':rule_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRulesetsIdRulesRuleIdKey() {
  return ['rulesets', '/rulesets/:id/rules/:rule_id', 'DELETE'] as const
}

export function useDeleteRulesetsIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRulesetsIdRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$delete']>
        },
      ) => parseResponse(client.rulesets[':id'].rules[':rule_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchedulesKey(args: InferRequestType<typeof client.schedules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['schedules', '/schedules', keyArgs] as const
}

export function useGetSchedules<TError = unknown>(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedules<TError = unknown>(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSchedulesKey() {
  return ['schedules', '/schedules', 'POST'] as const
}

export function usePostSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.schedules.$post> }) =>
        parseResponse(client.schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchedulesIdKey(
  args: InferRequestType<(typeof client.schedules)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['schedules', '/schedules/:id', keyArgs] as const
}

export function useGetSchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.schedules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchedulesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.schedules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchedulesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSchedulesIdKey() {
  return ['schedules', '/schedules/:id', 'PUT'] as const
}

export function usePutSchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schedules)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schedules)[':id']['$put']> },
      ) => parseResponse(client.schedules[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSchedulesIdKey() {
  return ['schedules', '/schedules/:id', 'DELETE'] as const
}

export function useDeleteSchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.schedules)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schedules)[':id']['$delete']> },
      ) => parseResponse(client.schedules[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchedulesIdAuditRecordsKey(
  args: InferRequestType<(typeof client.schedules)[':id']['audit']['records']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['schedules', '/schedules/:id/audit/records', keyArgs] as const
}

export function useGetSchedulesIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.schedules)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['audit']['records']['$get']>>
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
        ? getGetSchedulesIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.schedules)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['audit']['records']['$get']>>
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
        ? getGetSchedulesIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesIdOverridesKey(
  args: InferRequestType<(typeof client.schedules)[':id']['overrides']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['schedules', '/schedules/:id/overrides', keyArgs] as const
}

export function useGetSchedulesIdOverrides<TError = unknown>(
  args: InferRequestType<(typeof client.schedules)[':id']['overrides']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['overrides']['$get']>>
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
        ? getGetSchedulesIdOverridesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['overrides']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules[':id'].overrides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesIdOverrides<TError = unknown>(
  args: InferRequestType<(typeof client.schedules)[':id']['overrides']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['overrides']['$get']>>
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
        ? getGetSchedulesIdOverridesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['overrides']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules[':id'].overrides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSchedulesIdOverridesKey() {
  return ['schedules', '/schedules/:id/overrides', 'POST'] as const
}

export function usePostSchedulesIdOverrides<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedules)[':id']['overrides']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schedules)[':id']['overrides']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchedulesIdOverridesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schedules)[':id']['overrides']['$post']> },
      ) => parseResponse(client.schedules[':id'].overrides.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSchedulesIdOverridesOverrideIdKey() {
  return ['schedules', '/schedules/:id/overrides/:override_id', 'DELETE'] as const
}

export function useDeleteSchedulesIdOverridesOverrideId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schedules)[':id']['overrides'][':override_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.schedules)[':id']['overrides'][':override_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSchedulesIdOverridesOverrideIdKey()
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
            (typeof client.schedules)[':id']['overrides'][':override_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.schedules[':id'].overrides[':override_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSchedulesIdUsersKey(
  args: InferRequestType<(typeof client.schedules)[':id']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['schedules', '/schedules/:id/users', keyArgs] as const
}

export function useGetSchedulesIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.schedules)[':id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['users']['$get']>>
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
        ? getGetSchedulesIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules[':id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.schedules)[':id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['users']['$get']>>
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
        ? getGetSchedulesIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules)[':id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules[':id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSchedulesPreviewKey() {
  return ['schedules', '/schedules/preview', 'POST'] as const
}

export function usePostSchedulesPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.preview.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.schedules.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchedulesPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.schedules.preview.$post> }) =>
        parseResponse(client.schedules.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServiceDependenciesAssociateKey() {
  return ['service_dependencies', '/service_dependencies/associate', 'POST'] as const
}

export function usePostServiceDependenciesAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.service_dependencies.associate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.service_dependencies.associate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServiceDependenciesAssociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.service_dependencies.associate.$post> },
      ) => parseResponse(client.service_dependencies.associate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServiceDependenciesBusinessServicesIdKey(
  args: InferRequestType<(typeof client.service_dependencies.business_services)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service_dependencies', '/service_dependencies/business_services/:id', keyArgs] as const
}

export function useGetServiceDependenciesBusinessServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.service_dependencies.business_services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.service_dependencies.business_services)[':id']['$get']>
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
        ? getGetServiceDependenciesBusinessServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.service_dependencies.business_services)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.service_dependencies.business_services[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceDependenciesBusinessServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.service_dependencies.business_services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.service_dependencies.business_services)[':id']['$get']>
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
        ? getGetServiceDependenciesBusinessServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.service_dependencies.business_services)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.service_dependencies.business_services[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostServiceDependenciesDisassociateKey() {
  return ['service_dependencies', '/service_dependencies/disassociate', 'POST'] as const
}

export function usePostServiceDependenciesDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.service_dependencies.disassociate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.service_dependencies.disassociate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServiceDependenciesDisassociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.service_dependencies.disassociate.$post> },
      ) => parseResponse(client.service_dependencies.disassociate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServiceDependenciesTechnicalServicesIdKey(
  args: InferRequestType<(typeof client.service_dependencies.technical_services)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service_dependencies', '/service_dependencies/technical_services/:id', keyArgs] as const
}

export function useGetServiceDependenciesTechnicalServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.service_dependencies.technical_services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.service_dependencies.technical_services)[':id']['$get']>
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
        ? getGetServiceDependenciesTechnicalServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.service_dependencies.technical_services)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.service_dependencies.technical_services[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceDependenciesTechnicalServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.service_dependencies.technical_services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.service_dependencies.technical_services)[':id']['$get']>
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
        ? getGetServiceDependenciesTechnicalServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.service_dependencies.technical_services)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.service_dependencies.technical_services[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetServicesKey(args: InferRequestType<typeof client.services.$get>) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services', keyArgs] as const
}

export function useGetServices<TError = unknown>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.services.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetServices<TError = unknown>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.services.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostServicesKey() {
  return ['services', '/services', 'POST'] as const
}

export function usePostServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.services.$post> }) =>
        parseResponse(client.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesIdKey(
  args: InferRequestType<(typeof client.services)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/:id', keyArgs] as const
}

export function useGetServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesIdKey() {
  return ['services', '/services/:id', 'PUT'] as const
}

export function usePutServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.services)[':id']['$put']> }) =>
        parseResponse(client.services[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesIdKey() {
  return ['services', '/services/:id', 'DELETE'] as const
}

export function useDeleteServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.services)[':id']['$delete']> },
      ) => parseResponse(client.services[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesIdAuditRecordsKey(
  args: InferRequestType<(typeof client.services)[':id']['audit']['records']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/:id/audit/records', keyArgs] as const
}

export function useGetServicesIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['audit']['records']['$get']>>
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
        ? getGetServicesIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['audit']['records']['$get']>>
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
        ? getGetServicesIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicesIdChangeEventsKey(
  args: InferRequestType<(typeof client.services)[':id']['change_events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/:id/change_events', keyArgs] as const
}

export function useGetServicesIdChangeEvents<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['change_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['change_events']['$get']>>
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
        ? getGetServicesIdChangeEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['change_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].change_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesIdChangeEvents<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['change_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['change_events']['$get']>>
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
        ? getGetServicesIdChangeEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['change_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].change_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesIdIntegrationsKey() {
  return ['services', '/services/:id/integrations', 'POST'] as const
}

export function usePostServicesIdIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':id']['integrations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesIdIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':id']['integrations']['$post']> },
      ) => parseResponse(client.services[':id'].integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesIdIntegrationsIntegrationIdKey(
  args: InferRequestType<
    (typeof client.services)[':id']['integrations'][':integration_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/:id/integrations/:integration_id', keyArgs] as const
}

export function useGetServicesIdIntegrationsIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':id']['integrations'][':integration_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':id']['integrations'][':integration_id']['$get']>
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
        ? getGetServicesIdIntegrationsIntegrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':id']['integrations'][':integration_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.services[':id'].integrations[':integration_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesIdIntegrationsIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':id']['integrations'][':integration_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':id']['integrations'][':integration_id']['$get']>
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
        ? getGetServicesIdIntegrationsIntegrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':id']['integrations'][':integration_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.services[':id'].integrations[':integration_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutServicesIdIntegrationsIntegrationIdKey() {
  return ['services', '/services/:id/integrations/:integration_id', 'PUT'] as const
}

export function usePutServicesIdIntegrationsIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':id']['integrations'][':integration_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['integrations'][':integration_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesIdIntegrationsIntegrationIdKey()
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
            (typeof client.services)[':id']['integrations'][':integration_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.services[':id'].integrations[':integration_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesIdRulesKey(
  args: InferRequestType<(typeof client.services)[':id']['rules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/:id/rules', keyArgs] as const
}

export function useGetServicesIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules']['$get']>>
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
        ? getGetServicesIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules']['$get']>>
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
        ? getGetServicesIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesIdRulesKey() {
  return ['services', '/services/:id/rules', 'POST'] as const
}

export function usePostServicesIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['rules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.services)[':id']['rules']['$post']> },
      ) => parseResponse(client.services[':id'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesIdRulesConvertKey() {
  return ['services', '/services/:id/rules/convert', 'POST'] as const
}

export function usePostServicesIdRulesConvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':id']['rules']['convert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['rules']['convert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesIdRulesConvertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':id']['rules']['convert']['$post']> },
      ) => parseResponse(client.services[':id'].rules.convert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesIdRulesRuleIdKey(
  args: InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/:id/rules/:rule_id', keyArgs] as const
}

export function useGetServicesIdRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules'][':rule_id']['$get']>>
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
        ? getGetServicesIdRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules'][':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].rules[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesIdRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules'][':rule_id']['$get']>>
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
        ? getGetServicesIdRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules'][':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].rules[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesIdRulesRuleIdKey() {
  return ['services', '/services/:id/rules/:rule_id', 'PUT'] as const
}

export function usePutServicesIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':id']['rules'][':rule_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesIdRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$put']> },
      ) => parseResponse(client.services[':id'].rules[':rule_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesIdRulesRuleIdKey() {
  return ['services', '/services/:id/rules/:rule_id', 'DELETE'] as const
}

export function useDeleteServicesIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['rules'][':rule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesIdRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$delete']>
        },
      ) => parseResponse(client.services[':id'].rules[':rule_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesCustomFieldsKey(
  args: InferRequestType<typeof client.services.custom_fields.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/custom_fields', keyArgs] as const
}

export function useGetServicesCustomFields<TError = unknown>(
  args: InferRequestType<typeof client.services.custom_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.services.custom_fields.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.services.custom_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesCustomFields<TError = unknown>(
  args: InferRequestType<typeof client.services.custom_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.services.custom_fields.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.services.custom_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesCustomFieldsKey() {
  return ['services', '/services/custom_fields', 'POST'] as const
}

export function usePostServicesCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.services.custom_fields.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.services.custom_fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.services.custom_fields.$post> },
      ) => parseResponse(client.services.custom_fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesCustomFieldsFieldIdKey(
  args: InferRequestType<(typeof client.services.custom_fields)[':field_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/custom_fields/:field_id', keyArgs] as const
}

export function useGetServicesCustomFieldsFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.services.custom_fields)[':field_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services.custom_fields)[':field_id']['$get']>>
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
        ? getGetServicesCustomFieldsFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services.custom_fields)[':field_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services.custom_fields[':field_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesCustomFieldsFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.services.custom_fields)[':field_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services.custom_fields)[':field_id']['$get']>>
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
        ? getGetServicesCustomFieldsFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services.custom_fields)[':field_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services.custom_fields[':field_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesCustomFieldsFieldIdKey() {
  return ['services', '/services/custom_fields/:field_id', 'PUT'] as const
}

export function usePutServicesCustomFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services.custom_fields)[':field_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services.custom_fields)[':field_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesCustomFieldsFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services.custom_fields)[':field_id']['$put']> },
      ) => parseResponse(client.services.custom_fields[':field_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesCustomFieldsFieldIdKey() {
  return ['services', '/services/custom_fields/:field_id', 'DELETE'] as const
}

export function useDeleteServicesCustomFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services.custom_fields)[':field_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.services.custom_fields)[':field_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesCustomFieldsFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services.custom_fields)[':field_id']['$delete']>
        },
      ) => parseResponse(client.services.custom_fields[':field_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesCustomFieldsFieldIdFieldOptionsKey(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/custom_fields/:field_id/field_options', keyArgs] as const
}

export function useGetServicesCustomFieldsFieldIdFieldOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services.custom_fields)[':field_id']['field_options']['$get']
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
        ? getGetServicesCustomFieldsFieldIdFieldOptionsKey(args)
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
                (typeof client.services.custom_fields)[':field_id']['field_options']['$get']
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
          client.services.custom_fields[':field_id'].field_options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesCustomFieldsFieldIdFieldOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services.custom_fields)[':field_id']['field_options']['$get']
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
        ? getGetServicesCustomFieldsFieldIdFieldOptionsKey(args)
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
                (typeof client.services.custom_fields)[':field_id']['field_options']['$get']
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
          client.services.custom_fields[':field_id'].field_options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostServicesCustomFieldsFieldIdFieldOptionsKey() {
  return ['services', '/services/custom_fields/:field_id/field_options', 'POST'] as const
}

export function usePostServicesCustomFieldsFieldIdFieldOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services.custom_fields)[':field_id']['field_options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services.custom_fields)[':field_id']['field_options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesCustomFieldsFieldIdFieldOptionsKey()
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
            (typeof client.services.custom_fields)[':field_id']['field_options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.services.custom_fields[':field_id'].field_options.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdKey(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'services',
    '/services/custom_fields/:field_id/field_options/:field_option_id',
    keyArgs,
  ] as const
}

export function useGetServicesCustomFieldsFieldIdFieldOptionsFieldOptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$get']
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
        ? getGetServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdKey(args)
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
                (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$get']
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
          client.services.custom_fields[':field_id'].field_options[':field_option_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$get']
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
        ? getGetServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdKey(args)
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
                (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$get']
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
          client.services.custom_fields[':field_id'].field_options[':field_option_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdKey() {
  return [
    'services',
    '/services/custom_fields/:field_id/field_options/:field_option_id',
    'PUT',
  ] as const
}

export function usePutServicesCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdKey()
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
            (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.services.custom_fields[':field_id'].field_options[':field_option_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdKey() {
  return [
    'services',
    '/services/custom_fields/:field_id/field_options/:field_option_id',
    'DELETE',
  ] as const
}

export function useDeleteServicesCustomFieldsFieldIdFieldOptionsFieldOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdKey()
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
            (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.services.custom_fields[':field_id'].field_options[':field_option_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesIdCustomFieldsValuesKey(
  args: InferRequestType<(typeof client.services)[':id']['custom_fields']['values']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/:id/custom_fields/values', keyArgs] as const
}

export function useGetServicesIdCustomFieldsValues<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['custom_fields']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['custom_fields']['values']['$get']>>
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
        ? getGetServicesIdCustomFieldsValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['custom_fields']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':id'].custom_fields.values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesIdCustomFieldsValues<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['custom_fields']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['custom_fields']['values']['$get']>>
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
        ? getGetServicesIdCustomFieldsValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['custom_fields']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':id'].custom_fields.values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesIdCustomFieldsValuesKey() {
  return ['services', '/services/:id/custom_fields/values', 'PUT'] as const
}

export function usePutServicesIdCustomFieldsValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':id']['custom_fields']['values']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['custom_fields']['values']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesIdCustomFieldsValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services)[':id']['custom_fields']['values']['$put']>
        },
      ) => parseResponse(client.services[':id'].custom_fields.values.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesIdEnablementsKey(
  args: InferRequestType<(typeof client.services)[':id']['enablements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services/:id/enablements', keyArgs] as const
}

export function useGetServicesIdEnablements<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['enablements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['enablements']['$get']>>
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
        ? getGetServicesIdEnablementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['enablements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].enablements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesIdEnablements<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':id']['enablements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['enablements']['$get']>>
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
        ? getGetServicesIdEnablementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':id']['enablements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':id'].enablements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesIdEnablementsFeatureNameKey() {
  return ['services', '/services/:id/enablements/:feature_name', 'PUT'] as const
}

export function usePutServicesIdEnablementsFeatureName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':id']['enablements'][':feature_name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':id']['enablements'][':feature_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesIdEnablementsFeatureNameKey()
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
            (typeof client.services)[':id']['enablements'][':feature_name']['$put']
          >
        },
      ) =>
        parseResponse(client.services[':id'].enablements[':feature_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionConfigurationsKey(
  args: InferRequestType<typeof client.session_configurations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['session_configurations', '/session_configurations', keyArgs] as const
}

export function useGetSessionConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.session_configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.session_configurations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSessionConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.session_configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session_configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.session_configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.session_configurations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSessionConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.session_configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session_configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSessionConfigurationsKey() {
  return ['session_configurations', '/session_configurations', 'PUT'] as const
}

export function usePutSessionConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.session_configurations.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.session_configurations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSessionConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.session_configurations.$put> },
      ) => parseResponse(client.session_configurations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSessionConfigurationsKey() {
  return ['session_configurations', '/session_configurations', 'DELETE'] as const
}

export function useDeleteSessionConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.session_configurations.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.session_configurations.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSessionConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.session_configurations.$delete> },
      ) => parseResponse(client.session_configurations.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStandardsKey(args: InferRequestType<typeof client.standards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['standards', '/standards', keyArgs] as const
}

export function useGetStandards<TError = unknown>(
  args: InferRequestType<typeof client.standards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStandardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.standards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStandards<TError = unknown>(
  args: InferRequestType<typeof client.standards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStandardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.standards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStandardsIdKey() {
  return ['standards', '/standards/:id', 'PUT'] as const
}

export function usePutStandardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.standards)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.standards)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStandardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.standards)[':id']['$put']> },
      ) => parseResponse(client.standards[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStandardsScoresResourceTypeKey(
  args: InferRequestType<(typeof client.standards.scores)[':resource_type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['standards', '/standards/scores/:resource_type', keyArgs] as const
}

export function useGetStandardsScoresResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.standards.scores)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.standards.scores)[':resource_type']['$get']>>
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
        ? getGetStandardsScoresResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.standards.scores)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.standards.scores[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStandardsScoresResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.standards.scores)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.standards.scores)[':resource_type']['$get']>>
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
        ? getGetStandardsScoresResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.standards.scores)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.standards.scores[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStandardsScoresResourceTypeIdKey(
  args: InferRequestType<(typeof client.standards.scores)[':resource_type'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['standards', '/standards/scores/:resource_type/:id', keyArgs] as const
}

export function useGetStandardsScoresResourceTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.standards.scores)[':resource_type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.standards.scores)[':resource_type'][':id']['$get']>>
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
        ? getGetStandardsScoresResourceTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.standards.scores)[':resource_type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.standards.scores[':resource_type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStandardsScoresResourceTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.standards.scores)[':resource_type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.standards.scores)[':resource_type'][':id']['$get']>>
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
        ? getGetStandardsScoresResourceTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.standards.scores)[':resource_type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.standards.scores[':resource_type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusDashboardsKey(
  args: InferRequestType<typeof client.status_dashboards.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_dashboards', '/status_dashboards', keyArgs] as const
}

export function useGetStatusDashboards<TError = unknown>(
  args: InferRequestType<typeof client.status_dashboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_dashboards.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatusDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_dashboards.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusDashboards<TError = unknown>(
  args: InferRequestType<typeof client.status_dashboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_dashboards.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatusDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_dashboards.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusDashboardsIdKey(
  args: InferRequestType<(typeof client.status_dashboards)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_dashboards', '/status_dashboards/:id', keyArgs] as const
}

export function useGetStatusDashboardsId<TError = unknown>(
  args: InferRequestType<(typeof client.status_dashboards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards)[':id']['$get']>>
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
        ? getGetStatusDashboardsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_dashboards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusDashboardsId<TError = unknown>(
  args: InferRequestType<(typeof client.status_dashboards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards)[':id']['$get']>>
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
        ? getGetStatusDashboardsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_dashboards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusDashboardsIdServiceImpactsKey(
  args: InferRequestType<(typeof client.status_dashboards)[':id']['service_impacts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_dashboards', '/status_dashboards/:id/service_impacts', keyArgs] as const
}

export function useGetStatusDashboardsIdServiceImpacts<TError = unknown>(
  args: InferRequestType<(typeof client.status_dashboards)[':id']['service_impacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards)[':id']['service_impacts']['$get']>>
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
        ? getGetStatusDashboardsIdServiceImpactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards)[':id']['service_impacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_dashboards[':id'].service_impacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusDashboardsIdServiceImpacts<TError = unknown>(
  args: InferRequestType<(typeof client.status_dashboards)[':id']['service_impacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards)[':id']['service_impacts']['$get']>>
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
        ? getGetStatusDashboardsIdServiceImpactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards)[':id']['service_impacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_dashboards[':id'].service_impacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusDashboardsUrlSlugsUrlSlugKey(
  args: InferRequestType<(typeof client.status_dashboards.url_slugs)[':url_slug']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_dashboards', '/status_dashboards/url_slugs/:url_slug', keyArgs] as const
}

export function useGetStatusDashboardsUrlSlugsUrlSlug<TError = unknown>(
  args: InferRequestType<(typeof client.status_dashboards.url_slugs)[':url_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards.url_slugs)[':url_slug']['$get']>>
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
        ? getGetStatusDashboardsUrlSlugsUrlSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards.url_slugs)[':url_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_dashboards.url_slugs[':url_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusDashboardsUrlSlugsUrlSlug<TError = unknown>(
  args: InferRequestType<(typeof client.status_dashboards.url_slugs)[':url_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards.url_slugs)[':url_slug']['$get']>>
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
        ? getGetStatusDashboardsUrlSlugsUrlSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_dashboards.url_slugs)[':url_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_dashboards.url_slugs[':url_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusDashboardsUrlSlugsUrlSlugServiceImpactsKey(
  args: InferRequestType<
    (typeof client.status_dashboards.url_slugs)[':url_slug']['service_impacts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'status_dashboards',
    '/status_dashboards/url_slugs/:url_slug/service_impacts',
    keyArgs,
  ] as const
}

export function useGetStatusDashboardsUrlSlugsUrlSlugServiceImpacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_dashboards.url_slugs)[':url_slug']['service_impacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_dashboards.url_slugs)[':url_slug']['service_impacts']['$get']
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
        ? getGetStatusDashboardsUrlSlugsUrlSlugServiceImpactsKey(args)
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
                (typeof client.status_dashboards.url_slugs)[':url_slug']['service_impacts']['$get']
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
          client.status_dashboards.url_slugs[':url_slug'].service_impacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusDashboardsUrlSlugsUrlSlugServiceImpacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_dashboards.url_slugs)[':url_slug']['service_impacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_dashboards.url_slugs)[':url_slug']['service_impacts']['$get']
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
        ? getGetStatusDashboardsUrlSlugsUrlSlugServiceImpactsKey(args)
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
                (typeof client.status_dashboards.url_slugs)[':url_slug']['service_impacts']['$get']
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
          client.status_dashboards.url_slugs[':url_slug'].service_impacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesKey(args: InferRequestType<typeof client.status_pages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages', keyArgs] as const
}

export function useGetStatusPages<TError = unknown>(
  args: InferRequestType<typeof client.status_pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusPagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPages<TError = unknown>(
  args: InferRequestType<typeof client.status_pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusPagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdImpactsKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['impacts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/impacts', keyArgs] as const
}

export function useGetStatusPagesIdImpacts<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['impacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['impacts']['$get']>>
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
        ? getGetStatusPagesIdImpactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['impacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].impacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdImpacts<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['impacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['impacts']['$get']>>
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
        ? getGetStatusPagesIdImpactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['impacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].impacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdImpactsImpactIdKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['impacts'][':impact_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/impacts/:impact_id', keyArgs] as const
}

export function useGetStatusPagesIdImpactsImpactId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['impacts'][':impact_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['impacts'][':impact_id']['$get']>
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
        ? getGetStatusPagesIdImpactsImpactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['impacts'][':impact_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_pages[':id'].impacts[':impact_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdImpactsImpactId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['impacts'][':impact_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['impacts'][':impact_id']['$get']>
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
        ? getGetStatusPagesIdImpactsImpactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['impacts'][':impact_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_pages[':id'].impacts[':impact_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdServicesKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['services']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/services', keyArgs] as const
}

export function useGetStatusPagesIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['services']['$get']>>
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
        ? getGetStatusPagesIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['services']['$get']>>
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
        ? getGetStatusPagesIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdServicesServiceIdKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['services'][':service_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/services/:service_id', keyArgs] as const
}

export function useGetStatusPagesIdServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['services'][':service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['services'][':service_id']['$get']>
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
        ? getGetStatusPagesIdServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['services'][':service_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_pages[':id'].services[':service_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['services'][':service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['services'][':service_id']['$get']>
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
        ? getGetStatusPagesIdServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['services'][':service_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_pages[':id'].services[':service_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdSeveritiesKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['severities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/severities', keyArgs] as const
}

export function useGetStatusPagesIdSeverities<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['severities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['severities']['$get']>>
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
        ? getGetStatusPagesIdSeveritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['severities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].severities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdSeverities<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['severities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['severities']['$get']>>
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
        ? getGetStatusPagesIdSeveritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['severities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].severities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdSeveritiesSeverityIdKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['severities'][':severity_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/severities/:severity_id', keyArgs] as const
}

export function useGetStatusPagesIdSeveritiesSeverityId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['severities'][':severity_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['severities'][':severity_id']['$get']>
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
        ? getGetStatusPagesIdSeveritiesSeverityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['severities'][':severity_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.status_pages[':id'].severities[':severity_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdSeveritiesSeverityId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['severities'][':severity_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['severities'][':severity_id']['$get']>
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
        ? getGetStatusPagesIdSeveritiesSeverityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['severities'][':severity_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.status_pages[':id'].severities[':severity_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdStatusesKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['statuses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/statuses', keyArgs] as const
}

export function useGetStatusPagesIdStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['statuses']['$get']>>
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
        ? getGetStatusPagesIdStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['statuses']['$get']>>
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
        ? getGetStatusPagesIdStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdStatusesStatusIdKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['statuses'][':status_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/statuses/:status_id', keyArgs] as const
}

export function useGetStatusPagesIdStatusesStatusId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['statuses'][':status_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['statuses'][':status_id']['$get']>
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
        ? getGetStatusPagesIdStatusesStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['statuses'][':status_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_pages[':id'].statuses[':status_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdStatusesStatusId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['statuses'][':status_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['statuses'][':status_id']['$get']>
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
        ? getGetStatusPagesIdStatusesStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.status_pages)[':id']['statuses'][':status_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_pages[':id'].statuses[':status_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPagesIdPostsKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/posts', keyArgs] as const
}

export function useGetStatusPagesIdPosts<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts']['$get']>>
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
        ? getGetStatusPagesIdPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdPosts<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts']['$get']>>
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
        ? getGetStatusPagesIdPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStatusPagesIdPostsKey() {
  return ['status_pages', '/status_pages/:id/posts', 'POST'] as const
}

export function usePostStatusPagesIdPosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.status_pages)[':id']['posts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status_pages)[':id']['posts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatusPagesIdPostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.status_pages)[':id']['posts']['$post']> },
      ) => parseResponse(client.status_pages[':id'].posts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatusPagesIdPostsPostIdKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/posts/:post_id', keyArgs] as const
}

export function useGetStatusPagesIdPostsPostId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts'][':post_id']['$get']>>
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
        ? getGetStatusPagesIdPostsPostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts'][':post_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_pages[':id'].posts[':post_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdPostsPostId<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts'][':post_id']['$get']>>
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
        ? getGetStatusPagesIdPostsPostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts'][':post_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.status_pages[':id'].posts[':post_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStatusPagesIdPostsPostIdKey() {
  return ['status_pages', '/status_pages/:id/posts/:post_id', 'PUT'] as const
}

export function usePutStatusPagesIdPostsPostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.status_pages)[':id']['posts'][':post_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStatusPagesIdPostsPostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$put']>
        },
      ) => parseResponse(client.status_pages[':id'].posts[':post_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStatusPagesIdPostsPostIdKey() {
  return ['status_pages', '/status_pages/:id/posts/:post_id', 'DELETE'] as const
}

export function useDeleteStatusPagesIdPostsPostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['posts'][':post_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStatusPagesIdPostsPostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$delete']>
        },
      ) => parseResponse(client.status_pages[':id'].posts[':post_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatusPagesIdPostsPostIdPostUpdatesKey(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/posts/:post_id/post_updates', keyArgs] as const
}

export function useGetStatusPagesIdPostsPostIdPostUpdates<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$get']
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
        ? getGetStatusPagesIdPostsPostIdPostUpdatesKey(args)
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
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$get']
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
          client.status_pages[':id'].posts[':post_id'].post_updates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdPostsPostIdPostUpdates<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$get']
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
        ? getGetStatusPagesIdPostsPostIdPostUpdatesKey(args)
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
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$get']
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
          client.status_pages[':id'].posts[':post_id'].post_updates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostStatusPagesIdPostsPostIdPostUpdatesKey() {
  return ['status_pages', '/status_pages/:id/posts/:post_id/post_updates', 'POST'] as const
}

export function usePostStatusPagesIdPostsPostIdPostUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatusPagesIdPostsPostIdPostUpdatesKey()
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
            (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.status_pages[':id'].posts[':post_id'].post_updates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdKey(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'status_pages',
    '/status_pages/:id/posts/:post_id/post_updates/:post_update_id',
    keyArgs,
  ] as const
}

export function useGetStatusPagesIdPostsPostIdPostUpdatesPostUpdateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$get']
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
        ? getGetStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdKey(args)
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
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$get']
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
          client.status_pages[':id'].posts[':post_id'].post_updates[':post_update_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdPostsPostIdPostUpdatesPostUpdateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$get']
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
        ? getGetStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdKey(args)
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
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$get']
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
          client.status_pages[':id'].posts[':post_id'].post_updates[':post_update_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdKey() {
  return [
    'status_pages',
    '/status_pages/:id/posts/:post_id/post_updates/:post_update_id',
    'PUT',
  ] as const
}

export function usePutStatusPagesIdPostsPostIdPostUpdatesPostUpdateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdKey()
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
            (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.status_pages[':id'].posts[':post_id'].post_updates[':post_update_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdKey() {
  return [
    'status_pages',
    '/status_pages/:id/posts/:post_id/post_updates/:post_update_id',
    'DELETE',
  ] as const
}

export function useDeleteStatusPagesIdPostsPostIdPostUpdatesPostUpdateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdKey()
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
            (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.status_pages[':id'].posts[':post_id'].post_updates[':post_update_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStatusPagesIdPostsPostIdPostmortemKey(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/posts/:post_id/postmortem', keyArgs] as const
}

export function useGetStatusPagesIdPostsPostIdPostmortem<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$get']
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
        ? getGetStatusPagesIdPostsPostIdPostmortemKey(args)
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
                (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$get']
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
          client.status_pages[':id'].posts[':post_id'].postmortem.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdPostsPostIdPostmortem<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$get']
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
        ? getGetStatusPagesIdPostsPostIdPostmortemKey(args)
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
                (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$get']
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
          client.status_pages[':id'].posts[':post_id'].postmortem.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutStatusPagesIdPostsPostIdPostmortemKey() {
  return ['status_pages', '/status_pages/:id/posts/:post_id/postmortem', 'PUT'] as const
}

export function usePutStatusPagesIdPostsPostIdPostmortem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStatusPagesIdPostsPostIdPostmortemKey()
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
            (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$put']
          >
        },
      ) =>
        parseResponse(
          client.status_pages[':id'].posts[':post_id'].postmortem.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteStatusPagesIdPostsPostIdPostmortemKey() {
  return ['status_pages', '/status_pages/:id/posts/:post_id/postmortem', 'DELETE'] as const
}

export function useDeleteStatusPagesIdPostsPostIdPostmortem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStatusPagesIdPostsPostIdPostmortemKey()
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
            (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.status_pages[':id'].posts[':post_id'].postmortem.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStatusPagesIdSubscriptionsKey(
  args: InferRequestType<(typeof client.status_pages)[':id']['subscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/subscriptions', keyArgs] as const
}

export function useGetStatusPagesIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['subscriptions']['$get']>>
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
        ? getGetStatusPagesIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.status_pages)[':id']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['subscriptions']['$get']>>
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
        ? getGetStatusPagesIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_pages)[':id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_pages[':id'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStatusPagesIdSubscriptionsKey() {
  return ['status_pages', '/status_pages/:id/subscriptions', 'POST'] as const
}

export function usePostStatusPagesIdSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.status_pages)[':id']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status_pages)[':id']['subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatusPagesIdSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.status_pages)[':id']['subscriptions']['$post']> },
      ) => parseResponse(client.status_pages[':id'].subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatusPagesIdSubscriptionsSubscriptionIdKey(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['status_pages', '/status_pages/:id/subscriptions/:subscription_id', keyArgs] as const
}

export function useGetStatusPagesIdSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$get']
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
        ? getGetStatusPagesIdSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$get']
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
          client.status_pages[':id'].subscriptions[':subscription_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPagesIdSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$get']
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
        ? getGetStatusPagesIdSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$get']
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
          client.status_pages[':id'].subscriptions[':subscription_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteStatusPagesIdSubscriptionsSubscriptionIdKey() {
  return ['status_pages', '/status_pages/:id/subscriptions/:subscription_id', 'DELETE'] as const
}

export function useDeleteStatusPagesIdSubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStatusPagesIdSubscriptionsSubscriptionIdKey()
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
            (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.status_pages[':id'].subscriptions[':subscription_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSreAgentMemoriesKey(
  args: InferRequestType<typeof client.sre_agent.memories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sre_agent', '/sre_agent/memories', keyArgs] as const
}

export function useGetSreAgentMemories<TError = unknown>(
  args: InferRequestType<typeof client.sre_agent.memories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sre_agent.memories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSreAgentMemoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sre_agent.memories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sre_agent.memories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSreAgentMemories<TError = unknown>(
  args: InferRequestType<typeof client.sre_agent.memories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sre_agent.memories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSreAgentMemoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sre_agent.memories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sre_agent.memories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSreAgentMemoriesIdKey() {
  return ['sre_agent', '/sre_agent/memories/:id', 'PUT'] as const
}

export function usePutSreAgentMemoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sre_agent.memories)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sre_agent.memories)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSreAgentMemoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sre_agent.memories)[':id']['$put']> },
      ) => parseResponse(client.sre_agent.memories[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSreAgentMemoriesIdKey() {
  return ['sre_agent', '/sre_agent/memories/:id', 'DELETE'] as const
}

export function useDeleteSreAgentMemoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sre_agent.memories)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sre_agent.memories)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSreAgentMemoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sre_agent.memories)[':id']['$delete']> },
      ) => parseResponse(client.sre_agent.memories[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsKey(args: InferRequestType<typeof client.tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags', keyArgs] as const
}

export function useGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTagsKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function usePostTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.$post> }) =>
        parseResponse(client.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsIdKey(args: InferRequestType<(typeof client.tags)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:id', keyArgs] as const
}

export function useGetTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsIdKey() {
  return ['tags', '/tags/:id', 'DELETE'] as const
}

export function useDeleteTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.tags)[':id']['$delete']> }) =>
        parseResponse(client.tags[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsIdEntityTypeKey(
  args: InferRequestType<(typeof client.tags)[':id'][':entity_type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:id/:entity_type', keyArgs] as const
}

export function useGetTagsIdEntityType<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':id'][':entity_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':id'][':entity_type']['$get']>>
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
        ? getGetTagsIdEntityTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':id'][':entity_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':id'][':entity_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsIdEntityType<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':id'][':entity_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':id'][':entity_type']['$get']>>
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
        ? getGetTagsIdEntityTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':id'][':entity_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':id'][':entity_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsKey(args: InferRequestType<typeof client.teams.$get>) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams', keyArgs] as const
}

export function useGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTeamsKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function usePostTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teams.$post> }) =>
        parseResponse(client.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsIdKey(args: InferRequestType<(typeof client.teams)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:id', keyArgs] as const
}

export function useGetTeamsId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsIdKey() {
  return ['teams', '/teams/:id', 'PUT'] as const
}

export function usePutTeamsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.teams)[':id']['$put']> }) =>
        parseResponse(client.teams[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsIdKey() {
  return ['teams', '/teams/:id', 'DELETE'] as const
}

export function useDeleteTeamsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.teams)[':id']['$delete']> }) =>
        parseResponse(client.teams[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsIdAuditRecordsKey(
  args: InferRequestType<(typeof client.teams)[':id']['audit']['records']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:id/audit/records', keyArgs] as const
}

export function useGetTeamsIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['audit']['records']['$get']>>
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
        ? getGetTeamsIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['audit']['records']['$get']>>
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
        ? getGetTeamsIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsIdEscalationPoliciesEscalationPolicyIdKey() {
  return ['teams', '/teams/:id/escalation_policies/:escalation_policy_id', 'PUT'] as const
}

export function usePutTeamsIdEscalationPoliciesEscalationPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':id']['escalation_policies'][':escalation_policy_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':id']['escalation_policies'][':escalation_policy_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsIdEscalationPoliciesEscalationPolicyIdKey()
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
            (typeof client.teams)[':id']['escalation_policies'][':escalation_policy_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.teams[':id'].escalation_policies[':escalation_policy_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsIdEscalationPoliciesEscalationPolicyIdKey() {
  return ['teams', '/teams/:id/escalation_policies/:escalation_policy_id', 'DELETE'] as const
}

export function useDeleteTeamsIdEscalationPoliciesEscalationPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':id']['escalation_policies'][':escalation_policy_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':id']['escalation_policies'][':escalation_policy_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsIdEscalationPoliciesEscalationPolicyIdKey()
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
            (typeof client.teams)[':id']['escalation_policies'][':escalation_policy_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.teams[':id'].escalation_policies[':escalation_policy_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsIdMembersKey(
  args: InferRequestType<(typeof client.teams)[':id']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:id/members', keyArgs] as const
}

export function useGetTeamsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['members']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsIdMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['members']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['members']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsIdMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['members']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsIdNotificationSubscriptionsKey(
  args: InferRequestType<(typeof client.teams)[':id']['notification_subscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:id/notification_subscriptions', keyArgs] as const
}

export function useGetTeamsIdNotificationSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['notification_subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['notification_subscriptions']['$get']>>
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
        ? getGetTeamsIdNotificationSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['notification_subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':id'].notification_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsIdNotificationSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['notification_subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['notification_subscriptions']['$get']>>
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
        ? getGetTeamsIdNotificationSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['notification_subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':id'].notification_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamsIdNotificationSubscriptionsKey() {
  return ['teams', '/teams/:id/notification_subscriptions', 'POST'] as const
}

export function usePostTeamsIdNotificationSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':id']['notification_subscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':id']['notification_subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsIdNotificationSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.teams)[':id']['notification_subscriptions']['$post']>
        },
      ) => parseResponse(client.teams[':id'].notification_subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamsIdNotificationSubscriptionsUnsubscribeKey() {
  return ['teams', '/teams/:id/notification_subscriptions/unsubscribe', 'POST'] as const
}

export function usePostTeamsIdNotificationSubscriptionsUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':id']['notification_subscriptions']['unsubscribe']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':id']['notification_subscriptions']['unsubscribe']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsIdNotificationSubscriptionsUnsubscribeKey()
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
            (typeof client.teams)[':id']['notification_subscriptions']['unsubscribe']['$post']
          >
        },
      ) =>
        parseResponse(
          client.teams[':id'].notification_subscriptions.unsubscribe.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutTeamsIdUsersUserIdKey() {
  return ['teams', '/teams/:id/users/:user_id', 'PUT'] as const
}

export function usePutTeamsIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['users'][':user_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':id']['users'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsIdUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.teams)[':id']['users'][':user_id']['$put']> },
      ) => parseResponse(client.teams[':id'].users[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsIdUsersUserIdKey() {
  return ['teams', '/teams/:id/users/:user_id', 'DELETE'] as const
}

export function useDeleteTeamsIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['users'][':user_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':id']['users'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsIdUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.teams)[':id']['users'][':user_id']['$delete']> },
      ) => parseResponse(client.teams[':id'].users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
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

export function getGetTemplatesIdKey(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
) {
  return ['templates', '/templates/:id', args] as const
}

export function useGetTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTemplatesIdKey() {
  return ['templates', '/templates/:id', 'PUT'] as const
}

export function usePutTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['$put']> },
      ) => parseResponse(client.templates[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTemplatesIdKey() {
  return ['templates', '/templates/:id', 'DELETE'] as const
}

export function useDeleteTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['$delete']> },
      ) => parseResponse(client.templates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesIdRenderKey() {
  return ['templates', '/templates/:id/render', 'POST'] as const
}

export function usePostTemplatesIdRender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':id']['render']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['render']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesIdRenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['render']['$post']> },
      ) => parseResponse(client.templates[':id'].render.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesFieldsKey(
  args: InferRequestType<typeof client.templates.fields.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/fields', keyArgs] as const
}

export function useGetTemplatesFields<TError = unknown>(
  args: InferRequestType<typeof client.templates.fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.fields.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.fields.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesFields<TError = unknown>(
  args: InferRequestType<typeof client.templates.fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.fields.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.fields.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users', keyArgs] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id', keyArgs] as const
}

export function useGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdKey() {
  return ['users', '/users/:id', 'PUT'] as const
}

export function usePutUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.users)[':id']['$put']> }) =>
        parseResponse(client.users[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdKey() {
  return ['users', '/users/:id', 'DELETE'] as const
}

export function useDeleteUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.users)[':id']['$delete']> }) =>
        parseResponse(client.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdAuditRecordsKey(
  args: InferRequestType<(typeof client.users)[':id']['audit']['records']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/audit/records', keyArgs] as const
}

export function useGetUsersIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['audit']['records']['$get']>>
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
        ? getGetUsersIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['audit']['records']['$get']>>
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
        ? getGetUsersIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdContactMethodsKey(
  args: InferRequestType<(typeof client.users)[':id']['contact_methods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/contact_methods', keyArgs] as const
}

export function useGetUsersIdContactMethods<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['contact_methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['contact_methods']['$get']>>
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
        ? getGetUsersIdContactMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['contact_methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].contact_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdContactMethods<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['contact_methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['contact_methods']['$get']>>
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
        ? getGetUsersIdContactMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['contact_methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].contact_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdContactMethodsKey() {
  return ['users', '/users/:id/contact_methods', 'POST'] as const
}

export function usePostUsersIdContactMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['contact_methods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['contact_methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdContactMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['contact_methods']['$post']> },
      ) => parseResponse(client.users[':id'].contact_methods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdContactMethodsContactMethodIdKey(
  args: InferRequestType<
    (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/contact_methods/:contact_method_id', keyArgs] as const
}

export function useGetUsersIdContactMethodsContactMethodId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$get']
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
        ? getGetUsersIdContactMethodsContactMethodIdKey(args)
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
                (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$get']
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
          client.users[':id'].contact_methods[':contact_method_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdContactMethodsContactMethodId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$get']
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
        ? getGetUsersIdContactMethodsContactMethodIdKey(args)
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
                (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$get']
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
          client.users[':id'].contact_methods[':contact_method_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdContactMethodsContactMethodIdKey() {
  return ['users', '/users/:id/contact_methods/:contact_method_id', 'PUT'] as const
}

export function usePutUsersIdContactMethodsContactMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['contact_methods'][':contact_method_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdContactMethodsContactMethodIdKey()
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
            (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].contact_methods[':contact_method_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdContactMethodsContactMethodIdKey() {
  return ['users', '/users/:id/contact_methods/:contact_method_id', 'DELETE'] as const
}

export function useDeleteUsersIdContactMethodsContactMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdContactMethodsContactMethodIdKey()
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
            (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].contact_methods[':contact_method_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdOauthDelegationsKey(
  args: InferRequestType<(typeof client.users)[':id']['oauth_delegations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/oauth_delegations', keyArgs] as const
}

export function useGetUsersIdOauthDelegations<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['oauth_delegations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['oauth_delegations']['$get']>>
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
        ? getGetUsersIdOauthDelegationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['oauth_delegations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].oauth_delegations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdOauthDelegations<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['oauth_delegations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['oauth_delegations']['$get']>>
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
        ? getGetUsersIdOauthDelegationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['oauth_delegations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].oauth_delegations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdOauthDelegationsDelegationIdKey(
  args: InferRequestType<
    (typeof client.users)[':id']['oauth_delegations'][':delegation_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/oauth_delegations/:delegation_id', keyArgs] as const
}

export function useGetUsersIdOauthDelegationsDelegationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['oauth_delegations'][':delegation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['oauth_delegations'][':delegation_id']['$get']
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
        ? getGetUsersIdOauthDelegationsDelegationIdKey(args)
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
                (typeof client.users)[':id']['oauth_delegations'][':delegation_id']['$get']
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
          client.users[':id'].oauth_delegations[':delegation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdOauthDelegationsDelegationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['oauth_delegations'][':delegation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['oauth_delegations'][':delegation_id']['$get']
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
        ? getGetUsersIdOauthDelegationsDelegationIdKey(args)
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
                (typeof client.users)[':id']['oauth_delegations'][':delegation_id']['$get']
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
          client.users[':id'].oauth_delegations[':delegation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdLicenseKey(
  args: InferRequestType<(typeof client.users)[':id']['license']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/license', keyArgs] as const
}

export function useGetUsersIdLicense<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['license']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['license']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdLicenseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['license']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].license.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdLicense<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['license']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['license']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdLicenseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['license']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].license.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdNotificationRulesKey(
  args: InferRequestType<(typeof client.users)[':id']['notification_rules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/notification_rules', keyArgs] as const
}

export function useGetUsersIdNotificationRules<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['notification_rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notification_rules']['$get']>>
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
        ? getGetUsersIdNotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notification_rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].notification_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdNotificationRules<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['notification_rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notification_rules']['$get']>>
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
        ? getGetUsersIdNotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notification_rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].notification_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdNotificationRulesKey() {
  return ['users', '/users/:id/notification_rules', 'POST'] as const
}

export function usePostUsersIdNotificationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['notification_rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['notification_rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdNotificationRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['notification_rules']['$post']> },
      ) => parseResponse(client.users[':id'].notification_rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdNotificationRulesNotificationRuleIdKey(
  args: InferRequestType<
    (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/notification_rules/:notification_rule_id', keyArgs] as const
}

export function useGetUsersIdNotificationRulesNotificationRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$get']
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
        ? getGetUsersIdNotificationRulesNotificationRuleIdKey(args)
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
                (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$get']
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
          client.users[':id'].notification_rules[':notification_rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdNotificationRulesNotificationRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$get']
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
        ? getGetUsersIdNotificationRulesNotificationRuleIdKey(args)
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
                (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$get']
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
          client.users[':id'].notification_rules[':notification_rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdNotificationRulesNotificationRuleIdKey() {
  return ['users', '/users/:id/notification_rules/:notification_rule_id', 'PUT'] as const
}

export function usePutUsersIdNotificationRulesNotificationRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdNotificationRulesNotificationRuleIdKey()
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
            (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].notification_rules[':notification_rule_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdNotificationRulesNotificationRuleIdKey() {
  return ['users', '/users/:id/notification_rules/:notification_rule_id', 'DELETE'] as const
}

export function useDeleteUsersIdNotificationRulesNotificationRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdNotificationRulesNotificationRuleIdKey()
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
            (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].notification_rules[':notification_rule_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdNotificationSubscriptionsKey(
  args: InferRequestType<(typeof client.users)[':id']['notification_subscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/notification_subscriptions', keyArgs] as const
}

export function useGetUsersIdNotificationSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['notification_subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notification_subscriptions']['$get']>>
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
        ? getGetUsersIdNotificationSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notification_subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].notification_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdNotificationSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['notification_subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notification_subscriptions']['$get']>>
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
        ? getGetUsersIdNotificationSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notification_subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].notification_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdNotificationSubscriptionsKey() {
  return ['users', '/users/:id/notification_subscriptions', 'POST'] as const
}

export function usePostUsersIdNotificationSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['notification_subscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['notification_subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdNotificationSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':id']['notification_subscriptions']['$post']>
        },
      ) => parseResponse(client.users[':id'].notification_subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersIdNotificationSubscriptionsUnsubscribeKey() {
  return ['users', '/users/:id/notification_subscriptions/unsubscribe', 'POST'] as const
}

export function usePostUsersIdNotificationSubscriptionsUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id']['notification_subscriptions']['unsubscribe']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':id']['notification_subscriptions']['unsubscribe']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdNotificationSubscriptionsUnsubscribeKey()
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
            (typeof client.users)[':id']['notification_subscriptions']['unsubscribe']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].notification_subscriptions.unsubscribe.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdOncallHandoffNotificationRulesKey(
  args: InferRequestType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/oncall_handoff_notification_rules', keyArgs] as const
}

export function useGetUsersIdOncallHandoffNotificationRules<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$get']>
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
        ? getGetUsersIdOncallHandoffNotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].oncall_handoff_notification_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdOncallHandoffNotificationRules<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$get']>
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
        ? getGetUsersIdOncallHandoffNotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].oncall_handoff_notification_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdOncallHandoffNotificationRulesKey() {
  return ['users', '/users/:id/oncall_handoff_notification_rules', 'POST'] as const
}

export function usePostUsersIdOncallHandoffNotificationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdOncallHandoffNotificationRulesKey()
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
            (typeof client.users)[':id']['oncall_handoff_notification_rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].oncall_handoff_notification_rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdKey(
  args: InferRequestType<
    (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'users',
    '/users/:id/oncall_handoff_notification_rules/:oncall_handoff_notification_rule_id',
    keyArgs,
  ] as const
}

export function useGetUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$get']
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
        ? getGetUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdKey(args)
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
                (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$get']
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
          client.users[':id'].oncall_handoff_notification_rules[
            ':oncall_handoff_notification_rule_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$get']
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
        ? getGetUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdKey(args)
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
                (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$get']
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
          client.users[':id'].oncall_handoff_notification_rules[
            ':oncall_handoff_notification_rule_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdKey() {
  return [
    'users',
    '/users/:id/oncall_handoff_notification_rules/:oncall_handoff_notification_rule_id',
    'PUT',
  ] as const
}

export function usePutUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdKey()
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
            (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].oncall_handoff_notification_rules[
            ':oncall_handoff_notification_rule_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdKey() {
  return [
    'users',
    '/users/:id/oncall_handoff_notification_rules/:oncall_handoff_notification_rule_id',
    'DELETE',
  ] as const
}

export function useDeleteUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdKey()
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
            (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].oncall_handoff_notification_rules[
            ':oncall_handoff_notification_rule_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdSessionsKey(
  args: InferRequestType<(typeof client.users)[':id']['sessions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/sessions', keyArgs] as const
}

export function useGetUsersIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['sessions']['$get']>>
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
        ? getGetUsersIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['sessions']['$get']>>
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
        ? getGetUsersIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersIdSessionsKey() {
  return ['users', '/users/:id/sessions', 'DELETE'] as const
}

export function useDeleteUsersIdSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['sessions']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['sessions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['sessions']['$delete']> },
      ) => parseResponse(client.users[':id'].sessions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdSessionsTypeSessionIdKey(
  args: InferRequestType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/sessions/:type/:session_id', keyArgs] as const
}

export function useGetUsersIdSessionsTypeSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$get']>
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
        ? getGetUsersIdSessionsTypeSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].sessions[':type'][':session_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdSessionsTypeSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$get']>
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
        ? getGetUsersIdSessionsTypeSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].sessions[':type'][':session_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersIdSessionsTypeSessionIdKey() {
  return ['users', '/users/:id/sessions/:type/:session_id', 'DELETE'] as const
}

export function useDeleteUsersIdSessionsTypeSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['sessions'][':type'][':session_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdSessionsTypeSessionIdKey()
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
            (typeof client.users)[':id']['sessions'][':type'][':session_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].sessions[':type'][':session_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdStatusUpdateNotificationRulesKey(
  args: InferRequestType<(typeof client.users)[':id']['status_update_notification_rules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/status_update_notification_rules', keyArgs] as const
}

export function useGetUsersIdStatusUpdateNotificationRules<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['status_update_notification_rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['status_update_notification_rules']['$get']>
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
        ? getGetUsersIdStatusUpdateNotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['status_update_notification_rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].status_update_notification_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdStatusUpdateNotificationRules<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['status_update_notification_rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['status_update_notification_rules']['$get']>
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
        ? getGetUsersIdStatusUpdateNotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['status_update_notification_rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].status_update_notification_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdStatusUpdateNotificationRulesKey() {
  return ['users', '/users/:id/status_update_notification_rules', 'POST'] as const
}

export function usePostUsersIdStatusUpdateNotificationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id']['status_update_notification_rules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['status_update_notification_rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdStatusUpdateNotificationRulesKey()
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
            (typeof client.users)[':id']['status_update_notification_rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].status_update_notification_rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdKey(
  args: InferRequestType<
    (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'users',
    '/users/:id/status_update_notification_rules/:status_update_notification_rule_id',
    keyArgs,
  ] as const
}

export function useGetUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$get']
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
        ? getGetUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdKey(args)
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
                (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$get']
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
          client.users[':id'].status_update_notification_rules[
            ':status_update_notification_rule_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$get']
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
        ? getGetUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdKey(args)
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
                (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$get']
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
          client.users[':id'].status_update_notification_rules[
            ':status_update_notification_rule_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdKey() {
  return [
    'users',
    '/users/:id/status_update_notification_rules/:status_update_notification_rule_id',
    'PUT',
  ] as const
}

export function usePutUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdKey()
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
            (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].status_update_notification_rules[
            ':status_update_notification_rule_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdKey() {
  return [
    'users',
    '/users/:id/status_update_notification_rules/:status_update_notification_rule_id',
    'DELETE',
  ] as const
}

export function useDeleteUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdKey()
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
            (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].status_update_notification_rules[
            ':status_update_notification_rule_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersIdRegeneratePrivateUrlKeyKey() {
  return ['users', '/users/:id/regenerate_private_url_key', 'POST'] as const
}

export function usePostUsersIdRegeneratePrivateUrlKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['regenerate_private_url_key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['regenerate_private_url_key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdRegeneratePrivateUrlKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':id']['regenerate_private_url_key']['$post']>
        },
      ) => parseResponse(client.users[':id'].regenerate_private_url_key.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeKey(args: InferRequestType<typeof client.users.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/me', keyArgs] as const
}

export function useGetUsersMe<TError = unknown>(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVendorsKey(args: InferRequestType<typeof client.vendors.$get>) {
  const { header: _, ...keyArgs } = args
  return ['vendors', '/vendors', keyArgs] as const
}

export function useGetVendors<TError = unknown>(
  args: InferRequestType<typeof client.vendors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVendorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vendors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVendors<TError = unknown>(
  args: InferRequestType<typeof client.vendors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVendorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vendors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV3SchedulesKey(args: InferRequestType<typeof client.v3.schedules.$get>) {
  return ['v3', '/v3/schedules', args] as const
}

export function useGetV3Schedules<TError = unknown>(
  args: InferRequestType<typeof client.v3.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Schedules<TError = unknown>(
  args: InferRequestType<typeof client.v3.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3SchedulesKey() {
  return ['v3', '/v3/schedules', 'POST'] as const
}

export function usePostV3Schedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.schedules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.schedules.$post> }) =>
        parseResponse(client.v3.schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdKey(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['$get']>,
) {
  return ['v3', '/v3/schedules/:id', args] as const
}

export function useGetV3SchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.schedules)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SchedulesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.schedules)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.schedules)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SchedulesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.schedules)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV3SchedulesIdKey() {
  return ['v3', '/v3/schedules/:id', 'PUT'] as const
}

export function usePutV3SchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.schedules)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.schedules)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3SchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.schedules)[':id']['$put']> },
      ) => parseResponse(client.v3.schedules[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3SchedulesIdKey() {
  return ['v3', '/v3/schedules/:id', 'DELETE'] as const
}

export function useDeleteV3SchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.schedules)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.schedules)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3SchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.schedules)[':id']['$delete']> },
      ) => parseResponse(client.v3.schedules[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdAuditRecordsKey(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['audit']['records']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/schedules/:id/audit/records', keyArgs] as const
}

export function useGetV3SchedulesIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['audit']['records']['$get']>>
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
        ? getGetV3SchedulesIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdAuditRecords<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['audit']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['audit']['records']['$get']>>
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
        ? getGetV3SchedulesIdAuditRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['audit']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].audit.records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SchedulesIdCustomShiftsKey(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['custom_shifts']['$get']>,
) {
  return ['v3', '/v3/schedules/:id/custom_shifts', args] as const
}

export function useGetV3SchedulesIdCustomShifts<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['custom_shifts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['custom_shifts']['$get']>>
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
        ? getGetV3SchedulesIdCustomShiftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['custom_shifts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].custom_shifts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdCustomShifts<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['custom_shifts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['custom_shifts']['$get']>>
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
        ? getGetV3SchedulesIdCustomShiftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['custom_shifts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].custom_shifts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3SchedulesIdCustomShiftsKey() {
  return ['v3', '/v3/schedules/:id/custom_shifts', 'POST'] as const
}

export function usePostV3SchedulesIdCustomShifts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.schedules)[':id']['custom_shifts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.schedules)[':id']['custom_shifts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SchedulesIdCustomShiftsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.schedules)[':id']['custom_shifts']['$post']> },
      ) => parseResponse(client.v3.schedules[':id'].custom_shifts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdCustomShiftsCustomShiftIdKey(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$get']
  >,
) {
  return ['v3', '/v3/schedules/:id/custom_shifts/:custom_shift_id', args] as const
}

export function useGetV3SchedulesIdCustomShiftsCustomShiftId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$get']
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
        ? getGetV3SchedulesIdCustomShiftsCustomShiftIdKey(args)
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
                (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$get']
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
          client.v3.schedules[':id'].custom_shifts[':custom_shift_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdCustomShiftsCustomShiftId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$get']
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
        ? getGetV3SchedulesIdCustomShiftsCustomShiftIdKey(args)
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
                (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$get']
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
          client.v3.schedules[':id'].custom_shifts[':custom_shift_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV3SchedulesIdCustomShiftsCustomShiftIdKey() {
  return ['v3', '/v3/schedules/:id/custom_shifts/:custom_shift_id', 'PUT'] as const
}

export function usePutV3SchedulesIdCustomShiftsCustomShiftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3SchedulesIdCustomShiftsCustomShiftIdKey()
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
            (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v3.schedules[':id'].custom_shifts[':custom_shift_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3SchedulesIdCustomShiftsCustomShiftIdKey() {
  return ['v3', '/v3/schedules/:id/custom_shifts/:custom_shift_id', 'DELETE'] as const
}

export function useDeleteV3SchedulesIdCustomShiftsCustomShiftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3SchedulesIdCustomShiftsCustomShiftIdKey()
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
            (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.schedules[':id'].custom_shifts[':custom_shift_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdOverridesKey(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides']['$get']>,
) {
  return ['v3', '/v3/schedules/:id/overrides', args] as const
}

export function useGetV3SchedulesIdOverrides<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['overrides']['$get']>>
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
        ? getGetV3SchedulesIdOverridesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['overrides']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].overrides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdOverrides<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['overrides']['$get']>>
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
        ? getGetV3SchedulesIdOverridesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['overrides']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].overrides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3SchedulesIdOverridesKey() {
  return ['v3', '/v3/schedules/:id/overrides', 'POST'] as const
}

export function usePostV3SchedulesIdOverrides<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.schedules)[':id']['overrides']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.schedules)[':id']['overrides']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SchedulesIdOverridesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.schedules)[':id']['overrides']['$post']> },
      ) => parseResponse(client.v3.schedules[':id'].overrides.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdOverridesOverrideIdKey(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$get']>,
) {
  return ['v3', '/v3/schedules/:id/overrides/:override_id', args] as const
}

export function useGetV3SchedulesIdOverridesOverrideId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$get']>
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
        ? getGetV3SchedulesIdOverridesOverrideIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.schedules[':id'].overrides[':override_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdOverridesOverrideId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$get']>
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
        ? getGetV3SchedulesIdOverridesOverrideIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.schedules[':id'].overrides[':override_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV3SchedulesIdOverridesOverrideIdKey() {
  return ['v3', '/v3/schedules/:id/overrides/:override_id', 'PUT'] as const
}

export function usePutV3SchedulesIdOverridesOverrideId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3SchedulesIdOverridesOverrideIdKey()
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
            (typeof client.v3.schedules)[':id']['overrides'][':override_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v3.schedules[':id'].overrides[':override_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3SchedulesIdOverridesOverrideIdKey() {
  return ['v3', '/v3/schedules/:id/overrides/:override_id', 'DELETE'] as const
}

export function useDeleteV3SchedulesIdOverridesOverrideId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['overrides'][':override_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3SchedulesIdOverridesOverrideIdKey()
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
            (typeof client.v3.schedules)[':id']['overrides'][':override_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.schedules[':id'].overrides[':override_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdRotationsKey(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations']['$get']>,
) {
  return ['v3', '/v3/schedules/:id/rotations', args] as const
}

export function useGetV3SchedulesIdRotations<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['rotations']['$get']>>
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
        ? getGetV3SchedulesIdRotationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['rotations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].rotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdRotations<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['rotations']['$get']>>
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
        ? getGetV3SchedulesIdRotationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.schedules)[':id']['rotations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.schedules[':id'].rotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3SchedulesIdRotationsKey() {
  return ['v3', '/v3/schedules/:id/rotations', 'POST'] as const
}

export function usePostV3SchedulesIdRotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.schedules)[':id']['rotations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.schedules)[':id']['rotations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SchedulesIdRotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.schedules)[':id']['rotations']['$post']> },
      ) => parseResponse(client.v3.schedules[':id'].rotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdRotationsRotationIdKey(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$get']>,
) {
  return ['v3', '/v3/schedules/:id/rotations/:rotation_id', args] as const
}

export function useGetV3SchedulesIdRotationsRotationId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$get']>
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
        ? getGetV3SchedulesIdRotationsRotationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.schedules[':id'].rotations[':rotation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdRotationsRotationId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$get']>
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
        ? getGetV3SchedulesIdRotationsRotationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.schedules[':id'].rotations[':rotation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3SchedulesIdRotationsRotationIdKey() {
  return ['v3', '/v3/schedules/:id/rotations/:rotation_id', 'DELETE'] as const
}

export function useDeleteV3SchedulesIdRotationsRotationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3SchedulesIdRotationsRotationIdKey()
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
            (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.schedules[':id'].rotations[':rotation_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdRotationsRotationIdEventsKey(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$get']
  >,
) {
  return ['v3', '/v3/schedules/:id/rotations/:rotation_id/events', args] as const
}

export function useGetV3SchedulesIdRotationsRotationIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$get']
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
        ? getGetV3SchedulesIdRotationsRotationIdEventsKey(args)
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
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$get']
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
          client.v3.schedules[':id'].rotations[':rotation_id'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdRotationsRotationIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$get']
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
        ? getGetV3SchedulesIdRotationsRotationIdEventsKey(args)
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
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$get']
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
          client.v3.schedules[':id'].rotations[':rotation_id'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV3SchedulesIdRotationsRotationIdEventsKey() {
  return ['v3', '/v3/schedules/:id/rotations/:rotation_id/events', 'POST'] as const
}

export function usePostV3SchedulesIdRotationsRotationIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SchedulesIdRotationsRotationIdEventsKey()
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
            (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.schedules[':id'].rotations[':rotation_id'].events.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3SchedulesIdRotationsRotationIdEventsEventIdKey(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$get']
  >,
) {
  return ['v3', '/v3/schedules/:id/rotations/:rotation_id/events/:event_id', args] as const
}

export function useGetV3SchedulesIdRotationsRotationIdEventsEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$get']
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
        ? getGetV3SchedulesIdRotationsRotationIdEventsEventIdKey(args)
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
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$get']
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
          client.v3.schedules[':id'].rotations[':rotation_id'].events[':event_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SchedulesIdRotationsRotationIdEventsEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$get']
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
        ? getGetV3SchedulesIdRotationsRotationIdEventsEventIdKey(args)
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
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$get']
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
          client.v3.schedules[':id'].rotations[':rotation_id'].events[':event_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV3SchedulesIdRotationsRotationIdEventsEventIdKey() {
  return ['v3', '/v3/schedules/:id/rotations/:rotation_id/events/:event_id', 'PUT'] as const
}

export function usePutV3SchedulesIdRotationsRotationIdEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3SchedulesIdRotationsRotationIdEventsEventIdKey()
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
            (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v3.schedules[':id'].rotations[':rotation_id'].events[':event_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3SchedulesIdRotationsRotationIdEventsEventIdKey() {
  return ['v3', '/v3/schedules/:id/rotations/:rotation_id/events/:event_id', 'DELETE'] as const
}

export function useDeleteV3SchedulesIdRotationsRotationIdEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3SchedulesIdRotationsRotationIdEventsEventIdKey()
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
            (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.schedules[':id'].rotations[':rotation_id'].events[':event_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVendorsIdKey(args: InferRequestType<(typeof client.vendors)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['vendors', '/vendors/:id', keyArgs] as const
}

export function useGetVendorsId<TError = unknown>(
  args: InferRequestType<(typeof client.vendors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vendors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVendorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vendors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vendors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVendorsId<TError = unknown>(
  args: InferRequestType<(typeof client.vendors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vendors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVendorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vendors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vendors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookSubscriptionsKey(
  args: InferRequestType<typeof client.webhook_subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook_subscriptions', '/webhook_subscriptions', keyArgs] as const
}

export function useGetWebhookSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.webhook_subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhook_subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhook_subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.webhook_subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhook_subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhook_subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookSubscriptionsKey() {
  return ['webhook_subscriptions', '/webhook_subscriptions', 'POST'] as const
}

export function usePostWebhookSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhook_subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook_subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.webhook_subscriptions.$post> },
      ) => parseResponse(client.webhook_subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookSubscriptionsIdKey(
  args: InferRequestType<(typeof client.webhook_subscriptions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook_subscriptions', '/webhook_subscriptions/:id', keyArgs] as const
}

export function useGetWebhookSubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions)[':id']['$get']>>
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
        ? getGetWebhookSubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_subscriptions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookSubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions)[':id']['$get']>>
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
        ? getGetWebhookSubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_subscriptions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhookSubscriptionsIdKey() {
  return ['webhook_subscriptions', '/webhook_subscriptions/:id', 'PUT'] as const
}

export function usePutWebhookSubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_subscriptions)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_subscriptions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhookSubscriptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook_subscriptions)[':id']['$put']> },
      ) => parseResponse(client.webhook_subscriptions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhookSubscriptionsIdKey() {
  return ['webhook_subscriptions', '/webhook_subscriptions/:id', 'DELETE'] as const
}

export function useDeleteWebhookSubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_subscriptions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookSubscriptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook_subscriptions)[':id']['$delete']> },
      ) => parseResponse(client.webhook_subscriptions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookSubscriptionsIdEnableKey() {
  return ['webhook_subscriptions', '/webhook_subscriptions/:id/enable', 'POST'] as const
}

export function usePostWebhookSubscriptionsIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_subscriptions)[':id']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_subscriptions)[':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookSubscriptionsIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webhook_subscriptions)[':id']['enable']['$post']>
        },
      ) => parseResponse(client.webhook_subscriptions[':id'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookSubscriptionsIdPingKey() {
  return ['webhook_subscriptions', '/webhook_subscriptions/:id/ping', 'POST'] as const
}

export function usePostWebhookSubscriptionsIdPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_subscriptions)[':id']['ping']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_subscriptions)[':id']['ping']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookSubscriptionsIdPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhook_subscriptions)[':id']['ping']['$post']> },
      ) => parseResponse(client.webhook_subscriptions[':id'].ping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookSubscriptionsOauthClientsKey(
  args: InferRequestType<typeof client.webhook_subscriptions.oauth_clients.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook_subscriptions', '/webhook_subscriptions/oauth_clients', keyArgs] as const
}

export function useGetWebhookSubscriptionsOauthClients<TError = unknown>(
  args: InferRequestType<typeof client.webhook_subscriptions.oauth_clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.webhook_subscriptions.oauth_clients.$get>>
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
        ? getGetWebhookSubscriptionsOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.webhook_subscriptions.oauth_clients.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhook_subscriptions.oauth_clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookSubscriptionsOauthClients<TError = unknown>(
  args: InferRequestType<typeof client.webhook_subscriptions.oauth_clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.webhook_subscriptions.oauth_clients.$get>>
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
        ? getGetWebhookSubscriptionsOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.webhook_subscriptions.oauth_clients.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhook_subscriptions.oauth_clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookSubscriptionsOauthClientsKey() {
  return ['webhook_subscriptions', '/webhook_subscriptions/oauth_clients', 'POST'] as const
}

export function usePostWebhookSubscriptionsOauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.webhook_subscriptions.oauth_clients.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook_subscriptions.oauth_clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookSubscriptionsOauthClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.webhook_subscriptions.oauth_clients.$post> },
      ) => parseResponse(client.webhook_subscriptions.oauth_clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookSubscriptionsOauthClientsIdKey(
  args: InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook_subscriptions', '/webhook_subscriptions/oauth_clients/:id', keyArgs] as const
}

export function useGetWebhookSubscriptionsOauthClientsId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$get']>>
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
        ? getGetWebhookSubscriptionsOauthClientsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhook_subscriptions.oauth_clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookSubscriptionsOauthClientsId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$get']>>
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
        ? getGetWebhookSubscriptionsOauthClientsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhook_subscriptions.oauth_clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhookSubscriptionsOauthClientsIdKey() {
  return ['webhook_subscriptions', '/webhook_subscriptions/oauth_clients/:id', 'PUT'] as const
}

export function usePutWebhookSubscriptionsOauthClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhookSubscriptionsOauthClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$put']>
        },
      ) =>
        parseResponse(client.webhook_subscriptions.oauth_clients[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhookSubscriptionsOauthClientsIdKey() {
  return ['webhook_subscriptions', '/webhook_subscriptions/oauth_clients/:id', 'DELETE'] as const
}

export function useDeleteWebhookSubscriptionsOauthClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookSubscriptionsOauthClientsIdKey()
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
            (typeof client.webhook_subscriptions.oauth_clients)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.webhook_subscriptions.oauth_clients[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsIntegrationsKey(
  args: InferRequestType<typeof client.workflows.integrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/integrations', keyArgs] as const
}

export function useGetWorkflowsIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.workflows.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.workflows.integrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.workflows.integrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.workflows.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.workflows.integrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.workflows.integrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowsIntegrationsIdKey(
  args: InferRequestType<(typeof client.workflows.integrations)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/integrations/:id', keyArgs] as const
}

export function useGetWorkflowsIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows.integrations)[':id']['$get']>>
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
        ? getGetWorkflowsIntegrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows.integrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows.integrations)[':id']['$get']>>
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
        ? getGetWorkflowsIntegrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows.integrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowsIntegrationsConnectionsKey(
  args: InferRequestType<typeof client.workflows.integrations.connections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/integrations/connections', keyArgs] as const
}

export function useGetWorkflowsIntegrationsConnections<TError = unknown>(
  args: InferRequestType<typeof client.workflows.integrations.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.workflows.integrations.connections.$get>>
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
        ? getGetWorkflowsIntegrationsConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.workflows.integrations.connections.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workflows.integrations.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsIntegrationsConnections<TError = unknown>(
  args: InferRequestType<typeof client.workflows.integrations.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.workflows.integrations.connections.$get>>
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
        ? getGetWorkflowsIntegrationsConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.workflows.integrations.connections.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workflows.integrations.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowsIntegrationsIntegrationIdConnectionsKey(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/integrations/:integration_id/connections', keyArgs] as const
}

export function useGetWorkflowsIntegrationsIntegrationIdConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workflows.integrations)[':integration_id']['connections']['$get']
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
        ? getGetWorkflowsIntegrationsIntegrationIdConnectionsKey(args)
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
                (typeof client.workflows.integrations)[':integration_id']['connections']['$get']
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
          client.workflows.integrations[':integration_id'].connections.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsIntegrationsIntegrationIdConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workflows.integrations)[':integration_id']['connections']['$get']
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
        ? getGetWorkflowsIntegrationsIntegrationIdConnectionsKey(args)
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
                (typeof client.workflows.integrations)[':integration_id']['connections']['$get']
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
          client.workflows.integrations[':integration_id'].connections.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowsIntegrationsIntegrationIdConnectionsKey() {
  return ['workflows', '/workflows/integrations/:integration_id/connections', 'POST'] as const
}

export function usePostWorkflowsIntegrationsIntegrationIdConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workflows.integrations)[':integration_id']['connections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workflows.integrations)[':integration_id']['connections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowsIntegrationsIntegrationIdConnectionsKey()
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
            (typeof client.workflows.integrations)[':integration_id']['connections']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workflows.integrations[':integration_id'].connections.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsIntegrationsIntegrationIdConnectionsIdKey(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/integrations/:integration_id/connections/:id', keyArgs] as const
}

export function useGetWorkflowsIntegrationsIntegrationIdConnectionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$get']
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
        ? getGetWorkflowsIntegrationsIntegrationIdConnectionsIdKey(args)
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
                (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$get']
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
          client.workflows.integrations[':integration_id'].connections[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsIntegrationsIntegrationIdConnectionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$get']
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
        ? getGetWorkflowsIntegrationsIntegrationIdConnectionsIdKey(args)
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
                (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$get']
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
          client.workflows.integrations[':integration_id'].connections[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWorkflowsIntegrationsIntegrationIdConnectionsIdKey() {
  return ['workflows', '/workflows/integrations/:integration_id/connections/:id', 'DELETE'] as const
}

export function useDeleteWorkflowsIntegrationsIntegrationIdConnectionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkflowsIntegrationsIntegrationIdConnectionsIdKey()
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
            (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.workflows.integrations[':integration_id'].connections[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWorkflowsIntegrationsIntegrationIdConnectionsIdKey() {
  return ['workflows', '/workflows/integrations/:integration_id/connections/:id', 'PATCH'] as const
}

export function usePatchWorkflowsIntegrationsIntegrationIdConnectionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkflowsIntegrationsIntegrationIdConnectionsIdKey()
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
            (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.workflows.integrations[':integration_id'].connections[':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRecommendationsEventOrchestrationsRulesKey(
  args: InferRequestType<typeof client.recommendations.event_orchestrations.rules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recommendations', '/recommendations/event_orchestrations/rules', keyArgs] as const
}

export function useGetRecommendationsEventOrchestrationsRules<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.event_orchestrations.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recommendations.event_orchestrations.rules.$get>>
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
        ? getGetRecommendationsEventOrchestrationsRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recommendations.event_orchestrations.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recommendations.event_orchestrations.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecommendationsEventOrchestrationsRules<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.event_orchestrations.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recommendations.event_orchestrations.rules.$get>>
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
        ? getGetRecommendationsEventOrchestrationsRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recommendations.event_orchestrations.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recommendations.event_orchestrations.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdDismissKey() {
  return [
    'recommendations',
    '/recommendations/event_orchestrations/services/:service_id/rules/:recommendation_id/dismiss',
    'POST',
  ] as const
}

export function usePostRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdDismiss<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.recommendations.event_orchestrations.services)[':service_id']['rules'][':recommendation_id']['dismiss']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.recommendations.event_orchestrations.services)[':service_id']['rules'][':recommendation_id']['dismiss']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdDismissKey()
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
            (typeof client.recommendations.event_orchestrations.services)[':service_id']['rules'][':recommendation_id']['dismiss']['$post']
          >
        },
      ) =>
        parseResponse(
          client.recommendations.event_orchestrations.services[':service_id'].rules[
            ':recommendation_id'
          ].dismiss.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdAcceptKey() {
  return [
    'recommendations',
    '/recommendations/event_orchestrations/services/:service_id/rules/:recommendation_id/accept',
    'POST',
  ] as const
}

export function usePostRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdAccept<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.recommendations.event_orchestrations.services)[':service_id']['rules'][':recommendation_id']['accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.recommendations.event_orchestrations.services)[':service_id']['rules'][':recommendation_id']['accept']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdAcceptKey()
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
            (typeof client.recommendations.event_orchestrations.services)[':service_id']['rules'][':recommendation_id']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.recommendations.event_orchestrations.services[':service_id'].rules[
            ':recommendation_id'
          ].accept.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRecommendationsEventOrchestrationsServicesServiceIdAcceptedRulesRuleIdKey() {
  return [
    'recommendations',
    '/recommendations/event_orchestrations/services/:service_id/accepted_rules/:rule_id',
    'DELETE',
  ] as const
}

export function useDeleteRecommendationsEventOrchestrationsServicesServiceIdAcceptedRulesRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.recommendations.event_orchestrations.services)[':service_id']['accepted_rules'][':rule_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.recommendations.event_orchestrations.services)[':service_id']['accepted_rules'][':rule_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRecommendationsEventOrchestrationsServicesServiceIdAcceptedRulesRuleIdKey()
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
            (typeof client.recommendations.event_orchestrations.services)[':service_id']['accepted_rules'][':rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.recommendations.event_orchestrations.services[':service_id'].accepted_rules[
            ':rule_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
